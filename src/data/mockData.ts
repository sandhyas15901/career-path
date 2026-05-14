// ============================================================
// MOCK DATA STORE — Simulates backend API responses
// Covers: users, lists, gis locations, dict entries, analytics
// ============================================================

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer' | 'analyst';
  avatar: string;
  status: 'active' | 'inactive' | 'pending';
  region: string;
  joinedAt: string;
  lastActive: string;
  permissions: string[];
}

export interface GisLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: 'city' | 'facility' | 'hazard' | 'asset' | 'boundary';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  metadata: Record<string, string | number>;
  createdAt: string;
  updatedAt: string;
}

export interface ListItem {
  id: string;
  title: string;
  category: string;
  status: 'active' | 'archived' | 'draft' | 'published';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo: string;
  tags: string[];
  progress: number;
  dueDate: string;
  createdAt: string;
}

export interface DictEntry {
  id: string;
  key: string;
  value: string;
  type: 'string' | 'number' | 'boolean' | 'json' | 'enum';
  namespace: string;
  description: string;
  usageCount: number;
  lastModified: string;
  isSystem: boolean;
}

export interface AnalyticsData {
  date: string;
  users: number;
  gisEvents: number;
  apiCalls: number;
  listItems: number;
}

// ─── USERS ────────────────────────────────────────────────────
export const mockUsers: User[] = [
  { id: 'u1', name: 'Aria Nakamura', email: 'aria@geonexus.io', role: 'admin', avatar: 'AN', status: 'active', region: 'APAC', joinedAt: '2023-01-15', lastActive: '2025-01-20', permissions: ['all'] },
  { id: 'u2', name: 'Marcus Osei', email: 'marcus@geonexus.io', role: 'analyst', avatar: 'MO', status: 'active', region: 'EMEA', joinedAt: '2023-03-08', lastActive: '2025-01-19', permissions: ['read', 'analyze'] },
  { id: 'u3', name: 'Sofia Reyes', email: 'sofia@geonexus.io', role: 'editor', avatar: 'SR', status: 'active', region: 'LATAM', joinedAt: '2023-06-22', lastActive: '2025-01-18', permissions: ['read', 'write'] },
  { id: 'u4', name: 'Liam Johansson', email: 'liam@geonexus.io', role: 'viewer', avatar: 'LJ', status: 'pending', region: 'NAM', joinedAt: '2024-11-01', lastActive: '2025-01-10', permissions: ['read'] },
  { id: 'u5', name: 'Yuki Tanaka', email: 'yuki@geonexus.io', role: 'analyst', avatar: 'YT', status: 'active', region: 'APAC', joinedAt: '2023-09-14', lastActive: '2025-01-20', permissions: ['read', 'analyze', 'export'] },
  { id: 'u6', name: 'Ethan Müller', email: 'ethan@geonexus.io', role: 'editor', avatar: 'EM', status: 'inactive', region: 'EMEA', joinedAt: '2022-12-05', lastActive: '2024-09-30', permissions: ['read', 'write'] },
  { id: 'u7', name: 'Priya Sharma', email: 'priya@geonexus.io', role: 'admin', avatar: 'PS', status: 'active', region: 'APAC', joinedAt: '2022-08-19', lastActive: '2025-01-20', permissions: ['all'] },
  { id: 'u8', name: 'Noah Williams', email: 'noah@geonexus.io', role: 'viewer', avatar: 'NW', status: 'active', region: 'NAM', joinedAt: '2024-07-03', lastActive: '2025-01-15', permissions: ['read'] },
];

