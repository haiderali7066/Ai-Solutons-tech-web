"use client";
import Link from "next/link";


import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const COL_COUNT = 7;

const SERVICES = [
  {
    num: "01",
    title: "AI & Intelligent Systems",
    desc: "Enterprise AI assistants, RAG implementations, AI on ERP and finance systems, anomaly detection, and agentic automation.",
    tags: ["AI", "GenAI", "Automation"],
    href: "/services/ai-intelligent-systems",
  },
  {
    num: "02",
    title: "Microsoft Fabric",
    desc: "Unified analytics platform for data engineering, warehousing, real-time intelligence, and Power BI.",
    tags: ["Microsoft Fabric", "Lakehouse", "Analytics"],
    href: "/services/microsoft-fabric",
  },
  {
    num: "03",
    title: "Data Engineering & Integration",
    desc: "Scalable data pipelines, ETL/ELT services, API integrations, and real-time data processing.",
    tags: ["ETL", "Integration", "Data Pipelines"],
    href: "/services/data-engineering-integration",
  },
  {
    num: "04",
    title: "Data Modelling & Warehousing",
    desc: "Enterprise data architecture, dimensional modelling, master data management, and data warehouse solutions.",
    tags: ["Data Warehouse", "MDM", "Architecture"],
    href: "/services/data-modelling-warehousing",
  },
  {
    num: "05",
    title: "Business Intelligence & Analytics",
    desc: "Power BI consulting, executive dashboards, operational analytics, and advanced forecasting solutions.",
    tags: ["Power BI", "Dashboards", "Analytics"],
    href: "/services/business-intelligence-analytics",
  },
  {
    num: "06",
    title: "Cloud Migration & Modernisation",
    desc: "Azure and AWS migration, platform modernisation, DevOps, and enterprise cloud transformation.",
    tags: ["Azure", "Cloud", "Migration"],
    href: "/services/cloud-migration-modernisation",
  },
  {
    num: "07",
    title: "Data Governance & Compliance",
    desc: "Governance frameworks, Microsoft Purview, security controls, compliance, and AI governance.",
    tags: ["Governance", "Security", "Compliance"],
    href: "/services/data-governance-compliance",
  },
  {
    num: "08",
    title: "CRM & Business Applications",
    desc: "Dynamics 365, Power Platform, CRM analytics, customer intelligence, and business process automation.",
    tags: ["Dynamics 365", "CRM", "Power Platform"],
    href: "/services/crm-business-applications",
  },
  {
    num: "09",
    title: "Custom Web & Software Development",
    desc: "Custom enterprise software, web applications, portals, dashboards, SaaS platforms, and API development.",
    tags: ["Web Apps", "Software", "SaaS"],
    href: "/services/custom-web-software-development",
  },
];

