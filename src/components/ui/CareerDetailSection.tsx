import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CareerDetailSectionProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function CareerDetailSection({
  icon: Icon,
  title,
  children,
  delay = 0,
  className = '',
}: CareerDetailSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`cyber-card ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-indigo-400" />
        </div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}
