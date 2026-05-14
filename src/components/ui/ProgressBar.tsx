import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number;   // 0–100
  label?: string;
  color?: string;
  showPercent?: boolean;
  height?: 'thin' | 'normal' | 'thick';
}

const heights = { thin: 'h-1', normal: 'h-2', thick: 'h-3' };

export default function ProgressBar({
  value, label, color = 'bg-indigo-500', showPercent = true, height = 'normal',
}: ProgressBarProps) {
  return (
    <div className="w-full">
      {(label || showPercent) && (
        <div className="flex justify-between items-center mb-1.5">
          {label && <span className="text-xs text-white/50">{label}</span>}
          {showPercent && <span className="text-xs font-semibold text-white/70">{Math.round(value)}%</span>}
        </div>
      )}
      <div className={`w-full ${heights[height]} bg-white/8 rounded-full overflow-hidden`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          className={`${heights[height]} ${color} rounded-full`}
        />
      </div>
    </div>
  );
}
