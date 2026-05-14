import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis,
  Radar, PieChart, Pie, Cell, BarChart, Bar, Legend
} from 'recharts';
import { TrendingUp, Activity, Cpu, Database, Zap, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { mockAnalytics, mockRegionData, mockSeverityData } from '../data/mockData';
import { SkeletonChart } from '../components/ui/SkeletonLoader';

const radarData = [
  { subject: 'API Perf.', value: 92 },
  { subject: 'GIS Data', value: 78 },
  { subject: 'User Eng.', value: 85 },
  { subject: 'Security', value: 96 },
  { subject: 'Uptime', value: 99 },
  { subject: 'Cache Hit', value: 88 },
];

const heatmapData = [
  { hour: '0-4h', Mon: 12, Tue: 8, Wed: 15, Thu: 10, Fri: 7, Sat: 3, Sun: 2 },
  { hour: '4-8h', Mon: 28, Tue: 32, Wed: 25, Thu: 30, Fri: 22, Sat: 8, Sun: 5 },
  { hour: '8-12h', Mon: 85, Tue: 92, Wed: 88, Thu: 95, Fri: 80, Sat: 25, Sun: 18 },
  { hour: '12-16h', Mon: 120, Tue: 115, Wed: 130, Thu: 108, Fri: 95, Sat: 42, Sun: 35 },
  { hour: '16-20h', Mon: 95, Tue: 102, Wed: 88, Thu: 90, Fri: 75, Sat: 55, Sun: 48 },
  { hour: '20-24h', Mon: 45, Tue: 38, Wed: 42, Thu: 35, Fri: 60, Sat: 72, Sun: 65 },
];

const CustomTooltip = ({ active, payload, label, isDark }: {
  active?: boolean; payload?: Array<{ color: string; name: string; value: number }>;
  label?: string; isDark: boolean;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className={`rounded-xl p-3 border shadow-xl text-xs
        ${isDark ? 'bg-[#1a1a2e] border-white/10' : 'bg-white border-black/10'}`}>
        <p className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color }}>{p.name}: <strong>{p.value.toLocaleString()}</strong></p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Analytics() {
  const { isDark } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-white/50' : 'text-gray-500';
  const cardBg = isDark ? 'glass border-white/6' : 'glass-light border-black/6';
  const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
  const tickColor = isDark ? 'rgba(255,255,255,0.3)' : '#9ca3af';

  const performanceStats = [
    { label: 'Avg Response', value: '42ms', delta: '-8ms', good: true, icon: Zap },
    { label: 'Cache Hit Rate', value: '88%', delta: '+3%', good: true, icon: Cpu },
    { label: 'DB Queries/s', value: '2.4K', delta: '+200', good: true, icon: Database },
    { label: 'Active Sessions', value: '1,247', delta: '+89', good: true, icon: Activity },
    { label: 'Error Rate', value: '0.03%', delta: '-0.01%', good: true, icon: TrendingUp },
    { label: 'Regions Active', value: '4/4', delta: '100%', good: true, icon: Globe },
  ];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className={`font-display text-2xl font-bold ${textPrimary}`}>Analytics Dashboard</h2>
        <p className={`text-sm mt-0.5 ${textSecondary}`}>Real-time system performance & usage intelligence</p>
      </motion.div>

      {/* Performance KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {performanceStats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl p-4 border text-center card-hover ${cardBg}`}
            >
              <Icon className={`w-5 h-5 mx-auto mb-2 text-indigo-400`} />
              <p className={`text-xl font-bold ${textPrimary}`}>{stat.value}</p>
              <p className={`text-xs mt-0.5 ${textSecondary}`}>{stat.label}</p>
              <p className={`text-xs mt-1 font-medium ${stat.good ? 'text-emerald-400' : 'text-red-400'}`}>
                {stat.delta}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Main charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Area chart */}
        {loading ? <div className="lg:col-span-2"><SkeletonChart /></div> : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`lg:col-span-2 rounded-2xl p-6 border ${cardBg}`}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className={`font-semibold ${textPrimary}`}>Platform Traffic</h3>
                <p className={`text-xs mt-0.5 ${textSecondary}`}>January 2025 · Daily metrics</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-emerald-500/15 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                ↑ 23% vs last month
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={mockAnalytics}>
                <defs>
                  <linearGradient id="aApi" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="aGis" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis dataKey="date" tick={{ fill: tickColor, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: tickColor, fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip isDark={isDark} />} />
                <Legend />
                <Area type="monotone" dataKey="apiCalls" name="API Calls" stroke="#6366f1" strokeWidth={2.5} fill="url(#aApi)" />
                <Area type="monotone" dataKey="gisEvents" name="GIS Events" stroke="#10b981" strokeWidth={2.5} fill="url(#aGis)" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        )}

        {/* Radar */}
        {loading ? <SkeletonChart /> : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`rounded-2xl p-6 border ${cardBg}`}
          >
            <h3 className={`font-semibold mb-1 ${textPrimary}`}>System Health</h3>
            <p className={`text-xs mb-4 ${textSecondary}`}>Composite performance score</p>
            <ResponsiveContainer width="100%" height={200}>
              <RadarChart data={radarData}>
                <PolarGrid stroke={isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'} />
                <PolarAngleAxis dataKey="subject" tick={{ fill: tickColor, fontSize: 10 }} />
                <Radar name="Score" dataKey="value" stroke="#6366f1" fill="#6366f1" fillOpacity={0.25} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
            <div className={`mt-3 p-3 rounded-xl text-center ${isDark ? 'bg-indigo-500/10' : 'bg-indigo-50'}`}>
              <p className="text-2xl font-bold text-indigo-400">
                {Math.round(radarData.reduce((a, b) => a + b.value, 0) / radarData.length)}
                <span className="text-sm font-normal text-indigo-400/60">/100</span>
              </p>
              <p className={`text-xs mt-0.5 ${textSecondary}`}>Overall Score</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Region distribution */}
        {loading ? <SkeletonChart /> : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`rounded-2xl p-6 border ${cardBg}`}
          >
            <h3 className={`font-semibold mb-1 ${textPrimary}`}>User Distribution by Region</h3>
            <p className={`text-xs mb-4 ${textSecondary}`}>Percentage breakdown across all regions</p>
            <div className="flex items-center gap-6">
              <ResponsiveContainer width="50%" height={160}>
                <PieChart>
                  <Pie data={mockRegionData} cx="50%" cy="50%" innerRadius={40} outerRadius={70}
                    dataKey="value" paddingAngle={3} startAngle={90} endAngle={-270}>
                    {mockRegionData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip isDark={isDark} />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1 space-y-2">
                {mockRegionData.map(r => (
                  <div key={r.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: r.color }} />
                        <span className={`text-xs ${textSecondary}`}>{r.name}</span>
                      </div>
                      <span className={`text-xs font-bold`} style={{ color: r.color }}>{r.value}%</span>
                    </div>
                    <div className={`h-1 rounded-full ${isDark ? 'bg-white/8' : 'bg-black/8'}`}>
                      <div className="h-full rounded-full" style={{ width: `${r.value}%`, background: r.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Heatmap-style bar chart */}
        {loading ? <SkeletonChart /> : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className={`rounded-2xl p-6 border ${cardBg}`}
          >
            <h3 className={`font-semibold mb-1 ${textPrimary}`}>Weekly Activity Heatmap</h3>
            <p className={`text-xs mb-4 ${textSecondary}`}>API request volume by time block</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={heatmapData} barSize={10}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis dataKey="hour" tick={{ fill: tickColor, fontSize: 9 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: tickColor, fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip isDark={isDark} />} />
                <Bar dataKey="Mon" name="Mon" fill="#6366f1" radius={[2, 2, 0, 0]} />
                <Bar dataKey="Wed" name="Wed" fill="#8b5cf6" radius={[2, 2, 0, 0]} />
                <Bar dataKey="Fri" name="Fri" fill="#06b6d4" radius={[2, 2, 0, 0]} />
                <Bar dataKey="Sat" name="Sat" fill="#10b981" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        )}
      </div>

      {/* GIS severity distribution */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={`rounded-2xl p-6 border ${cardBg}`}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className={`font-semibold ${textPrimary}`}>GIS Location Severity Distribution</h3>
              <p className={`text-xs mt-0.5 ${textSecondary}`}>Risk levels across all monitored locations</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {mockSeverityData.map(s => (
              <div key={s.name} className="text-center">
                <div className={`rounded-xl p-4 mb-3`} style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}>
                  <p className="text-3xl font-bold" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-xs mt-1" style={{ color: s.color, opacity: 0.7 }}>locations</p>
                </div>
                <p className={`text-sm font-semibold ${textPrimary}`}>{s.name}</p>
                <p className={`text-xs mt-0.5 ${textSecondary}`}>severity</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
