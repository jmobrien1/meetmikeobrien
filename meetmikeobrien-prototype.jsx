import { useState, useEffect, useRef, useCallback } from "react";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// meetmikeobrien.com — Technical Architecture & Interactive Prototype
// Stack: Next.js 14 + Tailwind CSS + Framer Motion (simulated here as React)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ─── Design Tokens ───────────────────────────────────────────
const tokens = {
  navy: "#0a1628",
  navyMid: "#0f2140",
  navyLight: "#162d50",
  teal: "#2dd4a8",
  tealDim: "#1a9e7a",
  tealGlow: "rgba(45, 212, 168, 0.15)",
  slate: "#94a3b8",
  cream: "#f8fafc",
  white: "#ffffff",
  warmSand: "#f5e6d3",
  warmTerra: "#c4956a",
};

// ─── Animated Counter Hook ───────────────────────────────────
function useCounter(end, duration = 2000, prefix = "", suffix = "", startOnView = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(!startOnView);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return { count, ref, display: `${prefix}${count.toLocaleString()}${suffix}` };
}

// ─── Staggered Reveal Component ──────────────────────────────
function Reveal({ children, delay = 0, className = "" }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => setVisible(true), delay); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Metric Card ─────────────────────────────────────────────
function MetricCard({ value, label, prefix = "", suffix = "", delay = 0 }) {
  const counter = useCounter(value, 2200, prefix, suffix);
  return (
    <Reveal delay={delay}>
      <div
        ref={counter.ref}
        style={{
          padding: "28px 20px",
          borderLeft: `2px solid ${tokens.teal}`,
          background: `linear-gradient(135deg, ${tokens.tealGlow}, transparent)`,
          borderRadius: "0 8px 8px 0",
        }}
      >
        <div style={{
          fontSize: "2rem",
          fontWeight: 700,
          fontFamily: "'Space Mono', monospace",
          color: tokens.teal,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}>
          {counter.display}
        </div>
        <div style={{
          fontSize: "0.78rem",
          color: tokens.slate,
          marginTop: 8,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}>
          {label}
        </div>
      </div>
    </Reveal>
  );
}

// ─── Navigation ──────────────────────────────────────────────
function Nav({ activeSection, onNavigate }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "composable", label: "Composable Agency" },
    { id: "sitemap", label: "Site Architecture" },
  ];
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: "0 clamp(24px, 4vw, 64px)",
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: `linear-gradient(180deg, ${tokens.navy}ee, ${tokens.navy}88)`,
      backdropFilter: "blur(20px)",
      borderBottom: `1px solid rgba(45, 212, 168, 0.08)`,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 36, height: 36,
          borderRadius: 8,
          background: `linear-gradient(135deg, ${tokens.teal}, ${tokens.tealDim})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Space Mono', monospace",
          fontWeight: 700, fontSize: "0.85rem", color: tokens.navy,
        }}>MO</div>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          fontSize: "0.95rem",
          color: tokens.white,
          letterSpacing: "0.01em",
        }}>meetmikeobrien</span>
        <span style={{ color: tokens.teal, fontSize: "0.95rem", fontFamily: "'DM Sans', sans-serif" }}>.com</span>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => onNavigate(l.id)}
            style={{
              padding: "8px 18px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.02em",
              background: activeSection === l.id ? tokens.tealGlow : "transparent",
              color: activeSection === l.id ? tokens.teal : tokens.slate,
              transition: "all 0.3s ease",
            }}
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// HOME PAGE HERO
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function HomeHero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section style={{
      minHeight: "100vh",
      background: tokens.navy,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Atmospheric Background */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 70% 20%, rgba(45, 212, 168, 0.06) 0%, transparent 70%),
          radial-gradient(ellipse 60% 80% at 20% 80%, rgba(15, 33, 64, 0.8) 0%, transparent 60%),
          radial-gradient(ellipse 50% 50% at 90% 90%, rgba(45, 212, 168, 0.03) 0%, transparent 50%)
        `,
      }} />

      {/* Grid Pattern Overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, opacity: 0.03,
        backgroundImage: `
          linear-gradient(${tokens.teal} 1px, transparent 1px),
          linear-gradient(90deg, ${tokens.teal} 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }} />

      {/* Floating Accent Line */}
      <div style={{
        position: "absolute",
        top: "15%", right: "-5%",
        width: 400, height: 1,
        background: `linear-gradient(90deg, ${tokens.teal}40, transparent)`,
        transform: "rotate(-25deg)",
        zIndex: 0,
      }} />
      <div style={{
        position: "absolute",
        bottom: "25%", left: "-3%",
        width: 300, height: 1,
        background: `linear-gradient(90deg, transparent, ${tokens.teal}30)`,
        transform: "rotate(15deg)",
        zIndex: 0,
      }} />

      {/* Main Hero Content */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px clamp(24px, 6vw, 96px) 40px",
        position: "relative",
        zIndex: 1,
        maxWidth: 1280,
        width: "100%",
        margin: "0 auto",
      }}>
        {/* Eyebrow */}
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 200ms",
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 28,
        }}>
          <div style={{
            width: 48, height: 1,
            background: tokens.teal,
          }} />
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: tokens.teal,
            fontWeight: 500,
          }}>
            Principal, Thoughtworks &nbsp;·&nbsp; Founder, PropelAI
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s cubic-bezier(0.16,1,0.3,1) 400ms",
          fontFamily: "'Instrument Serif', 'Georgia', serif",
          fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
          fontWeight: 400,
          color: tokens.white,
          lineHeight: 1.08,
          letterSpacing: "-0.025em",
          maxWidth: 820,
          margin: 0,
        }}>
          From AOL to{" "}
          <span style={{
            background: `linear-gradient(135deg, ${tokens.teal}, #4fd1c5)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontStyle: "italic",
          }}>agentic AI</span>
          —transforming how government serves people.
        </h1>

        {/* Subheadline */}
        <p style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 650ms",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
          color: tokens.slate,
          lineHeight: 1.7,
          maxWidth: 640,
          marginTop: 28,
          fontWeight: 400,
        }}>
          20+ years transforming government technology. $500M+ in contract captures.
          From $3M accounts to the largest cloud migration in Massachusetts history.
          Author of <em style={{ color: tokens.teal, fontStyle: "italic" }}>The Composable Agency</em>.
        </p>

        {/* CTAs */}
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 850ms",
          display: "flex",
          flexWrap: "wrap",
          gap: 14,
          marginTop: 40,
        }}>
          {[
            { label: "About Me", primary: false },
            { label: "The Composable Agency", primary: true },
            { label: "Explore PropelAI", primary: false },
          ].map((cta, i) => (
            <button
              key={i}
              style={{
                padding: cta.primary ? "14px 32px" : "14px 28px",
                borderRadius: 8,
                border: cta.primary ? "none" : `1px solid rgba(45, 212, 168, 0.25)`,
                background: cta.primary
                  ? `linear-gradient(135deg, ${tokens.teal}, ${tokens.tealDim})`
                  : "rgba(45, 212, 168, 0.06)",
                color: cta.primary ? tokens.navy : tokens.teal,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.88rem",
                letterSpacing: "0.01em",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = cta.primary
                  ? `0 8px 32px rgba(45, 212, 168, 0.3)`
                  : `0 4px 20px rgba(45, 212, 168, 0.1)`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              {cta.label}
              {cta.primary && <span style={{ marginLeft: 8 }}>→</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Bar */}
      <div style={{
        borderTop: `1px solid rgba(45, 212, 168, 0.08)`,
        padding: "0 clamp(24px, 6vw, 96px)",
        background: `linear-gradient(180deg, transparent, rgba(10, 22, 40, 0.5))`,
      }}>
        <div style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 2,
          padding: "12px 0",
        }}>
          <MetricCard value={500} prefix="$" suffix="M+" label="Contract Captures" delay={100} />
          <MetricCard value={5} prefix="$" suffix="B+" label="Pipeline Built" delay={250} />
          <MetricCard value={20} suffix="+" label="Years in GovTech" delay={400} />
          <MetricCard value={1730} suffix="%" label="Account Growth" delay={550} />
          <MetricCard value={95} suffix="%+" label="Compliance Extraction" delay={700} />
        </div>
      </div>
    </section>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPOSABLE ARCHITECTURE INTERACTIVE VISUALIZER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const archLayers = [
  {
    id: "citizen",
    label: "Citizen Experience Layer",
    subtitle: "Headless, omnichannel delivery",
    color: "#4fd1c5",
    icon: "👤",
    items: ["Unified Portal", "Mobile App", "Voice / Chat", "Kiosk / In-Person"],
    detail: "A headless frontend layer that delivers seamless, personalized government experiences across every channel. Citizens interact with one consistent interface regardless of which agency they need — the 'no wrong door' vision brought to life through composable UI components.",
  },
  {
    id: "agentic",
    label: "Managed Agentic Ecosystem",
    subtitle: "AI agents with human-in-the-loop governance",
    color: "#2dd4a8",
    icon: "🤖",
    items: ["Navigation Agent", "Eligibility Agent", "Compliance Agent", "Validation Agent"],
    detail: "AI agents operate within strict guardrails — ephemeral identity, just-in-time consent, and continuous validation agents that audit every decision. Human-in-the-loop governance ensures no citizen-impacting action is taken without appropriate oversight. This is the 'Maria scenario' in action.",
  },
  {
    id: "pgc",
    label: "Packaged Government Capabilities",
    subtitle: "Autonomous, interchangeable service modules",
    color: "#2dd4a8",
    icon: "📦",
    items: ["Benefits Engine", "Permitting Module", "Case Management", "Identity Services", "Payments Processing"],
    detail: "PGCs are self-contained, API-first service modules — each one encapsulates a complete government function (eligibility determination, permit review, case routing) with its own data, logic, and interface contract. They follow MACH principles: Microservices, API-first, Cloud-native, Headless. Agencies can compose, swap, and upgrade capabilities without system-wide disruption.",
  },
  {
    id: "mesh",
    label: "Government Data Mesh",
    subtitle: "Federated data with computational governance",
    color: "#1a9e7a",
    icon: "🔗",
    items: ["Domain Data Products", "Data Contracts", "Federated Governance", "Cross-Agency Query"],
    detail: "A decentralized data architecture where each agency owns and publishes its data as discoverable, self-describing 'data products' with clear contracts and SLAs. Federated computational governance enforces interoperability, privacy, and quality standards automatically — replacing the brittle, centralized data warehouse model.",
  },
  {
    id: "infra",
    label: "Cloud-Native Infrastructure",
    subtitle: "GCP / multi-cloud platform foundation",
    color: "#0d8668",
    icon: "☁️",
    items: ["Vertex AI", "BigQuery", "GKE / Cloud Run", "Apigee Gateway", "Security Command Center"],
    detail: "The foundation layer built on Google Cloud Platform — Vertex AI for model serving, BigQuery for analytics, GKE for container orchestration, and Apigee for API management. FedRAMP authorized, CMMC 2.0 compliant, designed for the Strangler Fig migration pattern that incrementally replaces legacy systems without big-bang risk.",
  },
];

function ComposableVisualizer() {
  const [activeLayer, setActiveLayer] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const active = archLayers.find((l) => l.id === activeLayer);

  return (
    <section style={{
      background: tokens.navy,
      padding: "100px clamp(24px, 6vw, 96px)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Section Background Texture */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse 70% 50% at 30% 50%, rgba(45, 212, 168, 0.04), transparent 70%)`,
      }} />

      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}>
        {/* Section Header */}
        <Reveal>
          <div style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 48, height: 1, background: tokens.teal }} />
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: tokens.teal,
            }}>
              Interactive Framework
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 style={{
            fontFamily: "'Instrument Serif', 'Georgia', serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 400,
            color: tokens.white,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            margin: 0,
          }}>
            The Composable Agency
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.05rem",
            color: tokens.slate,
            lineHeight: 1.7,
            maxWidth: 620,
            marginTop: 16,
            marginBottom: 56,
          }}>
            A blueprint for autonomous public service — built on MACH architecture,
            Packaged Government Capabilities, and a managed agentic ecosystem.
            Click any layer to explore.
          </p>
        </Reveal>

        {/* ─── Stack Visualizer ─── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: active ? "1fr 1fr" : "1fr",
          gap: 40,
          transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}>
          {/* Left: Layer Stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {archLayers.map((layer, i) => {
              const isActive = activeLayer === layer.id;
              return (
                <Reveal key={layer.id} delay={300 + i * 80}>
                  <button
                    onClick={() => setActiveLayer(isActive ? null : layer.id)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "20px 24px",
                      borderRadius: 10,
                      border: `1px solid ${isActive ? layer.color + "50" : "rgba(45, 212, 168, 0.08)"}`,
                      background: isActive
                        ? `linear-gradient(135deg, ${layer.color}12, ${layer.color}06)`
                        : tokens.navyMid,
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                      transform: isActive ? "scale(1.01)" : "scale(1)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.borderColor = "rgba(45, 212, 168, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.borderColor = "rgba(45, 212, 168, 0.08)";
                    }}
                  >
                    {/* Layer number */}
                    <div style={{
                      width: 40, height: 40,
                      borderRadius: 8,
                      background: isActive ? `${layer.color}20` : "rgba(255,255,255,0.03)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      flexShrink: 0,
                      transition: "all 0.3s ease",
                    }}>
                      {layer.icon}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: isActive ? tokens.white : tokens.cream,
                        marginBottom: 3,
                      }}>
                        {layer.label}
                      </div>
                      <div style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.78rem",
                        color: tokens.slate,
                      }}>
                        {layer.subtitle}
                      </div>
                    </div>

                    {/* Expand indicator */}
                    <div style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.7rem",
                      color: isActive ? tokens.teal : tokens.slate,
                      letterSpacing: "0.1em",
                      transition: "all 0.3s ease",
                      transform: isActive ? "rotate(90deg)" : "rotate(0)",
                    }}>
                      →
                    </div>

                    {/* Active glow bar */}
                    {isActive && (
                      <div style={{
                        position: "absolute",
                        left: 0, top: 0, bottom: 0,
                        width: 3,
                        background: `linear-gradient(180deg, ${layer.color}, ${layer.color}60)`,
                        borderRadius: "3px 0 0 3px",
                      }} />
                    )}
                  </button>
                </Reveal>
              );
            })}

            {/* Connection Lines Visual (between layers) */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              padding: "8px 0",
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                opacity: 0.4,
              }}>
                <div style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: tokens.teal,
                }} />
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.65rem",
                  color: tokens.slate,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>API-first · Event-driven · Composable</span>
                <div style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: tokens.teal,
                }} />
              </div>
            </div>
          </div>

          {/* Right: Detail Panel */}
          {active && (
            <div style={{
              background: tokens.navyMid,
              borderRadius: 14,
              border: `1px solid ${active.color}20`,
              padding: "36px 32px",
              opacity: active ? 1 : 0,
              transform: active ? "translateX(0)" : "translateX(20px)",
              transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Background glow */}
              <div style={{
                position: "absolute",
                top: -60, right: -60,
                width: 200, height: 200,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${active.color}08, transparent 70%)`,
              }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Header */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 12,
                  marginBottom: 20,
                }}>
                  <span style={{ fontSize: "1.5rem" }}>{active.icon}</span>
                  <h3 style={{
                    fontFamily: "'Instrument Serif', 'Georgia', serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: tokens.white,
                    margin: 0,
                  }}>
                    {active.label}
                  </h3>
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.92rem",
                  color: tokens.slate,
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}>
                  {active.detail}
                </p>

                {/* Component Grid */}
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: tokens.teal,
                  marginBottom: 14,
                }}>
                  Components
                </div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                  gap: 8,
                }}>
                  {active.items.map((item, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => setHoveredItem(item)}
                      onMouseLeave={() => setHoveredItem(null)}
                      style={{
                        padding: "12px 14px",
                        borderRadius: 8,
                        border: `1px solid ${hoveredItem === item ? active.color + "40" : "rgba(255,255,255,0.05)"}`,
                        background: hoveredItem === item ? `${active.color}08` : "rgba(255,255,255,0.02)",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.82rem",
                        color: hoveredItem === item ? tokens.white : tokens.slate,
                        transition: "all 0.25s ease",
                        cursor: "default",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <div style={{
                        width: 6, height: 6, borderRadius: 2,
                        background: active.color,
                        opacity: hoveredItem === item ? 1 : 0.4,
                        transition: "opacity 0.25s ease",
                      }} />
                      {item}
                    </div>
                  ))}
                </div>

                {/* MACH Badge */}
                <div style={{
                  marginTop: 28,
                  padding: "14px 18px",
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  display: "flex",
                  gap: 16,
                  flexWrap: "wrap",
                }}>
                  {["Microservices", "API-First", "Cloud-Native", "Headless"].map((m, i) => (
                    <span key={i} style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: tokens.teal,
                      opacity: 0.6,
                    }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SITE ARCHITECTURE MAP
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const siteMap = [
  {
    page: "Home",
    route: "/",
    sections: ["Hero + Tagline", "Metrics Bar", "Overview", "Featured Work Cards", "Latest Article"],
    status: "Phase 1",
  },
  {
    page: "About",
    route: "/about",
    sections: ["Full Bio", "Career Timeline (Interactive)", "Philosophy", "Education & Certs Grid"],
    status: "Phase 1",
  },
  {
    page: "Work",
    route: "/work",
    sections: ["Case Study Grid", "Massachusetts HIX", "FBI/CISA Programs", "SGX Platform", "PropelAI Build"],
    status: "Phase 2",
  },
  {
    page: "Thought Leadership",
    route: "/insights",
    sections: ["Composable Agency PDF", "Blog Posts Grid", "Speaking Topics", "Content Pillars"],
    status: "Phase 2",
  },
  {
    page: "PropelAI",
    route: "/propelai",
    sections: ["Hero + CTA", "Problem/Solution", "Pipeline Visualizer", "Metrics", "Tech Stack", "Origin Story"],
    status: "Phase 2",
  },
  {
    page: "Personal",
    route: "/life",
    sections: ["Reedville Hero Image", "Family", "The Water", "Golf", "Cooking", "Photo Grid"],
    status: "Phase 3",
    warm: true,
  },
  {
    page: "Contact",
    route: "/contact",
    sections: ["Intro Copy", "Contact Form", "LinkedIn + Email", "Calendly Embed"],
    status: "Phase 1",
  },
];

const statusColors = {
  "Phase 1": "#2dd4a8",
  "Phase 2": "#4fd1c5",
  "Phase 3": "#c4956a",
};

function SiteArchitecture() {
  return (
    <section style={{
      background: `linear-gradient(180deg, ${tokens.navyMid}, ${tokens.navy})`,
      padding: "100px clamp(24px, 6vw, 96px)",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Reveal>
          <div style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 48, height: 1, background: tokens.teal }} />
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: tokens.teal,
            }}>
              Information Architecture
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 style={{
            fontFamily: "'Instrument Serif', 'Georgia', serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 400,
            color: tokens.white,
            lineHeight: 1.12,
            margin: 0,
          }}>
            Complete Site Map
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.05rem",
            color: tokens.slate,
            lineHeight: 1.7,
            maxWidth: 580,
            marginTop: 16,
            marginBottom: 56,
          }}>
            Seven pages spanning professional authority and personal authenticity,
            rolled out across three phases.
          </p>
        </Reveal>

        {/* Site Map Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 16,
        }}>
          {siteMap.map((page, i) => (
            <Reveal key={page.page} delay={300 + i * 80}>
              <div style={{
                background: page.warm
                  ? `linear-gradient(135deg, rgba(196, 149, 106, 0.08), rgba(196, 149, 106, 0.03))`
                  : tokens.navyMid,
                borderRadius: 12,
                border: `1px solid ${page.warm ? "rgba(196, 149, 106, 0.15)" : "rgba(45, 212, 168, 0.08)"}`,
                padding: "28px 24px",
                height: "100%",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Phase badge */}
                <div style={{
                  position: "absolute",
                  top: 16, right: 16,
                  padding: "4px 10px",
                  borderRadius: 4,
                  background: `${statusColors[page.status]}15`,
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.1em",
                  color: statusColors[page.status],
                  textTransform: "uppercase",
                }}>
                  {page.status}
                </div>

                {/* Page name */}
                <h3 style={{
                  fontFamily: "'Instrument Serif', 'Georgia', serif",
                  fontSize: "1.3rem",
                  fontWeight: 400,
                  color: tokens.white,
                  margin: "0 0 4px 0",
                }}>
                  {page.page}
                </h3>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.7rem",
                  color: tokens.teal,
                  letterSpacing: "0.05em",
                  marginBottom: 20,
                  opacity: 0.7,
                }}>
                  {page.route}
                </div>

                {/* Sections */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {page.sections.map((s, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px 12px",
                        borderRadius: 6,
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.03)",
                      }}
                    >
                      <div style={{
                        width: 5, height: 5, borderRadius: 1,
                        background: page.warm ? tokens.warmTerra : tokens.teal,
                        opacity: 0.5,
                      }} />
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.8rem",
                        color: tokens.slate,
                      }}>
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Component Blueprint Legend */}
        <Reveal delay={800}>
          <div style={{
            marginTop: 48,
            padding: "24px 28px",
            borderRadius: 12,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(45, 212, 168, 0.06)",
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            alignItems: "center",
          }}>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: tokens.slate,
            }}>
              Tech Stack
            </span>
            {["Next.js 14", "Tailwind CSS", "Framer Motion", "MDX Blog", "Vercel", "Google Fonts"].map((t, i) => (
              <span key={i} style={{
                padding: "6px 14px",
                borderRadius: 6,
                background: "rgba(45, 212, 168, 0.06)",
                border: "1px solid rgba(45, 212, 168, 0.1)",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.72rem",
                color: tokens.teal,
                letterSpacing: "0.02em",
              }}>
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ROOT APPLICATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export default function MeetMikeOBrien() {
  const [activeSection, setActiveSection] = useState("home");
  const homeRef = useRef(null);
  const composableRef = useRef(null);
  const sitemapRef = useRef(null);

  const handleNavigate = useCallback((id) => {
    setActiveSection(id);
    const refs = { home: homeRef, composable: composableRef, sitemap: sitemapRef };
    refs[id]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Track scroll position for active nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "sitemap", ref: sitemapRef },
        { id: "composable", ref: composableRef },
        { id: "home", ref: homeRef },
      ];
      for (const s of sections) {
        if (s.ref.current && s.ref.current.getBoundingClientRect().top < 200) {
          setActiveSection(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Instrument+Serif:ital@0;1&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${tokens.navy}; overflow-x: hidden; }
        ::selection { background: ${tokens.teal}30; color: ${tokens.white}; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: ${tokens.navy}; }
        ::-webkit-scrollbar-thumb { background: ${tokens.navyLight}; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: ${tokens.teal}40; }
        button { font-family: inherit; }
        @keyframes pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
      `}</style>

      <Nav activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
        <div ref={homeRef}>
          <HomeHero />
        </div>

        {/* Overview Bridge Section */}
        <section style={{
          background: `linear-gradient(180deg, ${tokens.navy}, ${tokens.navyMid})`,
          padding: "80px clamp(24px, 6vw, 96px)",
        }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <Reveal>
              <div style={{
                maxWidth: 760,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)",
                color: "rgba(248, 250, 252, 0.85)",
                lineHeight: 1.8,
                fontWeight: 400,
              }}>
                I lead government technology modernization at Thoughtworks, where I've built a $5B+ pipeline
                and closed $20M in AI and modernization engagements in my first year. Before that, I captured
                over $500M in contract awards and grew a single state account from $3M to $55M. I also built
                PropelAI — an AI platform that automates government proposal generation with near-perfect
                compliance extraction.{" "}
                <span style={{ color: tokens.teal, fontStyle: "italic" }}>
                  My work sits at the intersection of AI, public service, and enterprise delivery.
                </span>
              </div>
            </Reveal>

            {/* Featured Work Cards */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
              marginTop: 56,
            }}>
              {[
                {
                  tag: "White Paper",
                  title: "The Composable Agency",
                  desc: "A comprehensive framework for autonomous public service — MACH architecture, PGCs, and the Managed Agentic Ecosystem.",
                  accent: tokens.teal,
                },
                {
                  tag: "Platform",
                  title: "Seamless Government Experience",
                  desc: "The first landmark PaaS deal at Thoughtworks — AI-driven, composable architecture built on Google Cloud.",
                  accent: "#4fd1c5",
                },
                {
                  tag: "Venture",
                  title: "PropelAI",
                  desc: "AI-powered proposal generation achieving 95%+ compliance extraction. Built on n8n, Claude AI, and graph-based processing.",
                  accent: "#1a9e7a",
                },
              ].map((card, i) => (
                <Reveal key={i} delay={200 + i * 120}>
                  <div
                    style={{
                      padding: "28px 24px",
                      borderRadius: 12,
                      border: "1px solid rgba(45, 212, 168, 0.08)",
                      background: tokens.navyMid,
                      cursor: "pointer",
                      transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(45, 212, 168, 0.2)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(45, 212, 168, 0.08)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: card.accent,
                    }}>
                      {card.tag}
                    </span>
                    <h3 style={{
                      fontFamily: "'Instrument Serif', 'Georgia', serif",
                      fontSize: "1.35rem",
                      fontWeight: 400,
                      color: tokens.white,
                      marginTop: 12,
                      marginBottom: 12,
                    }}>
                      {card.title}
                    </h3>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.88rem",
                      color: tokens.slate,
                      lineHeight: 1.65,
                    }}>
                      {card.desc}
                    </p>
                    <div style={{
                      marginTop: 20,
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: tokens.teal,
                    }}>
                      Explore →
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div ref={composableRef}>
          <ComposableVisualizer />
        </div>

        <div ref={sitemapRef}>
          <SiteArchitecture />
        </div>

        {/* Footer */}
        <footer style={{
          padding: "48px clamp(24px, 6vw, 96px)",
          background: tokens.navy,
          borderTop: "1px solid rgba(45, 212, 168, 0.06)",
        }}>
          <div style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.82rem",
              color: tokens.slate,
            }}>
              © 2026 Mike O'Brien · meetmikeobrien.com
            </div>
            <div style={{ display: "flex", gap: 24 }}>
              {["LinkedIn", "Thoughtworks", "PropelAI"].map((l, i) => (
                <span key={i} style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  color: tokens.teal,
                  cursor: "pointer",
                  opacity: 0.7,
                  transition: "opacity 0.2s",
                }}
                  onMouseEnter={(e) => e.target.style.opacity = "1"}
                  onMouseLeave={(e) => e.target.style.opacity = "0.7"}
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
