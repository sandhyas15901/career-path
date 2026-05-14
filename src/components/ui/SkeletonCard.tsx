import { motion } from 'framer-motion';

interface SkeletonCardProps {
  className?: string;
  height?: string;
}

export default function SkeletonCard({ className = '', height = 'h-24' }: SkeletonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`skeleton rounded-2xl ${className} ${height}`}
    />
  );
}
