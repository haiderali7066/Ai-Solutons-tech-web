'use client';

import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add dynamic scroll effect for premium glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/85 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ rotate: 180 }} 
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-primary to-secondary rounded-lg shadow-lg"
          >
            <span className="w-3 h-3 bg-background rounded-sm" />
          </motion.div>
          <span 
            className="text-foreground font-extrabold text-xl tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            AI Solutions<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
        >
          {NAV_LINKS.map((link) => (
            <motion.div 
              key={link.href} 
              variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -2 }}
            >
              <Link
                href={link.href}
                className="relative text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-semibold tracking-wide group"
              >
                {link.label}
                {/* Animated underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="px-7 py-2.5 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300 text-sm font-bold tracking-wide relative overflow-hidden group flex items-center gap-2"
            >
              <span className="relative z-10">Get Started</span>
              <motion.span 
                className="relative z-10"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
              >
                ↗
              </motion.span>
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 flex flex-col justify-center items-center w-10 h-10 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
          aria-label="Toggle Menu"
        >
          <span className={`h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[6px]' : '-translate-y-1'}`} />
          <span className={`h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[6px]' : 'translate-y-1'}`} />
        </button>

        {/* Mobile Menu (Wrapped in AnimatePresence for exit animations) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-[100%] left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl origin-top"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="p-6 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="text-foreground/80 hover:text-primary transition-colors text-lg font-semibold block"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4 border-t border-border"
                >
                  <Link
                    href="/contact"
                    className="w-full py-3 bg-primary text-primary-foreground rounded-xl flex justify-center items-center gap-2 font-bold text-base shadow-lg shadow-primary/20"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started ↗
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}