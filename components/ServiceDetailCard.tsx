'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceDetailCardProps {
  id: number;
  icon: string;
  title: string;
  slug: string;
  shortDescription: string;
  useCases: string[];
  delay?: number;
}

export function ServiceDetailCard({
  icon,
  title,
  slug,
  shortDescription,
  useCases,
  delay = 0,
}: ServiceDetailCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={`/services/${slug}`}>
        <div className="relative h-full bg-gradient-to-br from-card to-card border border-border p-8 cursor-pointer transition-all duration-300 hover:border-primary hover:glow-blue">
          {/* Background glow on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />

          {/* Content */}
          <div className="relative z-10">
            <div className="text-6xl mb-4">{icon}</div>

            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>

            <p className="text-muted-foreground mb-6">{shortDescription}</p>

            <div className="mb-6">
              <p className="text-sm font-semibold text-secondary mb-3">Key Use Cases:</p>
              <ul className="space-y-2">
                {useCases.slice(0, 3).map((useCase, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              className="inline-flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all"
              whileHover={{ x: 4 }}
            >
              Learn More
              <span>→</span>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
