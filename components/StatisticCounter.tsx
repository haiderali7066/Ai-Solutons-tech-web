'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatisticCounterProps {
  value: string;
  label: string;
  icon: string;
}

export function StatisticCounter({ value, label, icon }: StatisticCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric value
    const numericValue = parseInt(value.replace(/[^\d]/g, ''));
    const duration = 2;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      current += increment;
      step++;
      if (step >= steps) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current).toString() + value.replace(/\d/g, ''));
      }
    }, (duration * 1000) / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {displayValue}
      </p>
      <p className="text-muted-foreground mt-4 text-lg">{label}</p>
    </motion.div>
  );
}
