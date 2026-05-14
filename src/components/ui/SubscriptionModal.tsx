import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Crown, Sparkles, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import Button from './Button';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    accent: 'from-slate-500 to-slate-700',
    features: ['Interest assessment', 'Basic career suggestions', 'Limited dashboards'],
  },
  {
    name: 'Premium',
    price: 'INR 999/year',
    accent: 'from-cyan-400 via-sky-500 to-indigo-500',
    featured: true,
    features: ['Everything in Starter', 'Aptitude validation', 'Premium colleges and roadmaps'],
  },
  {
    name: 'Institution',
    price: 'Custom',
    accent: 'from-amber-400 to-orange-500',
    features: ['Everything in Premium', 'Admin access', 'Priority onboarding'],
  },
];

const comparisonRows = [
  ['Career assessments', 'Basic', 'Advanced', 'Advanced'],
  ['College insights', 'Limited', 'Full access', 'Full access'],
  ['Counseling support', 'No', 'Yes', 'Dedicated'],
  ['Analytics & reports', 'Basic', 'Detailed', 'Institution-wide'],
];

export default function SubscriptionModal() {
  const { closePremiumModal, isPremiumModalOpen, premiumModalSource, setScreen } = useApp();

  useEffect(() => {
    if (!isPremiumModalOpen) {
      document.body.style.overflow = '';
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isPremiumModalOpen]);

  const handleUpgrade = () => {
    closePremiumModal();
    setScreen('get_premium');
  };

  return (
    <AnimatePresence>
      {isPremiumModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <motion.button
            type="button"
            aria-label="Close subscription modal"
            className="absolute inset-0 bg-slate-950/72 backdrop-blur-md"
            onClick={closePremiumModal}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 240, damping: 24 }}
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(12,21,39,0.96),rgba(7,14,28,0.96))] shadow-[0_40px_120px_rgba(2,8,23,0.65)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.16),transparent_26%)]" />
            <div className="relative z-10 p-5 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-2xl">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
                    <Crown className="h-4 w-4" />
                    Premium Access
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                    Unlock premium guidance instead of hitting a dead end.
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                    {premiumModalSource
                      ? `The "${premiumModalSource}" section is part of PathBloom Premium.`
                      : 'This feature is part of PathBloom Premium.'}{' '}
                    Upgrade to access deeper career intelligence, advanced analytics, and premium planning tools.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closePremiumModal}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`relative rounded-[1.6rem] border p-5 ${
                      plan.featured
                        ? 'recommended-ring border-cyan-300/25 bg-white/10'
                        : 'border-white/10 bg-white/5'
                    }`}
                  >
                    <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${plan.accent} p-3 text-white shadow-lg`}>
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                        <p className="mt-1 text-sm text-slate-400">{plan.featured ? 'Best for students ready to commit' : 'Flexible access tier'}</p>
                      </div>
                      {plan.featured && (
                        <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-semibold text-cyan-100">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <p className="mt-6 text-3xl font-bold text-white">{plan.price}</p>
                    <div className="mt-6 space-y-3">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm text-slate-200">
                          <Check className="h-4 w-4 text-emerald-300" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">Feature comparison</h3>
                  <span className="text-xs uppercase tracking-[0.24em] text-slate-400">Designed for clear upgrades</span>
                </div>
                <div className="grid gap-3">
                  {comparisonRows.map(([label, starter, premium, institution]) => (
                    <div
                      key={label}
                      className="grid gap-3 rounded-2xl border border-white/6 bg-slate-950/20 px-4 py-3 text-sm text-slate-200 sm:grid-cols-[1.2fr_repeat(3,0.8fr)]"
                    >
                      <span className="font-medium text-white">{label}</span>
                      <span>{starter}</span>
                      <span className="text-cyan-100">{premium}</span>
                      <span>{institution}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Button variant="secondary" onClick={closePremiumModal} className="sm:min-w-36">
                  Close
                </Button>
                <Button onClick={handleUpgrade} icon={<Crown className="h-4 w-4" />} className="sm:min-w-48">
                  Upgrade now
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
