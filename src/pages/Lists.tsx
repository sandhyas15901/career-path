import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  List as ListIcon, Plus, Search, ChevronDown, Calendar, User,
  Download, CheckCircle, Clock, Archive, FileText, BarChart2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { mockListItems, ListItem } from '../data/mockData';
import { SkeletonCard } from '../components/ui/SkeletonLoader';
import { exportToCsv } from '../utils/exportCsv';

const statusConfig: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  active: { label: 'Active', color: 'bg-blue-500/12 text-blue-400 border-blue-500/20', icon: Clock },
  published: { label: 'Published', color: 'bg-emerald-500/12 text-emerald-400 border-emerald-500/20', icon: CheckCircle },
  draft: { label: 'Draft', color: 'bg-gray-500/12 text-gray-400 border-gray-500/20', icon: FileText },
  archived: { label: 'Archived', color: 'bg-amber-500/12 text-amber-400 border-amber-500/20', icon: Archive },
};

const priorityConfig: Record<string, { color: string; dot: string }> = {
  urgent: { color: 'text-red-400', dot: 'bg-red-500' },
  high: { color: 'text-orange-400', dot: 'bg-orange-500' },
  medium: { color: 'text-amber-400', dot: 'bg-amber-500' },
  low: { color: 'text-gray-400', dot: 'bg-gray-500' },
};

const categoryColors = [
  'bg-indigo-500/10 text-indigo-400',
  'bg-violet-500/10 text-violet-400',
  'bg-cyan-500/10 text-cyan-400',
  'bg-pink-500/10 text-pink-400',
  'bg-emerald-500/10 text-emerald-400',
  'bg-amber-500/10 text-amber-400',
];

