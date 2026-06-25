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
  { label: "Case Studies", href: "/case-studies" },
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
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.62a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      {/* Animated rings */}
      <path d="M14.05 2a9 9 0 0 1 7.95 7.93M14.05 6A5 5 0 0 1 18 10" strokeDasharray="2 2" opacity="0.6" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ChevronDoubleRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 flex-shrink-0 mt-0.5">
      <polyline points="13 17 18 12 13 7" />
      <polyline points="6 17 11 12 6 7" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER COMPONENT
═══════════════════════════════════════════════════════════ */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-sans selection:bg-blue-600 selection:text-white ">

      {/* ── TOP HERO SECTION with background image ───────── */}
      <div
        className="relative w-full "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark blue overlay */}
        <div className="absolute inset-0 bg-[#050c1a]/88" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

            {/* Logo + tagline */}
            <div className="flex flex-col items-start gap-3">
              <Link href="/" className="flex items-center gap-4 no-underline group">
                <Image
                  src="/logo.png"
                  alt="AI Solution Technologies"
                  width={56}
                  height={56}
                  className="rounded-full ring-2 ring-blue-500/40"
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
              <p className="text-[12px] tracking-[0.18em] uppercase text-blue-400 font-semibold mt-1 pl-1">
                Data · Analytics · AI
              </p>
            </div>

            {/* Description */}
            <div className="md:px-8 md:border-l md:border-r border-white/10">
              <p className="text-[15px] text-zinc-300 leading-relaxed font-medium">
                AI Solution Technologies is a Microsoft-aligned data, analytics and AI consultancy.
                We help enterprises in Australia, UAE and Saudi Arabia modernise reporting, build
                governed data foundations, and deploy AI on data they can audit.
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-start md:items-end gap-2">
              <div className="flex items-center gap-3">
                <PhoneIcon />
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-blue-400 font-bold mb-0.5">
                    Say Hello
                  </p>
                  <a
                    href="tel:+61000000000"
                    className="text-xl font-bold text-white hover:text-blue-300 transition-colors tracking-wide"
                  >
                    +61 466 558 862
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Divider line */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        </div>

        {/* ── MID SECTION: 4 COLUMNS ───────────────────────── */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-14 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* COL 1: Membership + Socials */}
            <div className="flex flex-col gap-8">
              <div>
  <h3 className="text-[11px] font-bold tracking-[0.22em] uppercase text-blue-400 mb-5">
    Membership
  </h3>

  {/* Membership Badges */}
  <div className="flex flex-wrap gap-3">

    {/* Microsoft Partner */}
    <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="9" height="9" fill="#f25022" rx="1" />
        <rect x="13" y="2" width="9" height="9" fill="#7fba00" rx="1" />
        <rect x="2" y="13" width="9" height="9" fill="#00a4ef" rx="1" />
        <rect x="13" y="13" width="9" height="9" fill="#ffb900" rx="1" />
      </svg>
      <div>
        <p className="text-[10px] text-zinc-400 leading-none">Microsoft</p>
        <p className="text-[13px] font-bold text-white leading-tight">Partner</p>
      </div>
    </div>

    {/* ISO 27001 */}
    <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-lg px-4 py-3">
      <p className="text-[13px] font-bold text-white">ISO 27001</p>
    </div>

    {/* ISO 42001 */}
    <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-lg px-4 py-3">
      <p className="text-[13px] font-bold text-white">ISO 42001</p>
    </div>

    {/* ICN Gateway */}
    <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-lg px-4 py-3">
      <p className="text-[13px] font-bold text-white">ICN Gateway</p>
    </div>

    {/* Tech Council of Australia */}
    <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-lg px-4 py-3">
      <p className="text-[13px] font-bold text-white">
        Tech Council of Australia
      </p>
    </div>

    {/* ICT Services SCM0020 */}
    <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-lg px-4 py-3">
      <p className="text-[13px] font-bold text-white">
        ICT_Services_SCM0020 Scheme
      </p>
    </div>

  </div>
</div>

              <div>
                <h3 className="text-[11px] font-bold tracking-[0.22em] uppercase text-blue-400 mb-4">
                  Get Social
                </h3>
                <div className="flex items-center gap-3">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-9 h-9 flex items-center justify-center rounded-md bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-blue-600/30 hover:border-blue-500/50 transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* COL 2: Our Services */}
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.22em] uppercase text-blue-400 mb-5">
                Our Services
              </h3>
              <ul className="list-none m-0 p-0 flex flex-col gap-3.5">
                {SERVICES.map((s, i) => (
                  <li key={i}>
                    <Link
                      href={s.href}
                      className="flex items-start gap-2.5 text-[14px] font-medium text-zinc-300 hover:text-white transition-colors duration-200 group"
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

            {/* COL 3: Information */}
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.22em] uppercase text-blue-400 mb-5">
                Information
              </h3>
              <ul className="list-none m-0 p-0 flex flex-col gap-3.5">
                {INFO_LINKS.map((l, i) => (
                  <li key={i}>
                    <Link
                      href={l.href}
                      className="flex items-center gap-2.5 text-[14px] font-medium text-zinc-300 hover:text-white transition-colors duration-200 group"
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

            {/* COL 4: Contact Card */}
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.22em] uppercase text-blue-400 mb-5">
                Contact Us
              </h3>
              <div className="bg-[#0a1628]/80 border border-blue-900/50 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-sm">

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center">
                    <EmailIcon />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.18em] uppercase text-blue-400 font-bold mb-1">
                      Email Us
                    </p>
                    <a
                      href="mailto:info@aisolutiontechnologies.com"
                      className="text-[13px] text-zinc-300 hover:text-white transition-colors duration-200 break-all"
                    >
                      info@aisolutiontechnologies.com
                    </a>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-blue-900/40" />

                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center">
                    <LocationIcon />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.18em] uppercase text-blue-400 font-bold mb-1">
                      Visit Our Office
                    </p>
                    <div className="flex flex-col gap-0.5">
                      {["🇦🇺 Australia", "🇦🇪 UAE", "🇸🇦 Saudi Arabia"].map((r) => (
                        <span key={r} className="text-[13px] text-zinc-300 font-medium">{r}</span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ── BOTTOM BAR ────────────────────────────────────── */}
        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-[13px] text-zinc-400 text-center font-medium">
              © {currentYear} AI Solution Technologies. All rights reserved.
            </p>
            <p className="text-[13px] text-zinc-500 text-center font-medium">
              Developed by{" "}
              <a
                target="_blank"
                href="https://devntomsolutions.com"
                className="text-blue-400 hover:text-white hover:underline transition-all duration-200"
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