function GridLines() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        display: "grid",
        gridTemplateColumns: `repeat(${COL_COUNT}, 1fr)`,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {Array.from({ length: COL_COUNT - 1 }).map((_, i) => (
        <div
          key={i}
          style={{
            borderRight: "1px solid rgba(255, 255, 255, 0.03)",
            height: "100%",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Inline responsive styles injected once ─── */
const RESPONSIVE_CSS = `
  .services-hero-text {
    font-size: clamp(2.2rem, 7.5vw, 7rem);
    letter-spacing: -0.03em;
    line-height: 1.1;
  }

  .services-row {
    display: grid;
    grid-template-columns: 4rem 2fr 2.5fr 3rem;
    gap: 2rem;
    padding: 3rem 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    align-items: start;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .services-row:active {
    background: rgba(255, 255, 255, 0.03) !important;
  }

  .services-arrow {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding-top: 0.4rem;
    transition: all 0.3s ease;
  }

  /* ── Tablet (768px – 1023px) ── */
  @media (max-width: 1023px) {
    .services-row {
      grid-template-columns: 3rem 1fr 1fr 2.5rem;
      gap: 1.2rem;
      padding: 2rem 1rem;
    }
  }

  /* ── Mobile (< 768px) ── */
  @media (max-width: 767px) {
    .services-hero-text {
      font-size: clamp(2rem, 10vw, 3.5rem);
    }

    .services-row {
      grid-template-columns: 1fr;
      gap: 0.75rem;
      padding: 1.75rem 0;
    }

    .services-row-num {
      display: none !important;
    }

    .services-row-arrow {
      display: none !important;
    }

    .services-row-title {
      font-size: clamp(1.15rem, 5vw, 1.5rem) !important;
    }

    .services-header-pill {
      margin-top: 2.5rem !important;
    }

    .services-list-wrapper {
      padding: 0 1.25rem !important;
    }

    .services-list-inner {
      padding: 1rem 0 5rem !important;
    }
  }

  /* ── Small Mobile (< 480px) ── */
  @media (max-width: 479px) {
    .services-hero-text {
      font-size: clamp(1.75rem, 9.5vw, 2.8rem);
    }
  }

  /* ── Touch / hover states for non-pointer devices ── */
  @media (hover: none) {
    .services-row {
      transform: none !important;
    }
  }
`;

export default function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const servicesWordRef = useRef<HTMLSpanElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  rowRefs.current = [];

  /* Detect mobile once on mount */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Inject CSS once */
  useEffect(() => {
    if (typeof document === "undefined") return;
    const id = "services-responsive-css";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.textContent = RESPONSIVE_CSS;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=50%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.set(servicesWordRef.current, {
        scale: 5,
        opacity: 0,
        transformOrigin: "center center",
      });

      gsap.set(line2Ref.current, { opacity: 0, y: 35 });
      gsap.set(line3Ref.current, { opacity: 0, y: 50 });

      tl.to(
        servicesWordRef.current,
        { scale: 1, opacity: 1, ease: "power3.out", duration: 0.5 },
        0,
      )
        .to(
          line2Ref.current,
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.38 },
          0.25,
        )
        .to(
          line3Ref.current,
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.38 },
          0.42,
        );

      rowRefs.current.forEach((row) => {
        if (!row) return;
        gsap.fromTo(
          row,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* ── Hero / Pin Section ── */}
      <section
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          background: "#080b11",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GridLines />

        {/* Radial glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "50vw",
            height: "50vw",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 1.5rem",
            userSelect: "none",
            width: "100%",
          }}
        >
          {/* Line 1 */}
          <div
            ref={line1Ref}
            className="services-hero-text"
            style={{
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.25em",
              flexWrap: "wrap",
            }}
          >
            <span>Our</span>
            <span
              ref={servicesWordRef}
              style={{
                display: "inline-block",
                willChange: "transform, opacity",
                color: "#3b82f6",
                fontWeight: 600,
              }}
            >
              capabilities
            </span>
          </div>

          {/* Line 2 */}
          <div
            ref={line2Ref}
            className="services-hero-text"
            style={{
              color: "rgba(255, 255, 255, 0.45)",
              fontWeight: 300,
              willChange: "transform, opacity",
            }}
          >
            engineered for
          </div>

          {/* Line 3 */}
          <div
            ref={line3Ref}
            className="services-hero-text"
            style={{
              color: "rgba(255, 255, 255, 0.15)",
              fontWeight: 400,
              willChange: "transform, opacity",
            }}
          >
            intelligent enterprises
          </div>
        </div>
      </section>

      {/* ── Services List Section ── */}
      <div
        className="services-list-wrapper"
        style={{
          position: "relative",
          background: "#080b11",
          overflow: "hidden",
          padding: "0 0 8rem",
        }}
      >
        <GridLines />

        <div
          className="services-list-inner"
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "0 2.5rem",
          }}
        >
          {/* Header pill */}
          <div
            className="services-header-pill"
            style={{
              padding: "1rem 0 2rem",
              display: "flex",
              alignItems: "center",
              gap: "1.2rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#3b82f6",
                boxShadow: "0 0 12px #3b82f6",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.5)",
                fontWeight: 600,
              }}
            >
              Enterprise AI Architecture
            </span>
          </div>

          <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }} />

          {/* Service rows */}
          {SERVICES.map((svc, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <Link
  key={svc.num}
  href={svc.href}
  className="block"
>
  <div
    ref={(el) => {
      rowRefs.current[i] = el;
    }}
    className="services-row"
    onMouseEnter={() => !isMobile && setHoveredIndex(i)}
    onMouseLeave={() => !isMobile && setHoveredIndex(null)}
    onTouchStart={() => setHoveredIndex(i)}
    onTouchEnd={() => setTimeout(() => setHoveredIndex(null), 250)}
    style={{
      background: isHovered
        ? "rgba(255, 255, 255, 0.02)"
        : "transparent",
      transform:
        isHovered && !isMobile
          ? "translateX(10px)"
          : "translateX(0px)",
    }}
  >
                {/* Number */}
                <span
                  className="services-row-num"
                  style={{
                    fontSize: "0.9rem",
                    color: isHovered ? "#3b82f6" : "rgba(255, 255, 255, 0.25)",
                    fontWeight: 500,
                    paddingTop: "0.4rem",
                    fontFamily: "monospace",
                    transition: "color 0.3s ease",
                  }}
                >
                  {svc.num}
                </span>

                {/* Title */}
                <span
                  className="services-row-title"
                  style={{
                    fontSize: "clamp(1.4rem, 2.3vw, 2.1rem)",
                    fontWeight: isHovered ? 500 : 400,
                    color: isHovered ? "#3b82f6" : "#ffffff",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    transition: "color 0.3s ease",
                  }}
                >
                  {/* Mobile: show number inline before title */}
                  {isMobile && (
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontFamily: "monospace",
                        color: "rgba(255,255,255,0.3)",
                        marginRight: "0.5rem",
                        fontWeight: 400,
                      }}
                    >
                      {svc.num} —{" "}
                    </span>
                  )}
                  {svc.title}
                </span>

                {/* Description + tags */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.93rem",
                      color: isHovered
                        ? "rgba(255, 255, 255, 0.75)"
                        : "rgba(255, 255, 255, 0.42)",
                      lineHeight: 1.7,
                      fontWeight: 300,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {svc.desc}
                  </p>

                  <div
                    style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                  >
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.62rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: isHovered
                            ? "#ffffff"
                            : "rgba(255, 255, 255, 0.4)",
                          background: isHovered
                            ? "rgba(59, 130, 246, 0.18)"
                            : "transparent",
                          border: isHovered
                            ? "1px solid #3b82f6"
                            : "1px solid rgba(255, 255, 255, 0.12)",
                          borderRadius: "999px",
                          padding: "0.2rem 0.75rem",
                          fontWeight: 500,
                          transition: "all 0.3s ease",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow — hidden on mobile via CSS */}
                <div
                  className="services-row-arrow services-arrow"
                  style={{
                    opacity: isHovered ? 1 : 0.15,
                    transform: isHovered
                      ? "translateX(0)"
                      : "translateX(-10px)",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isHovered ? "#3b82f6" : "#ffffff"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
