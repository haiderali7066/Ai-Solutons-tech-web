'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

/* ─────────────────────────────────────────────
   THEME
───────────────────────────────────────────── */
const BLUE = '#2563EB';

/* ─────────────────────────────────────────────
   SERVICES DATA
───────────────────────────────────────────── */
const SERVICE_CATEGORIES = [
  {
    id: 'ai',
    num: '01',
    label: 'AI & Intelligent Systems',
    href: '/services/ai-intelligent-systems',
    services: [
      { title: 'Enterprise AI Assistant', href: '/services/ai-intelligent-systems/enterprise-ai-assistant' },
      { title: 'AI on ERP & Finance', href: '/services/ai-intelligent-systems/ai-on-erp-finance' },
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
      { title: 'Azure Data Factory', href: '/services/data-engineering-integration/azure-data-factory' },
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
      { title: 'Power BI Implementation', href: '/services/business-intelligence-analytics/power-bi-implementation' },
      { title: 'CFO Dashboards', href: '/services/business-intelligence-analytics/cfo-dashboards' },
      { title: 'Construction Analytics', href: '/services/business-intelligence-analytics/construction-analytics' },
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
      { title: 'Cloud Migration', href: '/services/cloud-migration-modernisation/cloud-migration' },
      { title: 'Managed Services', href: '/services/cloud-migration-modernisation/managed-services' },
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
      { title: 'Microsoft Purview', href: '/services/data-governance-compliance/microsoft-purview' },
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
    ],
  },
];

/* ─────────────────────────────────────────────
   INDUSTRIES DATA
───────────────────────────────────────────── */
const INDUSTRY_CATEGORIES = [
  {
    id: 'construction',
    label: 'Construction & Engineering',
    href: '/industries/construction',
    icon: '',
    description: 'Power BI dashboards, project cost tracking, and EPC analytics for Tier-2+ builders.',
    
  },
  {
    id: 'finance',
    label: 'Finance & Professional Services',
    href: '/industries/finance',
    icon: '',
    description: 'CFO dashboards, reconciliation automation, and enterprise AI for financial operations.',
   
  },
  {
    id: 'government',
    label: 'Government & Public Sector',
    href: '/industries/government',
    icon: '',
    description: 'Secure AI systems, governance frameworks, and data platforms for public sector agencies.',
    
  },
];

/* ─────────────────────────────────────────────
   SOLUTIONS (CASE STUDIES) DATA
───────────────────────────────────────────── */
const SOLUTION_CASES = [
  {
    id: 'tier2',
    client: 'Australian Tier-2 Builder',
    href: '/case-studies/australian-tier-2-builder',
    industry: 'Construction',
    outcome: 'Reduced cost-reporting time by 70% with a real-time Power BI + Fabric analytics platform.',
    tags: ['Microsoft Fabric', 'Power BI', 'Construction Analytics'],
  },
  {
    id: 'cfo',
    client: 'Professional Services CFO',
    href: '/case-studies/professional-services-cfo',
    industry: 'Finance',
    outcome: 'Unified multi-entity P&L visibility with an automated CFO dashboard suite in under 6 weeks.',
    tags: ['CFO Dashboards', 'Azure Data Factory', 'Data Warehouse'],
  },
  {
    id: 'ksa',
    client: 'KSA Government AI',
    href: '/case-studies/ksa-government-ai',
    industry: 'Government',
    outcome: 'Deployed a sovereign-compliant enterprise RAG system for a national government agency.',
    tags: ['Enterprise RAG', 'AI Governance', 'Microsoft Purview'],
  },
];

