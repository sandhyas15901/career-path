import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User, Shield, Bell, Globe,
  Palette, Save, Eye, EyeOff, Check, Zap
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ToggleProps { checked: boolean; onChange: (v: boolean) => void; }
function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0 ${checked ? 'bg-indigo-500' : 'bg-gray-600'}`}
    >
      <motion.div
        animate={{ x: checked ? 22 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
      />
    </button>
  );
}

function Section({ title, subtitle, icon: Icon, children, isDark }: {
  title: string; subtitle: string; icon: React.ElementType;
  children: React.ReactNode; isDark: boolean;
}) {
  return (
    <div className={`rounded-2xl border overflow-hidden ${isDark ? 'glass border-white/6' : 'glass-light border-black/6'}`}>
      <div className={`flex items-center gap-3 px-6 py-4 border-b ${isDark ? 'border-white/6 bg-white/2' : 'border-black/6 bg-black/1'}`}>
        <div className="w-8 h-8 rounded-xl bg-indigo-500/15 flex items-center justify-center">
          <Icon className="w-4 h-4 text-indigo-400" />
        </div>
        <div>
          <h3 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
          <p className={`text-xs ${isDark ? 'text-white/40' : 'text-gray-400'}`}>{subtitle}</p>
        </div>
      </div>
      <div className="p-6 space-y-5">{children}</div>
    </div>
  );
}

function Field({ label, description, isDark, children }: {
  label: string; description?: string; isDark: boolean; children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className={`text-sm font-medium ${isDark ? 'text-white/80' : 'text-gray-700'}`}>{label}</p>
        {description && <p className={`text-xs mt-0.5 ${isDark ? 'text-white/35' : 'text-gray-400'}`}>{description}</p>}
      </div>
      {children}
    </div>
  );
}

export default function Settings() {
  const { isDark, toggleTheme, theme } = useTheme();
  const [showApiKey, setShowApiKey] = useState(false);
  const [saved, setSaved] = useState(false);

  const [settings, setSettings] = useState({
    emailNotifs: true,
    pushNotifs: false,
    gisAlerts: true,
    weeklyReport: true,
    twoFactor: false,
    sessionTimeout: true,
    darkTiles: true,
    animationsEnabled: true,
    dataExport: true,
    cacheEnabled: true,
    language: 'en',
    timezone: 'UTC',
    mapDefault: 'dark',
    refreshInterval: '30',
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-white/40' : 'text-gray-400';
  const inputBg = isDark ? 'bg-white/4 border-white/8 text-white' : 'bg-black/3 border-black/8 text-gray-900';

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h2 className={`font-display text-2xl font-bold ${textPrimary}`}>Settings</h2>
          <p className={`text-sm mt-0.5 ${textSecondary}`}>Platform configuration & preferences</p>
        </div>
        <motion.button
          onClick={handleSave}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium shadow-lg transition-all
            ${saved
              ? 'bg-emerald-500 text-white shadow-emerald-500/25'
              : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/25'
            }`}
        >
          {saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
          {saved ? 'Saved!' : 'Save Changes'}
        </motion.button>
      </motion.div>

      {/* Profile */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
        <Section title="Profile" subtitle="Your personal account information" icon={User} isDark={isDark}>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xl font-bold">
              AN
            </div>
            <div>
              <p className={`font-semibold ${textPrimary}`}>Aria Nakamura</p>
              <p className={`text-sm ${textSecondary}`}>aria@geonexus.io · Admin</p>
              <button className="text-xs text-indigo-400 hover:text-indigo-300 mt-1 transition-colors">
                Change avatar
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Full Name', value: 'Aria Nakamura' },
              { label: 'Email', value: 'aria@geonexus.io' },
              { label: 'Region', value: 'APAC' },
              { label: 'Department', value: 'Platform Engineering' },
            ].map(f => (
              <div key={f.label}>
                <label className={`block text-xs font-medium mb-1.5 ${textSecondary}`}>{f.label}</label>
                <input defaultValue={f.value} className={`w-full px-3 py-2 rounded-xl border text-sm outline-none focus:border-indigo-500/50 transition-all ${inputBg}`} />
              </div>
            ))}
          </div>
        </Section>
      </motion.div>

      {/* Security */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Section title="Security & Auth" subtitle="Authentication and session management" icon={Shield} isDark={isDark}>
          <Field label="Two-Factor Authentication" description="Require TOTP on every login" isDark={isDark}>
            <Toggle checked={settings.twoFactor} onChange={v => setSettings(s => ({ ...s, twoFactor: v }))} />
          </Field>
          <Field label="Session Timeout" description="Auto-logout after 30 minutes of inactivity" isDark={isDark}>
            <Toggle checked={settings.sessionTimeout} onChange={v => setSettings(s => ({ ...s, sessionTimeout: v }))} />
          </Field>
          <Field label="API Key" description="Your personal API access token" isDark={isDark}>
            <div className="flex items-center gap-2">
              <div className={`font-mono text-xs px-3 py-2 rounded-xl border ${inputBg}`}>
                {showApiKey ? 'gnx_sk_live_8f3a9b2c1d4e5f6g7h8i9j0k' : '••••••••••••••••••••••••••••'}
              </div>
              <button onClick={() => setShowApiKey(s => !s)} className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/8 text-white/40' : 'hover:bg-black/8 text-gray-400'}`}>
                {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </Field>
        </Section>
      </motion.div>

      {/* Notifications */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
        <Section title="Notifications" subtitle="Configure alert preferences" icon={Bell} isDark={isDark}>
          <Field label="Email Notifications" description="Receive summary emails for critical events" isDark={isDark}>
            <Toggle checked={settings.emailNotifs} onChange={v => setSettings(s => ({ ...s, emailNotifs: v }))} />
          </Field>
          <Field label="GIS Alerts" description="Real-time alerts for high/critical location events" isDark={isDark}>
            <Toggle checked={settings.gisAlerts} onChange={v => setSettings(s => ({ ...s, gisAlerts: v }))} />
          </Field>
          <Field label="Weekly Report" description="Automated platform health digest every Monday" isDark={isDark}>
            <Toggle checked={settings.weeklyReport} onChange={v => setSettings(s => ({ ...s, weeklyReport: v }))} />
          </Field>
          <Field label="Push Notifications" description="Browser push alerts for urgent events" isDark={isDark}>
            <Toggle checked={settings.pushNotifs} onChange={v => setSettings(s => ({ ...s, pushNotifs: v }))} />
          </Field>
        </Section>
      </motion.div>

      {/* GIS & Map */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Section title="GIS & Map" subtitle="Geographic visualization preferences" icon={Globe} isDark={isDark}>
          <Field label="Dark Map Tiles" description="Use dark-themed basemap by default" isDark={isDark}>
            <Toggle checked={settings.darkTiles} onChange={v => setSettings(s => ({ ...s, darkTiles: v }))} />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={`block text-xs font-medium mb-1.5 ${textSecondary}`}>Default Map Style</label>
              <select value={settings.mapDefault} onChange={e => setSettings(s => ({ ...s, mapDefault: e.target.value }))}
                className={`w-full px-3 py-2 rounded-xl border text-sm outline-none cursor-pointer ${inputBg}`}>
                <option value="dark">Dark</option>
                <option value="satellite">Satellite</option>
                <option value="terrain">Terrain</option>
              </select>
            </div>
            <div>
              <label className={`block text-xs font-medium mb-1.5 ${textSecondary}`}>Refresh Interval (seconds)</label>
              <input type="number" value={settings.refreshInterval} min="10" max="300"
                onChange={e => setSettings(s => ({ ...s, refreshInterval: e.target.value }))}
                className={`w-full px-3 py-2 rounded-xl border text-sm outline-none ${inputBg}`} />
            </div>
          </div>
        </Section>
      </motion.div>

      {/* Appearance & Performance */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
        <Section title="Appearance & Performance" subtitle="UI theme and system behavior" icon={Palette} isDark={isDark}>
          <Field label="Dark Mode" description="Switch between dark and light interface theme" isDark={isDark}>
            <div className="flex items-center gap-3">
              <span className={`text-xs ${textSecondary}`}>{theme === 'dark' ? 'Dark' : 'Light'}</span>
              <Toggle checked={theme === 'dark'} onChange={() => toggleTheme()} />
            </div>
          </Field>
          <Field label="UI Animations" description="Enable smooth transitions and micro-interactions" isDark={isDark}>
            <Toggle checked={settings.animationsEnabled} onChange={v => setSettings(s => ({ ...s, animationsEnabled: v }))} />
          </Field>
          <Field label="Redis Cache" description="Enable server-side response caching" isDark={isDark}>
            <Toggle checked={settings.cacheEnabled} onChange={v => setSettings(s => ({ ...s, cacheEnabled: v }))} />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={`block text-xs font-medium mb-1.5 ${textSecondary}`}>Language</label>
              <select value={settings.language} onChange={e => setSettings(s => ({ ...s, language: e.target.value }))}
                className={`w-full px-3 py-2 rounded-xl border text-sm outline-none cursor-pointer ${inputBg}`}>
                <option value="en">English</option>
                <option value="ja">Japanese</option>
                <option value="de">German</option>
                <option value="pt">Portuguese</option>
              </select>
            </div>
            <div>
              <label className={`block text-xs font-medium mb-1.5 ${textSecondary}`}>Timezone</label>
              <select value={settings.timezone} onChange={e => setSettings(s => ({ ...s, timezone: e.target.value }))}
                className={`w-full px-3 py-2 rounded-xl border text-sm outline-none cursor-pointer ${inputBg}`}>
                <option value="UTC">UTC</option>
                <option value="America/New_York">Eastern (ET)</option>
                <option value="Asia/Tokyo">Tokyo (JST)</option>
                <option value="Europe/Berlin">Berlin (CET)</option>
              </select>
            </div>
          </div>
        </Section>
      </motion.div>

      {/* System info */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className={`rounded-2xl p-5 border ${isDark ? 'border-white/6 bg-white/2' : 'border-black/6 bg-black/1'}`}>
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-4 h-4 text-indigo-400" />
          <span className={`text-sm font-semibold ${textPrimary}`}>System Information</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Platform', value: 'GeoNexus v3.0' },
            { label: 'API Version', value: 'REST v2.1' },
            { label: 'Stack', value: 'React + Vite' },
            { label: 'Build', value: `#${Math.floor(Math.random() * 900 + 100)}` },
          ].map(i => (
            <div key={i.label} className={`rounded-xl p-3 ${isDark ? 'bg-white/4' : 'bg-black/4'}`}>
              <p className={`text-xs ${textSecondary}`}>{i.label}</p>
              <p className={`text-sm font-mono font-medium mt-0.5 ${textPrimary}`}>{i.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
