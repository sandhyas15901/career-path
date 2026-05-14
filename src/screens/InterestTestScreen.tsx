import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, Sparkles, Target, Lightbulb } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { INTEREST_QUESTIONS } from '../data/testData';
import { StreamId, ALL_STREAMS } from '../data/careerData';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import AnimatedSection from '../components/ui/AnimatedSection';
import StaggerContainer, { itemVariants } from '../components/ui/StaggerContainer';

export default function InterestTestScreen() {
  const { setScreen, setInterestScores, setInterestAnswers, setTop3Streams, authenticatedRequest } = useApp();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [scores, setScores] = useState<Partial<Record<StreamId, number>>>({});

  const q = INTEREST_QUESTIONS[current];
  const progress = ((current) / INTEREST_QUESTIONS.length) * 100;
  const isLast = current === INTEREST_QUESTIONS.length - 1;

  const handleSelect = (optIdx: number) => setSelected(optIdx);

  const handleNext = async () => {
    if (selected === null) return;
    const opt = q.options[selected];
    const newScores = { ...scores };
    opt.streams.forEach(sid => {
      newScores[sid] = (newScores[sid] || 0) + opt.points;
    });
    const nextAnswers = { ...answers, [q.id]: selected };
    setScores(newScores);
    setAnswers(nextAnswers);

    if (isLast) {
      // Calculate top 3 streams
      const sorted = (Object.entries(newScores) as [StreamId, number][])
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([id]) => id);

      // Ensure we always have 3 valid stream IDs
      const allIds = ALL_STREAMS.map(s => s.id);
      while (sorted.length < 3) {
        const fallback = allIds.find(id => !sorted.includes(id));
        if (fallback) sorted.push(fallback);
        else break;
      }

      setInterestScores(newScores);
      const interestAnswerList = INTEREST_QUESTIONS.map(question => {
        const selectedIndex = nextAnswers[question.id];
        return {
          question_id: question.id,
          question: question.question,
          selected_option_index: selectedIndex,
          selected_option_label: selectedIndex !== undefined ? question.options[selectedIndex]?.label || '' : '',
        };
      });
      setInterestAnswers(interestAnswerList);
      setTop3Streams(sorted as StreamId[]);
      try {
        await authenticatedRequest('/assessment-submissions/', {
          method: 'POST',
          body: JSON.stringify({
            test_type: 'interest',
            answers: interestAnswerList,
            scores: newScores,
            top_streams: sorted,
            recommended_stream: '',
          }),
        });
      } catch (error) {
        console.error('Failed to save interest test submission:', error);
      }
      setScreen('interest_results');
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
    }
  };

  const handleBack = () => {
    if (current === 0) { setScreen('profile'); return; }
    setCurrent(c => c - 1);
    setSelected(answers[INTEREST_QUESTIONS[current - 1].id] ?? null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-12">
      {/* Animated background gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="relative z-10 w-full max-w-2xl">
        {/* Header with enhanced animations */}
        <AnimatedSection direction="down" className="flex items-center gap-3 mb-6">
          <motion.button 
            onClick={handleBack}
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
          <div className="flex-1">
            <div className="flex justify-between text-xs text-white/40 mb-1.5">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                Interest Test
              </motion.span>
              <span>Question {current + 1} of {INTEREST_QUESTIONS.length}</span>
            </div>
            <ProgressBar value={progress + (100 / INTEREST_QUESTIONS.length)} showPercent={false} height="thin" color="bg-violet-500" />
          </div>
        </AnimatedSection>

        {/* Question card with enhanced animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 80, scale: 0.95, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, x: -80, scale: 0.95, rotateY: -10 }}
            transition={{ 
              type: 'spring', 
              stiffness: 200, 
              damping: 25,
              rotateY: { duration: 0.4 }
            }}
            className="glass-strong rounded-3xl p-8 border border-white/10 shadow-2xl backdrop-blur-xl"
          >
            {/* Question # badge with floating animation */}
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-3 mb-6"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600
                flex items-center justify-center text-white font-bold shadow-lg shadow-violet-500/40 relative overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10">{current + 1}</span>
              </motion.div>
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="text-4xl"
              >
                {q.emoji}
              </motion.span>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Target className="w-3.5 h-3.5 text-violet-400" />
                <span className="text-white/30 text-xs font-medium uppercase tracking-widest">
                  Interest Test
                </span>
              </div>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-bold text-white leading-snug mb-8"
            >
              {q.question}
            </motion.h2>

            {/* Options with stagger animation */}
            <StaggerContainer staggerDelay={0.08} className="space-y-3">
              {q.options.map((opt, idx) => (
                <motion.button
                  key={idx}
                  variants={itemVariants}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  whileHover={{ scale: 1.02, x: 8 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 group relative overflow-hidden
                    ${selected === idx
                      ? 'border-violet-500/70 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 shadow-lg shadow-violet-500/20'
                      : 'border-white/8 bg-white/3 hover:border-white/20 hover:bg-white/8'
                    }`}
                >
                  {selected === idx && (
                    <motion.div 
                      layoutId="selected-glow"
                      className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-indigo-500/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <div className="flex items-center gap-3 relative z-10">
                    <motion.div 
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all
                        ${selected === idx ? 'border-violet-400 bg-violet-500 shadow-lg shadow-violet-500/30' : 'border-white/20 group-hover:border-white/40'}`}
                      whileHover={selected !== idx ? { scale: 1.1 } : {}}
                    >
                      {selected === idx && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <CheckCircle className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                    </motion.div>
                    <span className={`text-sm font-medium transition-colors
                      ${selected === idx ? 'text-white' : 'text-white/60 group-hover:text-white/90'}`}>
                      {opt.label}
                    </span>
                    {selected === idx && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="ml-auto"
                      >
                        <Lightbulb className="w-4 h-4 text-violet-400" />
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              ))}
            </StaggerContainer>

            {/* Next button with enhanced animation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-end mt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleNext}
                  disabled={selected === null}
                  className={selected !== null ? 'glow-violet' : ''}
                >
                  {isLast ? '🎯 See My Top Streams' : 'Next Question →'}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Question dots with enhanced animation */}
        <AnimatedSection delay={0.5} className="flex flex-wrap justify-center gap-2 mt-6">
          {INTEREST_QUESTIONS.map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.02 }}
              className={`h-2 rounded-full transition-all duration-300
                ${i === current 
                  ? 'w-8 bg-gradient-to-r from-violet-500 to-indigo-500 shadow-lg shadow-violet-500/30' 
                  : i < current 
                    ? 'w-2 bg-violet-500/50' 
                    : 'w-2 bg-white/10 hover:bg-white/20'
                }`}
            />
          ))}
        </AnimatedSection>
      </div>
    </div>
  );
}
