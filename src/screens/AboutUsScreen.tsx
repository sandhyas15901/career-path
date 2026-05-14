import { motion } from 'framer-motion';
import { Award, Heart, Shield, Sprout, Target, TrendingUp, Users } from 'lucide-react';
import { useApp } from '../context/AppContext';
import NavBar from '../components/ui/NavBar';
import Button from '../components/ui/Button';

const highlights = [
  {
    icon: Target,
    title: 'Science-backed guidance',
    description: 'Recommendations are built around structured assessments instead of generic advice.',
  },
  {
    icon: Users,
    title: 'Student-first experience',
    description: 'Every screen is designed to reduce confusion and help students keep moving forward.',
  },
  {
    icon: TrendingUp,
    title: 'Actionable outcomes',
    description: 'We turn interests and aptitude into realistic next steps, streams, and growth paths.',
  },
  {
    icon: Award,
    title: 'Premium progression',
    description: 'Advanced planning, college insights, and guided upgrades are available when learners need more depth.',
  },
];

export default function AboutUsScreen() {
  const { setScreen } = useApp();

  return (
    <div className="theme-shell">
      <NavBar />

      <div className="page-shell pt-6 sm:pt-8">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="cyber-card-strong overflow-hidden"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="page-kicker">About PathBloom</p>
              <h1 className="page-title">A clearer path from curiosity to career confidence.</h1>
              <p className="page-subtitle">
                PathBloom helps students discover academic and career directions through guided assessments,
                structured dashboards, and a calmer, more connected learning journey.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button onClick={() => setScreen('login')}>Start your journey</Button>
                <Button variant="secondary" onClick={() => setScreen('features')}>
                  Explore features
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { label: 'Career discovery', value: 'Unified flow', icon: Sprout },
                { label: 'Navigation quality', value: 'Shared design system', icon: Shield },
                { label: 'Student support', value: 'Assessment-led guidance', icon: Heart },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="cyber-panel">
                    <Icon className="mb-4 h-6 w-6 text-cyan-300" />
                    <p className="text-sm uppercase tracking-[0.18em] text-white/45">{item.label}</p>
                    <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-6 grid gap-4 md:grid-cols-2"
        >
          <div className="cyber-card">
            <h2 className="cyber-section-title">Our mission</h2>
            <p className="text-sm leading-7 text-white/72">
              We want students to move through stream selection and career exploration with clarity. That means better
              navigation, better feedback, and better decisions at every stage.
            </p>
          </div>
          <div className="cyber-card">
            <h2 className="cyber-section-title">What that looks like</h2>
            <p className="text-sm leading-7 text-white/72">
              Assessments that save correctly, dashboards that connect to real next steps, and premium moments that
              explain the value instead of leaving users with broken or inactive buttons.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
          className="mt-6"
        >
          <div className="mb-4">
            <p className="page-kicker">Why It Works</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Built around student decisions, not just screens.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + index * 0.05 }}
                  className="cyber-card card-lift"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-cyan-400/12 p-3 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/70">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
