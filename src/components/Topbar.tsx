import { motion } from 'framer-motion';
import { Search, Bell, Sun, Moon, Command, Wifi, WifiOff } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';

interface TopbarProps {
  onSearchOpen: () => void;
  title: string;
  subtitle?: string;
}

export default function Topbar({ onSearchOpen, title, subtitle }: TopbarProps) {
  const { isDark, toggleTheme } = useTheme();
  const [notifCount] = useState(3);
  const [isOnline, setIsOnline] = useState(true);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const baseClasses = isDark
    ? 'bg-[#0a0a0f]/80 border-white/6'
    : 'bg-white/80 border-black/8';

  return (
    <header className={`sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b backdrop-blur-xl ${baseClasses}`}>
      {/* Left: Title */}
      <div>
        <motion.h1
          key={title}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <p className={`text-xs mt-0.5 ${isDark ? 'text-white/40' : 'text-gray-400'}`}>{subtitle}</p>
        )}
      </div>

      {/* Center: Search trigger */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={onSearchOpen}
        className={`hidden md:flex items-center gap-3 px-4 py-2 rounded-xl border transition-colors group
          ${isDark
            ? 'border-white/8 bg-white/4 hover:bg-white/8 text-white/40 hover:text-white/70'
            : 'border-black/8 bg-black/3 hover:bg-black/6 text-gray-400 hover:text-gray-600'
          }`}
      >
        <Search className="w-4 h-4" />
        <span className="text-sm">Search everything...</span>
        <div className={`flex items-center gap-1 ml-8 ${isDark ? 'text-white/25' : 'text-gray-300'}`}>
          <Command className="w-3 h-3" />
          <span className="text-xs font-mono">K</span>
        </div>
      </motion.button>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Live clock */}
        <div className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono
          ${isDark ? 'text-white/30 bg-white/3' : 'text-gray-400 bg-black/3'}`}>
          {isOnline
            ? <Wifi className="w-3 h-3 text-emerald-400" />
            : <WifiOff className="w-3 h-3 text-red-400" />
          }
          <span>
            {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </span>
        </div>

        {/* Search (mobile) */}
        <button
          onClick={onSearchOpen}
          className={`md:hidden p-2 rounded-xl transition-colors
            ${isDark ? 'hover:bg-white/8 text-white/50' : 'hover:bg-black/8 text-gray-500'}`}
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Notifications */}
        <button className={`relative p-2 rounded-xl transition-colors
          ${isDark ? 'hover:bg-white/8 text-white/50 hover:text-white/90' : 'hover:bg-black/8 text-gray-500 hover:text-gray-900'}`}>
          <Bell className="w-5 h-5" />
          {notifCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold leading-none">
              {notifCount}
            </span>
          )}
        </button>

        {/* Theme toggle */}
        <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.9, rotate: 15 }}
          className={`p-2 rounded-xl transition-colors
            ${isDark ? 'hover:bg-white/8 text-amber-400/70 hover:text-amber-400' : 'hover:bg-black/8 text-indigo-500'}`}
        >
          <motion.div
            key={isDark ? 'dark' : 'light'}
            initial={{ rotate: -30, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.div>
        </motion.button>
      </div>
    </header>
  );
}
