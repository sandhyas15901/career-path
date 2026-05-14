import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Search, Plus, Shield, Hash, ToggleLeft, Code2,
  List, ChevronDown, Edit3, Copy, Trash2, Activity, Lock, CheckCheck
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { mockDictEntries, DictEntry } from '../data/mockData';
import { SkeletonTable } from '../components/ui/SkeletonLoader';

const typeConfig: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  string: { icon: Hash, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  number: { icon: Activity, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  boolean: { icon: ToggleLeft, color: 'text-violet-400', bg: 'bg-violet-500/10' },
  json: { icon: Code2, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  enum: { icon: List, color: 'text-pink-400', bg: 'bg-pink-500/10' },
};

function DictRow({ entry, index, isDark }: { entry: DictEntry; index: number; isDark: boolean }) {
  const [copied, setCopied] = useState(false);
  const type = typeConfig[entry.type];
  const TypeIcon = type.icon;
  const textSecondary = isDark ? 'text-white/40' : 'text-gray-400';

  const handleCopy = () => {
    navigator.clipboard.writeText(entry.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.tr
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, type: 'spring', stiffness: 300, damping: 28 }}
      className={`group border-b transition-colors
        ${isDark ? 'border-white/4 hover:bg-white/2' : 'border-black/4 hover:bg-black/1'}`}
    >
      {/* Key */}
      <td className="py-3.5 px-4">
        <div className="flex items-center gap-2">
          {entry.isSystem && <Lock className="w-3 h-3 text-amber-400 flex-shrink-0" />}
          <span className={`text-sm font-mono font-medium ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>
            {entry.key}
          </span>
        </div>
        <span className={`text-xs ${textSecondary}`}>{entry.namespace}</span>
      </td>

      {/* Type */}
      <td className="py-3.5 px-4">
        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${type.bg} ${type.color}`}>
          <TypeIcon className="w-3 h-3" />
          {entry.type}
        </span>
      </td>

      {/* Value */}
      <td className="py-3.5 px-4 max-w-xs">
        <div className={`flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-lg truncate
          ${isDark ? 'bg-white/4 text-white/70' : 'bg-black/4 text-gray-600'}`}>
          <span className="truncate">{entry.value}</span>
          <button onClick={handleCopy} className={`ml-auto flex-shrink-0 transition-colors ${isDark ? 'text-white/30 hover:text-white/70' : 'text-gray-300 hover:text-gray-600'}`}>
            {copied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </td>

      {/* Description */}
      <td className="py-3.5 px-4 max-w-xs">
        <p className={`text-xs truncate ${textSecondary}`}>{entry.description}</p>
      </td>

      {/* Usage */}
      <td className="py-3.5 px-4">
        <div className="flex items-center gap-1.5">
          <div className={`h-1 rounded-full flex-1 max-w-16 ${isDark ? 'bg-white/8' : 'bg-black/8'}`}>
            <div
              className="h-full rounded-full bg-indigo-500"
              style={{ width: `${Math.min((entry.usageCount / 10000) * 100, 100)}%` }}
            />
          </div>
          <span className={`text-xs font-medium ${textSecondary}`}>{entry.usageCount.toLocaleString()}</span>
        </div>
      </td>

      {/* Modified */}
      <td className="py-3.5 px-4">
        <p className={`text-xs ${textSecondary}`}>{new Date(entry.lastModified).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
      </td>

      {/* System badge */}
      <td className="py-3.5 px-4">
        {entry.isSystem ? (
          <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium bg-amber-500/10 text-amber-400">
            <Shield className="w-2.5 h-2.5" />
            System
          </span>
        ) : (
          <span className={`text-xs ${textSecondary}`}>Custom</span>
        )}
      </td>

      {/* Actions */}
      <td className="py-3.5 px-4">
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className={`p-1.5 rounded-lg transition-colors ${isDark ? 'hover:bg-white/8 text-white/40 hover:text-white' : 'hover:bg-black/8 text-gray-400 hover:text-gray-700'}`} disabled={entry.isSystem}>
            <Edit3 className="w-3.5 h-3.5" />
          </button>
          <button className={`p-1.5 rounded-lg transition-colors ${isDark ? 'hover:bg-red-500/15 text-white/40 hover:text-red-400' : 'hover:bg-red-50 text-gray-400 hover:text-red-500'}`} disabled={entry.isSystem}>
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </td>
    </motion.tr>
  );
}

export default function Dict() {
  const { isDark } = useTheme();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [nsFilter, setNsFilter] = useState<string>('all');
  const [showSystem, setShowSystem] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(t);
  }, []);

  const namespaces = [...new Set(mockDictEntries.map(e => e.namespace))];

  const filtered = mockDictEntries.filter(e => {
    const matchSearch = e.key.toLowerCase().includes(search.toLowerCase()) ||
      e.description.toLowerCase().includes(search.toLowerCase()) ||
      e.namespace.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === 'all' || e.type === typeFilter;
    const matchNs = nsFilter === 'all' || e.namespace === nsFilter;
    const matchSystem = showSystem || !e.isSystem;
    return matchSearch && matchType && matchNs && matchSystem;
  });

  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-white/40' : 'text-gray-400';
  const cardBg = isDark ? 'glass border-white/6' : 'glass-light border-black/6';
  const inputBg = isDark ? 'bg-white/4 border-white/8 text-white placeholder-white/30 focus:border-indigo-500/50' : 'bg-black/3 border-black/8 text-gray-900 placeholder-gray-400 focus:border-indigo-500/50';

  const typeCounts = Object.keys(typeConfig).reduce((acc, t) => {
    acc[t] = mockDictEntries.filter(e => e.type === t).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h2 className={`font-display text-2xl font-bold ${textPrimary}`}>Data Dictionary</h2>
          <p className={`text-sm mt-0.5 ${textSecondary}`}>System & custom configuration mappings · {mockDictEntries.length} entries</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-medium shadow-lg shadow-indigo-500/25 transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Entry
        </motion.button>
      </motion.div>

      {/* Type distribution */}
      <div className="grid grid-cols-5 gap-3">
        {Object.entries(typeConfig).map(([t, config], i) => {
          const TypeIcon = config.icon;
          return (
            <motion.button
              key={t}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setTypeFilter(typeFilter === t ? 'all' : t)}
              className={`rounded-xl p-4 border text-center transition-all card-hover
                ${typeFilter === t
                  ? `${config.bg} border-current`
                  : `${cardBg}`
                }`}
            >
              <TypeIcon className={`w-5 h-5 mx-auto mb-2 ${config.color}`} />
              <p className={`text-xl font-bold ${config.color}`}>{typeCounts[t]}</p>
              <p className={`text-xs mt-1 capitalize ${textSecondary}`}>{t}</p>
            </motion.button>
          );
        })}
      </div>

      {/* Filters */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className={`rounded-2xl p-4 border ${cardBg}`}>
        <div className="flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-48">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${textSecondary}`} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search keys, namespaces..."
              className={`w-full pl-9 pr-4 py-2 rounded-xl border text-sm outline-none transition-all ${inputBg}`} />
          </div>

          <div className="relative">
            <select value={nsFilter} onChange={e => setNsFilter(e.target.value)}
              className={`appearance-none pl-3 pr-8 py-2 rounded-xl border text-sm outline-none cursor-pointer ${inputBg}`}>
              <option value="all">All Namespaces</option>
              {namespaces.map(ns => (
                <option key={ns} value={ns}>{ns}</option>
              ))}
            </select>
            <ChevronDown className={`absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none ${textSecondary}`} />
          </div>

          <button
            onClick={() => setShowSystem(s => !s)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm transition-all
              ${showSystem
                ? isDark ? 'bg-amber-500/15 border-amber-500/30 text-amber-400' : 'bg-amber-50 border-amber-200 text-amber-600'
                : isDark ? 'border-white/8 text-white/40 hover:text-white hover:bg-white/5' : 'border-black/8 text-gray-400 hover:text-gray-700 hover:bg-black/5'
              }`}
          >
            <Shield className="w-4 h-4" />
            {showSystem ? 'Hide' : 'Show'} System
          </button>
        </div>
      </motion.div>

      {/* Table */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className={`rounded-2xl border overflow-hidden ${cardBg}`}>
        {loading ? (
          <div className="p-4"><SkeletonTable rows={6} /></div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b text-left ${isDark ? 'border-white/6' : 'border-black/6'}`}>
                  {['Key / Namespace', 'Type', 'Value', 'Description', 'Usage', 'Modified', 'Source', ''].map((h, i) => (
                    <th key={i} className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider ${textSecondary}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {filtered.map((entry, i) => (
                    <DictRow key={entry.id} entry={entry} index={i} isDark={isDark} />
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className={`py-16 text-center ${textSecondary}`}>
                <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-20" />
                <p className="text-sm">No entries match your filters.</p>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
