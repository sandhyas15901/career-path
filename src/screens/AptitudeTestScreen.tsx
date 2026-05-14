import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Brain, Sparkles, Trophy, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { APTITUDE_TESTS } from '../data/testData';
import { STREAM_MAP, StreamId } from '../data/careerData';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import AnimatedSection from '../components/ui/AnimatedSection';
import StaggerContainer, { itemVariants } from '../components/ui/StaggerContainer';

const QUESTIONS_PER_STREAM = 5;

export default function AptitudeTestScreen() {
  const { top3Streams, setScreen, setAptitudeScores, setAptitudeAnswers, setRecommendedStream, authenticatedRequest } = useApp();

  const [streamIdx, setStreamIdx] = useState(0);   // which of top3
  const [qIdx, setQIdx] = useState(0);              // question within stream
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);  // show feedback
  const [streamScores, setStreamScores] = useState<Partial<Record<StreamId, number>>>({});
  const [answerLog, setAnswerLog] = useState<any[]>([]);

  const currentStreamId = top3Streams[streamIdx];
  const currentStream = currentStreamId ? STREAM_MAP[currentStreamId] : null;

  // Get aptitude questions for this stream (fall back to 'science' if not defined)
  const rawQuestions = APTITUDE_TESTS[currentStreamId] || APTITUDE_TESTS['science'];
  const questions = rawQuestions.slice(0, QUESTIONS_PER_STREAM);
  const q = questions[qIdx];

  const totalQuestions = top3Streams.length * QUESTIONS_PER_STREAM;
  const doneQuestions = streamIdx * QUESTIONS_PER_STREAM + qIdx;
  const progress = (doneQuestions / totalQuestions) * 100;

  const isCorrect = selected !== null && selected === q.correct;
  const isLastQ = qIdx === questions.length - 1;
  const isLastStream = streamIdx === top3Streams.length - 1;

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
  };

  const handleNext = async () => {
    if (!answered) return;

    // Update score
    const sid = currentStreamId;
    const prev = streamScores[sid] || 0;
    const newScore = { ...streamScores, [sid]: prev + (isCorrect ? 1 : 0) };
    const nextAnswerLog = [
      ...answerLog,
      {
        stream_id: currentStreamId,
        stream_label: currentStream?.label || '',
        question_id: q.id,
        question: q.question,
        selected_option_index: selected,
        selected_option_label: selected !== null ? q.options[selected] : '',
        correct_option_index: q.correct,
        correct_option_label: q.options[q.correct],
        is_correct: isCorrect,
      },
    ];
    setStreamScores(newScore);
    setAnswerLog(nextAnswerLog);

    if (!isLastQ) {
      setQIdx(i => i + 1);
      setSelected(null);
      setAnswered(false);
    } else if (!isLastStream) {
      setStreamIdx(i => i + 1);
      setQIdx(0);
      setSelected(null);
      setAnswered(false);
    } else {
      // All done — calculate winner
      const finalScores = { ...newScore };
      setAptitudeScores(finalScores);
      setAptitudeAnswers(nextAnswerLog);

      // Pick stream with best combined interest + aptitude
      const winner = top3Streams.reduce((best, sid) => {
        const aptScore = (finalScores[sid] || 0) / QUESTIONS_PER_STREAM * 100; // 0-100
        const bestApt = (finalScores[best] || 0) / QUESTIONS_PER_STREAM * 100;
        return aptScore > bestApt ? sid : best;
      }, top3Streams[0]);

      setRecommendedStream(winner);
      try {
        await authenticatedRequest('/assessment-submissions/', {
          method: 'POST',
          body: JSON.stringify({
            test_type: 'aptitude',
            answers: nextAnswerLog,
            scores: finalScores,
            top_streams: top3Streams,
            recommended_stream: winner,
          }),
        });
      } catch (error) {
        console.error('Failed to save aptitude test submission:', error);
      }
      setScreen('final_result');
    }
  };

  if (!currentStream || !q) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-12">
      {/* Animated background gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ 
          duration: 9, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/18 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{ 
          duration: 11, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/12 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="relative z-10 w-full max-w-2xl">
        {/* Overall progress with enhanced animation */}
        <AnimatedSection direction="down" className="mb-6">
          <div className="flex justify-between text-xs text-white/40 mb-1.5">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-1.5"
            >
              <Brain className="w-3.5 h-3.5 text-cyan-400" />
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Aptitude Test
            </motion.span>
            <span>{doneQuestions + 1} / {totalQuestions} questions</span>
          </div>
          <ProgressBar value={progress} showPercent={false} height="thin" color="bg-cyan-500" />
        </AnimatedSection>

        {/* Stream tabs with enhanced animation */}
        <AnimatedSection delay={0.1} className="flex gap-2 mb-6 overflow-x-auto pb-1">
          {top3Streams.map((sid, i) => {
            const s = STREAM_MAP[sid];
            if (!s) return null;
            return (
              <motion.div
                key={sid}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                whileHover={i === streamIdx ? { scale: 1.05 } : {}}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium flex-shrink-0 transition-all
                  ${i === streamIdx
                    ? 'border-cyan-500/60 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 text-cyan-300 shadow-lg shadow-cyan-500/20'
                    : i < streamIdx
                      ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400/80'
                      : 'border-white/8 text-white/30 hover:border-white/15'
                  }`}
              >
                <span>{s.icon}</span>
                <span>{s.label}</span>
                {i < streamIdx && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
              </motion.div>
            );
          })}
        </AnimatedSection>

        {/* Question card with enhanced animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${streamIdx}-${qIdx}`}
            initial={{ opacity: 0, y: 40, scale: 0.95, rotateX: 5 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: -40, scale: 0.95, rotateX: -5 }}
            transition={{ 
              type: 'spring', 
              stiffness: 200, 
              damping: 25,
              rotateX: { duration: 0.4 }
            }}
            className="glass-strong rounded-3xl p-8 border border-white/10 shadow-2xl backdrop-blur-xl"
          >
            {/* Stream badge with floating animation */}
            <motion.div 
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-3 mb-6"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 8 }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 relative overflow-hidden"
                style={{ background: currentStream.gradient }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10">{currentStream.icon}</span>
              </motion.div>
              <div>
                <motion.p 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-white font-semibold text-sm"
                >
                  {currentStream.label} Aptitude
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-white/35 text-xs"
                >
                  Question {qIdx + 1} of {questions.length}
                </motion.p>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="ml-auto flex gap-1.5"
              >
                {questions.map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className={`w-2.5 h-2.5 rounded-full transition-all
                      ${i < qIdx ? 'bg-emerald-400 shadow-lg shadow-emerald-400/30' : i === qIdx ? 'bg-cyan-400 shadow-lg shadow-cyan-400/30' : 'bg-white/10'}`}
                  />
                ))}
              </motion.div>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl font-bold text-white leading-snug mb-6"
            >
              {q.question}
            </motion.h2>

            {/* Options with stagger animation */}
            <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {q.options.map((opt, idx) => {
                let style = 'border-white/8 bg-white/3 hover:border-white/15 hover:bg-white/6';
                if (answered) {
                  if (idx === q.correct) style = 'border-emerald-500/60 bg-gradient-to-r from-emerald-500/15 to-green-500/15 shadow-lg shadow-emerald-500/20';
                  else if (idx === selected && idx !== q.correct) style = 'border-red-500/60 bg-gradient-to-r from-red-500/12 to-rose-500/12 shadow-lg shadow-red-500/20';
                  else style = 'border-white/5 bg-white/1 opacity-40';
                } else if (selected === idx) {
                  style = 'border-cyan-500/60 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 shadow-lg shadow-cyan-500/20';
                }

                return (
                  <motion.button
                    key={idx}
                    variants={itemVariants}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    whileHover={!answered ? { scale: 1.02, y: -4 } : {}}
                    whileTap={!answered ? { scale: 0.98 } : {}}
                    disabled={answered}
                    className={`text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden ${style}`}
                  >
                    <div className="flex items-start gap-2.5 relative z-10">
                      <motion.div 
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all
                          ${answered && idx === q.correct ? 'border-emerald-400 bg-emerald-500 shadow-lg shadow-emerald-500/30' :
                            answered && idx === selected && idx !== q.correct ? 'border-red-400 bg-red-500 shadow-lg shadow-red-500/30' :
                            selected === idx ? 'border-cyan-400 bg-cyan-500 shadow-lg shadow-cyan-500/30' :
                            'border-white/20 hover:border-white/40'}`}
                        whileHover={!answered && selected !== idx ? { scale: 1.15 } : {}}
                      >
                        {answered && idx === q.correct && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-white" />
                          </motion.div>
                        )}
                        {answered && idx === selected && idx !== q.correct && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <XCircle className="w-3.5 h-3.5 text-white" />
                          </motion.div>
                        )}
                      </motion.div>
                      <span className={`text-sm leading-snug
                        ${answered && idx === q.correct ? 'text-emerald-300 font-medium' :
                          answered && idx === selected && idx !== q.correct ? 'text-red-300' :
                          selected === idx ? 'text-cyan-300 font-medium' :
                          'text-white/65'}`}>
                        {opt}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </StaggerContainer>

            {/* Explanation after answering with enhanced animation */}
            <AnimatePresence>
              {answered && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`mt-5 p-5 rounded-2xl border text-sm relative overflow-hidden
                    ${isCorrect
                      ? 'border-emerald-500/40 bg-gradient-to-r from-emerald-500/12 to-green-500/12 text-emerald-300'
                      : 'border-red-500/40 bg-gradient-to-r from-red-500/12 to-rose-500/12 text-red-300'
                    }`}
                >
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-2 mb-2"
                  >
                    {isCorrect ? (
                      <Trophy className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Zap className="w-5 h-5 text-red-400" />
                    )}
                    <p className="font-semibold">{isCorrect ? '🎉 Correct!' : '💡 Keep Learning!'}</p>
                  </motion.div>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-white/70 text-xs leading-relaxed"
                  >
                    {q.explanation}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Next button with enhanced animation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-end mt-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleNext}
                  disabled={!answered}
                  className={answered ? 'glow-cyan' : ''}
                >
                  {isLastQ && isLastStream
                    ? '🏆 See My Career Recommendation'
                    : isLastQ
                      ? `Next Stream: ${STREAM_MAP[top3Streams[streamIdx + 1]]?.label || ''} →`
                      : 'Next Question →'
                  }
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
