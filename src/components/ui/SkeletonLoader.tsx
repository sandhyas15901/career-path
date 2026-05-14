import { CSSProperties } from 'react';
import { useTheme } from '../../context/ThemeContext';

export function Skeleton({ className = '', style }: { className?: string; style?: CSSProperties }) {
  const { isDark } = useTheme();
  return (
    <div className={`${isDark ? 'skeleton' : 'skeleton-light'} ${className}`} style={style} />
  );
}

export function SkeletonCard() {
  const { isDark } = useTheme();
  return (
    <div className={`rounded-2xl p-6 border ${isDark ? 'glass border-white/5' : 'glass-light border-black/5'}`}>
      <div className="flex items-start gap-4">
        <Skeleton className="w-12 h-12 rounded-xl flex-shrink-0" />
        <div className="flex-1 space-y-3">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonRow() {
  const { isDark } = useTheme();
  return (
    <div className={`flex items-center gap-4 p-4 rounded-xl border ${isDark ? 'border-white/5' : 'border-black/5'}`}>
      <Skeleton className="w-10 h-10 rounded-full flex-shrink-0" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-3 w-1/4" />
      </div>
      <Skeleton className="h-6 w-16 rounded-full" />
      <Skeleton className="h-4 w-20" />
    </div>
  );
}

export function SkeletonStat() {
  const { isDark } = useTheme();
  return (
    <div className={`rounded-2xl p-6 border ${isDark ? 'glass border-white/5' : 'glass-light border-black/5'}`}>
      <Skeleton className="h-4 w-24 mb-4" />
      <Skeleton className="h-10 w-32 mb-2" />
      <Skeleton className="h-3 w-20" />
    </div>
  );
}

export function SkeletonTable({ rows = 5 }: { rows?: number }) {
  const { isDark } = useTheme();
  return (
    <div className="space-y-2">
      <div className={`flex gap-4 p-3 border-b ${isDark ? 'border-white/5' : 'border-black/5'}`}>
        {['w-10', 'w-20', 'w-32', 'w-16', 'w-20'].map((w, i) => (
          <Skeleton key={i} className={`h-3 ${w}`} />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <SkeletonRow key={i} />
      ))}
    </div>
  );
}

export function SkeletonChart() {
  const { isDark } = useTheme();
  const heights = [45, 72, 38, 85, 62, 91, 55, 78, 43, 68, 80];
  return (
    <div className={`rounded-2xl p-6 border ${isDark ? 'glass border-white/5' : 'glass-light border-black/5'}`}>
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-2">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-3 w-28" />
        </div>
        <Skeleton className="h-8 w-24 rounded-lg" />
      </div>
      <div className="flex items-end gap-2 h-40">
        {heights.map((h, i) => (
          <Skeleton key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}
