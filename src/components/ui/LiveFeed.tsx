import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, MapPin, Users, BookOpen, List, AlertTriangle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface FeedItem {
  id: string;
  type: 'gis' | 'user' | 'dict' | 'list' | 'alert';
  message: string;
  time: string;
}

const feedTemplates = [
  { type: 'gis' as const, messages: [
    'Mumbai Critical Zone — seismic reading spike detected',
    'São Paulo sensor array — flood level threshold exceeded',
    'Arctic Boundary Zone — temperature anomaly recorded',
    'Nairobi Field Station — connectivity restored',
  ]},
  { type: 'user' as const, messages: [
    'Yuki Tanaka logged in from Tokyo',
    'Marcus Osei exported GIS dataset (EMEA)',
    'Priya Sharma updated RBAC permissions',
    'Noah Williams viewed analytics dashboard',
  ]},
  { type: 'alert' as const, messages: [
    'CRITICAL: Mumbai seismic alert — manual review required',
    'HIGH: API rate limit approaching for region APAC',
    'MEDIUM: Cache eviction rate elevated — Redis cluster',
  ]},
  { type: 'list' as const, messages: [
    'Task #l1 progress updated to 78%',
    'Mumbai seismic upgrade — status: active',
    'Q1 Analytics report draft created by Yuki',
  ]},
  { type: 'dict' as const, messages: [
    'GIS_REFRESH_INTERVAL updated — 30000ms',
    'FUZZY_SEARCH_THRESHOLD tuned to 0.3',
    'CACHE_TTL_SECONDS bumped to 300',
  ]},
];

const typeConfig = {
  gis: { icon: MapPin, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  user: { icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  dict: { icon: BookOpen, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  list: { icon: List, color: 'text-violet-400', bg: 'bg-violet-500/10' },
  alert: { icon: AlertTriangle, color: 'text-red-400', bg: 'bg-red-500/10' },
};

let idCounter = 0;
function makeItem(): FeedItem {
  const template = feedTemplates[Math.floor(Math.random() * feedTemplates.length)];
  const message = template.messages[Math.floor(Math.random() * template.messages.length)];
  return {
    id: `feed-${++idCounter}-${Date.now()}`,
    type: template.type,
    message,
    time: 'just now',
  };
}

export default function LiveFeed() {
  const { isDark } = useTheme();
  const [items, setItems] = useState<FeedItem[]>(() =>
    Array.from({ length: 4 }, makeItem)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => [makeItem(), ...prev.slice(0, 5)]);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-white/40' : 'text-gray-400';
  const cardBg = isDark ? 'glass border-white/6' : 'glass-light border-black/6';

  return (
    <div className={`rounded-2xl border overflow-hidden ${cardBg}`}>
      <div className={`flex items-center justify-between px-5 py-4 border-b ${isDark ? 'border-white/6' : 'border-black/6'}`}>
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-indigo-400" />
          <span className={`text-sm font-semibold ${textPrimary}`}>Live Event Feed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className={`text-xs font-medium text-red-400`}>LIVE</span>
        </div>
      </div>
      <div className="p-3 space-y-1.5 max-h-64 overflow-hidden">
        <AnimatePresence initial={false}>
          {items.map(item => {
            const cfg = typeConfig[item.type];
            const Icon = cfg.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className={`flex items-start gap-2.5 p-2.5 rounded-xl
                  ${isDark ? 'hover:bg-white/4' : 'hover:bg-black/3'} transition-colors cursor-default`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${cfg.bg}`}>
                  <Icon className={`w-3.5 h-3.5 ${cfg.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs leading-snug ${textPrimary}`}>{item.message}</p>
                  <p className={`text-xs mt-0.5 ${textSecondary}`}>{item.time}</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
