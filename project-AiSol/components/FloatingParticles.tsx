'use client';

import { motion } from 'framer-motion';

export function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          initial={{
            x: Math.random() * 1200,
            y: Math.random() * 800,
            opacity: Math.random() * 0.5 + 0.3,
          }}
          animate={{
            x: Math.random() * 1200,
            y: Math.random() * 800,
            opacity: [Math.random() * 0.5 + 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
