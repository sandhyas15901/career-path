import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'glow';
  disabled?: boolean;
  type?: 'button' | 'submit';
}

export default function AnimatedButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  disabled = false,
  type = 'button',
}: AnimatedButtonProps) {
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white',
    secondary: 'bg-white/10 border border-white/20 text-white hover:bg-white/20',
    glow: 'bg-gradient-to-r from-violet-500 to-indigo-600 text-white shadow-lg shadow-violet-500/30',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      whileFocus={!disabled ? { scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
      className={`${variants[variant]} ${className} px-6 py-3 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </motion.button>
  );
}
