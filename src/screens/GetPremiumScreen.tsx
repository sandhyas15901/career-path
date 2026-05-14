import { motion } from 'framer-motion';
import { ArrowRight, Check, Crown, GraduationCap, Shield, Sparkles, TrendingUp } from 'lucide-react';
import { useApp } from '../context/AppContext';
import NavBar from '../components/ui/NavBar';
import Button from '../components/ui/Button';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Good for exploring the basics.',
    features: ['Interest assessment', 'Basic recommendations', 'Limited guidance'],
  },
  {
    name: 'Premium',
    price: 'INR 999/year',
    description: 'Best for students who want the full pathway.',
    featured: true,
    features: ['All starter features', 'Aptitude test support', 'Premium college insights', 'Expanded dashboards'],
  },
  {
    name: 'Institution',
    price: 'Custom',
    description: 'For schools and learning programs.',
    features: ['Bulk student onboarding', 'Admin-level analytics', 'Dedicated support'],
  },
];

const comparisons = [
  ['Assessment access', 'Basic', 'Advanced', 'Advanced'],
  ['Roadmap depth', 'Standard', 'Expanded', 'Expanded'],
  ['Premium colleges', 'No', 'Yes', 'Yes'],
  ['Guided support', 'No', 'Priority', 'Dedicated'],
];

export default function GetPremiumScreen() {
  const { openPremiumModal } = useApp();

  return (
    <div className="theme-shell">
      <NavBar />

      <div className="page-shell pt-6 sm:pt-8">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="cyber-card-strong overflow-hidden"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">
                <Crown className="h-4 w-4" />
                Premium Plans
              </div>
              <h1 className="page-title">Upgrade when students need deeper support, not just more screens.</h1>
              <p className="page-subtitle">
                Premium opens advanced planning, richer comparisons, and more guided next steps while keeping the same
                clean PathBloom experience.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button icon={<Crown className="h-4 w-4" />} onClick={() => openPremiumModal('Premium upgrade')}>
                  Upgrade now
                </Button>
                <Button variant="secondary" onClick={() => openPremiumModal('Premium feature comparison')}>
                  Compare plans
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { icon: GraduationCap, label: 'Premium college insights' },
                { icon: TrendingUp, label: 'Expanded career roadmaps' },
                { icon: Shield, label: 'Priority support and guidance' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="cyber-panel">
                    <Icon className="h-6 w-6 text-amber-200" />
                    <p className="mt-4 text-base font-semibold text-white">{item.label}</p>
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
          className="mt-6 grid gap-4 xl:grid-cols-3"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + index * 0.05 }}
              className={`cyber-card ${plan.featured ? 'recommended-ring border-cyan-300/24' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>
                  <p className="mt-2 text-sm text-white/62">{plan.description}</p>
                </div>
                {plan.featured && (
                  <span className="rounded-full bg-cyan-300/12 px-3 py-1 text-xs font-semibold text-cyan-100">Popular</span>
                )}
              </div>

              <p className="mt-6 text-3xl font-bold text-white">{plan.price}</p>
              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-white/78">
                    <Check className="h-4 w-4 text-emerald-300" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                fullWidth
                className="mt-8"
                variant={plan.featured ? 'primary' : 'secondary'}
                onClick={() => openPremiumModal(`${plan.name} plan`)}
              >
                {plan.name === 'Starter' ? 'Current option' : 'Choose plan'}
              </Button>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="mt-6 cyber-card"
        >
          <div className="mb-5 flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-cyan-200" />
            <h2 className="text-2xl font-semibold text-white">Feature comparison</h2>
          </div>

          <div className="grid gap-3">
            {comparisons.map(([label, starter, premium, institution]) => (
              <div
                key={label}
                className="grid gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/75 sm:grid-cols-[1.1fr_repeat(3,0.8fr)]"
              >
                <span className="font-medium text-white">{label}</span>
                <span>{starter}</span>
                <span className="text-cyan-100">{premium}</span>
                <span>{institution}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 cyber-card text-center"
        >
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Want the premium flow in context?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/68">
            Locked or not-yet-connected premium actions across the app now route into the same upgrade experience so
            users always get a clear next step.
          </p>
          <div className="mt-6 flex justify-center">
            <Button icon={<ArrowRight className="h-4 w-4" />} onClick={() => openPremiumModal('PathBloom Premium')}>
              Open subscription popup
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
