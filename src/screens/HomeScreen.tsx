import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  BarChart2,
  Brain,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  LogOut,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  User,
  Zap,
  AlertCircle,
  Info,
  ArrowRight,
  Rocket,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import Button from '../components/ui/Button';
import NavBar from '../components/ui/NavBar';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedCard from '../components/ui/AnimatedCard';
import StaggerContainer from '../components/ui/StaggerContainer';
import { useState, useEffect } from 'react';

type Toast = {
  tone: 'success' | 'error' | 'info';
  message: string;
};

const steps = [
  {
    step: 1,
    icon: User,
    label: 'Complete your profile',
    desc: 'Share your hobbies, interests, subjects, and goals.',
    screen: 'profile' as const,
    color: 'from-indigo-500 to-violet-600',
  },
  {
    step: 2,
    icon: ClipboardList,
    label: 'Take the interest test',
    desc: 'Discover the streams that match your personality and curiosity.',
    screen: 'test_rules' as const,
    color: 'from-violet-500 to-purple-600',
  },
  {
    step: 3,
    icon: Brain,
    label: 'Validate with aptitude',
    desc: 'Confirm your top stream fit with focused subject questions.',
    screen: 'aptitude_test' as const,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    step: 4,
    icon: Trophy,
    label: 'Explore complete career path',
    desc: 'Review your recommended path and plan your next move.',
    screen: 'career_dashboard' as const,
    color: 'from-amber-500 to-orange-600',
  },
];

