'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/lib/constants';

const SERVICES = [
  {
    num: "01",
    title: "Power BI Implementation",
    desc: "Executive-ready dashboards and reporting that replace spreadsheets with real-time business insights.",
    tags: ["Power BI", "Dashboards", "Reporting"],
    href: "/services/power-bi-implementation",
  },
  {
    num: "02",
    title: "CFO Dashboards",
    desc: "Cash flow, budgeting, forecasting, profitability, and financial performance in one executive view.",
    tags: ["Finance", "Forecasting", "Cash Flow"],
    href: "/services/cfo-dashboards",
  },
  {
    num: "03",
    title: "Microsoft Fabric",
    desc: "Unified platform for data engineering, warehousing, business intelligence, and enterprise AI.",
    tags: ["Microsoft Fabric", "Data Platform", "Analytics"],
    href: "/services/microsoft-fabric",
  },
  {
    num: "04",
    title: "Enterprise AI Assistant",
    desc: "Private AI assistants powered by Azure OpenAI and trained on your business knowledge.",
    tags: ["Azure OpenAI", "Enterprise AI", "Knowledge Base"],
    href: "/services/enterprise-ai-assistant",
  },
  {
    num: "05",
    title: "Construction Analytics",
    desc: "Real-time visibility into BOQs, project costs, burn rates, contractor performance, and claims.",
    tags: ["Construction", "BOQ", "Project Analytics"],
    href: "/services/construction-analytics",
  },
  {
    num: "06",
    title: "AI on ERP & Finance",
    desc: "Deploy AI directly on governed ERP and finance data to automate decisions and insights.",
    tags: ["ERP AI", "Finance AI", "Automation"],
    href: "/services/ai-on-erp",
  },
  {
    num: "07",
    title: "Azure Data Factory",
    desc: "Automated ETL and ELT pipelines connecting ERP, CRM, finance, operations, and cloud systems.",
    tags: ["ETL", "ELT", "Integration"],
    href: "/services/azure-data-factory",
  },
  {
    num: "08",
    title: "Cloud Migration",
    desc: "Risk-managed migration from legacy systems, SQL environments, and ERP platforms to Azure.",
    tags: ["Azure", "Migration", "Modernisation"],
    href: "/services/cloud-migration",
  },
  {
    num: "09",
    title: "Microsoft Purview",
    desc: "Data cataloguing, lineage, governance, classification, and compliance automation at scale.",
    tags: ["Governance", "Lineage", "Compliance"],
    href: "/services/microsoft-purview",
  },
  {
    num: "10",
    title: "Managed Services",
    desc: "Ongoing support, monitoring, optimization, and management of your Microsoft data ecosystem.",
    tags: ["Support", "Monitoring", "Managed Services"],
    href: "/services/managed-services",
  },
];



