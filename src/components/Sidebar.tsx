import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Users, MapPin, List, BookOpen,
  ChevronLeft, ChevronRight, Globe, Shield,
  Activity, Settings
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard', badge: null },
  { to: '/users', icon: Users, label: 'Users', badge: '8' },
  { to: '/gis', icon: MapPin, label: 'GIS Map', badge: null },
  { to: '/lists', icon: List, label: 'Lists', badge: '3' },
  { to: '/dict', icon: BookOpen, label: 'Dictionary', badge: null },
];

const bottomItems = [
  { to: '/analytics', icon: Activity, label: 'Analytics' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { isDark } = useTheme();

  const baseClasses = isDark
    ? 'bg-[#0a0a0f] border-white/6'
    : 'bg-white border-black/8';

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`relative flex flex-col h-screen border-r ${baseClasses} z-20 overflow-hidden flex-shrink-0`}
    >
      {/* Logo */}
      <div className={`flex items-center gap-3 px-4 py-5 border-b ${isDark ? 'border-white/6' : 'border-black/6'}`}>
        <div className="relative flex-shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-current animate-pulse" 
               style={{ borderColor: isDark ? '#0a0a0f' : '#ffffff' }} />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.15 }}
            >
              <p className="font-bold text-sm tracking-tight gradient-text">GeoNexus</p>
              <p className={`text-xs ${isDark ? 'text-white/30' : 'text-gray-400'}`}>Platform v3.0</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Status indicator */}
      <AnimatePresence>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`mx-3 mt-3 rounded-xl p-3 border ${isDark ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-emerald-500/20 bg-emerald-50'}`}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className={`text-xs font-medium ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                All Systems Operational
              </span>
            </div>
            <p className={`text-xs mt-1 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>99.97% uptime · 21K req/day</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        <AnimatePresence>
          {!collapsed && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`px-3 pb-2 text-xs font-semibold uppercase tracking-widest ${isDark ? 'text-white/20' : 'text-gray-400'}`}
            >
              Navigation
            </motion.p>
          )}
        </AnimatePresence>
        {navItems.map(({ to, icon: Icon, label, badge }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group
              ${isActive
                ? isDark
                  ? 'bg-indigo-500/15 text-indigo-300 shadow-sm'
                  : 'bg-indigo-50 text-indigo-600'
                : isDark
                  ? 'text-white/50 hover:text-white/90 hover:bg-white/5'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-xl bg-indigo-500/10 border border-indigo-500/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className={`w-5 h-5 flex-shrink-0 relative z-10 transition-colors duration-200
                  ${isActive ? 'text-indigo-400' : ''}`} />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      className="text-sm font-medium relative z-10 flex-1 whitespace-nowrap"
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
                {badge && !collapsed && (
                  <span className="text-xs bg-indigo-500/20 text-indigo-400 px-1.5 py-0.5 rounded-full font-medium relative z-10">
                    {badge}
                  </span>
                )}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-500 rounded-r-full" />
                )}
              </>
            )}
          </NavLink>
        ))}

        <div className={`my-3 border-t ${isDark ? 'border-white/5' : 'border-black/5'}`} />

        <AnimatePresence>
          {!collapsed && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`px-3 pb-2 text-xs font-semibold uppercase tracking-widest ${isDark ? 'text-white/20' : 'text-gray-400'}`}
            >
              System
            </motion.p>
          )}
        </AnimatePresence>
        {bottomItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
              ${isActive
                ? isDark ? 'bg-indigo-500/15 text-indigo-300' : 'bg-indigo-50 text-indigo-600'
                : isDark ? 'text-white/50 hover:text-white/90 hover:bg-white/5' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-indigo-400' : ''}`} />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      className="text-sm font-medium whitespace-nowrap"
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User profile */}
      <div className={`p-3 border-t ${isDark ? 'border-white/6' : 'border-black/6'}`}>
        <div className={`flex items-center gap-3 p-2 rounded-xl transition-colors cursor-pointer
          ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}>
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            AN
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                className="min-w-0 flex-1"
              >
                <p className={`text-xs font-semibold truncate ${isDark ? 'text-white/80' : 'text-gray-700'}`}>Aria Nakamura</p>
                <div className="flex items-center gap-1">
                  <Shield className="w-2.5 h-2.5 text-indigo-400" />
                  <p className="text-xs text-indigo-400">Admin</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(c => !c)}
        className={`absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border
          flex items-center justify-center transition-all shadow-sm z-30
          ${isDark
            ? 'bg-[#0a0a0f] border-white/10 text-white/50 hover:text-white hover:border-white/20'
            : 'bg-white border-black/10 text-gray-400 hover:text-gray-700'
          }`}
      >
        {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
      </button>
    </motion.aside>
  );
}