// ─── GIS LOCATIONS ────────────────────────────────────────────
export const mockGisLocations: GisLocation[] = [
  { id: 'g1', name: 'Tokyo Operations Hub', lat: 35.6762, lng: 139.6503, type: 'facility', severity: 'low', description: 'Primary operations center for APAC region. 24/7 monitoring capability.', metadata: { capacity: 2400, staff: 180, uptime: '99.97%' }, createdAt: '2023-02-10', updatedAt: '2025-01-15' },
  { id: 'g2', name: 'London Data Center', lat: 51.5074, lng: -0.1278, type: 'asset', severity: 'medium', description: 'European primary data center. Redundant fiber connections across 6 ISPs.', metadata: { servers: 1200, pue: 1.18, tier: 'IV' }, createdAt: '2023-01-05', updatedAt: '2025-01-18' },
  { id: 'g3', name: 'São Paulo Sensor Array', lat: -23.5505, lng: -46.6333, type: 'hazard', severity: 'high', description: 'Environmental monitoring cluster. Active flood detection sensors deployed.', metadata: { sensors: 340, alerts: 12, area_km2: 1521 }, createdAt: '2023-07-22', updatedAt: '2025-01-19' },
  { id: 'g4', name: 'New York Command', lat: 40.7128, lng: -74.0060, type: 'city', severity: 'low', description: 'North American HQ and strategic command center for NAM operations.', metadata: { population: 8336817, density: 10194, gdp_b: 1.8 }, createdAt: '2022-11-30', updatedAt: '2025-01-10' },
  { id: 'g5', name: 'Nairobi Field Station', lat: -1.2921, lng: 36.8219, type: 'facility', severity: 'medium', description: 'East Africa field monitoring station. Solar-powered with satellite uplink.', metadata: { coverage_km: 450, solar_kw: 120, staff: 24 }, createdAt: '2024-03-15', updatedAt: '2025-01-05' },
  { id: 'g6', name: 'Sydney Gateway Node', lat: -33.8688, lng: 151.2093, type: 'asset', severity: 'low', description: 'Pacific basin network gateway. Submarine cable landing point.', metadata: { bandwidth_gbps: 400, latency_ms: 2.1, cables: 3 }, createdAt: '2023-05-08', updatedAt: '2025-01-20' },
  { id: 'g7', name: 'Mumbai Critical Zone', lat: 19.0760, lng: 72.8777, type: 'hazard', severity: 'critical', description: 'High-density urban monitoring. Active seismic and weather event tracking.', metadata: { alerts: 47, risk_score: 8.7, monitored_area: 603 }, createdAt: '2024-01-12', updatedAt: '2025-01-20' },
  { id: 'g8', name: 'Berlin Analytics Node', lat: 52.5200, lng: 13.4050, type: 'asset', severity: 'low', description: 'European analytics processing hub. GDPR-compliant data lake infrastructure.', metadata: { storage_pb: 4.2, compliance: 'GDPR', throughput_gbps: 80 }, createdAt: '2023-08-20', updatedAt: '2025-01-17' },
  { id: 'g9', name: 'Arctic Boundary Zone', lat: 78.2232, lng: 15.6267, type: 'boundary', severity: 'medium', description: 'Arctic monitoring perimeter. Climate data collection for global models.', metadata: { temp_c: -24, ice_coverage: '73%', stations: 8 }, createdAt: '2024-06-01', updatedAt: '2025-01-12' },
  { id: 'g10', name: 'Dubai Smart City Hub', lat: 25.2048, lng: 55.2708, type: 'city', severity: 'low', description: 'Smart city integration point. Real-time urban analytics and IoT mesh.', metadata: { iot_devices: 12400, data_points_day: 8200000, ai_models: 34 }, createdAt: '2023-10-05', updatedAt: '2025-01-16' },
];