function ProgressBar({ value, isDark }: { value: number; isDark: boolean }) {
  return (
    <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-white/8' : 'bg-black/8'}`}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`h-full rounded-full ${
          value === 100 ? 'bg-emerald-500' :
          value > 70 ? 'bg-blue-500' :
          value > 40 ? 'bg-amber-500' : 'bg-red-500'
        }`}
      />
    </div>
  );
}

function ListCard({ item, index, isDark, catColor }: { item: ListItem; index: number; isDark: boolean; catColor: string }) {
  const status = statusConfig[item.status];
  const priority = priorityConfig[item.priority];
  const StatusIcon = status.icon;
  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-white/40' : 'text-gray-400';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8, scale: 0.97 }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 300, damping: 28 }}
      className={`rounded-2xl p-5 border card-hover cursor-pointer
        ${isDark ? 'glass border-white/6 hover:border-white/12' : 'glass-light border-black/6 hover:border-black/12'}`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${catColor}`}>
            {item.category}
          </span>
          <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border font-medium ${status.color}`}>
            <StatusIcon className="w-3 h-3" />
            {status.label}
          </span>
        </div>
        <div className={`flex items-center gap-1 text-xs flex-shrink-0 font-medium ${priority.color}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${priority.dot}`} />
          {item.priority}
        </div>
      </div>

      {/* Title */}
      <h3 className={`font-semibold text-sm leading-snug mb-3 ${textPrimary}`}>{item.title}</h3>

      {/* Progress */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <span className={`text-xs ${textSecondary}`}>Progress</span>
          <span className={`text-xs font-semibold ${
            item.progress === 100 ? 'text-emerald-400' :
            item.progress > 70 ? 'text-blue-400' : textSecondary
          }`}>{item.progress}%</span>
        </div>
        <ProgressBar value={item.progress} isDark={isDark} />
      </div>

      {/* Tags */}
      {item.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {item.tags.map(tag => (
            <span key={tag} className={`text-xs px-2 py-0.5 rounded-lg font-mono
              ${isDark ? 'bg-white/5 text-white/35' : 'bg-black/5 text-gray-400'}`}>
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className={`flex items-center justify-between pt-3 border-t ${isDark ? 'border-white/6' : 'border-black/6'}`}>
        <div className="flex items-center gap-1.5">
          <User className={`w-3 h-3 ${textSecondary}`} />
          <span className={`text-xs ${textSecondary}`}>{item.assignedTo.split(' ')[0]}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className={`w-3 h-3 ${textSecondary}`} />
          <span className={`text-xs ${textSecondary}`}>Due {new Date(item.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Lists() {
  const { isDark } = useTheme();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  const filtered = mockListItems.filter(item => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.tags.some(t => t.includes(search.toLowerCase()));
    const matchStatus = statusFilter === 'all' || item.status === statusFilter;
    const matchPriority = priorityFilter === 'all' || item.priority === priorityFilter;
    return matchSearch && matchStatus && matchPriority;
  });

  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-white/40' : 'text-gray-400';
  const cardBg = isDark ? 'glass border-white/6' : 'glass-light border-black/6';
  const inputBg = isDark ? 'bg-white/4 border-white/8 text-white placeholder-white/30 focus:border-indigo-500/50' : 'bg-black/3 border-black/8 text-gray-900 placeholder-gray-400 focus:border-indigo-500/50';

  const stats = [
    { label: 'Total', value: mockListItems.length, color: 'text-indigo-400' },
    { label: 'Active', value: mockListItems.filter(i => i.status === 'active').length, color: 'text-blue-400' },
    { label: 'Completed', value: mockListItems.filter(i => i.progress === 100).length, color: 'text-emerald-400' },
    { label: 'Urgent', value: mockListItems.filter(i => i.priority === 'urgent').length, color: 'text-red-400' },
  ];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h2 className={`font-display text-2xl font-bold ${textPrimary}`}>Task Lists</h2>
          <p className={`text-sm mt-0.5 ${textSecondary}`}>Project & operations tracking · {mockListItems.length} items</p>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => exportToCsv(mockListItems.map(i => ({
              id: i.id, title: i.title, category: i.category, status: i.status,
              priority: i.priority, assignedTo: i.assignedTo, progress: i.progress,
              dueDate: i.dueDate, createdAt: i.createdAt,
            })), 'geonexus-lists')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-colors
              ${isDark ? 'border-white/10 text-white/70 hover:bg-white/5' : 'border-black/10 text-gray-600 hover:bg-black/5'}`}
          >
            <Download className="w-4 h-4" />
            Export CSV
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-medium shadow-lg shadow-indigo-500/25 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Item
          </motion.button>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className={`rounded-xl p-4 border text-center ${cardBg}`}
          >
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className={`text-xs mt-1 ${textSecondary}`}>{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Overall Progress */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`rounded-2xl p-4 border ${cardBg}`}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-indigo-400" />
            <span className={`text-sm font-medium ${textPrimary}`}>Overall Completion</span>
          </div>
          <span className={`text-sm font-bold text-indigo-400`}>
            {Math.round(mockListItems.reduce((a, b) => a + b.progress, 0) / mockListItems.length)}%
          </span>
        </div>
        <ProgressBar
          value={Math.round(mockListItems.reduce((a, b) => a + b.progress, 0) / mockListItems.length)}
          isDark={isDark}
        />
      </motion.div>

      {/* Filters */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
        className={`rounded-2xl p-4 border ${cardBg}`}>
        <div className="flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-48">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${textSecondary}`} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search lists, tags..."
              className={`w-full pl-9 pr-4 py-2 rounded-xl border text-sm outline-none transition-all ${inputBg}`} />
          </div>

          {(['active', 'published', 'draft', 'archived'] as const).map(s => (
            <button key={s} onClick={() => setStatusFilter(statusFilter === s ? 'all' : s)}
              className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all capitalize
                ${statusFilter === s
                  ? statusConfig[s].color
                  : isDark ? 'border-white/8 text-white/40 hover:text-white/70' : 'border-black/8 text-gray-400 hover:text-gray-600'
                }`}>
              {s}
            </button>
          ))}

          <div className="relative">
            <select value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)}
              className={`appearance-none pl-3 pr-7 py-2 rounded-xl border text-sm outline-none cursor-pointer ${inputBg}`}>
              <option value="all">All Priority</option>
              <option value="urgent">Urgent</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <ChevronDown className={`absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none ${textSecondary}`} />
          </div>

          {/* View toggle */}
          <div className={`flex rounded-lg border overflow-hidden ${isDark ? 'border-white/10' : 'border-black/10'}`}>
            {(['grid', 'list'] as const).map(v => (
              <button key={v} onClick={() => setView(v)}
                className={`px-3 py-1.5 text-xs font-medium capitalize transition-colors
                  ${view === v ? 'bg-indigo-500 text-white' : isDark ? 'text-white/40 hover:bg-white/5' : 'text-gray-400 hover:bg-black/5'}`}>
                {v}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Items */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : (
        <AnimatePresence mode="popLayout">
          <div className={view === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            : 'space-y-3'
          }>
            {filtered.map((item, i) => (
              <ListCard
                key={item.id}
                item={item}
                index={i}
                isDark={isDark}
                catColor={categoryColors[i % categoryColors.length]}
              />
            ))}
          </div>
        </AnimatePresence>
      )}

      {filtered.length === 0 && !loading && (
        <div className={`py-20 text-center ${textSecondary}`}>
          <ListIcon className="w-12 h-12 mx-auto mb-3 opacity-20" />
          <p className="text-sm">No items match your filters.</p>
        </div>
      )}
    </div>
  );
}
