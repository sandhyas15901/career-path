import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface StatRingProps {
  value: number;   // 0–100
  label: string;
  sublabel?: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

export default function StatRing({
  value,
  label,
  sublabel,
  color = '#6366f1',
  size = 96,
  strokeWidth = 7,
}: StatRingProps) {
  const { isDark } = useTheme();
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          {/* Track */}
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="none"
            stroke={isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}
            strokeWidth={strokeWidth}
          />
          {/* Progress */}
          <motion.circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
            style={{ filter: `drop-shadow(0 0 6px ${color}88)` }}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg font-bold"
            style={{ color }}
          >
            {value}%
          </motion.span>
        </div>
      </div>
      <div className="text-center">
        <p className={`text-xs font-semibold ${isDark ? 'text-white/80' : 'text-gray-700'}`}>{label}</p>
        {sublabel && <p className={`text-xs ${isDark ? 'text-white/35' : 'text-gray-400'}`}>{sublabel}</p>}
      </div>
    </div>
  );
}
