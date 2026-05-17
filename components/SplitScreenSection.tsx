'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface SplitScreenSectionProps {
  title: string;
  description: string;
  features: string[];
  imageIcon?: string;
  reverse?: boolean;
}

export function SplitScreenSection({
  title,
  description,
  features,
  imageIcon = '🚀',
  reverse = false,
}: SplitScreenSectionProps) {
  const leftContent = (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="space-y-4">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <p className="text-muted-foreground">{feature}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const rightContent = (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="flex items-center justify-center"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
        <div className="relative bg-gradient-to-br from-card to-card border border-border p-12 flex items-center justify-center min-h-[400px]">
          <div className="text-8xl">{imageIcon}</div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {reverse ? (
        <>
          {rightContent}
          {leftContent}
        </>
      ) : (
        <>
          {leftContent}
          {rightContent}
        </>
      )}
    </div>
  );
}
