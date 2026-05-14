import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import CommandPalette from './CommandPalette';
import ScrollToTop from './ui/ScrollToTop';
import { useTheme } from '../context/ThemeContext';

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  '/':          { title: 'Dashboard',       subtitle: 'Welcome back, Aria · Command Center Overview' },
  '/users':     { title: 'User Management', subtitle: 'RBAC · Identity & Access Control' },
  '/gis':       { title: 'GIS Map',         subtitle: 'Geographic Intelligence · Live Location Monitoring' },
  '/lists':     { title: 'Task Lists',      subtitle: 'Operations · Project Tracking' },
  '/dict':      { title: 'Data Dictionary', subtitle: 'Configuration · Key-Value Mappings' },
  '/analytics': { title: 'Analytics',       subtitle: 'Intelligence · Performance Metrics' },
  '/settings':  { title: 'Settings',        subtitle: 'Platform · Configuration & Preferences' },
};

export default function Layout() {
  const [cmdOpen, setCmdOpen] = useState(false);
  const { isDark } = useTheme();
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  const pageInfo = pageTitles[location.pathname] ?? { title: 'GeoNexus', subtitle: '' };

  // Global Cmd+K / Ctrl+K listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdOpen(o => !o);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className={`flex h-screen overflow-hidden ${isDark ? 'bg-[#0a0a0f]' : 'bg-[#f4f4f8]'}`}>
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Topbar
          onSearchOpen={() => setCmdOpen(true)}
          title={pageInfo.title}
          subtitle={pageInfo.subtitle}
        />

        <main ref={mainRef} className="flex-1 overflow-y-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />
      <ScrollToTop scrollRef={mainRef} />
    </div>
  );
}
