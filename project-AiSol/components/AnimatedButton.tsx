'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export function AnimatedButton({
  href,
  children,
  variant = 'primary',
  className = '',
}: AnimatedButtonProps) {
  const baseClasses = 'px-8 py-4 font-semibold transition-all duration-200 text-center';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:glow-blue',
    secondary: 'bg-secondary text-background hover:glow-cyan',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={`inline-block ${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
