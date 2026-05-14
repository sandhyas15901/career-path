import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  onClose?: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  const icons = {
    success: <CheckCircle2 className="h-5 w-5 flex-shrink-0" />,
    error: <AlertCircle className="h-5 w-5 flex-shrink-0" />,
    info: <Info className="h-5 w-5 flex-shrink-0" />,
    warning: <AlertTriangle className="h-5 w-5 flex-shrink-0" />,
  };

  const styles = {
    success: 'border-emerald-500/40 bg-emerald-500/20 text-emerald-200',
    error: 'border-rose-500/40 bg-rose-500/20 text-rose-200',
    info: 'border-cyan-500/40 bg-cyan-500/20 text-cyan-200',
    warning: 'border-amber-500/40 bg-amber-500/20 text-amber-200',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      onClick={onClose}
      className={`fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 cursor-pointer items-center gap-3 rounded-2xl border px-5 py-3.5 shadow-2xl backdrop-blur-sm ${styles[type]}`}
    >
      {icons[type]}
      <span className="text-sm font-medium">{message}</span>
    </motion.div>
  );
}
