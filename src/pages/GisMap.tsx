import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, ChevronDown, X, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { mockGisLocations, GisLocation } from '../data/mockData';

// Custom marker icons by severity
function createIcon(severity: string) {
  const colors: Record<string, { bg: string; ring: string }> = {
    low: { bg: '#10b981', ring: '#10b98133' },
    medium: { bg: '#f59e0b', ring: '#f59e0b33' },
    high: { bg: '#ef4444', ring: '#ef444433' },
    critical: { bg: '#dc2626', ring: '#dc262633' },
  };
  const c = colors[severity] || colors.low;
  return L.divIcon({
    className: '',
    html: `
      <div style="position:relative;width:28px;height:28px;">
        <div style="
          position:absolute;inset:0;
          border-radius:50%;
          background:${c.ring};
          animation:pulse-ring 1.5s cubic-bezier(0.215,0.61,0.355,1) infinite;
        "></div>
        <div style="
          position:absolute;inset:4px;
          border-radius:50%;
          background:${c.bg};
          border:2px solid white;
          box-shadow:0 2px 8px ${c.ring};
        "></div>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -14],
  });
}

const typeIcons: Record<string, string> = {
  city: '🏙️', facility: '🏭', hazard: '⚠️', asset: '🔷', boundary: '🗺️'
};

const severityColors: Record<string, string> = {
  low: 'text-emerald-400 bg-emerald-500/12 border-emerald-500/20',
  medium: 'text-amber-400 bg-amber-500/12 border-amber-500/20',
  high: 'text-orange-400 bg-orange-500/12 border-orange-500/20',
  critical: 'text-red-400 bg-red-500/12 border-red-500/20',
};

function MapController({ center }: { center: [number, number] | null }) {
  const map = useMap();
  useEffect(() => {
    if (center) map.flyTo(center, 8, { duration: 1.5 });
  }, [center, map]);
  return null;
}

function DetailPanel({ location, onClose, isDark }: { location: GisLocation; onClose: () => void; isDark: boolean }) {
  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-white/50' : 'text-gray-400';
  const divider = isDark ? 'border-white/8' : 'border-black/8';

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      className={`absolute top-4 right-4 w-80 rounded-2xl border overflow-hidden shadow-2xl z-[1000]
        ${isDark ? 'bg-[#0f0f1a]/95 border-white/10' : 'bg-white/95 border-black/10'}`}
      style={{ backdropFilter: 'blur(20px)' }}
    >
      {/* Header */}
      <div className={`relative p-4 border-b ${divider}`}>
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-indigo-500 to-violet-600" />
        <div className="relative flex items-start justify-between gap-2">
          <div className="flex items-start gap-3">
            <span className="text-2xl">{typeIcons[location.type]}</span>
            <div>
              <h3 className={`font-semibold text-sm leading-tight ${textPrimary}`}>{location.name}</h3>
              <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 mt-1 rounded-full border font-medium ${severityColors[location.severity]}`}>
                {location.severity}
              </span>
            </div>
          </div>
          <button onClick={onClose} className={`p-1 rounded-lg transition-colors flex-shrink-0 ${isDark ? 'hover:bg-white/10 text-white/40' : 'hover:bg-black/10 text-gray-400'}`}>
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Coordinates */}
      <div className={`px-4 py-2 border-b ${divider} flex items-center gap-2`}>
        <MapPin className={`w-3.5 h-3.5 flex-shrink-0 text-indigo-400`} />
        <span className={`text-xs font-mono ${textSecondary}`}>
          {location.lat.toFixed(4)}°, {location.lng.toFixed(4)}°
        </span>
      </div>

      {/* Description */}
      <div className="px-4 py-3">
        <p className={`text-xs leading-relaxed ${textSecondary}`}>{location.description}</p>
      </div>

      {/* Metadata */}
      <div className={`px-4 pb-3 border-t ${divider}`}>
        <p className={`text-xs font-semibold uppercase tracking-wider my-3 ${textSecondary}`}>Metadata</p>
        <div className="space-y-1.5">
          {Object.entries(location.metadata).map(([key, val]) => (
            <div key={key} className="flex justify-between items-center">
              <span className={`text-xs capitalize ${textSecondary}`}>{key.replace(/_/g, ' ')}</span>
              <span className={`text-xs font-medium font-mono ${textPrimary}`}>{String(val)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Timestamps */}
      <div className={`px-4 py-3 border-t ${divider} space-y-1`}>
        <div className="flex justify-between">
          <span className={`text-xs ${textSecondary}`}>Created</span>
          <span className={`text-xs font-mono ${textSecondary}`}>{location.createdAt}</span>
        </div>
        <div className="flex justify-between">
          <span className={`text-xs ${textSecondary}`}>Updated</span>
          <span className={`text-xs font-mono text-indigo-400`}>{location.updatedAt}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function GisMap() {
  const { isDark } = useTheme();
  const [selectedLocation, setSelectedLocation] = useState<GisLocation | null>(null);
  const [flyToCenter, setFlyToCenter] = useState<[number, number] | null>(null);
  const [severityFilter, setSeverityFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [mapStyle, setMapStyle] = useState<'dark' | 'satellite' | 'terrain'>('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const filtered = mockGisLocations.filter(l => {
    const sev = severityFilter === 'all' || l.severity === severityFilter;
    const typ = typeFilter === 'all' || l.type === typeFilter;
    return sev && typ;
  });

  const tileUrls = {
    dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    terrain: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
  };

  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-white/40' : 'text-gray-400';
  const cardBg = isDark ? 'bg-[#0f0f1a]/90 border-white/10' : 'bg-white/90 border-black/10';
  const inputBg = isDark ? 'bg-white/5 border-white/8 text-white' : 'bg-black/3 border-black/8 text-gray-900';

  const severityCounts = {
    critical: mockGisLocations.filter(l => l.severity === 'critical').length,
    high: mockGisLocations.filter(l => l.severity === 'high').length,
    medium: mockGisLocations.filter(l => l.severity === 'medium').length,
    low: mockGisLocations.filter(l => l.severity === 'low').length,
  };

  return (
    <div className="flex flex-col h-[calc(100vh-73px)] overflow-hidden">
      {/* Top toolbar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`flex items-center gap-3 px-6 py-3 border-b flex-shrink-0 backdrop-blur-xl z-10
          ${isDark ? 'bg-[#0a0a0f]/80 border-white/6' : 'bg-white/80 border-black/6'}`}
      >
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-indigo-400" />
          <span className={`text-sm font-medium ${textPrimary}`}>{filtered.length} locations</span>
        </div>

        <div className="flex items-center gap-2 flex-1 flex-wrap">
          {/* Severity filter */}
          <div className="relative">
            <select value={severityFilter} onChange={e => setSeverityFilter(e.target.value)}
              className={`appearance-none pl-3 pr-7 py-1.5 rounded-lg border text-xs outline-none cursor-pointer ${inputBg}`}>
              <option value="all">All Severity</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <ChevronDown className={`absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none ${textSecondary}`} />
          </div>

          {/* Type filter */}
          <div className="relative">
            <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}
              className={`appearance-none pl-3 pr-7 py-1.5 rounded-lg border text-xs outline-none cursor-pointer ${inputBg}`}>
              <option value="all">All Types</option>
              <option value="city">City</option>
              <option value="facility">Facility</option>
              <option value="hazard">Hazard</option>
              <option value="asset">Asset</option>
              <option value="boundary">Boundary</option>
            </select>
            <ChevronDown className={`absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none ${textSecondary}`} />
          </div>

          {/* Map style */}
          <div className="flex rounded-lg border overflow-hidden" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
            {(['dark', 'satellite', 'terrain'] as const).map(style => (
              <button
                key={style}
                onClick={() => setMapStyle(style)}
                className={`px-3 py-1.5 text-xs font-medium capitalize transition-colors
                  ${mapStyle === style
                    ? 'bg-indigo-500 text-white'
                    : isDark ? 'bg-transparent text-white/40 hover:text-white hover:bg-white/5' : 'bg-transparent text-gray-400 hover:text-gray-700 hover:bg-black/5'
                  }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        {/* Severity badges */}
        <div className="hidden lg:flex items-center gap-2">
          {[
            { label: 'Critical', count: severityCounts.critical, color: 'text-red-400 bg-red-500/12' },
            { label: 'High', count: severityCounts.high, color: 'text-orange-400 bg-orange-500/12' },
            { label: 'Medium', count: severityCounts.medium, color: 'text-amber-400 bg-amber-500/12' },
            { label: 'Low', count: severityCounts.low, color: 'text-emerald-400 bg-emerald-500/12' },
          ].map(s => (
            <span key={s.label} className={`text-xs px-2 py-1 rounded-lg font-medium ${s.color}`}>
              {s.count} {s.label}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Map + List layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Location list */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className={`w-72 flex-shrink-0 border-r overflow-y-auto
            ${isDark ? 'border-white/6 bg-[#0a0a0f]' : 'border-black/6 bg-gray-50'}`}
        >
          <div className="p-3 space-y-1.5">
            {filtered.map((loc, i) => (
              <motion.button
                key={loc.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => {
                  setSelectedLocation(loc);
                  setFlyToCenter([loc.lat, loc.lng]);
                }}
                className={`w-full text-left p-3 rounded-xl border transition-all
                  ${selectedLocation?.id === loc.id
                    ? isDark ? 'bg-indigo-500/15 border-indigo-500/30' : 'bg-indigo-50 border-indigo-200'
                    : isDark ? 'border-white/5 hover:bg-white/4 hover:border-white/10' : 'border-black/5 hover:bg-white hover:border-black/10'
                  }`}
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-base flex-shrink-0 mt-0.5">{typeIcons[loc.type]}</span>
                  <div className="min-w-0">
                    <p className={`text-xs font-medium truncate ${textPrimary}`}>{loc.name}</p>
                    <p className={`text-xs truncate mt-0.5 ${textSecondary}`}>{loc.type} · {loc.lat.toFixed(2)}°, {loc.lng.toFixed(2)}°</p>
                    <span className={`inline-block mt-1.5 text-xs px-2 py-0.5 rounded-full font-medium ${severityColors[loc.severity]}`}>
                      {loc.severity}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Map */}
        <div className="flex-1 relative">
          {loading ? (
            <div className={`absolute inset-0 flex items-center justify-center ${isDark ? 'bg-[#0a0a0f]' : 'bg-gray-100'}`}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin mx-auto mb-4" />
                <p className={`text-sm ${textSecondary}`}>Loading map...</p>
              </div>
            </div>
          ) : (
            <MapContainer
              center={[20, 0]}
              zoom={2}
              style={{ height: '100%', width: '100%' }}
              zoomControl={true}
            >
              <TileLayer
                url={tileUrls[mapStyle]}
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              />
              <MapController center={flyToCenter} />
              {filtered.map(loc => (
                <Marker
                  key={loc.id}
                  position={[loc.lat, loc.lng]}
                  icon={createIcon(loc.severity)}
                  eventHandlers={{
                    click: () => {
                      setSelectedLocation(loc);
                      setFlyToCenter([loc.lat, loc.lng]);
                    }
                  }}
                >
                  <Popup>
                    <div style={{ minWidth: '160px' }}>
                      <p style={{ fontWeight: 700, fontSize: '13px', marginBottom: '4px' }}>{loc.name}</p>
                      <p style={{ fontSize: '11px', opacity: 0.7, marginBottom: '6px' }}>{loc.type}</p>
                      <span style={{
                        display: 'inline-block',
                        padding: '2px 8px',
                        borderRadius: '999px',
                        fontSize: '10px',
                        fontWeight: 600,
                        background: loc.severity === 'critical' ? '#dc262620' : loc.severity === 'high' ? '#ef444420' : loc.severity === 'medium' ? '#f59e0b20' : '#10b98120',
                        color: loc.severity === 'critical' ? '#dc2626' : loc.severity === 'high' ? '#ef4444' : loc.severity === 'medium' ? '#f59e0b' : '#10b981',
                      }}>
                        {loc.severity}
                      </span>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}

          {/* Detail panel */}
          <AnimatePresence>
            {selectedLocation && (
              <DetailPanel
                location={selectedLocation}
                onClose={() => setSelectedLocation(null)}
                isDark={isDark}
              />
            )}
          </AnimatePresence>

          {/* Map legend */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`absolute bottom-4 left-4 rounded-xl p-3 border text-xs z-[1000] ${cardBg}`}
            style={{ backdropFilter: 'blur(20px)' }}
          >
            <p className={`font-semibold mb-2 uppercase tracking-wider text-xs ${textSecondary}`}>Legend</p>
            {[
              { color: '#10b981', label: 'Low Risk' },
              { color: '#f59e0b', label: 'Medium Risk' },
              { color: '#ef4444', label: 'High Risk' },
              { color: '#dc2626', label: 'Critical' },
            ].map(l => (
              <div key={l.label} className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: l.color }} />
                <span className={textSecondary}>{l.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
