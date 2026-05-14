import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface RecommendationCardProps {
  icon: string;
  title: string;
  subtitle?: string;
  percentage?: number;
  onClick?: () => void;
  gradient?: string;
  delay?: number;
}

export default function RecommendationCard({
  icon,
  title,
  subtitle,
  percentage,
  onClick,
  gradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  delay = 0,
}: RecommendationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 200, damping: 20 }}
      onClick={onClick}
      className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all ${
        onClick ? 'hover:scale-[1.02]' : ''
      }`}
      style={{ background: gradient }}
    >
      <div className="relative p-6">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{icon}</span>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white">{title}</h3>
              {subtitle && <p className="text-white/80 text-sm">{subtitle}</p>}
              {percentage !== undefined && (
                <p className="text-white/60 text-sm mt-1">{percentage}% Match</p>
              )}
            </div>
            {onClick && (
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
