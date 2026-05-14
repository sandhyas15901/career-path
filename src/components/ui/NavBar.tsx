import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Sparkles, Sprout, X, ChevronRight } from 'lucide-react';
import { AppScreen, useApp } from '../../context/AppContext';
import Button from './Button';

const navItems: Array<{ label: string; screen: AppScreen }> = [
  { label: 'Home', screen: 'home' },
  { label: 'About', screen: 'about_us' },
  { label: 'Features', screen: 'features' },
];

export default function NavBar() {
  const { screen, setScreen, openPremiumModal, user } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (nextScreen: AppScreen) => {
    setScreen(nextScreen);
    setIsMenuOpen(false);
  };

  const isActive = (target: AppScreen) => screen === target;

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="cyber-navbar mx-auto w-full max-w-7xl flex-col items-stretch gap-4 sm:flex-row sm:items-center"
      >
        <div className="flex items-center justify-between gap-4">
          <motion.button
            type="button"
            onClick={() => handleNavigate(user ? 'home' : 'start')}
            className="cyber-brand rounded-2xl transition hover:bg-white/5"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="cyber-brand-mark"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Sprout className="h-5 w-5" />
            </motion.div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">PathBloom</p>
              <p className="text-xs text-white/50">Career navigation platform</p>
            </div>
          </motion.button>

          <motion.button
            type="button"
            onClick={() => setIsMenuOpen(prev => !prev)}
            className="cyber-btn cyber-btn-secondary !rounded-2xl !px-3 !py-2 sm:hidden"
            aria-label="Toggle navigation menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-4 w-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-4 w-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col gap-3 sm:flex sm:flex-row sm:items-center sm:justify-end`}
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.screen}
                  type="button"
                  onClick={() => handleNavigate(item.screen)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`rounded-2xl px-4 py-2 text-sm font-medium transition relative overflow-hidden ${
                    isActive(item.screen)
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white shadow-lg shadow-cyan-400/20 border border-cyan-500/30'
                      : 'text-white/65 hover:bg-white/8 hover:text-white'
                  }`}
                >
                  {isActive(item.screen) && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {item.label}
                    {isActive(item.screen) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ChevronRight className="w-3 h-3" />
                      </motion.div>
                    )}
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    openPremiumModal('Premium features');
                    setIsMenuOpen(false);
                  }}
                  icon={<Sparkles className="h-4 w-4" />}
                >
                  Premium
                </Button>
              </motion.div>
              {user ? (
                <>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="sm" onClick={() => handleNavigate('user_dashboard')}>
                      Dashboard
                    </Button>
                  </motion.div>
                </>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="sm" onClick={() => handleNavigate('login')}>
                    Sign in
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
