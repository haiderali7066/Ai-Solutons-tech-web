'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/lib/constants';

/* ─────────────────────────────────────────────
   THEME
───────────────────────────────────────────── */
const BLUE = '#2563EB';       // primary blue
const BLUE_DARK = '#1d4ed8';  // hover blue

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const SERVICE_CATEGORIES = [
  {
    id: 'ai',
    num: '01',
    label: 'AI & Intelligent Systems',
    href: '/services/ai-intelligent-systems',
    services: [
      // Created
      { title: 'Enterprise AI Assistant', href: '/services/ai-intelligent-systems/enterprise-ai-assistant' },
      { title: 'AI on ERP & Finance', href: '/services/ai-intelligent-systems/ai-on-erp-finance' },

      // Remaining
      { title: 'AI Financial Reconciliation', href: '/services/ai-intelligent-systems/ai-financial-reconciliation' },
      { title: 'Enterprise RAG Implementation', href: '/services/ai-intelligent-systems/enterprise-rag-implementation' },
      { title: 'AI Anomaly Detection', href: '/services/ai-intelligent-systems/ai-anomaly-detection' },
      { title: 'Agentic AI & Automation', href: '/services/ai-intelligent-systems/agentic-ai-automation' },
    ],
  },

  {
    id: 'fabric',
    num: '02',
    label: 'Microsoft Fabric',
    href: '/services/microsoft-fabric',
    services: [
      { title: 'Microsoft Fabric Implementation', href: '/services/microsoft-fabric/microsoft-fabric-implementation' },
      { title: 'Fabric Lakehouse & Data Engineering', href: '/services/microsoft-fabric/fabric-lakehouse-data-engineering' },
      { title: 'Fabric Data Warehouse', href: '/services/microsoft-fabric/fabric-data-warehouse' },
      { title: 'Fabric Real-Time Intelligence', href: '/services/microsoft-fabric/fabric-real-time-intelligence' },
      { title: 'Fabric Power BI & Semantic Models', href: '/services/microsoft-fabric/fabric-power-bi-semantic-models' },
      { title: 'Fabric Data Activator & Governance', href: '/services/microsoft-fabric/fabric-data-activator-governance' },
    ],
  },

  {
    id: 'dataeng',
    num: '03',
    label: 'Data Engineering & Integration',
    href: '/services/data-engineering-integration',
    services: [
      // Created
      { title: 'Azure Data Factory', href: '/services/data-engineering-integration/azure-data-factory' },

      // Remaining
      { title: 'Data Pipeline Architecture', href: '/services/data-engineering-integration/data-pipeline-architecture' },
      { title: 'ETL / ELT Services', href: '/services/data-engineering-integration/etl-elt-services' },
      { title: 'Data Integration Solutions', href: '/services/data-engineering-integration/data-integration-solutions' },
      { title: 'API & System Integration', href: '/services/data-engineering-integration/api-system-integration' },
      { title: 'Real-Time Data Processing', href: '/services/data-engineering-integration/real-time-data-processing' },
    ],
  },

  {
    id: 'modelling',
    num: '04',
    label: 'Data Modelling & Warehousing',
    href: '/services/data-modelling-warehousing',
    services: [
      { title: 'Data Architecture Design', href: '/services/data-modelling-warehousing/data-architecture-design' },
      { title: 'Dimensional Modelling', href: '/services/data-modelling-warehousing/dimensional-modelling' },
      { title: 'Master Data Management (MDM)', href: '/services/data-modelling-warehousing/master-data-management' },
      { title: 'Data Warehouse Solutions', href: '/services/data-modelling-warehousing/data-warehouse-solutions' },
      { title: 'Data Quality Management', href: '/services/data-modelling-warehousing/data-quality-management' },
    ],
  },

  {
    id: 'bi',
    num: '05',
    label: 'Business Intelligence & Analytics',
    href: '/services/business-intelligence-analytics',
    services: [
      // Created
      { title: 'Power BI Implementation', href: '/services/business-intelligence-analytics/power-bi-implementation' },
      { title: 'CFO Dashboards', href: '/services/business-intelligence-analytics/cfo-dashboards' },
      { title: 'Construction Analytics', href: '/services/business-intelligence-analytics/construction-analytics' },

      // Remaining
      { title: 'Self-Service BI Enablement', href: '/services/business-intelligence-analytics/self-service-bi-enablement' },
      { title: 'Operational Analytics', href: '/services/business-intelligence-analytics/operational-analytics' },
      { title: 'Advanced Analytics & Forecasting', href: '/services/business-intelligence-analytics/advanced-analytics-forecasting' },
    ],
  },

  {
    id: 'cloud',
    num: '06',
    label: 'Cloud Migration & Modernisation',
    href: '/services/cloud-migration-modernisation',
    services: [
      // Created
      { title: 'Cloud Migration', href: '/services/cloud-migration-modernisation/cloud-migration' },
      { title: 'Managed Services', href: '/services/cloud-migration-modernisation/managed-services' },

      // Remaining
      { title: 'Cloud Strategy & Roadmap', href: '/services/cloud-migration-modernisation/cloud-strategy-roadmap' },
      { title: 'Azure / AWS Migration', href: '/services/cloud-migration-modernisation/azure-aws-migration' },
      { title: 'ERP Cloud Migration Data Layer', href: '/services/cloud-migration-modernisation/erp-cloud-migration-data-layer' },
      { title: 'Data Platform Build', href: '/services/cloud-migration-modernisation/data-platform-build' },
      { title: 'DevOps for Data', href: '/services/cloud-migration-modernisation/devops-for-data' },
    ],
  },

  {
    id: 'governance',
    num: '07',
    label: 'Data Governance & Compliance',
    href: '/services/data-governance-compliance',
    services: [
      // Created
      { title: 'Microsoft Purview', href: '/services/data-governance-compliance/microsoft-purview' },

      // Remaining
      { title: 'Data Governance Frameworks', href: '/services/data-governance-compliance/data-governance-frameworks' },
      { title: 'Privacy & Regulatory Compliance', href: '/services/data-governance-compliance/privacy-regulatory-compliance' },
      { title: 'Security & Access Control', href: '/services/data-governance-compliance/security-access-control' },
      { title: 'AI Governance & Compliance', href: '/services/data-governance-compliance/ai-governance-compliance' },
    ],
  },

  {
    id: 'crm',
    num: '08',
    label: 'CRM & Business Applications',
    href: '/services/crm-business-applications',
    services: [
      { title: 'Dynamics 365 Integration', href: '/services/crm-business-applications/dynamics-365-integration' },
      { title: 'CRM Analytics & Reporting', href: '/services/crm-business-applications/crm-analytics-reporting' },
      { title: 'Cortex Intell Platform', href: '/services/crm-business-applications/cortex-intell-platform' },
      { title: 'Power Platform Consulting', href: '/services/crm-business-applications/power-platform-consulting' },
      { title: 'Payroll Compliance & Remediation', href: '/services/crm-business-applications/payroll-compliance-remediation' },
    ],
  },

  {
    id: 'custom',
    num: '09',
    label: 'Custom Web & Software Development',
    href: '/services/custom-web-software-development',
    services: [
      { title: 'Custom Web Application Development', href: '/services/custom-web-software-development/custom-web-application-development' },
      { title: 'Enterprise Software Development', href: '/services/custom-web-software-development/enterprise-software-development' },
      // { title: 'SaaS Platform Development', href: '/services/custom-web-software-development/saas-platform-development' },
      // { title: 'API Development & Integration', href: '/services/custom-web-software-development/api-development-integration' },
      // { title: 'Portal & Dashboard Development', href: '/services/custom-web-software-development/portal-dashboard-development' },
      // { title: 'Application Modernisation', href: '/services/custom-web-software-development/application-modernisation' },
    ],
  },
];

