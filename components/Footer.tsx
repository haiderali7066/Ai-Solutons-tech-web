"use client";

export default function Footer() {
  const cols = [
    {
      title: "Company",
      links: ["About", "Culture", "Careers", "Blog", "Contact"],
    },
    {
      title: "Services",
      links: ["AI Development", "Web Apps", "Mobile Apps", "SaaS", "Cloud"],
    },
    {
      title: "Work",
      links: ["Portfolio", "Case Studies", "Testimonials", "Process"],
    },
  ];

  const socials = [
    { label: "𝕏", href: "#" },
    { label: "in", href: "#" },
    { label: "gh", href: "#" },
    { label: "be", href: "#" },
  ];

  return (
    <>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <footer
        style={{
          background: "#0A0A0A",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "5rem 2.5rem 3rem",
          }}
        >
          <div className="footer-grid">
            {/* Brand Column */}
            <div>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "1.5rem",
                  width: "fit-content",
                }}
              >
                <span
                  style={{
                    width: 32,
                    height: 32,
                    background: "#AAFF00",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ⚡
                </span>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: "#fff",
                  }}
                >
                  AI Solution<span style={{ color: "#AAFF00" }}>.</span>
                </span>
              </a>

              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.88rem",
                  lineHeight: 1.8,
                  maxWidth: 280,
                  marginBottom: "2rem",
                }}
              >
                An AI-powered software and digital transformation company
                helping businesses automate, innovate, and scale with
                confidence.
              </p>

              {/* Social Links */}
              <div style={{ display: "flex", gap: "0.7rem" }}>
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    style={{
                      width: 36,
                      height: 36,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = "rgba(170,255,0,0.1)";
                      el.style.borderColor = "rgba(170,255,0,0.3)";
                      el.style.color = "#AAFF00";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = "rgba(255,255,255,0.06)";
                      el.style.borderColor = "rgba(255,255,255,0.08)";
                      el.style.color = "rgba(255,255,255,0.5)";
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Columns */}
            {cols.map((col, ci) => (
              <div key={ci}>
                <h4
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#fff",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    marginBottom: "1.4rem",
                  }}
                >
                  {col.title}
                </h4>
                {col.links.map((l, li) => (
                  <a
                    key={li}
                    href="#"
                    style={{
                      display: "block",
                      color: "rgba(255,255,255,0.4)",
                      textDecoration: "none",
                      fontSize: "0.88rem",
                      marginBottom: "0.8rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#AAFF00")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
                    }
                  >
                    {l}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              paddingTop: "2.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            {/* Big watermark text */}
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 6vw, 4rem)",
                color: "rgba(255,255,255,0.05)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              Crafting since 2018
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "0.5rem",
              }}
            >
              <div style={{ display: "flex", gap: "1.5rem" }}>
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (link, i) => (
                    <a
                      key={i}
                      href="#"
                      style={{
                        color: "rgba(255,255,255,0.25)",
                        fontSize: "0.75rem",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "rgba(255,255,255,0.25)")
                      }
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.2)",
                  fontSize: "0.78rem",
                  margin: 0,
                }}
              >
                © AI Solution Technologies 2026 · All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}