export default function HomeScreen() {
  const { logout, openPremiumModal, setScreen, user, isProfileComplete, interestAnswers } = useApp();
  const [toast, setToast] = useState<Toast | null>(null);

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(null), 4200);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const notify = (tone: Toast['tone'], message: string) => setToast({ tone, message });

  return (
    <div className="theme-shell">
      <NavBar />

      <div className="page-shell pt-6 sm:pt-8">
        {/* Hero Section with Enhanced Animations */}
        <AnimatedSection direction="up">
          <motion.section
            className="cyber-card-strong overflow-hidden relative"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated gradient background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10"
              animate={{
                opacity: [0.3, 0.5, 0.3],
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="page-kicker flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </motion.span>
                    Welcome Back
                  </p>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="page-title"
                >
                  Hello, <motion.span 
                    className="grad-text-indigo"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {user?.name || 'Student'}
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="page-subtitle"
                >
                  Move through assessments, dashboards, and premium guidance without losing your place.
                  Your progress and next steps are all connected here.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 flex flex-col gap-3 sm:flex-row"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      icon={<Rocket className="h-5 w-5" />}
                      onClick={() => {
                        if (isProfileComplete()) {
                          setScreen('test_rules');
                        } else {
                          notify('error', 'Without completing your profile details, you cannot access the Assessment.');
                        }
                      }}
                      className="shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40"
                    >
                      Start assessment
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      variant="secondary" 
                      onClick={() => openPremiumModal('Premium guidance')}
                      icon={<Sparkles className="h-5 w-5" />}
                    >
                      Explore premium guidance
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <AnimatedCard className="cyber-panel flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-white/50">Signed in as</p>
                  <motion.p 
                    className="mt-1 text-lg font-semibold text-white"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring" }}
                  >
                    {user?.email}
                  </motion.p>
                </div>
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-bold text-white shadow-lg shadow-violet-500/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {(user?.name?.[0] || 'S').toUpperCase()}
                  </motion.div>
                  <motion.button
                    type="button"
                    onClick={async () => {
                      await logout();
                      setScreen('start');
                    }}
                    whileHover={{ scale: 1.1, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white/65 transition hover:bg-white/10 hover:text-white"
                    aria-label="Log out"
                  >
                    <LogOut className="h-4 w-4" />
                  </motion.button>
                </div>
              </AnimatedCard>

              <StaggerContainer staggerDelay={0.1} className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  { icon: BarChart2, label: '15 streams', sub: 'Guided across the platform', color: 'from-cyan-500 to-blue-500' },
                  { icon: Brain, label: '12 + 5 questions', sub: 'Interest plus aptitude flow', color: 'from-violet-500 to-purple-500' },
                  { icon: Trophy, label: '1 recommended path', sub: 'Clear next best step', color: 'from-amber-500 to-orange-500' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <AnimatedCard key={item.label} className="cyber-card">
                      <motion.div 
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </motion.div>
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="mt-1 text-xs text-white/52">{item.sub}</p>
                    </AnimatedCard>
                  );
                })}
              </StaggerContainer>
            </motion.div>
          </div>
        </motion.section>
        </AnimatedSection>

        {/* Journey Steps with Enhanced Animations */}
        <AnimatedSection delay={0.15} className="mt-6">
          <div className="mb-4">
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="page-kicker flex items-center gap-2"
            >
              <Target className="w-4 h-4" />
              Your Journey
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-semibold text-white sm:text-3xl"
            >
              A cleaner path from setup to results.
            </motion.h2>
          </div>
          <StaggerContainer staggerDelay={0.1} className="grid gap-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <AnimatedCard key={step.step} hover={true}>
                  <motion.button
                    type="button"
                    onClick={() => {
                      if (step.screen === 'test_rules' && !isProfileComplete()) {
                        notify('error', 'Please complete your profile details to access the Interest Test.');
                      } else if (step.screen === 'aptitude_test' && interestAnswers.length === 0) {
                        notify('error', 'Start with interest test to access the aptitude.');
                      } else {
                        setScreen(step.screen);
                      }
                    }}
                    className="group cyber-card card-lift text-left w-full"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 8 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/45">Step {step.step}</p>
                        <h3 className="mt-1 text-base font-semibold text-white">{step.label}</h3>
                        <p className="mt-1 text-sm text-white/60">{step.desc}</p>
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ChevronRight className="h-5 w-5 flex-shrink-0 text-white/28 transition group-hover:text-cyan-200" />
                      </motion.div>
                    </div>
                  </motion.button>
                </AnimatedCard>
              );
            })}
          </StaggerContainer>
        </AnimatedSection>

        {/* Stats Section with Enhanced Animations */}
        <AnimatedSection delay={0.2} className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { icon: Award, value: '10K+', label: 'Students guided', color: 'from-amber-500 to-orange-500' },
            { icon: Target, value: '95%', label: 'Completion confidence', color: 'from-emerald-500 to-green-500' },
            { icon: TrendingUp, value: '50+', label: 'Career paths', color: 'from-blue-500 to-cyan-500' },
            { icon: Shield, value: '4.8/5', label: 'User satisfaction', color: 'from-violet-500 to-purple-500' },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <AnimatedCard key={stat.label} className="cyber-card text-center">
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
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.p>
                <p className="mt-1 text-sm text-white/55">{stat.label}</p>
              </AnimatedCard>
            );
          })}
        </AnimatedSection>

        {/* Testimonials Section with Enhanced Animations */}
        <AnimatedSection delay={0.25} className="mt-6 grid gap-4 lg:grid-cols-2">
          {[
            {
              name: 'Priya Sharma',
              role: 'Software Engineer',
              quote: 'PathBloom helped me connect my strengths to a practical career direction.',
              avatar: 'P',
            },
            {
              name: 'Rahul Patel',
              role: 'Data Science Student',
              quote: 'The guided dashboard made the whole process feel much less overwhelming.',
              avatar: 'R',
            },
          ].map((testimonial) => (
            <AnimatedCard key={testimonial.name} className="cyber-card">
              <motion.div 
                className="mb-4 flex items-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 + star * 0.05, type: "spring" }}
                  >
                    <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
                  </motion.div>
                ))}
              </motion.div>
              <p className="text-sm italic leading-7 text-white/78">"{testimonial.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/50">{testimonial.role}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </AnimatedSection>

        {/* Features Section with Enhanced Animations */}
        <AnimatedSection delay={0.3} className="mt-6 cyber-card">
          <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="page-kicker flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Why PathBloom
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl font-semibold text-white sm:text-3xl"
              >
                Designed to feel connected from page to page.
              </motion.h2>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="secondary" 
                onClick={() => openPremiumModal('Advanced PathBloom features')}
                icon={<ArrowRight className="h-4 w-4" />}
              >
                See premium value
              </Button>
            </motion.div>
          </div>

          <StaggerContainer staggerDelay={0.1} className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: 'Smooth progression',
                description: 'Assessments, dashboards, and decision screens now feel like one product.',
                color: 'from-amber-500 to-orange-500',
              },
              {
                icon: Shield,
                title: 'Reliable feedback',
                description: 'Protected routes, save confirmations, and upgrade prompts reduce dead ends.',
                color: 'from-emerald-500 to-green-500',
              },
              {
                icon: CheckCircle2,
                title: 'Practical guidance',
                description: 'Users get clearer next actions instead of isolated pages or inactive buttons.',
                color: 'from-blue-500 to-cyan-500',
              },
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <AnimatedCard key={feature.title} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5 text-center">
                  <motion.div 
                    className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg`}
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </motion.div>
                  <h3 className="mt-4 text-base font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/60">{feature.description}</p>
                </AnimatedCard>
              );
            })}
          </StaggerContainer>
        </AnimatedSection>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/42">
          Copyright 2026 PathBloom. All rights reserved. Built for students.
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-2xl border px-5 py-3.5 shadow-2xl backdrop-blur-sm ${
              toast.tone === 'error'
                ? 'border-rose-500/40 bg-rose-500/20 text-rose-200'
                : toast.tone === 'success'
                ? 'border-emerald-500/40 bg-emerald-500/20 text-emerald-200'
                : 'border-cyan-500/40 bg-cyan-500/20 text-cyan-200'
            }`}
          >
            {toast.tone === 'error' ? (
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
            ) : toast.tone === 'success' ? (
              <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
            ) : (
              <Info className="h-5 w-5 flex-shrink-0" />
            )}
            <span className="text-sm font-medium">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