export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled]                     = useState(false);
  const [menuOpen, setMenuOpen]                     = useState(false);
  const [servicesOpen, setServicesOpen]             = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hovered, setHovered]                       = useState<number | null>(null);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  /* close everything when route changes */
  useEffect(() => {
    setServicesOpen(false);
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  /* scroll shadow */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* close desktop dropdown on outside click */
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  /* Escape key */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setServicesOpen(false); };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, []);

  /* desktop resize */
  useEffect(() => {
    const fn = () => {
      if (window.innerWidth >= 768) { setMenuOpen(false); setMobileServicesOpen(false); }
    };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  const openServices  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setServicesOpen(true); };
  const closeServices = () => { closeTimer.current = setTimeout(() => setServicesOpen(false), 150); };

  return (
    <div
      ref={wrapperRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[1000]
        w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-6xl
        font-[Poppins,sans-serif]"
    >

      {/* ══════════════════ NAVBAR CAPSULE ══════════════════ */}
      <nav
        className={`relative flex items-center justify-between
          px-4 sm:px-6 md:px-8 h-[60px] sm:h-[64px] rounded-full border
          transition-all duration-300 ease-in-out
          ${scrolled
            ? 'bg-black/65 backdrop-blur-xl border-white/[0.12] shadow-[0_12px_40px_rgba(0,0,0,0.55)]'
            : 'bg-black/35 backdrop-blur-lg  border-white/[0.08]  shadow-[0_8px_32px_rgba(0,0,0,0.22)]'
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5 no-underline group shrink-0">
          <div className="flex items-center justify-center transition-all duration-300
            group-hover:scale-110 group-hover:drop-shadow-[0_0_14px_rgba(0,210,255,0.6)]">
            <Image src="/logo.png" alt="AI Solution Logo" width={34} height={34}
              className="object-contain rounded-full" />
          </div>
          <span className="font-semibold text-[0.95rem] sm:text-[1.05rem] text-white
            tracking-[-0.01em] whitespace-nowrap">
            AI Solution Tech
            <span className="text-[#00D2FF] inline-block transition-transform
              duration-300 group-hover:translate-x-0.5">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) =>
            link.label === 'Services' ? (
              <div
                key="services-trigger"
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                <button
                  onClick={() => setServicesOpen(v => !v)}
                  aria-expanded={servicesOpen}
                  className={`flex items-center gap-1.5 text-[0.83rem] font-light
                    tracking-[0.03em] bg-transparent border-none cursor-pointer p-0
                    transition-all duration-300
                    ${servicesOpen
                      ? 'text-[#00D2FF] drop-shadow-[0_0_6px_rgba(0,212,255,0.5)]'
                      : 'text-white/70 hover:text-[#00D2FF] hover:drop-shadow-[0_0_6px_rgba(0,212,255,0.45)]'
                    }`}
                >
                  Services
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                    className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 no-underline text-[0.83rem] font-light
                  tracking-[0.03em] whitespace-nowrap transition-all duration-300
                  hover:text-[#00D2FF] hover:drop-shadow-[0_0_6px_rgba(0,212,255,0.45)]"
              >
                {link.label}
              </Link>
            )
          )}

          <Link
            href="#contact"
            className="bg-[#00D2FF] text-white px-4 lg:px-5 py-[0.42rem] rounded-full
              text-[0.78rem] sm:text-[0.82rem] font-medium tracking-[0.02em] no-underline
              whitespace-nowrap transition-all duration-300
              hover:scale-[1.04] hover:shadow-[0_0_24px_rgba(0,210,255,0.6)]"
          >
            Start a Project ↗
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden bg-transparent border-none text-white text-[1.25rem]
            cursor-pointer p-2 -mr-1 transition-all duration-200
            hover:text-[#00D2FF] focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* ══════════════════ DESKTOP MEGA DROPDOWN ══════════════════ */}

      <div
        onMouseEnter={openServices}
        onMouseLeave={closeServices}
        aria-hidden={!servicesOpen}
        className={`hidden md:block absolute top-[calc(100%+10px)] left-0 right-0
          bg-[#07090d]/96 backdrop-blur-2xl rounded-2xl border border-white/[0.08]
          shadow-[0_20px_60px_rgba(0,0,0,0.6)]
          transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top
          ${servicesOpen
            ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-y-[0.96] -translate-y-2 pointer-events-none'
          }`}
      >
        {/* top rule */}
        <div className="absolute top-0 left-10 right-10 h-[1px]
          bg-gradient-to-r from-transparent via-[#00D2FF]/35 to-transparent" />

        <div className="p-5 lg:p-6">

          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-[3px] h-4 rounded-full bg-[#00D2FF]" />
              <p className="text-[#00D2FF] text-[0.65rem] font-semibold tracking-[0.24em] uppercase">
                What We Do
              </p>
            </div>
            <Link
              href="/services"
              className="group/all flex items-center gap-1.5 text-white/40 hover:text-[#00D2FF]
                text-[0.72rem] tracking-[0.06em] uppercase no-underline transition-all duration-200"
            >
              View All Services
              <span className="inline-block transition-transform duration-200 group-hover/all:translate-x-0.5">→</span>
            </Link>
          </div>

          {/* 3-col (lg) / 2-col (md) grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
            {SERVICES.map((svc, i) => (
              <Link
                key={svc.href}
                href={svc.href}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`group/card relative no-underline rounded-xl p-3.5 lg:p-4
                  flex gap-3 items-start border
                  transition-all duration-200
                  ${hovered === i
                    ? 'bg-[#00D2FF]/[0.06] border-[#00D2FF]/25 shadow-[0_0_18px_rgba(0,210,255,0.07)] -translate-y-[2px]'
                    : hovered !== null
                      ? 'bg-white/[0.02] border-white/[0.05] opacity-70'
                      : 'bg-white/[0.025] border-white/[0.07]'
                  }`}
              >
                {/* number */}
                <span className={`shrink-0 text-[0.58rem] font-bold tracking-[0.15em]
                  mt-[2px] transition-colors duration-200
                  ${hovered === i ? 'text-[#00D2FF]' : 'text-white/20'}`}>
                  {svc.num}
                </span>

                <div className="flex flex-col gap-1 min-w-0">
                  {/* title */}
                  <h3 className={`text-[0.8rem] lg:text-[0.84rem] font-semibold
                    leading-snug tracking-[-0.01em] transition-colors duration-200
                    ${hovered === i ? 'text-white' : 'text-white/80'}`}>
                    {svc.title}
                  </h3>
                  {/* desc */}
                  <p className="text-white/36 text-[0.69rem] leading-[1.55] font-light line-clamp-2">
                    {svc.desc}
                  </p>
                  {/* tags */}
                  <div className="flex flex-wrap gap-1 mt-1">
                    {svc.tags.map((tag) => (
                      <span key={tag}
                        className={`text-[0.58rem] px-2 py-[2px] rounded-full border
                          font-medium tracking-[0.03em] transition-all duration-200
                          ${hovered === i
                            ? 'border-[#00D2FF]/22 text-[#00D2FF]/65 bg-[#00D2FF]/[0.07]'
                            : 'border-white/[0.07] text-white/28 bg-transparent'
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* hover arrow */}
                <span className={`absolute top-3.5 right-3.5 text-[#00D2FF] text-[0.65rem]
                  transition-all duration-200
                  ${hovered === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'}`}>
                  →
                </span>
              </Link>
            ))}
          </div>

          {/* Footer strip */}
          <div className="mt-4 pt-4 border-t border-white/[0.06]
            flex items-center justify-between gap-4 flex-wrap">
            <p className="text-white/28 text-[0.69rem] font-light">
              Not sure which service fits? We'll help you figure it out.
            </p>
            <Link
              href="#contact"
              className="shrink-0 bg-[#00D2FF] text-[#050505] px-4 py-1.5 rounded-full
                text-[0.72rem] font-semibold tracking-[0.02em] no-underline
                transition-all duration-300 hover:scale-[1.04]
                hover:shadow-[0_0_18px_rgba(0,210,255,0.45)]"
            >
              Talk to an Expert ↗
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════ MOBILE MENU ══════════════════ */}
      <div
        className={`absolute top-[calc(100%+8px)] left-0 right-0 md:hidden
          bg-[#07090d]/92 backdrop-blur-xl border border-white/[0.09] rounded-2xl
          flex flex-col px-4 sm:px-5 py-4 overflow-hidden
          transition-all duration-300 ease-in-out
          ${menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
            : 'opacity-0 -translate-y-3 pointer-events-none'
          }`}
      >
        <div className="flex flex-col">
          {NAV_LINKS.map((link) =>
            link.label === 'Services' ? (
              <div key="services-mob" className="flex flex-col">

                {/* toggle row */}
                <button
                  onClick={() => setMobileServicesOpen(v => !v)}
                  className="flex items-center justify-between py-3 px-3 rounded-xl w-full
                    text-white/80 text-[0.92rem] font-medium tracking-[0.01em]
                    transition-all duration-150 hover:text-[#00D2FF] hover:bg-white/[0.03]
                    bg-transparent border-none cursor-pointer"
                >
                  Services
                  <svg width="11" height="6" viewBox="0 0 10 6" fill="none"
                    className={`transition-transform duration-300
                      ${mobileServicesOpen ? 'rotate-180 text-[#00D2FF]' : ''}`}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* accordion — Links have NO onClick, route change closes menu */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out
                  ${mobileServicesOpen ? 'max-h-[560px] opacity-100 mb-1' : 'max-h-0 opacity-0'}`}>
                  <div className="ml-3 pl-3 border-l border-[#00D2FF]/20 flex flex-col pb-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 py-1">
                      {SERVICES.map((svc) => (
                        <Link
                          key={svc.href}
                          href={svc.href}
                          className="no-underline group/mob"
                        >
                          <div className="flex items-start gap-2.5 py-2 px-2 rounded-lg
                            transition-all duration-150 hover:bg-white/[0.04]">
                            <span className="text-[#00D2FF]/45 text-[0.56rem] font-bold
                              tracking-widest mt-[3px] shrink-0">
                              {svc.num}
                            </span>
                            <div>
                              <p className="text-white/80 text-[0.82rem] font-medium leading-snug
                                group-hover/mob:text-[#00D2FF] transition-colors duration-150">
                                {svc.title}
                              </p>
                              <p className="text-white/30 text-[0.66rem] leading-snug mt-0.5
                                font-light line-clamp-1">
                                {svc.desc}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href="/services"
                      className="flex items-center gap-1 text-[#00D2FF] text-[0.73rem]
                        font-medium px-2 pt-2 pb-1 no-underline hover:underline w-fit"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 px-3 rounded-xl text-white/80 no-underline text-[0.92rem]
                  font-medium tracking-[0.01em] transition-all duration-150
                  hover:text-[#00D2FF] hover:bg-white/[0.03]"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile CTA row */}
        <div className="mt-3 pt-3 border-t border-white/[0.07] flex flex-col sm:flex-row gap-2">
          <Link
            href="/services"
            className="flex-1 border border-[#00D2FF]/30 text-[#00D2FF] px-5 py-2.5
              rounded-full text-[0.82rem] font-medium text-center no-underline
              transition-all duration-200 hover:bg-[#00D2FF]/[0.08]"
          >
            All Services
          </Link>
          <Link
            href="#contact"
            className="flex-1 bg-[#00D2FF] text-[#0A0A0A] px-5 py-2.5 rounded-full
              text-[0.82rem] font-semibold text-center no-underline
              transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,210,255,0.5)]"
          >
            Start a Project ↗
          </Link>
        </div>
      </div>

    </div>
  );
}