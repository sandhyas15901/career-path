import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { Search, MapPin, List, BookOpen, Users, ArrowRight, Command, X } from 'lucide-react';
import { allSearchableItems } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

const fuse = new Fuse(allSearchableItems, {
  keys: ['title', 'subtitle'],
  threshold: 0.35,
  includeScore: true,
});

const typeConfig = {
  user: { icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10', label: 'User' },
  gis: { icon: MapPin, color: 'text-emerald-400', bg: 'bg-emerald-500/10', label: 'GIS' },
  list: { icon: List, color: 'text-violet-400', bg: 'bg-violet-500/10', label: 'List' },
  dict: { icon: BookOpen, color: 'text-amber-400', bg: 'bg-amber-500/10', label: 'Dict' },
};

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.trim()
    ? fuse.search(query).slice(0, 8).map(r => r.item)
    : allSearchableItems.slice(0, 6);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => { setSelectedIndex(0); }, [query]);

  const handleSelect = useCallback((item: typeof allSearchableItems[0]) => {
    navigate(item.route);
    onClose();
  }, [navigate, onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIndex(i => Math.min(i + 1, results.length - 1)); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIndex(i => Math.max(i - 1, 0)); }
      if (e.key === 'Enter' && results[selectedIndex]) { handleSelect(results[selectedIndex]); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, results, selectedIndex, handleSelect, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className={`relative w-full max-w-2xl mx-4 rounded-2xl border overflow-hidden shadow-2xl
              ${isDark
                ? 'bg-[#0f0f1a]/95 border-white/10 shadow-black/80'
                : 'bg-white/95 border-black/10 shadow-black/20'
              }`}
            onClick={e => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className={`flex items-center gap-3 px-5 py-4 border-b ${isDark ? 'border-white/8' : 'border-black/8'}`}>
              <Search className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-white/40' : 'text-black/40'}`} />
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search users, locations, lists, dictionary..."
                className={`flex-1 bg-transparent outline-none text-base placeholder-opacity-40
                  ${isDark ? 'text-white placeholder-white/30' : 'text-gray-900 placeholder-gray-400'}`}
              />
              <div className="flex items-center gap-1.5">
                <kbd className={`px-1.5 py-0.5 text-xs rounded font-mono border
                  ${isDark ? 'border-white/10 text-white/30 bg-white/5' : 'border-black/10 text-gray-400 bg-black/5'}`}>
                  ESC
                </kbd>
                <button onClick={onClose} className={`p-1 rounded-lg transition-colors ${isDark ? 'hover:bg-white/10 text-white/40' : 'hover:bg-black/10 text-gray-400'}`}>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="max-h-[400px] overflow-y-auto py-2">
              {!query && (
                <p className={`px-5 py-2 text-xs font-medium uppercase tracking-widest
                  ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                  Recent
                </p>
              )}
              {results.length === 0 && (
                <div className={`px-5 py-8 text-center ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                  <Search className="w-8 h-8 mx-auto mb-2 opacity-30" />
                  <p className="text-sm">No results for &ldquo;{query}&rdquo;</p>
                </div>
              )}
              {results.map((item, index) => {
                const config = typeConfig[item.type];
                const Icon = config.icon;
                const isSelected = index === selectedIndex;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    className={`w-full flex items-center gap-3 px-5 py-3 transition-colors text-left
                      ${isSelected
                        ? isDark ? 'bg-indigo-500/15 text-white' : 'bg-indigo-50 text-gray-900'
                        : isDark ? 'hover:bg-white/5 text-white/80' : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${config.bg}`}>
                      <Icon className={`w-4 h-4 ${config.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                      </p>
                      <p className={`text-xs truncate ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${config.bg} ${config.color}`}>
                        {config.label}
                      </span>
                      {isSelected && <ArrowRight className={`w-4 h-4 ${config.color}`} />}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Footer */}
            <div className={`px-5 py-3 border-t flex items-center justify-between
              ${isDark ? 'border-white/5 bg-white/2' : 'border-black/5 bg-black/1'}`}>
              <div className={`flex items-center gap-3 text-xs ${isDark ? 'text-white/25' : 'text-gray-400'}`}>
                <span className="flex items-center gap-1">
                  <kbd className={`px-1.5 py-0.5 rounded border font-mono text-xs
                    ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'}`}>↑↓</kbd>
                  navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className={`px-1.5 py-0.5 rounded border font-mono text-xs
                    ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'}`}>↵</kbd>
                  open
                </span>
              </div>
              <div className={`flex items-center gap-1.5 text-xs ${isDark ? 'text-white/20' : 'text-gray-400'}`}>
                <Command className="w-3 h-3" />
                <span>GeoNexus Search</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