// ─── LIST ITEMS ────────────────────────────────────────────────
export const mockListItems: ListItem[] = [
  { id: 'l1', title: 'Deploy APAC sensor mesh v3.2', category: 'Infrastructure', status: 'active', priority: 'urgent', assignedTo: 'Aria Nakamura', tags: ['sensor', 'apac', 'iot'], progress: 78, dueDate: '2025-02-01', createdAt: '2025-01-05' },
  { id: 'l2', title: 'GIS data pipeline optimization', category: 'Engineering', status: 'active', priority: 'high', assignedTo: 'Marcus Osei', tags: ['gis', 'performance', 'pipeline'], progress: 45, dueDate: '2025-02-15', createdAt: '2025-01-08' },
  { id: 'l3', title: 'User authentication v2 — JWT migration', category: 'Security', status: 'published', priority: 'high', assignedTo: 'Priya Sharma', tags: ['auth', 'jwt', 'security'], progress: 100, dueDate: '2025-01-18', createdAt: '2024-12-20' },
  { id: 'l4', title: 'Q1 Analytics Dashboard Report', category: 'Analytics', status: 'draft', priority: 'medium', assignedTo: 'Yuki Tanaka', tags: ['analytics', 'report', 'q1'], progress: 30, dueDate: '2025-03-31', createdAt: '2025-01-10' },
  { id: 'l5', title: 'Nairobi field station calibration', category: 'Operations', status: 'active', priority: 'high', assignedTo: 'Sofia Reyes', tags: ['field', 'nairobi', 'calibration'], progress: 60, dueDate: '2025-01-28', createdAt: '2025-01-12' },
  { id: 'l6', title: 'Arctic boundary data validation', category: 'Data', status: 'active', priority: 'medium', assignedTo: 'Liam Johansson', tags: ['arctic', 'validation', 'data'], progress: 25, dueDate: '2025-02-20', createdAt: '2025-01-14' },
  { id: 'l7', title: 'GDPR compliance audit — EU nodes', category: 'Compliance', status: 'archived', priority: 'urgent', assignedTo: 'Ethan Müller', tags: ['gdpr', 'compliance', 'eu'], progress: 100, dueDate: '2024-12-31', createdAt: '2024-11-01' },
  { id: 'l8', title: 'Mumbai seismic alert system upgrade', category: 'Infrastructure', status: 'active', priority: 'urgent', assignedTo: 'Priya Sharma', tags: ['seismic', 'alert', 'mumbai'], progress: 88, dueDate: '2025-01-25', createdAt: '2025-01-15' },
  { id: 'l9', title: 'Real-time WebSocket dashboard integration', category: 'Engineering', status: 'draft', priority: 'medium', assignedTo: 'Marcus Osei', tags: ['websocket', 'realtime', 'dashboard'], progress: 15, dueDate: '2025-03-01', createdAt: '2025-01-17' },
  { id: 'l10', title: 'Dubai IoT mesh firmware rollout', category: 'Operations', status: 'published', priority: 'low', assignedTo: 'Noah Williams', tags: ['iot', 'dubai', 'firmware'], progress: 100, dueDate: '2025-01-10', createdAt: '2024-12-15' },
  { id: 'l11', title: 'São Paulo flood sensor data export', category: 'Data', status: 'active', priority: 'high', assignedTo: 'Sofia Reyes', tags: ['flood', 'export', 'brasil'], progress: 55, dueDate: '2025-02-05', createdAt: '2025-01-09' },
  { id: 'l12', title: 'Berlin node GDPR data anonymization', category: 'Compliance', status: 'active', priority: 'medium', assignedTo: 'Ethan Müller', tags: ['berlin', 'gdpr', 'anonymize'], progress: 70, dueDate: '2025-02-28', createdAt: '2025-01-11' },
];

// ─── DICTIONARY ENTRIES ────────────────────────────────────────
export const mockDictEntries: DictEntry[] = [
  { id: 'd1', key: 'GIS_REFRESH_INTERVAL', value: '30000', type: 'number', namespace: 'gis.config', description: 'Map refresh interval in milliseconds', usageCount: 2847, lastModified: '2025-01-15', isSystem: true },
  { id: 'd2', key: 'MAX_CONCURRENT_USERS', value: '5000', type: 'number', namespace: 'system.limits', description: 'Maximum concurrent WebSocket connections', usageCount: 1, lastModified: '2025-01-10', isSystem: true },
  { id: 'd3', key: 'DEFAULT_MAP_CENTER', value: '{"lat":20,"lng":0}', type: 'json', namespace: 'gis.defaults', description: 'Default map center coordinates', usageCount: 412, lastModified: '2024-12-20', isSystem: false },
  { id: 'd4', key: 'SEVERITY_LEVELS', value: 'low,medium,high,critical', type: 'enum', namespace: 'gis.taxonomy', description: 'Ordered severity classification levels', usageCount: 8934, lastModified: '2024-11-05', isSystem: true },
  { id: 'd5', key: 'API_RATE_LIMIT', value: '1000', type: 'number', namespace: 'api.config', description: 'API rate limit per user per hour', usageCount: 2, lastModified: '2025-01-18', isSystem: true },
  { id: 'd6', key: 'ENABLE_DARK_TILES', value: 'true', type: 'boolean', namespace: 'gis.ui', description: 'Use dark map tile provider by default', usageCount: 1204, lastModified: '2025-01-01', isSystem: false },
  { id: 'd7', key: 'EXPORT_FORMATS', value: 'csv,pdf,geojson,shapefile', type: 'enum', namespace: 'export.config', description: 'Supported export file formats', usageCount: 567, lastModified: '2024-10-14', isSystem: false },
  { id: 'd8', key: 'RBAC_ROLES', value: 'admin,analyst,editor,viewer', type: 'enum', namespace: 'auth.config', description: 'Role-Based Access Control role definitions', usageCount: 3201, lastModified: '2024-09-22', isSystem: true },
  { id: 'd9', key: 'CACHE_TTL_SECONDS', value: '300', type: 'number', namespace: 'system.cache', description: 'Default Redis cache TTL in seconds', usageCount: 945, lastModified: '2025-01-08', isSystem: true },
  { id: 'd10', key: 'FUZZY_SEARCH_THRESHOLD', value: '0.3', type: 'number', namespace: 'search.config', description: 'Fuse.js threshold for command palette fuzzy matching', usageCount: 78, lastModified: '2025-01-12', isSystem: false },
  { id: 'd11', key: 'GIS_CLUSTER_RADIUS', value: '60', type: 'number', namespace: 'gis.config', description: 'Marker cluster radius in pixels', usageCount: 334, lastModified: '2024-12-18', isSystem: false },
  { id: 'd12', key: 'TIMEZONE_DEFAULT', value: 'UTC', type: 'string', namespace: 'system.locale', description: 'Default system timezone for all timestamps', usageCount: 5612, lastModified: '2024-08-30', isSystem: true },
];

