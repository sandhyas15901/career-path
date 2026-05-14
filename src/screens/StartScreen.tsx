import { motion } from 'framer-motion';
import { Sprout, Sparkles, ArrowRight, BookOpen, Target, TrendingUp } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Button from '../components/ui/Button';

const features = [
  { icon: BookOpen, label: 'Profile Assessment', desc: 'Tell us your interests & goals' },
  { icon: Target, label: '12-Question Interest Test', desc: 'Discover your true inclinations' },
  { icon: Sparkles, label: 'AI-Powered Aptitude Test', desc: 'Validate your stream suitability' },
  { icon: TrendingUp, label: 'Personalised Career Path', desc: 'Get your complete roadmap' },
];

export default function StartScreen() {
  const { setScreen } = useApp();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-12">

      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 max-w-4xl w-full"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-2xl shadow-indigo-500/40 glow-indigo">
              <Sprout className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-[#0d0d1a] animate-pulse" />
          </div>
        </motion.div>

        {/* Hero text */}
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-5xl md:text-7xl font-bold mb-4 leading-tight"
          >
            <span className="grad-text-indigo">Path</span>
            <span className="text-white">Bloom</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Discover your perfect career path using science-backed interest profiling
            and aptitude assessment. Built for students after Class 10.
          </motion.p>
        </div>

        {/* Feature grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="glass rounded-2xl p-4 text-center card-lift border border-white/8"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-indigo-400" />
                </div>
                <p className="text-white text-xs font-semibold mb-1">{f.label}</p>
                <p className="text-white/40 text-xs leading-snug">{f.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Button
            size="lg"
            onClick={() => setScreen('login')}
            icon={<ArrowRight className="w-5 h-5" />}
            className="glow-indigo"
          >
            Begin Your Journey
          </Button>
          <Button size="lg" variant="secondary" onClick={() => setScreen('login')}>
            I already have an account
          </Button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-8 mt-10"
        >
          {[
            { value: '15+', label: 'Career Streams' },
            { value: '12', label: 'Interest Questions' },
            { value: '100%', label: 'Free to Use' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold grad-text-indigo">{s.value}</p>
              <p className="text-white/35 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 text-white/20 text-xs text-center"
      >
        <div className="w-6 h-10 border-2 border-white/15 rounded-full flex items-start justify-center pt-2 mx-auto mb-1">
          <div className="w-1 h-2 bg-indigo-400 rounded-full" />
        </div>
        Scroll to explore
      </motion.div>
    </div>
  );
}
