# meetmikeobrien.com — As-Built Documentation

## Overview

Live at **meetmikeobrien.com**. Personal brand site for Mike O'Brien — GovTech executive personal brand bridging professional authority with personal authenticity.

**Repository:** `https://github.com/jmobrien1/meetmikeobrien`
**Hosting:** Vercel (static export) — domain registered at Namecheap
**Stack:** Next.js 14.2, Tailwind CSS 3.4, Framer Motion 11, TypeScript 5

---

## Architecture

Static-exported Next.js App Router site. No server-side rendering, no API routes, no CMS. All content is hardcoded. Contact form uses a PHP backend (`contact-handler.php`).

### Build Configuration (`next.config.mjs`)
- `output: 'export'` — generates static HTML to `out/`
- `images: { unoptimized: true }` — no Next.js image optimization (static deploy)
- `trailingSlash: true` — URLs end with `/`

---

## File Structure

```
meetmikeobrien/
├── app/
│   ├── layout.tsx                 # Root layout — fonts, metadata, <Nav>, <Footer>
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Tailwind base + custom utilities
│   ├── about/page.tsx             # Bio, career timeline, credentials
│   ├── work/page.tsx              # 7 case studies (expandable)
│   ├── insights/page.tsx          # Composable Agency, blog, speaking
│   ├── propelai/page.tsx          # PropelAI product detail
│   ├── projects/page.tsx          # Side projects showcase
│   ├── life/page.tsx              # Personal section (warm palette)
│   └── contact/page.tsx           # Contact form
├── components/
│   ├── nav.tsx                    # Fixed header, 8 nav links, mobile hamburger
│   ├── footer.tsx                 # Copyright, external links
│   ├── section-header.tsx         # Eyebrow + title + subtitle pattern
│   ├── metric-card.tsx            # Animated counter with IntersectionObserver
│   ├── reveal.tsx                 # Scroll-triggered entrance animation
│   ├── hero.tsx                   # Home hero — gradients, metrics bar
│   ├── featured-work-cards.tsx    # Home featured work section
│   ├── composable-visualizer.tsx  # 5-layer interactive architecture explainer
│   ├── pipeline-visualizer.tsx    # PropelAI 5-step pipeline
│   ├── career-timeline.tsx        # 8-position expandable timeline
│   ├── case-study-card.tsx        # Expandable case study cards
│   ├── image-lightbox.tsx         # Image zoom modal (Escape to close)
│   └── contact-form.tsx           # Form → POST to PHP backend
├── lib/
│   ├── tokens.ts                  # Design system color tokens (JS export)
│   ├── case-studies.ts            # 7 case study data objects
│   └── use-counter.ts             # Animated counter hook (2200ms, 60fps)
├── public/
│   ├── images/
│   │   ├── PropelAI.jpg
│   │   ├── PGAPicker.jpg
│   │   ├── LocusMaps.jpg
│   │   ├── ChefDeCuisine.png
│   │   └── ChefDeCuisine2.png
│   ├── downloads/
│   │   └── composable-agency.pdf
│   └── contact-handler.php
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `navy` | `#0a1628` | Primary background |
| `navy-mid` | `#0f2140` | Card backgrounds |
| `navy-light` | `#162d50` | Elevated surfaces |
| `teal` | `#2dd4a8` | Primary accent |
| `teal-dim` | `#1a9e7a` | Gradient endpoint |
| `teal-glow` | `rgba(45,212,168,0.15)` | Glow effects |
| `slate` | `#94a3b8` | Secondary text |
| `cream` | `#f8fafc` | Light text |
| `warm-sand` | `#f5e6d3` | /life background |
| `warm-terra` | `#c4956a` | /life accent |
| `warm-amber` | `#d4a574` | /life secondary |

### Typography
| Role | Font | Weight | Size |
|------|------|--------|------|
| Hero headline | Instrument Serif | 400 | `clamp(2.8rem, 6vw, 5.2rem)` |
| Section headline | Instrument Serif | 400 | `clamp(2rem, 4vw, 3.2rem)` |
| Card title | Instrument Serif | 400 | `1.35rem` |
| Body | DM Sans | 400 | `1.05rem` |
| Small body | DM Sans | 400 | `0.88–0.92rem` |
| Eyebrow label | Space Mono | 500 | `0.72rem` uppercase |
| Metric value | Space Mono | 700 | `2rem` |
| Tag/badge | Space Mono | 400 | `0.65rem` uppercase |

### Motion
- Page entrance: staggered reveals with 80ms delay
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Scroll trigger: IntersectionObserver at 0.15 threshold
- Hover: `translateY(-2px)` + box-shadow glow
- Counter animation: 2200ms duration

---

## Pages

### Home (`/`)
- Full-viewport hero with radial gradient backgrounds and grid overlay
- Eyebrow → Headline ("From AOL to *agentic AI*...") → Subheadline → 3 CTAs
- Metrics bar: $500M+ captures, $5B+ pipeline, 20+ years, 1,730% growth, 95%+ extraction
- Overview pull quote section
- Featured work cards (3-column): Composable Agency, SGX, PropelAI

### About (`/about`)
- Full bio from content guide
- Interactive career timeline (8 positions, AOL through Thoughtworks, expandable)
- Credentials grid: UVA MS, Saint Leo BS, TS clearance, cloud certs

### Work (`/work`)
- 7 expandable case study cards (data from `lib/case-studies.ts`)
- Massachusetts HIX, Fed Law Enforcement, Federal Reserve MSA, GSA BPA, SGX, PropelAI, ClearPath PE

### Insights (`/insights`)
- Featured: The Composable Agency white paper (PDF download)
- Interactive 5-layer Composable Architecture Visualizer
- Blog post links (Thoughtworks articles)
- Speaking topics

### PropelAI (`/propelai`)
- Product hero, problem/solution sections
- Pipeline visualizer: RFP Ingestion → Requirement Extraction → Compliance Mapping → Draft Generation → Quality Scoring
- Metrics: 95%+ extraction, 87/100 quality
- Tech stack and origin story

### Projects (`/projects`)
- 3-column responsive grid of side project cards with ImageLightbox
- **PropelAI** — AI proposal generation (links to /propelai)
- **PGA Pick AI** — AI tournament prediction analytics
- **Locus Maps** — AI custom map poster platform with Gelato fulfillment
- **Chef de Cuisine** — AI culinary assistant with 4-agent pipeline (equipment/skill audit → dish concept → cooking timeline → chef finishing). Local LLM + RAG. Two screenshots: recipe input form and Mise en Temps timeline.

### Life (`/life`) — Warm Palette
- Background shifts to warm sand, accents to terra
- Sections: Reedville & the Water, Family, Golf, Cooking

### Contact (`/contact`)
- Form (name, email, subject dropdown, message) → PHP backend
- LinkedIn, email, Calendly embed

---

## Deployment

1. Push to `main` on `github.com/jmobrien1/meetmikeobrien`
2. Vercel auto-deploys from GitHub
3. Namecheap DNS: A record `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`
4. Vercel provisions SSL automatically

---

## Dependencies

**Production:** next@14.2.35, react@18, react-dom@18, framer-motion@11.18.2
**Dev:** typescript@5, tailwindcss@3.4.1, @tailwindcss/typography@0.5.19, postcss@8, eslint