// ─── ANALYTICS ────────────────────────────────────────────────
export const mockAnalytics: AnalyticsData[] = [
  { date: 'Jan 1', users: 320, gisEvents: 1200, apiCalls: 8400, listItems: 45 },
  { date: 'Jan 3', users: 380, gisEvents: 1450, apiCalls: 9200, listItems: 52 },
  { date: 'Jan 5', users: 410, gisEvents: 1800, apiCalls: 11000, listItems: 60 },
  { date: 'Jan 7', users: 395, gisEvents: 1650, apiCalls: 10200, listItems: 58 },
  { date: 'Jan 9', users: 460, gisEvents: 2100, apiCalls: 13500, listItems: 71 },
  { date: 'Jan 11', users: 510, gisEvents: 2400, apiCalls: 15200, listItems: 85 },
  { date: 'Jan 13', users: 490, gisEvents: 2250, apiCalls: 14800, listItems: 79 },
  { date: 'Jan 15', users: 550, gisEvents: 2800, apiCalls: 17600, listItems: 92 },
  { date: 'Jan 17', users: 620, gisEvents: 3100, apiCalls: 19400, listItems: 108 },
  { date: 'Jan 19', users: 590, gisEvents: 2900, apiCalls: 18200, listItems: 101 },
  { date: 'Jan 20', users: 680, gisEvents: 3400, apiCalls: 21000, listItems: 118 },
];

export const mockRegionData = [
  { name: 'APAC', value: 34, color: '#6366f1' },
  { name: 'EMEA', value: 28, color: '#8b5cf6' },
  { name: 'NAM', value: 22, color: '#06b6d4' },
  { name: 'LATAM', value: 16, color: '#10b981' },
];

export const mockSeverityData = [
  { name: 'Low', value: 45, color: '#10b981' },
  { name: 'Medium', value: 32, color: '#f59e0b' },
  { name: 'High', value: 18, color: '#ef4444' },
  { name: 'Critical', value: 5, color: '#dc2626' },
];

// ─── STATS ────────────────────────────────────────────────────
export const mockStats = {
  totalUsers: 2847,
  activeLocations: 10,
  listItems: 12,
  dictEntries: 12,
  apiCallsToday: 21000,
  alertsActive: 59,
  dataProcessedGB: 4.7,
  uptimePercent: 99.97,
};

// ─── ALL SEARCHABLE ITEMS (for command palette) ────────────────
export const allSearchableItems = [
  ...mockUsers.map(u => ({ id: u.id, title: u.name, subtitle: u.email, type: 'user' as const, route: '/users' })),
  ...mockGisLocations.map(g => ({ id: g.id, title: g.name, subtitle: g.description, type: 'gis' as const, route: '/gis' })),
  ...mockListItems.map(l => ({ id: l.id, title: l.title, subtitle: l.category, type: 'list' as const, route: '/lists' })),
  ...mockDictEntries.map(d => ({ id: d.id, title: d.key, subtitle: d.description, type: 'dict' as const, route: '/dict' })),
];
