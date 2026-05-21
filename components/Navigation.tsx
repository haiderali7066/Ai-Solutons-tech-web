'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
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
      {/* Floating Uniform Glass Navbar Capsule */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[1000] flex items-center justify-between px-6 md:px-8 
          w-[calc(100%-2rem)] max-w-6xl h-[64px] rounded-full border transition-all duration-300 ease-in-out font-[Poppins,sans-serif]
          ${scrolled
            ? 'bg-black/60 backdrop-blur-xl border-white/12 shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(0,212,255,0.02)]'
            : 'bg-black/30 backdrop-blur-lg border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2)]'
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline group">
        <div className="relative flex items-center justify-center transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(0,210,255,0)] group-hover:drop-shadow-[0_0_15px_rgba(0,210,255,0.6)]">

      <Image 

        src="/logo.png" // <-- Put your logo in the 'public' folder and change this filename

        alt="AI Solution Logo" 

        width={36} 

        height={36} 

        className="object-contain rounded-full"

      />

    </div>
          
          <span className="font-semibold text-[1.05rem] text-white tracking-[-0.01em]">
            AI Solution Tech<span className="text-[#00D2FF] inline-block transition-transform duration-300 group-hover:translate-x-0.5">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 no-underline text-[0.85rem] font-light tracking-[0.03em] transition-all duration-300 hover:text-[#00D2FF] hover:drop-shadow-[0_0_6px_rgba(0,212,255,0.6)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-[#00D2FF] text-white px-[1.2rem] py-[0.45rem] rounded-full text-[0.82rem] font-medium tracking-[0.02em] no-underline transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_25px_rgba(0,210,255,0.6)]"
          >
            Start a Project ↗
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-transparent border-none text-white text-xl cursor-pointer p-2 transition-all duration-300 hover:text-[#00D2FF] focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Floating Mobile Dropdown Menu */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 z-[999] bg-black/80 backdrop-blur-xl border border-white/10
          w-[calc(100%-2rem)] max-w-5xl rounded-2xl flex flex-col gap-5 px-6 py-6 top-[88px] font-[Poppins,sans-serif]
          transition-all duration-300 ease-in-out
          ${menuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
            : '-translate-y-4 opacity-0 pointer-events-none'
          }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-white/80 no-underline text-[1.15rem] font-medium tracking-[0.01em] transition-colors duration-200 hover:text-[#00D2FF]"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="bg-[#00D2FF] text-[#0A0A0A] px-[1.5rem] py-[0.75rem] rounded-full text-sm font-medium text-center no-underline mt-1 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,210,255,0.5)]"
        >
          Start a Project ↗
        </Link>
      </div>
    </>
  );
}