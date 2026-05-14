import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users as UsersIcon, Search, Filter, Shield, UserPlus, Edit3, Trash2, Eye, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { mockUsers, User } from '../data/mockData';
import { SkeletonTable } from '../components/ui/SkeletonLoader';

const roleColors: Record<string, string> = {
  admin: 'bg-red-500/12 text-red-400 border-red-500/20',
  analyst: 'bg-violet-500/12 text-violet-400 border-violet-500/20',
  editor: 'bg-blue-500/12 text-blue-400 border-blue-500/20',
  viewer: 'bg-gray-500/12 text-gray-400 border-gray-500/20',
};

const statusColors: Record<string, string> = {
  active: 'bg-emerald-500/12 text-emerald-400',
  inactive: 'bg-gray-500/12 text-gray-400',
  pending: 'bg-amber-500/12 text-amber-400',
};

const avatarGradients = [
  'from-indigo-500 to-violet-500',
  'from-blue-500 to-cyan-500',
  'from-emerald-500 to-teal-500',
  'from-pink-500 to-rose-500',
  'from-amber-500 to-orange-500',
  'from-violet-500 to-purple-500',
];

function UserRow({ user, index, isDark }: { user: User; index: number; isDark: boolean }) {
  const gradient = avatarGradients[index % avatarGradients.length];
  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-white/40' : 'text-gray-400';

  return (
    <motion.tr
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 300, damping: 28 }}
      className={`group border-b transition-colors
        ${isDark ? 'border-white/4 hover:bg-white/2' : 'border-black/4 hover:bg-black/1'}`}
    >
      <td className="py-3.5 px-4">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm`}>
            {user.avatar}
          </div>
          <div>
            <p className={`text-sm font-medium ${textPrimary}`}>{user.name}</p>
            <p className={`text-xs ${textSecondary}`}>{user.email}</p>
          </div>
        </div>
      </td>
      <td className="py-3.5 px-4">
        <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium border ${roleColors[user.role]}`}>
          <Shield className="w-2.5 h-2.5" />
          {user.role}
        </span>
      </td>
      <td className="py-3.5 px-4">
        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[user.status]}`}>
          <span className={`w-1.5 h-1.5 rounded-full inline-block
            ${user.status === 'active' ? 'bg-emerald-400' : user.status === 'pending' ? 'bg-amber-400' : 'bg-gray-400'}`} />
          {user.status}
        </span>
      </td>
      <td className="py-3.5 px-4">
        <span className={`text-xs px-2 py-1 rounded-lg font-mono
          ${isDark ? 'bg-white/5 text-white/50' : 'bg-black/5 text-gray-500'}`}>
          {user.region}
        </span>
      </td>
      <td className="py-3.5 px-4">
        <p className={`text-xs ${textSecondary}`}>{new Date(user.lastActive).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
      </td>
      <td className="py-3.5 px-4">
        <div className="flex items-center gap-1">
          {user.permissions.map(p => (
            <span key={p} className={`text-xs px-1.5 py-0.5 rounded font-mono
              ${isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
              {p}
            </span>
          ))}
        </div>
      </td>
      <td className="py-3.5 px-4">
        <div className="relative flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className={`p-1.5 rounded-lg transition-colors ${isDark ? 'hover:bg-white/8 text-white/40 hover:text-white' : 'hover:bg-black/8 text-gray-400 hover:text-gray-700'}`}>
            <Eye className="w-3.5 h-3.5" />
          </button>
          <button className={`p-1.5 rounded-lg transition-colors ${isDark ? 'hover:bg-white/8 text-white/40 hover:text-white' : 'hover:bg-black/8 text-gray-400 hover:text-gray-700'}`}>
            <Edit3 className="w-3.5 h-3.5" />
          </button>
          <button className={`p-1.5 rounded-lg transition-colors ${isDark ? 'hover:bg-red-500/15 text-white/40 hover:text-red-400' : 'hover:bg-red-50 text-gray-400 hover:text-red-500'}`}>
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </td>
    </motion.tr>
  );
}

export default function Users() {
  const { isDark } = useTheme();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  const filtered = mockUsers.filter(u => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = roleFilter === 'all' || u.role === roleFilter;
    const matchStatus = statusFilter === 'all' || u.status === statusFilter;
    return matchSearch && matchRole && matchStatus;
  });

  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-white/40' : 'text-gray-400';
  const cardBg = isDark ? 'glass border-white/6' : 'glass-light border-black/6';
  const inputBg = isDark ? 'bg-white/4 border-white/8 text-white placeholder-white/30 focus:border-indigo-500/50' : 'bg-black/3 border-black/8 text-gray-900 placeholder-gray-400 focus:border-indigo-500/50';

  const stats = {
    total: mockUsers.length,
    active: mockUsers.filter(u => u.status === 'active').length,
    admins: mockUsers.filter(u => u.role === 'admin').length,
    pending: mockUsers.filter(u => u.status === 'pending').length,
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h2 className={`font-display text-2xl font-bold ${textPrimary}`}>User Management</h2>
          <p className={`text-sm mt-0.5 ${textSecondary}`}>Role-based access control · {mockUsers.length} registered users</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-medium shadow-lg shadow-indigo-500/25 transition-colors"
        >
          <UserPlus className="w-4 h-4" />
          Add User
        </motion.button>
      </motion.div>

      {/* Stat pills */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: 'Total', value: stats.total, color: 'text-indigo-400' },
          { label: 'Active', value: stats.active, color: 'text-emerald-400' },
          { label: 'Admins', value: stats.admins, color: 'text-red-400' },
          { label: 'Pending', value: stats.pending, color: 'text-amber-400' },
        ].map((s, i) => (
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

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`rounded-2xl p-4 border ${cardBg}`}
      >
        <div className="flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-48">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${textSecondary}`} />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search users..."
              className={`w-full pl-9 pr-4 py-2 rounded-xl border text-sm outline-none transition-all ${inputBg}`}
            />
          </div>
          <div className="relative">
            <select
              value={roleFilter}
              onChange={e => setRoleFilter(e.target.value)}
              className={`appearance-none pl-3 pr-8 py-2 rounded-xl border text-sm outline-none transition-all cursor-pointer ${inputBg}`}
            >
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="analyst">Analyst</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>
            <ChevronDown className={`absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none ${textSecondary}`} />
          </div>
          <div className="relative">
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className={`appearance-none pl-3 pr-8 py-2 rounded-xl border text-sm outline-none transition-all cursor-pointer ${inputBg}`}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
            <ChevronDown className={`absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none ${textSecondary}`} />
          </div>
          <button className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm transition-colors
            ${isDark ? 'border-white/8 text-white/50 hover:text-white hover:bg-white/5' : 'border-black/8 text-gray-500 hover:text-gray-700 hover:bg-black/5'}`}>
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`rounded-2xl border overflow-hidden ${cardBg}`}
      >
        {loading ? (
          <div className="p-4">
            <SkeletonTable rows={6} />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b text-left ${isDark ? 'border-white/6' : 'border-black/6'}`}>
                  {['User', 'Role', 'Status', 'Region', 'Last Active', 'Permissions', ''].map((h, i) => (
                    <th key={i} className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider ${textSecondary}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {filtered.map((user, i) => (
                    <UserRow key={user.id} user={user} index={i} isDark={isDark} />
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className={`py-16 text-center ${textSecondary}`}>
                <UsersIcon className="w-12 h-12 mx-auto mb-3 opacity-20" />
                <p className="text-sm">No users match your filters.</p>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
