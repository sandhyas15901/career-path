import { motion } from 'framer-motion';
import { BarChart3, BookOpen, Brain, CheckCircle, Globe, Shield, Target, TrendingUp, Users, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';
import NavBar from '../components/ui/NavBar';
import Button from '../components/ui/Button';

const featureCards = [
  {
    icon: Brain,
    title: 'Assessment engine',
    description: 'Interest and aptitude flows guide students into relevant streams with clear progression.',
  },
  {
    icon: Target,
    title: 'Focused navigation',
    description: 'Users can move between dashboards, results, premium prompts, and learning paths without dead ends.',
  },
  {
    icon: TrendingUp,
    title: 'Career roadmaps',
    description: 'Each discovery step connects to actionable academic and career exploration screens.',
  },
  {
    icon: Shield,
    title: 'Protected account flow',
    description: 'Authenticated routes stay secure while still redirecting users smoothly into the right next step.',
  },
  {
    icon: BookOpen,
    title: 'Structured content',
    description: 'Course, diploma, and stream pages follow a more predictable design and hierarchy.',
  },
  {
    icon: BarChart3,
    title: 'Better feedback',
    description: 'Loading states, save feedback, active states, and premium explanations reduce uncertainty.',
  },
];

const benefits = [
  { icon: Zap, title: 'Fast interactions' },
  { icon: Users, title: 'Student-friendly flow' },
  { icon: Globe, title: 'Responsive layouts' },
  { icon: CheckCircle, title: 'Connected experiences' },
];

export default function FeaturesScreen() {
  const { openPremiumModal, setScreen } = useApp();

  return (
    <div className="theme-shell">
      <NavBar />

      <div className="page-shell pt-6 sm:pt-8">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="cyber-card-strong"
        >
          <p className="page-kicker">Platform Features</p>
          <h1 className="page-title">Everything students need to move from assessment to action.</h1>
          <p className="page-subtitle">
            PathBloom now centers consistency, routing clarity, responsive layouts, and premium upgrade moments that
            feel intentional instead of unfinished.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => setScreen('career_dashboard')}>Open dashboard</Button>
            <Button variant="secondary" onClick={() => openPremiumModal('Advanced feature access')}>
              View premium plans
            </Button>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
        >
          {featureCards.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + index * 0.04 }}
                className="cyber-card card-lift"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-white/8 p-3 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold text-white">{feature.title}</h2>
                <p className="mt-2 text-sm leading-7 text-white/70">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="mt-6 cyber-card"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="page-kicker">Experience</p>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">A more reliable journey across the app.</h2>
            </div>
            <Button variant="secondary" onClick={() => setScreen('about_us')}>
              Learn more about PathBloom
            </Button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                  <Icon className="h-6 w-6 text-cyan-200" />
                  <p className="mt-4 text-base font-semibold text-white">{benefit.title}</p>
                </div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
