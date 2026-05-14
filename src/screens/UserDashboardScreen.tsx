import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import NavBar from '../components/ui/NavBar';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedCard from '../components/ui/AnimatedCard';
import {
  Trophy,
  Target,
  Brain,
  CheckCircle2,
  TrendingUp,
  Award,
  Clock,
  BookOpen,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export default function UserDashboardScreen() {
  const { user, interestAnswers, aptitudeAnswers, setScreen } = useApp();

  // Calculate progress
  const profileComplete = !!user?.name && !!user?.email;
  const interestTestComplete = interestAnswers.length > 0;
  const aptitudeTestComplete = aptitudeAnswers.length > 0;
  const careerPathComplete = interestTestComplete && aptitudeTestComplete;

  const overallProgress = [
    profileComplete ? 1 : 0,
    interestTestComplete ? 1 : 0,
    aptitudeTestComplete ? 1 : 0,
    careerPathComplete ? 1 : 0,
  ].reduce((a, b) => a + b, 0) / 4;

  const progressItems = [
    {
      icon: Trophy,
      label: 'Profile Completed',
      completed: profileComplete,
      color: 'from-indigo-500 to-violet-600',
      description: 'Your profile information is complete',
    },
    {
      icon: Brain,
      label: 'Interest Test',
      completed: interestTestComplete,
      color: 'from-violet-500 to-purple-600',
      description: 'Discover your interests and preferences',
    },
    {
      icon: Target,
      label: 'Aptitude Test',
      completed: aptitudeTestComplete,
      color: 'from-cyan-500 to-blue-600',
      description: 'Validate your stream fit with subject questions',
    },
    {
      icon: Award,
      label: 'Career Path',
      completed: careerPathComplete,
      color: 'from-amber-500 to-orange-600',
      description: 'Get your personalized career recommendation',
    },
  ];

  const stats = [
    { icon: Clock, value: interestAnswers.length, label: 'Interest Questions', color: 'from-violet-500 to-purple-500' },
    { icon: BookOpen, value: aptitudeAnswers.length, label: 'Aptitude Questions', color: 'from-cyan-500 to-blue-500' },
    { icon: TrendingUp, value: `${Math.round(overallProgress * 100)}%`, label: 'Overall Progress', color: 'from-emerald-500 to-green-500' },
    { icon: CheckCircle2, value: progressItems.filter(p => p.completed).length, label: 'Steps Completed', color: 'from-amber-500 to-orange-500' },
  ];

  return (
    <div className="theme-shell">
      <NavBar />
      <div className="page-shell pt-6 sm:pt-8">
        {/* Header */}
        <AnimatedSection direction="up">
          <motion.div
            className="cyber-card-strong overflow-hidden relative mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative z-10">
              <motion.div 
                className="flex items-center gap-2 mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <p className="page-kicker">Your Progress Dashboard</p>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="page-title"
              >
                Welcome back, <span className="grad-text-indigo">{user?.name || 'Student'}</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="page-subtitle"
              >
                Track your journey through the career discovery process
              </motion.p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Overall Progress Bar */}
        <AnimatedSection delay={0.1} className="mb-6">
          <AnimatedCard className="cyber-card p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-white">Overall Progress</h3>
              <motion.span 
                className="text-2xl font-bold text-cyan-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {Math.round(overallProgress * 100)}%
              </motion.span>
            </div>
            <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${overallProgress * 100}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-violet-500 via-cyan-500 to-emerald-500 rounded-full"
              />
            </div>
            <p className="mt-2 text-sm text-white/60">
              {progressItems.filter(p => p.completed).length} of {progressItems.length} steps completed
            </p>
          </AnimatedCard>
        </AnimatedSection>

        {/* Stats Grid */}
        <AnimatedSection delay={0.15} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <AnimatedCard key={stat.label} className="cyber-card p-4 text-center">
                <motion.div 
                  className={`mx-auto w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-lg`}
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </motion.div>
                <motion.p 
                  className="text-2xl font-bold text-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.p>
                <p className="mt-1 text-sm text-white/55">{stat.label}</p>
              </AnimatedCard>
            );
          })}
        </AnimatedSection>

        {/* Progress Steps */}
        <AnimatedSection delay={0.2} className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">Your Journey</h2>
          <div className="space-y-3">
            {progressItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedCard key={item.label} className="cyber-card p-4">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                        item.completed 
                          ? `bg-gradient-to-br ${item.color} shadow-lg` 
                          : 'bg-white/10'
                      }`}
                      whileHover={item.completed ? { scale: 1.1, rotate: 8 } : {}}
                      whileTap={item.completed ? { scale: 0.9 } : {}}
                    >
                      <Icon className={`h-6 w-6 ${item.completed ? 'text-white' : 'text-white/40'}`} />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`font-semibold ${item.completed ? 'text-white' : 'text-white/60'}`}>
                          {item.label}
                        </h3>
                        {item.completed && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          </motion.div>
                        )}
                      </div>
                      <p className="text-sm text-white/50">{item.description}</p>
                    </div>
                    {!item.completed && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          if (index === 0) setScreen('profile');
                          else if (index === 1) setScreen('test_rules');
                          else if (index === 2) setScreen('aptitude_test');
                          else if (index === 3) setScreen('career_dashboard');
                        }}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium shadow-lg shadow-cyan-500/30"
                      >
                        Start
                      </motion.button>
                    )}
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Next Steps */}
        {!careerPathComplete && (
          <AnimatedSection delay={0.25}>
            <AnimatedCard className="cyber-card p-6 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-cyan-500/30">
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="h-6 w-6 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Continue Your Journey</h3>
                  <p className="text-white/70 mb-4">
                    {!profileComplete && 'Complete your profile to get started'}
                    {profileComplete && !interestTestComplete && 'Take the interest test to discover your strengths'}
                    {profileComplete && interestTestComplete && !aptitudeTestComplete && 'Complete the aptitude test to validate your career fit'}
                    {profileComplete && interestTestComplete && aptitudeTestComplete && 'View your personalized career path recommendation'}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (!profileComplete) setScreen('profile');
                      else if (!interestTestComplete) setScreen('test_rules');
                      else if (!aptitudeTestComplete) setScreen('aptitude_test');
                      else setScreen('career_dashboard');
                    }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium shadow-lg shadow-cyan-500/30"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </AnimatedCard>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
