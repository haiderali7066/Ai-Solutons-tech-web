// ─────────────────────────────────────────────────────────────
//  AI Solution Technologies — Footer Component
//  Inspired by Kings Lending layout | Blue & Black Theme
//  Next.js 13+ | Tailwind CSS | Server Component
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import React from "react";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════════
    DATA
═══════════════════════════════════════════════════════════ */
const SERVICES = [
  { label: "AI & Intelligent Systems", href: "/services/ai-intelligent-systems" },
  { label: "Microsoft Fabric", href: "/services/microsoft-fabric" },
  { label: "Data Engineering & Integration", href: "/services/data-engineering-integration" },
  { label: "Business Intelligence & Analytics", href: "/services/business-intelligence-analytics" },
  { label: "Cloud Migration & Modernisation", href: "/services/cloud-migration-modernisation" },
  { label: "CRM & Business Applications", href: "/services/crm-business-applications" },
  { label: "Data Governance & Compliance", href: "/services/data-governance-compliance" },
  { label: "Managed Services & Support", href: "/services/managed-services-support" },
  { label: "Enterprise Data Platforms", href: "/services/enterprise-data-platforms" },
];

const INFO_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Solutions we provided", href: "/case-studies" },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/AI-Solution-Technologies/61562049968800/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ai_solution_technologies/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ai-solution-technologies-733322392",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X/Twitter",
    href: "https://x.com/AIST_Technology",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

/* ═══════════════════════════════════════════════════════════
    ICONS
═══════════════════════════════════════════════════════════ */
function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.62a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.05 2a9 9 0 0 1 7.95 7.93M14.05 6A5 5 0 0 1 18 10" strokeDasharray="2 2" opacity="0.6" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

interface LocationIconProps {
  className?: string;
}

function LocationIcon({ className = "text-blue-400" }: LocationIconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ChevronDoubleRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 flex-shrink-0 mt-1">
      <polyline points="13 17 18 12 13 7" />
      <polyline points="6 17 11 12 6 7" />
    </svg>
  );
}



// Placeholder for the landmark line-art in the circles
const LandmarkIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════
    FOOTER COMPONENT