const STATIC_LINKS = [
  { label: 'Blog', href: '/blog' },
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

  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCatOpen,      setMobileCatOpen]      = useState<number | null>(null);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileIndustryCatOpen, setMobileIndustryCatOpen] = useState<number | null>(null);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef     = useRef<HTMLDivElement>(null);

  /* ── Effects ── */
  useEffect(() => {
    setActiveDropdown(null);
    setMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileCatOpen(null);
    setMobileIndustriesOpen(false);
    setMobileIndustryCatOpen(null);
    setMobileSolutionsOpen(false);
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

  const capsuleLink = (active: boolean) =>
    `flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-normal
     tracking-wide bg-transparent border-none cursor-pointer whitespace-nowrap
     transition-all duration-200
     ${active
       ? 'text-white bg-white/10'
       : 'text-white/60 hover:text-white hover:bg-white/8'
     }`;

  const servicesOpen   = activeDropdown === 'services';
  const industriesOpen = activeDropdown === 'industries';
  const solutionsOpen  = activeDropdown === 'solutions';

  return (
    <>
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

              {/* Industries trigger */}
              <div onMouseEnter={() => open('industries')} onMouseLeave={close}>
                <button
                  onClick={() => setActiveDropdown(v => v === 'industries' ? null : 'industries')}
                  className={capsuleLink(industriesOpen || isActive('/industries'))}
                >
                  Industries
                  <Chevron open={industriesOpen} />
                </button>
              </div>

              {/* Solutions trigger */}
              <div onMouseEnter={() => open('solutions')} onMouseLeave={close}>
                <button
                  onClick={() => setActiveDropdown(v => v === 'solutions' ? null : 'solutions')}
                  className={capsuleLink(solutionsOpen || isActive('/case-studies'))}
                >
                  Solutions we provide
                  <Chevron open={solutionsOpen} />
                </button>
              </div>

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
            DESKTOP MEGA MENU — SERVICES
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
          <div className="max-w-[1280px] mx-auto px-10 xl:px-16 py-10">
            <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-10 gap-y-8">
              {SERVICE_CATEGORIES.map((cat) => (
                <div key={cat.id} className="flex flex-col">
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
                  <div className="flex flex-col gap-0">
                    {cat.services.map((svc) => (
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
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer strip */}
            <div className="mt-8 pt-6 border-t border-gray-100
              flex items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <Link
                  href="/services"
                  className="flex items-center gap-2 text-[13px] font-medium
                    text-gray-400 hover:text-gray-800 no-underline transition-colors duration-150"
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
                <Link href="/case-studies" className="text-[13px] font-medium text-gray-400 hover:text-gray-800 no-underline transition-colors duration-150">Case Studies →</Link>
                <Link href="/industries" className="text-[13px] font-medium text-gray-400 hover:text-gray-800 no-underline transition-colors duration-150">Industries →</Link>
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
            DESKTOP MEGA MENU — INDUSTRIES
        ═══════════════════════════════════════ */}
        <div
          onMouseEnter={() => open('industries')}
          onMouseLeave={close}
          aria-hidden={!industriesOpen}
          className={`hidden lg:block fixed left-0 right-0
            bg-white border-b border-gray-200
            shadow-[0_12px_40px_rgba(0,0,0,0.10)]
            transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top
            z-[996]
            ${industriesOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          style={{ top: '74px' }}
        >
          <div className="max-w-[1280px] mx-auto px-10 xl:px-16 py-10">

            {/* Eyebrow */}
            <div className="mb-8">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-gray-400">
                Industries We Serve
              </p>
            </div>

            {/* 3-column industry cards */}
            <div className="grid grid-cols-3 gap-8">
              {INDUSTRY_CATEGORIES.map((ind) => (
                <div key={ind.id} className="group">
                  {/* Card heading */}
                  <div className="pb-3 mb-4" style={{ borderBottom: `2px solid ${BLUE}` }}>
                    <Link
                      href={ind.href}
                      className="flex items-center gap-2.5 no-underline transition-colors duration-150"
                      style={{ color: isActive(ind.href) ? BLUE : '#111827' }}
                      onMouseEnter={e => (e.currentTarget.style.color = BLUE)}
                      onMouseLeave={e => (e.currentTarget.style.color = isActive(ind.href) ? BLUE : '#111827')}
                    >
                      <span className="text-base">{ind.icon}</span>
                      <span className="text-[13px] font-bold tracking-[0.06em] uppercase">
                        {ind.label}
                      </span>
                    </Link>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                    {ind.description}
                  </p>

                  {/* Relevant solutions */}
                  <div className="flex flex-col gap-0">
                    <p className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-gray-300 mb-2">
                      Key Solutions
                    </p>
                    {/* {ind.solutions.map((sol) => (
                      <Link
                        key={sol.href}
                        href={sol.href}
                        className="flex items-center justify-between py-[6px] text-[13px]
                          font-normal no-underline transition-colors duration-150
                          border-b border-gray-50 last:border-0"
                        style={{ color: isActive(sol.href) ? BLUE : '#6B7280' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#111827')}
                        onMouseLeave={e => (e.currentTarget.style.color = isActive(sol.href) ? BLUE : '#6B7280')}
                      >
                        {sol.title}
                        <span className="text-[10px] text-gray-300 shrink-0">↗</span>
                      </Link>
                    ))} */}
                  </div>

                  {/* "Explore industry" CTA */}
                  <Link
                    href={ind.href}
                    className="inline-flex items-center gap-1 mt-4 text-[12.5px] font-semibold
                      no-underline transition-colors duration-150"
                    style={{ color: BLUE }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Explore {ind.label.split(' ')[0]} →
                  </Link>
                </div>
              ))}
            </div>

            {/* Footer strip */}
            <div className="mt-8 pt-6 border-t border-gray-100
              flex items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <Link href="/industries" className="flex items-center gap-2 text-[13px] font-medium text-gray-400 hover:text-gray-800 no-underline transition-colors duration-150">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                    <path d="M7 1L13 13H1L7 1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                  </svg>
                  All Industries
                </Link>
                <span className="text-gray-200 select-none">|</span>
                <Link href="/case-studies" className="text-[13px] font-medium text-gray-400 hover:text-gray-800 no-underline transition-colors duration-150">View Case Studies →</Link>
              </div>
              <Link
                href="/contact"
                className="px-5 py-2 rounded-full text-[13px] font-semibold
                  text-white no-underline whitespace-nowrap
                  transition-all duration-200 hover:opacity-90
                  hover:shadow-[0_4px_14px_rgba(37,99,235,0.4)]"
                style={{ backgroundColor: BLUE }}
              >
                Discuss Your Industry ↗
              </Link>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            DESKTOP MEGA MENU — SOLUTIONS
        ═══════════════════════════════════════ */}
        <div
          onMouseEnter={() => open('solutions')}
          onMouseLeave={close}
          aria-hidden={!solutionsOpen}
          className={`hidden lg:block fixed left-0 right-0
            bg-white border-b border-gray-200
            shadow-[0_12px_40px_rgba(0,0,0,0.10)]
            transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top
            z-[996]
            ${solutionsOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          style={{ top: '74px' }}
        >
          <div className="max-w-[1280px] mx-auto px-10 xl:px-16 py-10">

            {/* Eyebrow */}
            <div className="mb-8">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-gray-400">
                Solutions We've Delivered
              </p>
            </div>

            {/* 3-column case study cards */}
            <div className="grid grid-cols-3 gap-8">
              {SOLUTION_CASES.map((cs) => (
                <Link
                  key={cs.id}
                  href={cs.href}
                  className="group flex flex-col no-underline"
                >
                  {/* Industry pill */}
                  <div className="mb-3">
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px]
                        font-semibold tracking-wide uppercase"
                      style={{ backgroundColor: `${BLUE}12`, color: BLUE }}
                    >
                      {cs.industry}
                    </span>
                  </div>

                  {/* Client name */}
                  <div className="pb-3 mb-3" style={{ borderBottom: `2px solid ${BLUE}` }}>
                    <h3
                      className="text-[14px] font-bold leading-snug transition-colors duration-150"
                      style={{ color: isActive(cs.href) ? BLUE : '#111827' }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = BLUE)}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = isActive(cs.href) ? BLUE : '#111827')}
                    >
                      {cs.client}
                    </h3>
                  </div>

                  {/* Outcome */}
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-4 flex-1">
                    {cs.outcome}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read CTA */}
                  <span
                    className="inline-flex items-center gap-1 text-[12.5px] font-semibold
                      transition-colors duration-150 group-hover:opacity-75"
                    style={{ color: BLUE }}
                  >
                    Read Case Study →
                  </span>
                </Link>
              ))}
            </div>

            {/* Footer strip */}
            <div className="mt-8 pt-6 border-t border-gray-100
              flex items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <Link href="/case-studies" className="flex items-center gap-2 text-[13px] font-medium text-gray-400 hover:text-gray-800 no-underline transition-colors duration-150">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                    <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M4 5h6M4 7.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                  All Case Studies
                </Link>
                <span className="text-gray-200 select-none">|</span>
                <Link href="/industries" className="text-[13px] font-medium text-gray-400 hover:text-gray-800 no-underline transition-colors duration-150">Browse by Industry →</Link>
              </div>
              <Link
                href="/contact"
                className="px-5 py-2 rounded-full text-[13px] font-semibold
                  text-white no-underline whitespace-nowrap
                  transition-all duration-200 hover:opacity-90
                  hover:shadow-[0_4px_14px_rgba(37,99,235,0.4)]"
                style={{ backgroundColor: BLUE }}
              >
                Start Your Project ↗
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

            {/* ── SERVICES accordion ── */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(v => !v)}
                className={`w-full flex items-center justify-between
                  px-5 py-4 bg-transparent border-none cursor-pointer
                  text-[15px] font-medium transition-colors duration-150
                  ${mobileServicesOpen || isActive('/services') ? 'text-white' : 'text-white/65 hover:text-white'}`}
              >
                <span>Services</span>
                <Chevron open={mobileServicesOpen} />
              </button>

              <div className={`overflow-hidden transition-all duration-300
                ${mobileServicesOpen ? 'max-h-[2000px]' : 'max-h-0'}`}>
                <div className="bg-black/20 border-t border-white/[0.05]">
                  <div className="px-5 pt-3 pb-2">
                    <Link href="/services" className="text-[12.5px] font-medium no-underline transition-colors duration-150" style={{ color: BLUE }}>
                      Browse all services →
                    </Link>
                  </div>
                  {SERVICE_CATEGORIES.map((cat, ci) => (
                    <div key={cat.id} className="border-t border-white/[0.05]">
                      <div className="flex items-stretch">
                        <Link
                          href={cat.href}
                          className={`flex items-center gap-3 flex-1 px-5 py-3.5 no-underline transition-colors duration-150
                            ${isActive(cat.href) ? 'text-white' : 'text-white/55 hover:text-white'}`}
                        >
                          <span className="text-[11px] font-bold tracking-widest" style={{ color: BLUE + '80' }}>{cat.num}</span>
                          <span className="text-[14px] font-medium leading-snug">{cat.label}</span>
                        </Link>
                        {cat.services.length > 0 && (
                          <button
                            onClick={() => setMobileCatOpen(mobileCatOpen === ci ? null : ci)}
                            className="px-4 text-white/30 hover:text-white/60 bg-transparent border-none cursor-pointer transition-colors duration-150 shrink-0"
                            aria-label={`Expand ${cat.label}`}
                          >
                            <Chevron open={mobileCatOpen === ci} />
                          </button>
                        )}
                      </div>
                      {cat.services.length > 0 && (
                        <div className={`overflow-hidden transition-all duration-200
                          ${mobileCatOpen === ci ? 'max-h-[300px]' : 'max-h-0'}`}>
                          <div className="ml-[52px] mr-4 border-l border-white/[0.08] pb-2">
                            {cat.services.map((svc) => (
                              <Link
                                key={svc.href}
                                href={svc.href}
                                className={`flex items-center justify-between px-4 py-2.5 text-[13.5px] font-normal no-underline
                                  border-b border-white/[0.04] last:border-0 transition-colors duration-150
                                  ${isActive(svc.href) ? 'text-white' : 'text-white/40 hover:text-white/80'}`}
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

            {/* ── INDUSTRIES accordion ── */}
            <div>
              <button
                onClick={() => setMobileIndustriesOpen(v => !v)}
                className={`w-full flex items-center justify-between
                  px-5 py-4 bg-transparent border-none cursor-pointer
                  text-[15px] font-medium transition-colors duration-150
                  ${mobileIndustriesOpen || isActive('/industries') ? 'text-white' : 'text-white/65 hover:text-white'}`}
              >
                <span>Industries</span>
                <Chevron open={mobileIndustriesOpen} />
              </button>

              <div className={`overflow-hidden transition-all duration-300
                ${mobileIndustriesOpen ? 'max-h-[1200px]' : 'max-h-0'}`}>
                <div className="bg-black/20 border-t border-white/[0.05]">
                  <div className="px-5 pt-3 pb-2">
                    <Link href="/industries" className="text-[12.5px] font-medium no-underline" style={{ color: BLUE }}>
                      All industries →
                    </Link>
                  </div>
                  {INDUSTRY_CATEGORIES.map((ind, ii) => (
                    <div key={ind.id} className="border-t border-white/[0.05]">
                      <div className="flex items-stretch">
                        <Link
                          href={ind.href}
                          className={`flex items-center gap-3 flex-1 px-5 py-3.5 no-underline transition-colors duration-150
                            ${isActive(ind.href) ? 'text-white' : 'text-white/55 hover:text-white'}`}
                        >
                          <span className="text-base">{ind.icon}</span>
                          <span className="text-[14px] font-medium leading-snug">{ind.label}</span>
                        </Link>
                        <button
                          onClick={() => setMobileIndustryCatOpen(mobileIndustryCatOpen === ii ? null : ii)}
                          className="px-4 text-white/30 hover:text-white/60 bg-transparent border-none cursor-pointer transition-colors duration-150 shrink-0"
                          aria-label={`Expand ${ind.label}`}
                        >
                          <Chevron open={mobileIndustryCatOpen === ii} />
                        </button>
                      </div>
                      <div className={`overflow-hidden transition-all duration-200
                        ${mobileIndustryCatOpen === ii ? 'max-h-[300px]' : 'max-h-0'}`}>
                        <div className="ml-[52px] mr-4 border-l border-white/[0.08] pb-2">
                          <p className="px-4 pt-2 pb-1.5 text-[11px] font-medium text-white/30">{ind.description}</p>
                          {/* {ind.solutions.map((sol) => (
                            <Link
                              key={sol.href}
                              href={sol.href}
                              className={`flex items-center justify-between px-4 py-2.5 text-[13.5px] font-normal no-underline
                                border-b border-white/[0.04] last:border-0 transition-colors duration-150
                                ${isActive(sol.href) ? 'text-white' : 'text-white/40 hover:text-white/80'}`}
                            >
                              {sol.title}
                              <span className="text-[10px] text-white/20 shrink-0">↗</span>
                            </Link>
                          ))} */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── SOLUTIONS accordion ── */}
            <div>
              <button
                onClick={() => setMobileSolutionsOpen(v => !v)}
                className={`w-full flex items-center justify-between
                  px-5 py-4 bg-transparent border-none cursor-pointer
                  text-[15px] font-medium transition-colors duration-150
                  ${mobileSolutionsOpen || isActive('/case-studies') ? 'text-white' : 'text-white/65 hover:text-white'}`}
              >
                <span>Solutions we provide</span>
                <Chevron open={mobileSolutionsOpen} />
              </button>

              <div className={`overflow-hidden transition-all duration-300
                ${mobileSolutionsOpen ? 'max-h-[900px]' : 'max-h-0'}`}>
                <div className="bg-black/20 border-t border-white/[0.05]">
                  <div className="px-5 pt-3 pb-2">
                    <Link href="/case-studies" className="text-[12.5px] font-medium no-underline" style={{ color: BLUE }}>
                      All case studies →
                    </Link>
                  </div>
                  {SOLUTION_CASES.map((cs) => (
                    <div key={cs.id} className="border-t border-white/[0.05]">
                      <Link
                        href={cs.href}
                        className={`flex flex-col px-5 py-3.5 no-underline transition-colors duration-150
                          ${isActive(cs.href) ? 'text-white' : 'text-white/60 hover:text-white'}`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase"
                            style={{ backgroundColor: `${BLUE}20`, color: BLUE }}
                          >
                            {cs.industry}
                          </span>
                        </div>
                        <span className="text-[14px] font-medium leading-snug mb-1">{cs.client}</span>
                        <span className="text-[12px] text-white/35 leading-relaxed">{cs.outcome}</span>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {cs.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/[0.06] text-white/30">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Static links */}
            {[...STATIC_LINKS, { label: 'Contact', href: '/contact' }].map((link) => (
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