'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-10 h-[72px] transition-all duration-300 ease-in-out
          ${scrolled
            ? 'bg-[rgba(10,10,10,0.92)] backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <span className="w-8 h-8 bg-[#AAFF00] rounded-lg flex items-center justify-center text-base">
            ⚡
          </span>
          <span className="font-extrabold text-[1.15rem] text-white tracking-[-0.02em] font-[Outfit,sans-serif]">
            AI Solution<span className="text-[#AAFF00]">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 no-underline text-[0.88rem] font-medium tracking-[0.02em] transition-colors duration-200 hover:text-[#AAFF00]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-[#AAFF00] text-[#0A0A0A] px-[1.4rem] py-[0.55rem] rounded-full text-[0.85rem] font-bold tracking-[0.02em] no-underline transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_24px_rgba(170,255,0,0.5)]"
          >
            Start a Project ↗
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-transparent border-none text-white text-2xl cursor-pointer p-2 leading-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[72px] left-0 right-0 z-[999] bg-[rgba(10,10,10,0.97)] backdrop-blur-xl border-b border-white/10
          flex flex-col gap-6 px-8 py-8
          transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${menuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-[110%] opacity-0 pointer-events-none'
          }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-white no-underline text-[1.4rem] font-bold tracking-[-0.02em] font-[Outfit,sans-serif] transition-colors duration-200 hover:text-[#AAFF00]"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="bg-[#AAFF00] text-[#0A0A0A] px-[1.8rem] py-[0.9rem] rounded-full text-base font-bold text-center no-underline font-[Outfit,sans-serif] mt-2"
        >
          Start a Project ↗
        </Link>
      </div>
    </>
  );
}