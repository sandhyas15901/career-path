import { motion } from 'framer-motion';
import { ArrowRight, RotateCcw, Star, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { STREAM_MAP } from '../data/careerData';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';

export default function FinalResultScreen() {
  const {
    recommendedStream, top3Streams, interestScores,
    aptitudeScores, setSelectedStream, setScreen, resetAll,
  } = useApp();

  if (!recommendedStream) return null;
  const stream = STREAM_MAP[recommendedStream];
  if (!stream) return null;

  // Mapping of stream IDs to screen names
  const getStreamScreen = (streamId: string): string => {
    const screenMap: Record<string, string> = {
      'science': 'science_streams',
      'commerce': 'commerce_streams',
      'arts': 'arts_humanities_focus',
      'computer_it': 'computer_it_stream_combinations',
      'design_creative': 'media_focus',
      'medical': 'medical_stream_combinations',
      'engineering': 'engineering_stream_combinations',
      'finance': 'finance_accounting_focus',
      'government': 'government_exams',
      'hospitality': 'hospitality_tourism_diplomas',
      'law': 'law_focus',
      'media': 'media_focus',
      'sports': 'skill_based_courses',
      'vocational': 'vocational_iti',
      'diploma': 'diploma_polytechnic',
    };
    return screenMap[streamId] || 'academic_streams';
  };

  const handleStreamClick = (streamId: string) => {
    const targetScreen = getStreamScreen(streamId);
    setSelectedStream(streamId as any);
    setScreen(targetScreen as any);
  };

  const QUES_PER = 5;
  const intScore = interestScores[recommendedStream] || 0;
  const intMax = Math.max(...(Object.values(interestScores).filter(Boolean) as number[]));
  const aptScore = ((aptitudeScores[recommendedStream] || 0) / QUES_PER) * 100;
  const overallMatch = Math.round(((intScore / (intMax || 1)) * 0.5 + (aptScore / 100) * 0.5) * 100);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-12">
      {/* Ambient */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 w-full max-w-xl">
        {/* Confetti-style animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 12, delay: 0.2 }}
            className="text-7xl mb-4 inline-block"
          >
            🏆
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold text-white mb-2"
          >
            Your Career is Charted!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/45 text-sm"
          >
            Based on your profile, interests and aptitude scores
          </motion.p>
        </motion.div>

        {/* Recommended stream card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
          className="relative recommended-ring rounded-3xl mb-6 overflow-hidden shadow-2xl cursor-pointer hover:shadow-indigo-500/20 transition-shadow"
          onClick={() => handleStreamClick(recommendedStream)}
        >
          {/* Gradient header */}
          <div className="relative p-8 pb-6 overflow-hidden" style={{ background: stream.gradient }}>
            <div className="absolute inset-0 opacity-20"
              style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">{stream.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/20 text-white font-semibold border border-white/30">
                      #1 TOP RECOMMENDATION
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{stream.label}</h2>
                </div>
              </div>
              <p className="text-white/80 text-sm">{stream.description}</p>
            </div>
          </div>

          {/* Score breakdown */}
          <div className="bg-[#0f0f20] p-6 space-y-4">
            {/* Overall match */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-bold">Overall Match Score</span>
              <span className="text-3xl font-bold grad-text-indigo">{overallMatch}%</span>
            </div>
            <ProgressBar value={overallMatch} showPercent={false} height="thick" color="bg-gradient-to-r from-indigo-500 to-violet-500" />

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <p className="text-white/40 text-xs mb-1">Interest Match</p>
                <ProgressBar
                  value={Math.round((intScore / (intMax || 1)) * 100)}
                  height="normal"
                  color="bg-indigo-500"
                />
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">Aptitude Score</p>
                <ProgressBar value={Math.round(aptScore)} height="normal" color="bg-cyan-500" />
              </div>
            </div>

            {/* Career highlights */}
            <div className="pt-2 border-t border-white/8">
              <p className="text-white/40 text-xs mb-2 uppercase tracking-wider font-semibold">Top Careers in This Stream</p>
              <div className="flex flex-wrap gap-2">
                {stream.careers.slice(0, 4).map(c => (
                  <span key={c.title}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/6 border border-white/10 text-white/60">
                    {c.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Academic Streams Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, type: 'spring', stiffness: 200, damping: 20 }}
          className="glass rounded-2xl p-6 border border-white/8 mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🎓</span>
            <h3 className="text-xl font-bold text-white">Academic Streams</h3>
          </div>
          <p className="text-white/80 text-sm mb-4">
            Traditional educational pathways based on your academic interests and aptitude scores
          </p>
          <div className="space-y-3">
            {top3Streams.filter(id => id !== recommendedStream).slice(0, 3).map((sid) => {
              const s = STREAM_MAP[sid];
              if (!s) return null;
              const sc = interestScores[sid] || 0;
              const pct = Math.round((sc / (intMax || 1)) * 100);
              return (
                <div
                  key={sid}
                  onClick={() => handleStreamClick(sid)}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
                >
                  <span className="text-2xl">{s.icon}</span>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-white font-bold">{s.label}</span>
                      <span className="text-white/60 text-sm">{pct}%</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/40" />
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Skill-Based Streams Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, type: 'spring', stiffness: 200, damping: 20 }}
          className="glass rounded-2xl p-6 border border-white/8 mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">⚡</span>
            <h3 className="text-xl font-bold text-white">Skill-Based Streams</h3>
          </div>
          <p className="text-white/80 text-sm mb-4">
            Modern career paths focused on practical skills and industry-relevant competencies
          </p>
          <div className="space-y-3">
            <div
              onClick={() => handleStreamClick('computer_it')}
              className="flex items-center gap-3 p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
            >
              <span className="text-2xl">💻</span>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-white font-bold">IT & Software Development</span>
                  <span className="text-white/60 text-sm">85%</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/40" />
            </div>
            <div
              onClick={() => handleStreamClick('vocational')}
              className="flex items-center gap-3 p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
            >
              <span className="text-2xl">🔧</span>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-white font-bold">Technical Trades</span>
                  <span className="text-white/60 text-sm">78%</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/40" />
            </div>
            <div
              onClick={() => handleStreamClick('design_creative')}
              className="flex items-center gap-3 p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
            >
              <span className="text-2xl">🎨</span>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-white font-bold">Design & Creative</span>
                  <span className="text-white/60 text-sm">72%</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/40" />
            </div>
          </div>
        </motion.div>

        {/* Other streams */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="glass rounded-2xl p-4 border border-white/8 mb-6"
        >
          <p className="text-white/40 text-xs uppercase tracking-wider font-semibold mb-3">Other Strong Matches</p>
          <div className="space-y-2">
            {top3Streams.filter(id => id !== recommendedStream).map((sid, i) => {
              const s = STREAM_MAP[sid];
              if (!s) return null;
              const sc = interestScores[sid] || 0;
              const pct = Math.round((sc / (intMax || 1)) * 100);
              return (
                <div
                  key={sid}
                  onClick={() => handleStreamClick(sid)}
                  className="flex items-center gap-3 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors"
                >
                  <span className="text-xl">{s.icon}</span>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-white/60 text-xs font-medium">{s.label}</span>
                      <span className="text-white/40 text-xs">{pct}%</span>
                    </div>
                    <ProgressBar value={pct} showPercent={false} height="thin"
                      color={i === 0 ? 'bg-violet-500' : 'bg-cyan-500'} />
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/30" />
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="space-y-3"
        >
          <Button
            fullWidth
            size="lg"
            onClick={() => setSelectedStream(recommendedStream)}
            icon={<ArrowRight className="w-5 h-5" />}
            className="glow-indigo"
          >
            🗺️ Open Full Career Path Dashboard
          </Button>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              fullWidth
              onClick={() => setScreen('home')}
              icon={<Star className="w-4 h-4" />}
            >
              Back to Home
            </Button>
            <Button
              variant="ghost"
              fullWidth
              onClick={() => resetAll()}
              icon={<RotateCcw className="w-4 h-4" />}
            >
              Restart
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
