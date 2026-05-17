"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const links = ["Services", "Work", "About", "Process", "Blog", "Contact"];

  return (
    <>
      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile-toggle { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0 2.5rem",
          background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "all 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.6rem" }}
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
              fontSize: "1rem",
            }}
          >
            ⚡
          </span>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "1.15rem",
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            AI Solution<span style={{ color: "#AAFF00" }}>.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div
          className="nav-desktop"
          style={{ gap: "2.5rem", alignItems: "center" }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: "0.88rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#AAFF00")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
              }
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              background: "#AAFF00",
              color: "#0A0A0A",
              padding: "0.55rem 1.4rem",
              borderRadius: 100,
              fontSize: "0.85rem",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.boxShadow =
                "0 0 24px rgba(170,255,0,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Start a Project ↗
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-toggle"
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "1.5rem",
            cursor: "pointer",
            padding: "0.5rem",
            lineHeight: 1,
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          top: 72,
          left: 0,
          right: 0,
          background: "rgba(10,10,10,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          zIndex: 999,
          transform: menuOpen ? "translateY(0)" : "translateY(-110%)",
          opacity: menuOpen ? 1 : 0,
          transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
          pointerEvents: menuOpen ? "all" : "none",
        }}
      >
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "1.4rem",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#AAFF00")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
          >
            {l}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          style={{
            background: "#AAFF00",
            color: "#0A0A0A",
            padding: "0.9rem 1.8rem",
            borderRadius: 100,
            fontSize: "1rem",
            fontWeight: 700,
            textDecoration: "none",
            textAlign: "center",
            fontFamily: "'Outfit', sans-serif",
            marginTop: "0.5rem",
          }}
        >
          Start a Project ↗
        </a>
      </div>
    </>
  );
}