═══════════════════════════════════════════════════════════ */
export default function Footer() {
  const currentYear = new Date().getFullYear();


  

  return (
    <footer className="font-sans selection:bg-blue-600 selection:text-white border-t border-white/5">
      <div
        className="relative w-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Deep, premium dark overlay for contrast */}
        <div className="absolute inset-0 bg-[#030712]/92 backdrop-blur-[2px]" />

        {/* ── TOP HERO SECTION ───────────────────────── */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

            {/* Logo + tagline (Col span 3) */}
            <div className="flex flex-col items-start gap-3 lg:col-span-3">
              <Link href="/" className="flex items-center gap-4 no-underline group">
                <Image
                  src="/logo.png"
                  alt="AI Solution Technologies"
                  width={56}
                  height={56}
                  className="rounded-full ring-2 ring-blue-500/40 group-hover:ring-blue-400 transition-all duration-300"
                />
                <div className="leading-tight">
                  <div className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                    AI Solution
                  </div>
                  <div className="text-xl font-bold text-blue-400 tracking-tight">
                    Technologies
                  </div>
                </div>
              </Link>
              <p className="text-[11px] tracking-[0.2em] uppercase text-blue-400/80 font-bold mt-1 pl-1">
                Data · Analytics · AI
              </p>
            </div>

            {/* Description (Col span 5) */}
            <div className="lg:col-span-5 lg:px-8 lg:border-l lg:border-r border-white/10">
              <p className="text-[14px] text-zinc-400 leading-relaxed font-normal">
                AI Solution Technologies is a Microsoft-aligned data, analytics, and AI consultancy.
                We help enterprises in Australia, UAE, and Saudi Arabia modernise reporting, build
                governed data foundations, and deploy auditable enterprise AI solutions.
              </p>
            </div>

            {/* Direct Contact Info (Col span 4) */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-6 lg:pl-8 justify-between">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-zinc-500">
                    Say Hello
                  </p>
                  <a
                    href="tel:+61466558862"
                    className="mt-0.5 block text-base font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    +61 466 558 862
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <EmailIcon />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-zinc-500">
                    Email Us
                  </p>
                  <a
                    href="mailto:info@aisolutiontechnologies.com"
                    className="mt-0.5 block text-sm font-semibold text-zinc-300 hover:text-blue-400 transition-colors break-all"
                  >
                    info@aisolutiontechnologies.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Divider line */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        {/* ── MID SECTION: 3 COLUMNS ───────────────────────── */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

            {/* COL 1: Membership + Socials (Span 5) */}
            <div className="md:col-span-5 flex flex-col gap-8">
              <div>
                <h3 className="text-[11px] font-bold tracking-[0.22em] uppercase text-blue-400 mb-4">
                  Membership & Accreditations
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {/* Microsoft Partner */}
                  <div className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
                      <rect x="2" y="2" width="9" height="9" fill="#f25022" rx="0.5" />
                      <rect x="13" y="2" width="9" height="9" fill="#7fba00" rx="0.5" />
                      <rect x="2" y="13" width="9" height="9" fill="#00a4ef" rx="0.5" />
                      <rect x="13" y="13" width="9" height="9" fill="#ffb900" rx="0.5" />
                    </svg>
                    <div>
                      <p className="text-[9px] text-zinc-500 leading-none">Microsoft</p>
                      <p className="text-[12px] font-bold text-zinc-200 leading-tight">Partner</p>
                    </div>
                  </div>

                  {["ISO 27001", "ISO 42001", "ICN Gateway", "Tech Council of Australia", "ICT Services SCM0020"].map((badge) => (
                    <div key={badge} className="inline-flex items-center bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2">
                      <p className="text-[12px] font-semibold text-zinc-300">{badge}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[11px] font-bold tracking-[0.22em] uppercase text-blue-400 mb-3">
                  Connect With Us
                </h3>
                <div className="flex items-center gap-2.5">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/5 text-zinc-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/40 transition-all duration-300"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* COL 2: Our Services (Span 4) */}
            <div className="md:col-span-4">
              <h3 className="text-[11px] font-bold tracking-[0.22em] uppercase text-blue-400 mb-4">
                Our Services
              </h3>
              <ul className="list-none m-0 p-0 flex flex-col gap-3">
                {SERVICES.map((s, i) => (
                  <li key={i}>
                    <Link
                      href={s.href}
                      className="flex items-start gap-2 text-[13px] font-medium text-zinc-400 hover:text-zinc-200 transition-colors duration-200 group"
                    >
                      <ChevronDoubleRight />
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                        {s.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 3: Information (Span 3) */}
            <div className="md:col-span-3">
              <h3 className="text-[11px] font-bold tracking-[0.22em] uppercase text-blue-400 mb-4">
                Information
              </h3>
              <ul className="list-none m-0 p-0 flex flex-col gap-3">
                {INFO_LINKS.map((l, i) => (
                  <li key={i}>
                    <Link
                      href={l.href}
                      className="flex items-center gap-2 text-[13px] font-medium text-zinc-400 hover:text-zinc-200 transition-colors duration-200 group"
                    >
                      <ChevronDoubleRight />
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                        {l.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Dynamic Divider line */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        {/* ── NEW HORIZONTAL BOTTOM SECTION: GLOBAL OFFICES ───────────────── */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-12 bg-[#0B0F19]">
      {/* ════════ HEADER SECTION ════════ */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            Global Presence
            <span className="w-8 h-[1px] bg-blue-500/30"></span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight font-syne text-white">
            Global Network
          </h2>
          <p className="text-xs md:text-sm text-slate-400 max-w-2xl mx-auto mt-1 font-light">
            .
          </p>
        </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Office Card: Australia */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0F1623] border border-blue-500/10 p-6 hover:border-blue-500/30 transition-all duration-300 group flex flex-col min-h-[220px]">
          {/* Left Border Indicator */}
          <div className="absolute left-0 top-0 h-full w-[3px] bg-blue-500" />
          
          {/* Top Section: Landmark & Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full border border-blue-500/20 flex items-center justify-center shrink-0 bg-blue-500/5">
              <LandmarkIcon className="w-8 h-8 text-blue-400/80" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl leading-none mb-1" role="img" aria-label="Australia Flag">🇦🇺</span>
              <h4 className="text-white font-bold text-lg mb-1.5">Australia</h4>
              <span className="rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold px-3 py-0.5 uppercase tracking-wider">
                Global Headquarters
              </span>
            </div>
          </div>

          <div className="w-full h-px bg-white/5 mb-5" />

          {/* Address Section */}
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
              <LocationIcon className="w-4 h-4 text-blue-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-zinc-200 font-semibold">33 East Street, Granville</span>
              <span className="text-xs text-zinc-500 mt-0.5">Sydney, NSW 2142</span>
            </div>
          </div>

          <div className="w-full h-px bg-white/5 mb-5" />

          {/* Phone Section */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
              <PhoneIcon className="w-4 h-4 text-blue-400" />
            </div>
            <span className="text-sm text-zinc-300 font-medium">+61 2 9876 5432</span>
          </div>
        </div>

        {/* Office Card: UAE */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0F1623] border border-emerald-500/10 p-6 hover:border-emerald-500/30 transition-all duration-300 group flex flex-col min-h-[220px]">
          <div className="absolute left-0 top-0 h-full w-[3px] bg-emerald-500" />
          
          {/* Top Section */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full border border-emerald-500/20 flex items-center justify-center shrink-0 bg-emerald-500/5">
              <LandmarkIcon className="w-8 h-8 text-emerald-400/80" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl leading-none mb-1" role="img" aria-label="UAE Flag">🇦🇪</span>
              <h4 className="text-white font-bold text-lg mb-1.5">United Arab Emirates</h4>
              <span className="rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-3 py-0.5 uppercase tracking-wider">
                MENA Enterprise Hub
              </span>
            </div>
          </div>

          <div className="w-full h-px bg-white/5 mb-5" />

          {/* Address Section */}
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
              <LocationIcon className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-zinc-200 font-semibold">Dubai Technology Center</span>
              <span className="text-xs text-zinc-500 mt-0.5">Dubai, UAE</span>
            </div>
          </div>

          <div className="w-full h-px bg-white/5 mb-5" />

          {/* Phone Section */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
              <PhoneIcon className="w-4 h-4 text-emerald-500" />
            </div>
            <span className="text-sm text-zinc-300 font-medium">+971 4 123 4567</span>
          </div>
        </div>

        {/* Office Card: Saudi Arabia */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0F1623] border border-purple-500/10 p-6 hover:border-purple-500/30 transition-all duration-300 group flex flex-col min-h-[220px]">
          <div className="absolute left-0 top-0 h-full w-[3px] bg-purple-500" />
          
          {/* Top Section */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full border border-purple-500/20 flex items-center justify-center shrink-0 bg-purple-500/5">
              <LandmarkIcon className="w-8 h-8 text-purple-400/80" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl leading-none mb-1" role="img" aria-label="Saudi Arabia Flag">🇸🇦</span>
              <h4 className="text-white font-bold text-lg mb-1.5">Saudi Arabia</h4>
              <span className="rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-bold px-3 py-0.5 uppercase tracking-wider">
                Digital Transformation
              </span>
            </div>
          </div>

          <div className="w-full h-px bg-white/5 mb-5" />

          {/* Address Section */}
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
              <LocationIcon className="w-4 h-4 text-purple-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-zinc-200 font-semibold">Riyadh Digital City</span>
              <span className="text-xs text-zinc-500 mt-0.5">Riyadh, KSA</span>
            </div>
          </div>

          <div className="w-full h-px bg-white/5 mb-5" />

          {/* Phone Section */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
              <PhoneIcon className="w-4 h-4 text-purple-500" />
            </div>
            <span className="text-sm text-zinc-300 font-medium">+966 11 876 5432</span>
          </div>
        </div>
      </div>
    </div>

        {/* ── BOTTOM BAR ────────────────────────────────────── */}
        <div className="relative z-10 border-t border-white/5 bg-black/20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[12px] text-zinc-500 text-center sm:text-left font-medium">
              © {currentYear} AI Solution Technologies. All rights reserved.
            </p>
            <p className="text-[12px] text-zinc-600 text-center sm:text-right font-medium">
              Developed by{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://devntomsolutions.com"
                className="text-zinc-400 hover:text-blue-400 hover:underline transition-all duration-200"
              >
                Devntom Solutions
              </a>
            </p>
          </div>
        </div>

      </div>


      
    </footer>
  );
}