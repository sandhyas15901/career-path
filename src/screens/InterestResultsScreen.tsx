import { motion } from 'framer-motion';
import { Sparkles, TrendingUp } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { STREAM_MAP } from '../data/careerData';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';

export default function InterestResultsScreen() {
  const { setScreen, top3Streams, interestScores } = useApp();

  const maxScore = Math.max(...Object.values(interestScores).filter(Boolean) as number[]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-12">
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
            className="text-6xl mb-4"
          >
            🎯
          </motion.div>
          <h1 className="text-3xl font-bold text-white mb-2">Your Interest Analysis</h1>
          <p className="text-white/45 text-sm">
            Based on your 12 answers, here are your <span className="text-indigo-400 font-semibold">Top 3 Streams</span>
          </p>
        </motion.div>

        {/* Top 3 streams */}
        <div className="space-y-4 mb-8">
          {top3Streams.map((streamId, rank) => {
            const stream = STREAM_MAP[streamId];
            if (!stream) return null;
            const score = interestScores[streamId] || 0;
            const pct = Math.round((score / (maxScore || 1)) * 100);
            const rankEmojis = ['🥇', '🥈', '🥉'];

            return (
              <motion.div
                key={streamId}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + rank * 0.12, type: 'spring', stiffness: 300, damping: 25 }}
                className={`glass-strong rounded-2xl p-5 border shadow-xl
                  ${rank === 0
                    ? 'border-indigo-500/40 bg-indigo-500/5 shadow-indigo-500/10'
                    : 'border-white/10'
                  }`}
              >
                <div className="flex items-center gap-4">
                  {/* Rank + emoji */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                      style={{ background: stream.gradient }}>
                      {stream.icon}
                    </div>
                    <span className="absolute -top-2 -right-2 text-lg">{rankEmojis[rank]}</span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-white text-base">{stream.label}</h3>
                      {rank === 0 && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 font-medium">
                          Top Pick
                        </span>
                      )}
                    </div>
                    <p className="text-white/45 text-xs mb-2 truncate">{stream.tagline}</p>
                    <ProgressBar
                      value={pct}
                      showPercent
                      height="normal"
                      color={rank === 0 ? 'bg-indigo-500' : rank === 1 ? 'bg-violet-500' : 'bg-cyan-500'}
                    />
                  </div>

                  {/* Score */}
                  <div className="text-right flex-shrink-0">
                    <p className="text-xl font-bold text-white">{score}</p>
                    <p className="text-white/35 text-xs">pts</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-start gap-3 p-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 mb-6"
        >
          <Sparkles className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-white/80 text-sm font-medium">What's next?</p>
            <p className="text-white/45 text-xs mt-0.5">
              We'll now run a <strong className="text-cyan-400">5-question aptitude test</strong> for each of
              your top 3 streams to calculate your final personalised recommendation.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            fullWidth
            size="lg"
            onClick={() => setScreen('aptitude_test')}
            icon={<TrendingUp className="w-5 h-5" />}
            className="glow-indigo"
          >
            Start Aptitude Test for Top 3 Streams
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