const SECONDARY_NAV = [
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { title: 'Construction & Engineering',      href: '/industries/construction' },
      { title: 'Finance & Professional Services', href: '/industries/finance' },
      { title: 'Government & Public Sector',      href: '/industries/government' },
    ],
  },
  {
    label: 'Solution we provided',
    href: '/case-studies',
    children: [
      { title: 'Australian Tier-2 Builder', href: '/case-studies/australian-tier-2-builder' },
      { title: 'Professional Services CFO', href: '/case-studies/professional-services-cfo' },
      { title: 'KSA Government AI',         href: '/case-studies/ksa-government-ai' },
    ],
  },
];

const STATIC_LINKS = [
  { label: 'Blog',  href: '/blog' },
  { label: 'About', href: '/about' },
];

/* ─────────────────────────────────────────────
   CHEVRON
───────────────────────────────────────────── */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="10" height="6" viewBox="0 0 10 6" fill="none"
      className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function Navbar() {
  const pathname = usePathname();

  const [scrolled,           setScrolled]           = useState(false);
  const [menuOpen,           setMenuOpen]           = useState(false);
  const [activeDropdown,     setActiveDropdown]     = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCatOpen,      setMobileCatOpen]      = useState<number | null>(null);
  const [mobileSecOpen,      setMobileSecOpen]      = useState<string | null>(null);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef     = useRef<HTMLDivElement>(null);

  /* ── Effects ── */
  useEffect(() => {
    setActiveDropdown(null);
    setMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileCatOpen(null);
    setMobileSecOpen(null);
  }, [pathname]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node))
        setActiveDropdown(null);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveDropdown(null); };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  /* ── Helpers ── */
  const open  = (key: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setActiveDropdown(key); };
  const close = () => { closeTimer.current = setTimeout(() => setActiveDropdown(null), 180); };
  const isActive   = (href: string) => pathname === href || pathname.startsWith(href + '/');
  const servicesOpen = activeDropdown === 'services';

  /* ── Shared nav-link class for capsule (desktop) ── */
  const capsuleLink = (active: boolean) =>
    `flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-normal
     tracking-wide bg-transparent border-none cursor-pointer whitespace-nowrap
     transition-all duration-200
     ${active
       ? 'text-white bg-white/10'
       : 'text-white/60 hover:text-white hover:bg-white/8'
     }`;

  return (
    <>
      {/* Invisible click-away backdrop */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-[989]"
          onClick={() => setActiveDropdown(null)}
        />
      )}

      <div ref={navRef} className="fixed top-0 left-0 right-0 z-[999] font-[Inter,Poppins,sans-serif]">

        {/* ═══════════════════════════════════════
            FLOATING CAPSULE NAVBAR
        ═══════════════════════════════════════ */}
        <div className="flex justify-center px-4 sm:px-6 lg:px-8 pt-3.5">
          <nav
            className={`w-full max-w-[1120px] flex items-center justify-between
              px-4 sm:px-6 h-14 rounded-full border
              transition-all duration-300
              ${scrolled
                ? 'bg-black/75 backdrop-blur-2xl border-white/[0.14] shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
                : 'bg-black/45 backdrop-blur-xl  border-white/[0.10] shadow-[0_4px_20px_rgba(0,0,0,0.28)]'
              }`}
          >
            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 no-underline group shrink-0">
              <div className="transition-all duration-300
                group-hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.6)]">
                <Image
                  src="/logo.png" alt="AI Solution Logo"
                  width={28} height={28}
                  className="object-contain rounded-full"
                />
              </div>
              <span className="font-semibold text-[15px] text-white tracking-tight whitespace-nowrap">
                AI Solution Technologies
              </span>
            </Link>

            {/* ── Desktop centre links ── */}
            <div className="hidden lg:flex items-center gap-0.5">

              {/* Services trigger */}
              <div onMouseEnter={() => open('services')} onMouseLeave={close}>
                <button
                  onClick={() => setActiveDropdown(v => v === 'services' ? null : 'services')}
                  className={capsuleLink(servicesOpen || isActive('/services'))}
                >
                  Services
                  <Chevron open={servicesOpen} />
                </button>
              </div>

              {/* Industries & Case Studies */}
              {SECONDARY_NAV.map((item) => (
                <div
                  key={item.href}
                  onMouseEnter={() => open(item.label)}
                  onMouseLeave={close}
                  className="relative"
                >
                  <button
                    onClick={() => setActiveDropdown(v => v === item.label ? null : item.label)}
                    className={capsuleLink(activeDropdown === item.label || isActive(item.href))}
                  >
                    {item.label}
                    <Chevron open={activeDropdown === item.label} />
                  </button>

                  {/* Small dropdown */}
                  <div
                    onMouseEnter={() => open(item.label)}
                    onMouseLeave={close}
                    className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2
                      bg-white border border-gray-200 rounded-xl
                      shadow-[0_8px_32px_rgba(0,0,0,0.12)] min-w-[210px]
                      transition-all duration-200 origin-top z-[997]
                      ${activeDropdown === item.label
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-1.5 pointer-events-none'
                      }`}
                  >
                    <div className="py-1.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-[13.5px] font-normal no-underline
                            transition-colors duration-150 rounded-none
                            ${isActive(child.href)
                              ? 'text-[#2563EB] bg-blue-50/60'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                        >
                          {child.title}
                        </Link>
                      ))}
                      <div className="mx-3 mt-1 pt-1.5 border-t border-gray-100">
                        <Link
                          href={item.href}
                          className="flex items-center gap-1 px-1 py-1.5
                            text-[12.5px] font-semibold no-underline
                            transition-colors duration-150"
                          style={{ color: BLUE }}
                        >
                          All {item.label} →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Static links */}
              {STATIC_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={capsuleLink(isActive(link.href))}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* ── Desktop right CTAs ── */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <Link
                href="/contact"
                className={capsuleLink(isActive('/contact'))}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="px-4 py-1.5 rounded-full text-[13.5px] font-semibold
                  text-white no-underline whitespace-nowrap
                  transition-all duration-200 hover:opacity-90
                  hover:shadow-[0_4px_16px_rgba(37,99,235,0.45)]"
                style={{ backgroundColor: BLUE }}
              >
                Start a Project ↗
              </Link>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden p-2 -mr-1 text-white/60 hover:text-white
                bg-transparent border-none cursor-pointer transition-colors duration-150"
              aria-label="Toggle menu"
            >
              {menuOpen
                ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                : <svg width="20" height="14" viewBox="0 0 20 14" fill="none"><path d="M0 1h20M0 7h20M0 13h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              }
            </button>
          </nav>
        </div>

        {/* ═══════════════════════════════════════
            DESKTOP MEGA MENU — white, full width
        ═══════════════════════════════════════ */}
        <div
          onMouseEnter={() => open('services')}
          onMouseLeave={close}
          aria-hidden={!servicesOpen}
          className={`hidden lg:block fixed left-0 right-0
            bg-white border-b border-gray-200
            shadow-[0_12px_40px_rgba(0,0,0,0.10)]
            transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top
            z-[996]
            ${servicesOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          style={{ top: '74px' }}
        >
          {/* Inner container — symmetric, max-width centred */}
          <div className="max-w-[1280px] mx-auto px-10 xl:px-16 py-10">

            {/* ── Service grid ── */}
            <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-10 gap-y-8">
              {SERVICE_CATEGORIES.map((cat) => (
                <div key={cat.id} className="flex flex-col">

                  {/* Category heading */}
                  <div className="pb-2 mb-3" style={{ borderBottom: `2px solid ${BLUE}` }}>
                    <Link
                      href={cat.href}
                      className="block text-[11px] font-bold tracking-[0.14em] uppercase
                        no-underline transition-colors duration-150"
                      style={{ color: isActive(cat.href) ? BLUE : '#111827' }}
                      onMouseEnter={e => (e.currentTarget.style.color = BLUE)}
                      onMouseLeave={e => (e.currentTarget.style.color = isActive(cat.href) ? BLUE : '#111827')}
                    >
                      {cat.label}
                    </Link>
                  </div>

                  {/* Sub-services or direct link */}
                  <div className="flex flex-col gap-0">
                    {cat.services.length > 0 ? (
                      cat.services.map((svc) => (
                        <Link
                          key={svc.href}
                          href={svc.href}
                          className="block text-[13.5px] font-normal py-[7px] no-underline
                            transition-colors duration-150 leading-snug"
                          style={{ color: isActive(svc.href) ? BLUE : '#6B7280' }}
                          onMouseEnter={e => (e.currentTarget.style.color = '#111827')}
                          onMouseLeave={e => (e.currentTarget.style.color = isActive(svc.href) ? BLUE : '#6B7280')}
                        >
                          {svc.title}
                        </Link>
                      ))
                    ) : (
                      <Link
                        href={cat.href}
                        className="block text-[13px] font-normal py-[7px] no-underline
                          transition-colors duration-150"
                        style={{ color: '#9CA3AF' }}
                        onMouseEnter={e => { e.currentTarget.style.color = BLUE; }}
                        onMouseLeave={e => { e.currentTarget.style.color = '#9CA3AF'; }}
                      >
                        View service page →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Footer strip ── */}
            <div className="mt-8 pt-6 border-t border-gray-100
              flex items-center justify-between gap-4">

              <div className="flex items-center gap-6">
                <Link
                  href="/services"
                  className="flex items-center gap-2 text-[13px] font-medium
                    text-gray-400 hover:text-gray-800 no-underline
                    transition-colors duration-150"
                >
                  <svg width="15" height="15" viewBox="0 0 14 14" fill="none" className="shrink-0">
                    <rect x="1" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                    <rect x="8" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                    <rect x="1" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                    <rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                  </svg>
                  All Services
                </Link>

                <span className="text-gray-200 select-none">|</span>

                <Link
                  href="/case-studies"
                  className="text-[13px] font-medium text-gray-400
                    hover:text-gray-800 no-underline transition-colors duration-150"
                >
                  Case Studies →
                </Link>

                <Link
                  href="/industries"
                  className="text-[13px] font-medium text-gray-400
                    hover:text-gray-800 no-underline transition-colors duration-150"
                >
                  Industries →
                </Link>
              </div>

              <Link
                href="/contact"
                className="px-5 py-2 rounded-full text-[13px] font-semibold
                  text-white no-underline whitespace-nowrap
                  transition-all duration-200 hover:opacity-90
                  hover:shadow-[0_4px_14px_rgba(37,99,235,0.4)]"
                style={{ backgroundColor: BLUE }}
              >
                Talk to an Expert ↗
              </Link>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            MOBILE MENU
        ═══════════════════════════════════════ */}
        <div
          className={`fixed left-0 right-0 lg:hidden
            bg-[#07080e] border-b border-white/[0.07]
            overflow-y-auto overscroll-contain
            transition-all duration-300 ease-in-out
            ${menuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto shadow-[0_16px_40px_rgba(0,0,0,0.7)]'
              : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          style={{ top: '70px', maxHeight: 'calc(100dvh - 70px)' }}
        >
          <div className="divide-y divide-white/[0.06]">

            {/* Services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(v => !v)}
                className={`w-full flex items-center justify-between
                  px-5 py-4 bg-transparent border-none cursor-pointer
                  text-[15px] font-medium transition-colors duration-150
                  ${mobileServicesOpen || isActive('/services')
                    ? 'text-white'
                    : 'text-white/65 hover:text-white'
                  }`}
              >
                <span>Services</span>
                <Chevron open={mobileServicesOpen} />
              </button>

              <div className={`overflow-hidden transition-all duration-300
                ${mobileServicesOpen ? 'max-h-[1600px]' : 'max-h-0'}`}>
                <div className="bg-black/20 border-t border-white/[0.05]">

                  {/* quick browse all */}
                  <div className="px-5 pt-3 pb-2">
                    <Link
                      href="/services"
                      className="text-[12.5px] font-medium no-underline
                        transition-colors duration-150"
                      style={{ color: BLUE }}
                    >
                      Browse all services →
                    </Link>
                  </div>

                  {SERVICE_CATEGORIES.map((cat, ci) => (
                    <div key={cat.id} className="border-t border-white/[0.05]">

                      <div className="flex items-stretch">
                        {/* category label → navigates */}
                        <Link
                          href={cat.href}
                          className={`flex items-center gap-3 flex-1 px-5 py-3.5
                            no-underline transition-colors duration-150
                            ${isActive(cat.href)
                              ? 'text-white'
                              : 'text-white/55 hover:text-white'
                            }`}
                        >
                          <span className="text-[11px] font-bold tracking-widest"
                            style={{ color: BLUE + '80' }}>
                            {cat.num}
                          </span>
                          <span className="text-[14px] font-medium leading-snug">
                            {cat.label}
                          </span>
                        </Link>

                        {/* chevron expander — only if sub-services exist */}
                        {cat.services.length > 0 && (
                          <button
                            onClick={() => setMobileCatOpen(mobileCatOpen === ci ? null : ci)}
                            className="px-4 text-white/30 hover:text-white/60
                              bg-transparent border-none cursor-pointer
                              transition-colors duration-150 shrink-0"
                            aria-label={`Expand ${cat.label}`}
                          >
                            <Chevron open={mobileCatOpen === ci} />
                          </button>
                        )}
                      </div>

                      {cat.services.length > 0 && (
                        <div className={`overflow-hidden transition-all duration-200
                          ${mobileCatOpen === ci ? 'max-h-[240px]' : 'max-h-0'}`}>
                          <div className="ml-[52px] mr-4 border-l border-white/[0.08] pb-2">
                            {cat.services.map((svc) => (
                              <Link
                                key={svc.href}
                                href={svc.href}
                                className={`flex items-center justify-between
                                  px-4 py-2.5 text-[13.5px] font-normal no-underline
                                  border-b border-white/[0.04] last:border-0
                                  transition-colors duration-150
                                  ${isActive(svc.href)
                                    ? 'text-white'
                                    : 'text-white/40 hover:text-white/80'
                                  }`}
                              >
                                {svc.title}
                                <span className="text-[10px] text-white/20 shrink-0">↗</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries & Case Studies */}
            {SECONDARY_NAV.map((item) => (
              <div key={item.href}>
                <button
                  onClick={() => setMobileSecOpen(mobileSecOpen === item.label ? null : item.label)}
                  className={`w-full flex items-center justify-between
                    px-5 py-4 bg-transparent border-none cursor-pointer
                    text-[15px] font-medium transition-colors duration-150
                    ${mobileSecOpen === item.label || isActive(item.href)
                      ? 'text-white'
                      : 'text-white/65 hover:text-white'
                    }`}
                >
                  <span>{item.label}</span>
                  <Chevron open={mobileSecOpen === item.label} />
                </button>

                <div className={`overflow-hidden transition-all duration-250
                  ${mobileSecOpen === item.label ? 'max-h-[320px]' : 'max-h-0'}`}>
                  <div className="bg-black/20 border-t border-white/[0.05]
                    ml-4 border-l border-l-white/[0.07]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`flex items-center justify-between px-5 py-3
                          text-[13.5px] font-normal no-underline
                          border-b border-white/[0.04] last:border-0
                          transition-colors duration-150
                          ${isActive(child.href)
                            ? 'text-white'
                            : 'text-white/45 hover:text-white/80'
                          }`}
                      >
                        {child.title}
                        <span className="text-[10px] text-white/20 shrink-0">↗</span>
                      </Link>
                    ))}
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-5 py-3
                        text-[12.5px] font-semibold no-underline transition-colors duration-150"
                      style={{ color: BLUE }}
                    >
                      All {item.label} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Static links */}
            {[...STATIC_LINKS, { label: 'Blog', href: '/blog' }, { label: 'Contact', href: '/contact' }]
              .filter((v, i, a) => a.findIndex(t => t.href === v.href) === i)
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-5 py-4 text-[15px] font-medium no-underline
                    transition-colors duration-150
                    ${isActive(link.href) ? 'text-white' : 'text-white/65 hover:text-white'}`}
                >
                  {link.label}
                </Link>
              ))}
          </div>

          {/* Mobile CTAs */}
          <div className="flex gap-3 p-4 border-t border-white/[0.07]">
            <Link
              href="/services"
              className="flex-1 border border-white/[0.12] text-white/55
                px-4 py-2.5 rounded-full text-[13.5px] font-medium
                text-center no-underline transition-all duration-150
                hover:border-white/25 hover:text-white"
            >
              All Services
            </Link>
            <Link
              href="/contact"
              className="flex-1 text-white px-4 py-2.5 rounded-full
                text-[13.5px] font-semibold text-center no-underline
                transition-all duration-150 hover:opacity-90"
              style={{ backgroundColor: BLUE }}
            >
              Start a Project ↗
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}