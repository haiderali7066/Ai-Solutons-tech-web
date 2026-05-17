'use client';

import { motion } from 'framer-motion';

export function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <defs>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Vertical lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={i * 100 + 50}
            y1="0"
            x2={i * 100 + 50}
            y2="800"
            stroke="url(#gridGradient)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}

        {/* Horizontal lines */}
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={i * 100}
            x2="1200"
            y2={i * 100}
            stroke="url(#gridGradient)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
}
