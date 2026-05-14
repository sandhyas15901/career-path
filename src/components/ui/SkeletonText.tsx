import { motion } from 'framer-motion';

interface SkeletonTextProps {
  className?: string;
  lines?: number;
}

export default function SkeletonText({ className = '', lines = 3 }: SkeletonTextProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="skeleton rounded"
          style={{ 
            width: i === lines - 1 ? '60%' : '100%',
            height: i === 0 ? '1.5rem' : '1rem'
          }}
        />
      ))}
    </div>
  );
}
