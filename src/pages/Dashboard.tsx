import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import {
  Users, MapPin, Zap, AlertTriangle,
  TrendingUp, TrendingDown, Activity, ArrowUpRight,
  List, BookOpen, Server
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import {
  mockStats, mockAnalytics, mockRegionData, mockSeverityData,
  mockUsers, mockGisLocations
} from '../data/mockData';
import { SkeletonStat, SkeletonChart } from '../components/ui/SkeletonLoader';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import LiveFeed from '../components/ui/LiveFeed';
import StatRing from '../components/ui/StatRing';

// ── Custom Tooltip ────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label, isDark }: {
  active?: boolean;
  payload?: Array<{ color: string; name: string; value: number }>;
  label?: string;
  isDark: boolean;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className={`rounded-xl p-3 border shadow-2xl text-xs
        ${isDark ? 'bg-[#1a1a2e] border-white/10' : 'bg-white border-black/10'}`}>
        <p className={`font-semibold mb-1.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>{label}</p>
        {payload.map((p, i) => (
          <p key={i} className="mb-0.5" style={{ color: p.color }}>
            {p.name}: <strong>{p.value.toLocaleString()}</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// ── Stat Card ─────────────────────────────────────────────────
function StatCard({
  icon: Icon, label, value, delta, deltaPositive, color, delay, suffix
}: {
  icon: React.ElementType; label: string; value: string | number;
  delta?: string; deltaPositive?: boolean; color: string; delay: number; suffix?: string;
}) {
  const { isDark } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.07, type: 'spring', stiffness: 300, damping: 24 }}
      className={`relative rounded-2xl p-5 border overflow-hidden card-hover cursor-default
        ${isDark ? 'glass border-white/6' : 'glass-light border-black/6'}`}
    >
      {/* Glow blob */}
      <div className={`absolute -top-8 -right-8 w-28 h-28 rounded-full blur-2xl opacity-15 ${color}`} />

      <div className="flex items-start justify-between relative z-10">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-wider mb-3
            ${isDark ? 'text-white/35' : 'text-gray-400'}`}>
            {label}
          </p>
          <p className={`text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {value}{suffix && <span className="text-lg ml-0.5 font-normal opacity-60">{suffix}</span>}
          </p>
          {delta && (
            <div className={`flex items-center gap-1 mt-2 text-xs font-medium
              ${deltaPositive ? 'text-emerald-400' : 'text-red-400'}`}>
              {deltaPositive
                ? <TrendingUp className="w-3 h-3" />
                : <TrendingDown className="w-3 h-3" />}
              {delta}
            </div>
          )}
        </div>
        <div className={`p-2.5 rounded-xl opacity-80 ${color.replace('bg-', 'bg-').replace('-500', '-500/15')}`}>
          <Icon className={`w-5 h-5 ${color.replace('bg-', 'text-')}`} />
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
export default function Dashboard() {
  const { isDark } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  const textPrimary  = isDark ? 'text-white'      : 'text-gray-900';
  const textSec      = isDark ? 'text-white/50'   : 'text-gray-500';
  const cardBg       = isDark ? 'glass border-white/6' : 'glass-light border-black/6';
  const gridColor    = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
  const tickColor    = isDark ? 'rgba(255,255,255,0.3)'  : '#9ca3af';

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">

      {/* ── Hero Banner ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="relative rounded-3xl overflow-hidden min-h-[160px]"
      >
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 animate-gradient" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Particle canvas */}
        <AnimatedBackground />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-8 py-7 flex items-center justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="text-indigo-200 text-sm font-medium mb-1 flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse inline-block" />
              Good morning, Aria · All systems operational
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-3xl md:text-4xl font-bold text-white leading-tight"
            >
              GeoNexus Command Center
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-indigo-200/70 text-sm mt-1.5"
            >
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
              })}
            </motion.p>
          </div>

          {/* Quick KPIs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45 }}
            className="hidden md:flex items-center gap-4"
          >
            {[
              { label: 'Uptime', value: '99.97%', color: '#10b981' },
              { label: 'Alerts', value: '59', color: '#f59e0b' },
              { label: 'Req/day', value: '21K', color: '#6366f1' },
            ].map(k => (
              <div key={k.label}
                className="text-center bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-5 py-3">
                <p className="text-2xl font-bold text-white" style={{ textShadow: `0 0 20px ${k.color}` }}>
                  {k.value}
                </p>
                <p className="text-indigo-200/60 text-xs mt-0.5">{k.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── Stats Grid ────────────────────────────────────────── */}
      {loading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => <SkeletonStat key={i} />)}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={Users}         label="Total Users"       value={mockStats.totalUsers.toLocaleString()}             delta="+12% this month"    deltaPositive color="bg-blue-500"    delay={0} />
          <StatCard icon={MapPin}        label="Active Locations"  value={mockStats.activeLocations}                         delta="+2 this week"       deltaPositive color="bg-emerald-500" delay={1} />
          <StatCard icon={Zap}           label="API Calls Today"   value={(mockStats.apiCallsToday / 1000).toFixed(0)} suffix="K" delta="+18% vs yesterday" deltaPositive color="bg-violet-500" delay={2} />
          <StatCard icon={AlertTriangle} label="Active Alerts"     value={mockStats.alertsActive}                            delta="3 critical"         deltaPositive={false} color="bg-red-500"     delay={3} />
          <StatCard icon={Activity}      label="Uptime"            value={`${mockStats.uptimePercent}%`}                     delta="Last 30 days"       deltaPositive color="bg-cyan-500"    delay={4} />
          <StatCard icon={Server}        label="Data Processed"    value={`${mockStats.dataProcessedGB}TB`}                  delta="This month"         deltaPositive color="bg-indigo-500" delay={5} />
          <StatCard icon={List}          label="Active Lists"      value={mockStats.listItems}                               delta="3 in progress"      deltaPositive color="bg-pink-500"   delay={6} />
          <StatCard icon={BookOpen}      label="Dict Entries"      value={mockStats.dictEntries}                             delta="System stable"      deltaPositive color="bg-amber-500"  delay={7} />
        </div>
      )}

      {/* ── Health Rings + Chart ──────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Area chart */}
        {loading
          ? <div className="lg:col-span-2"><SkeletonChart /></div>
          : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className={`lg:col-span-2 rounded-2xl p-6 border ${cardBg}`}
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className={`font-semibold ${textPrimary}`}>Activity Overview</h3>
                <p className={`text-xs mt-0.5 ${textSec}`}>API calls · GIS events · User sessions</p>
              </div>
              <div className="flex items-center gap-3">
                {[
                  { label: 'API', color: '#6366f1' },
                  { label: 'GIS', color: '#10b981' },
                  { label: 'Users', color: '#8b5cf6' },
                ].map(l => (
                  <div key={l.label} className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ background: l.color }} />
                    <span className={`text-xs ${textSec}`}>{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={210}>
              <AreaChart data={mockAnalytics} margin={{ left: -16 }}>
                <defs>
                  {[
                    { id: 'gApi',   color: '#6366f1' },
                    { id: 'gGis',   color: '#10b981' },
                    { id: 'gUsers', color: '#8b5cf6' },
                  ].map(g => (
                    <linearGradient key={g.id} id={g.id} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor={g.color} stopOpacity={0.35} />
                      <stop offset="95%" stopColor={g.color} stopOpacity={0}    />
                    </linearGradient>
                  ))}
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis dataKey="date" tick={{ fill: tickColor, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: tickColor, fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip isDark={isDark} />} />
                <Area type="monotone" dataKey="apiCalls"  name="API Calls"  stroke="#6366f1" strokeWidth={2.5} fill="url(#gApi)"   dot={false} activeDot={{ r: 5, fill: '#6366f1' }} />
                <Area type="monotone" dataKey="gisEvents" name="GIS Events" stroke="#10b981" strokeWidth={2.5} fill="url(#gGis)"   dot={false} activeDot={{ r: 5, fill: '#10b981' }} />
                <Area type="monotone" dataKey="users"     name="Users"      stroke="#8b5cf6" strokeWidth={2.5} fill="url(#gUsers)" dot={false} activeDot={{ r: 5, fill: '#8b5cf6' }} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        )}

        {/* System health rings */}
        {loading
          ? <SkeletonChart />
          : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`rounded-2xl p-6 border flex flex-col ${cardBg}`}
          >
            <h3 className={`font-semibold mb-1 ${textPrimary}`}>System Health</h3>
            <p className={`text-xs mb-5 ${textSec}`}>Live performance indicators</p>
            <div className="flex-1 grid grid-cols-2 gap-4 place-items-center">
              <StatRing value={99}  label="Uptime"    sublabel="30-day avg"   color="#10b981" size={88} />
              <StatRing value={88}  label="Cache Hit"  sublabel="Redis"        color="#6366f1" size={88} />
              <StatRing value={92}  label="API Health" sublabel="p99 < 200ms" color="#8b5cf6" size={88} />
              <StatRing value={73}  label="GIS Load"   sublabel="Sensor mesh"  color="#f59e0b" size={88} />
            </div>
          </motion.div>
        )}
      </div>

      {/* ── Bottom Row ────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Region pie */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className={`rounded-2xl p-6 border ${cardBg}`}
          >
            <h3 className={`font-semibold mb-1 ${textPrimary}`}>Users by Region</h3>
            <p className={`text-xs mb-4 ${textSec}`}>Distribution across all zones</p>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={mockRegionData}
                  cx="50%" cy="50%"
                  innerRadius={42} outerRadius={68}
                  dataKey="value" paddingAngle={4}
                  startAngle={90} endAngle={-270}
                >
                  {mockRegionData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip isDark={isDark} />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-2">
              {mockRegionData.map(r => (
                <div key={r.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: r.color }} />
                    <span className={`text-xs ${textSec}`}>{r.name}</span>
                  </div>
                  <span className="text-xs font-bold" style={{ color: r.color }}>{r.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Recent users */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className={`rounded-2xl p-6 border ${cardBg}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className={`font-semibold ${textPrimary}`}>Recent Users</h3>
                <p className={`text-xs ${textSec}`}>Latest activity</p>
              </div>
              <button className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                View all <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
            <div className="space-y-2">
              {mockUsers.slice(0, 5).map((user, i) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.72 + i * 0.06 }}
                  className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors cursor-pointer
                    ${isDark ? 'hover:bg-white/4' : 'hover:bg-black/3'}`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold
                    bg-gradient-to-br from-indigo-500 to-violet-500 flex-shrink-0`}>
                    {user.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-semibold truncate ${textPrimary}`}>{user.name}</p>
                    <p className={`text-xs truncate ${textSec}`}>{user.role} · {user.region}</p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0
                    ${user.status === 'active'  ? 'bg-emerald-500/12 text-emerald-400' :
                      user.status === 'pending' ? 'bg-amber-500/12 text-amber-400'   :
                                                  'bg-gray-500/12 text-gray-400'}`}>
                    {user.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Live event feed */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <LiveFeed />
          </motion.div>
        )}
      </div>

      {/* ── GIS Alert Bar Chart ───────────────────────────────── */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className={`rounded-2xl p-6 border ${cardBg}`}
        >
          <div className="flex items-start justify-between mb-5">
            <div>
              <h3 className={`font-semibold ${textPrimary}`}>GIS Severity Distribution</h3>
              <p className={`text-xs mt-0.5 ${textSec}`}>Risk classification across all monitored locations</p>
            </div>
            <div className="hidden md:flex items-center gap-3">
              {mockGisLocations.filter(l => l.severity !== 'low').slice(0, 3).map(loc => (
                <div key={loc.id}
                  className={`text-xs px-3 py-1.5 rounded-full border font-medium
                    ${loc.severity === 'critical' ? 'border-red-500/30 bg-red-500/10 text-red-400' :
                      loc.severity === 'high'     ? 'border-orange-500/30 bg-orange-500/10 text-orange-400' :
                                                    'border-amber-500/30 bg-amber-500/10 text-amber-400'}`}>
                  ⚡ {loc.name.split(' ')[0]}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {mockSeverityData.map(s => (
              <div key={s.name}
                className="text-center p-4 rounded-xl border"
                style={{ borderColor: `${s.color}30`, background: `${s.color}08` }}
              >
                <p className="text-3xl font-bold" style={{ color: s.color }}>{s.value}</p>
                <p className={`text-xs mt-1.5 font-semibold ${textPrimary}`}>{s.name}</p>
                <div className={`h-1 rounded-full mt-2 ${isDark ? 'bg-white/8' : 'bg-black/8'}`}>
                  <div className="h-full rounded-full" style={{ width: `${s.value}%`, background: s.color }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

    </div>
  );
}
