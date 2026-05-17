'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'cyan';
  delay?: number;
}

export function AnimatedCard({
  children,
  className = '',
  glowColor = 'blue',
  delay = 0,
}: AnimatedCardProps) {
  const glowClass = glowColor === 'blue' ? 'hover:glow-blue' : 'hover:glow-cyan';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`bg-card border border-border p-8 transition-all duration-200 ${glowClass} ${className}`}
    >
      {children}
    </motion.div>
  );
}
