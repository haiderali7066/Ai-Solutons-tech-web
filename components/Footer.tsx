// ─────────────────────────────────────────────────────────────
//  AI Solution Technologies — Swiss Style Footer Component
//  Next.js 13+ | Tailwind CSS | Pure Server Component
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import React from "react";
import Image from "next/image";
/* ═══════════════════════════════════════════════════════════
   NAVIGATION & DATA
═══════════════════════════════════════════════════════════ */
const NAV_COLS = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Industries", href: "/industries" },
    ],
  },
  {
    title: "Core Services",
    links: [
      { label: "AI & Intelligent Systems", href: "/services/ai-intelligent-systems" },
      { label: "Microsoft Fabric", href: "/services/microsoft-fabric" },
      { label: "Data Engineering", href: "/services/data-engineering-integration" },
      { label: "BI & Analytics", href: "/services/business-intelligence-analytics" },
      { label: "Cloud Migration", href: "/services/cloud-migration-modernisation" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Data Modelling", href: "/services/data-modelling-warehousing" },
      { label: "Data Governance", href: "/services/data-governance-compliance" },
      { label: "CRM & Applications", href: "/services/crm-business-applications" },
      { label: "Custom Development", href: "/services/custom-web-software-development" },
      { label: "All Services →", href: "/services" },
    ],
  },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ai-solution-technologies-733322392", iconKey: "linkedin" },
  { label: "X/Twitter", href: "https://x.com/AIST_Technology", iconKey: "twitter" },
  { label: "Instagram", href: "https://www.instagram.com/ai_solution_technologies/", iconKey: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/people/AI-Solution-Technologies/61562049968800/", iconKey: "facebook" },
  { label: "TikTok", href: "https://www.tiktok.com/@ai_solution_technologies", iconKey: "tiktok" },
];

/* ═══════════════════════════════════════════════════════════
   ICONS & LOGOS (Flat & Geometric)
═══════════════════════════════════════════════════════════ */
const Si = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props} />
);

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: (
    <Si><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></Si>
  ),
  twitter: (
    <Si><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></Si>
  ),
  instagram: (
    <Si viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" /></Si>
  ),
  facebook: (
    <Si><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></Si>
  ),
  tiktok: (
    <Si><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.13 6.33 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.01a8.16 8.16 0 0 0 4.78 1.52V7.08a4.85 4.85 0 0 1-4.01-.39z" /></Si>
  ),
};

function FlatLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="8" fill="#ffffff" />
      <path d="M22 12.5L11.4 27.3H32.6L22 12.5Z" stroke="#050505" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="22" cy="12.5" r="3" fill="#050505" />
      <circle cx="11.4" cy="27.3" r="3" fill="#050505" />
      <circle cx="32.6" cy="27.3" r="3" fill="#050505" />
    </svg>
  );
}



/* ═══════════════════════════════════════════════════════════
   FOOTER COMPONENT
═══════════════════════════════════════════════════════════ */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] font-sans border-t border-zinc-900 selection:bg-blue-600 selection:text-white">
      
      {/* ── TOP GRID: STRICT ALIGNMENT ───────────────────── */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-4 flex flex-col justify-between items-start">
            <div>
              <Link href="/" className="flex items-center gap-4 no-underline mb-8 group">
                <Image src="/logo.png" alt="AI Solution Technologies" width={48} height={48} className="rounded-full" />
                <div className="leading-none">
                  <div className="text-lg font-bold text-white tracking-tight group-hover:text-zinc-300 transition-colors">
                    AI Solution
                  </div>
                  <div className="text-lg font-bold text-zinc-500 tracking-tight">
                    Technologies
                  </div>
                </div>
              </Link>
              <p className="text-[15px] text-zinc-400 leading-relaxed mb-8 max-w-sm font-medium">
AI Solution Technologies is a Microsoft-aligned data, analytics and AI consultancy. We help enterprises in Australia, UAE and Saudi Arabia modernise reporting, build governed data foundations, and deploy AI on data they can audit.
              </p>
            </div>

            <div className="flex gap-4 mt-12">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-zinc-500 hover:text-white transition-colors duration-200"
                >
                  {socialIcons[s.iconKey]}
                </a>
              ))}
            </div>
          </div>

          {/* NAVIGATION COLUMNS */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12 lg:pl-16">
            {NAV_COLS.map((col, ci) => (
              <div key={ci} className="flex flex-col">
                {/* Swiss typography: Small, bold, widely tracked headers */}
                <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-100 mb-6">
                  {col.title}
                </h3>
                <ul className="list-none m-0 p-0 flex flex-col gap-4">
                  {col.links.map((link, li) => (
                    <li key={li}>
                      <Link
                        href={link.href}
                        className="text-[15px] font-medium text-zinc-500 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MASSIVE STRUCTURAL TYPOGRAPHY ─────────────────── */}
      <div className="w-full overflow-hidden flex flex-col items-center justify-center pb-8 select-none pointer-events-none">
        <div className="w-full text-center leading-[0.75]">
          <span className="block text-[14vw] font-bold tracking-tighter text-amber-50">
            AI SOLUTION
          </span>
          <span className="block text-[14vw] font-bold tracking-tighter text-amber-50">
            TECHNOLOGIES
          </span>
        </div>
      </div>

      {/* ── BOTTOM BAR ────────────────────────────────────── */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <p className="text-[13px] text-zinc-500 m-0 font-medium">
            © {currentYear} AI Solution Technologies.
          </p>
          <div className="flex items-center gap-4">
            {["🇦🇺 Australia", "🇦🇪 UAE", "🇸🇦 Saudi Arabia"].map((r) => (
              <span key={r} className="text-[12px] text-zinc-600 font-medium">
                {r}
              </span>
            ))}
          </div>
        </div>
        
        <p className="text-[13px] text-zinc-600 m-0 font-medium">
          Developed by{" "}
          <a target='_blank'
            href="https://devntomsolutions.com  "
            className="text-white hover:underline transition-all duration-200"
          >
            Devntom Solutions
          </a>
        </p>
      </div>
      
    </footer>
  );
}