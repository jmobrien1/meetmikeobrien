# meetmikeobrien.com — Claude Code Handover Document

## Project Brief

Build and deploy the personal website for Mike O'Brien (meetmikeobrien.com) — a GovTech executive personal brand site. The site bridges professional authority (digital government, AI transformation, $500M+ track record) with personal authenticity (Chesapeake Bay fishing, family, cooking). The full content source is in `Website_Content_Guide_v2.docx` — treat it as the canonical reference for all copy, bios, case studies, and page content.

**Repository:** `https://github.com/jmobrien1/meetmikeobrien`
**Deployment:** Vercel (free tier) — domain registered at Namecheap
**Stack:** Next.js 14 (App Router), Tailwind CSS, Framer Motion

---

## Information Architecture (7 Pages)

```
meetmikeobrien.com/
├── / ........................ Home (Hero, Metrics Bar, Overview, Featured Work Cards)
├── /about ................... About (Full Bio, Career Timeline, Philosophy, Credentials)
├── /work .................... Work / Portfolio (Case Study Grid, 7 case studies)
├── /insights ................ Thought Leadership (White Paper, Blog Posts, Speaking, Content Pillars)
├── /propelai ................. PropelAI (Mini landing page — Problem/Solution/Pipeline/Metrics)
├── /projects ................ Side Projects (PropelAI, PGA Pick AI, Locus Maps, Chef de Cuisine)
├── /life .................... Personal (Reedville, Family, Golf, Cooking — warm palette)
└── /contact ................. Contact (Form, LinkedIn, Calendly embed)
```

### Status
All 8 pages are live at meetmikeobrien.com. Site is deployed as a static export.

---

## Design System

### Color Tokens

```js
// tailwind.config.js extend
colors: {
  navy:       { DEFAULT: '#0a1628', mid: '#0f2140', light: '#162d50' },
  teal:       { DEFAULT: '#2dd4a8', dim: '#1a9e7a', glow: 'rgba(45, 212, 168, 0.15)' },
  slate:      '#94a3b8',
  cream:      '#f8fafc',

  // Personal page (warm shift)
  warm:       { sand: '#f5e6d3', terra: '#c4956a', amber: '#d4a574' },
}
```

### Typography

```
Headline / Display:   "Instrument Serif" (Google Fonts) — italic for accent phrases
Body / UI:            "DM Sans" (Google Fonts) — 400, 500, 600, 700
Data / Labels / Code: "Space Mono" (Google Fonts) — monospace for stats, tags, technical labels
```

**IMPORTANT:** Do NOT use Inter, Roboto, Arial, or system fonts. The typographic personality is critical to the brand.

### Typography Scale
```
Hero headline:       clamp(2.8rem, 6vw, 5.2rem)  — Instrument Serif 400
Section headline:    clamp(2rem, 4vw, 3.2rem)     — Instrument Serif 400
Card title:          1.35rem                        — Instrument Serif 400
Body:                1.05rem                        — DM Sans 400
Small body:          0.88-0.92rem                   — DM Sans 400
Eyebrow label:       0.72rem uppercase              — Space Mono 500, letter-spacing 0.18em
Metric value:        2rem                           — Space Mono 700
Tag / badge:         0.65rem uppercase              — Space Mono 400, letter-spacing 0.12em
```

### Spacing & Layout
- Max content width: 1280px
- Page padding: `clamp(24px, 6vw, 96px)` horizontal
- Section padding: 100px vertical
- Card border radius: 12px
- Card border: `1px solid rgba(45, 212, 168, 0.08)` — hover to `0.2`
- Background: navy base with subtle radial-gradient teal glows
- Grid pattern overlay: teal lines at 80px intervals, opacity 0.03

### Motion (Framer Motion)
- Page entrance: staggered reveals with 80ms delay between elements
- Transition: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo feel)
- Scroll-triggered: IntersectionObserver with 0.15 threshold
- Hover: translateY(-2-4px) + subtle box-shadow glow
- Counter animation: 2200ms duration for metric numbers

---

## Component Blueprint

### Global Components

#### `<Nav />`
- Fixed top, 72px height, blur backdrop
- Logo: "MO" monogram (teal gradient, 36x36, rounded-8) + "meetmikeobrien" + ".com" (teal)
- Links: Home, About, Work, Insights, PropelAI, Projects, Life, Contact
- Active state: teal text + teal glow background
- Mobile: hamburger menu (slide-in panel)

#### `<SectionHeader />`
Reusable pattern for every section:
```
[48px teal line] · EYEBROW LABEL (Space Mono, uppercase, teal)
Section Title (Instrument Serif, white)
Subtitle paragraph (DM Sans, slate, max-width 620px)
```

#### `<MetricCard />`
- Left teal border (2px) with gradient glow background
- Animated counter (counts up on scroll intersection)
- Value: Space Mono 700, 2rem, teal
- Label: DM Sans 500, 0.78rem, uppercase, slate

#### `<Reveal />`
Scroll-triggered entrance animation wrapper. Props: `delay`, `direction` (up/left/right).

#### `<Footer />`
- © 2026 Mike O'Brien
- Links: LinkedIn, Thoughtworks, PropelAI

---

### Page: Home (`/`)

#### Hero Section
- Full viewport height, navy background
- Atmospheric background: multiple radial gradients (teal glow at 70% 20%, navy glow at 20% 80%)
- Grid pattern overlay at 0.03 opacity
- Diagonal accent lines (subtle teal, rotated)
- Content:
  - Eyebrow: "Principal, Thoughtworks · Founder, PropelAI" (with teal line prefix)
  - Headline: `From AOL to *agentic AI*—transforming how government serves people.`
    - "agentic AI" rendered in italic Instrument Serif with teal gradient text
  - Subheadline: "20+ years transforming government technology. $500M+ in contract captures..."
  - 3 CTAs: "About Me" (ghost), "The Composable Agency" (primary teal), "Explore PropelAI" (ghost)
- Metrics Bar (bottom of hero):
  - $500M+ Contract Captures
  - $5B+ Pipeline Built
  - 20+ Years in GovTech
  - 1,730% Account Growth
  - 95%+ Compliance Extraction
- All elements stagger-animate on load (200ms, 400ms, 650ms, 850ms delays)

#### Overview Section
- Pull quote style: large DM Sans text, 1.3rem, high line-height
- Content from the content guide's "Overview Section" copy
- Last sentence in teal italic

#### Featured Work Cards
- 3-column grid (responsive)
- Cards: The Composable Agency (White Paper), SGX (Platform), PropelAI (Venture)
- Each: tag label (Space Mono uppercase), Instrument Serif title, DM Sans description, "Explore →" link
- Hover: lift + border glow

---

### Page: About (`/about`)

#### Career Timeline (Interactive)
This is the signature interactive element. Vertical timeline with these beats:
1. **AOL (1996–2010)** — Technical Director, 9 promotions, 100+ person org
2. **Smartronix (2012–2014)** — Director Cloud Solutions, Fed Reserve MSA, $10B DOI IDIQ
3. **Aquilent (2014–2015)** — Director Cloud, $100M GSA BPA, AWS Premier Partner
4. **ClearPath (2015–2018)** — VP, 300% revenue growth, PE exit to TH Lee
5. **SMX (2018–2024)** — VP, $500M captures, MA $3M→$55M, FBI/CISA/State
6. **OB Consulting (2024)** — Independent, post-$1.15B PE transaction
7. **Thoughtworks (2024–Present)** — Principal, $5B pipeline, $20M closed, Composable Agency

Design: vertical line with dot markers, click to expand detail panel. Use Framer Motion for expand/collapse.

#### Credentials Grid
- UVA (MS), Saint Leo (BS), TS Clearance
- Google Gen AI Leader, Google Cloud Digital Leader
- AWS Solutions Architect, AWS Cloud Practitioner
- Microsoft Azure Fundamentals

---

### Page: Work (`/work`)

Case study grid with 7 entries. Each card has:
- Client/project name
- Organization tag
- Key metric callout
- Brief description
- Click to expand full case study

Case studies (from content guide):
1. Massachusetts Healthcare Insurance Exchange (SMX)
2. Federal Law Enforcement & National Security (SMX)
3. Federal Reserve 10-year MSA (Smartronix/SMX)
4. GSA Cloud Services BPA $100M (Aquilent)
5. Seamless Government Experience / SGX (Thoughtworks)
6. PropelAI Platform Development
7. ClearPath PE Transformation

---

### Page: Thought Leadership (`/insights`)

- Featured hero: The Composable Agency white paper (downloadable PDF, prominent CTA)
- Blog posts grid linking to Thoughtworks articles
- Speaking topics section
- Content pillars taxonomy

---

### Page: PropelAI (`/propelai`)

Mini landing page:
- Hero: "AI-Powered Proposal Generation for Government Contractors"
- Problem/Solution sections
- Visual pipeline: RFP Ingestion → Requirement Extraction → Compliance Mapping → Draft Generation → Quality Scoring
- Metrics: 95%+ extraction, 87/100 quality score
- Tech stack: n8n, Claude AI, RAG, graph-based processing
- Origin story section

---

### Page: Side Projects (`/projects`)

Showcase grid of personal AI-powered projects. 3-column responsive grid (wraps on mobile), each card features an image with lightbox zoom, title, and description.

Projects:
1. **PropelAI** — AI-powered proposal generation for government contractors. Links to /propelai detail page.
2. **PGA Pick AI** — AI-driven analytics app for PGA tournament predictions. Player stats, course history, and conditions.
3. **Locus Maps** — B2C platform using AI to generate custom map posters, star maps, route maps with Gelato print fulfillment.
4. **Chef de Cuisine** — AI culinary assistant using a 4-agent pipeline (equipment/skill audit → dish concept → phased cooking timeline → executive chef finishing). Local LLM inference + RAG with culinary knowledge base. Two screenshots: recipe input form and Mise en Temps cooking timeline.

---

### Page: Personal (`/life`) — WARM PALETTE

**This page shifts the entire color palette:**
- Background: warm sand (#f5e6d3) instead of navy
- Accents: terra (#c4956a) instead of teal
- Typography stays the same families but in dark tones
- Full-width hero image (river/Reedville at sunset — placeholder until photo provided)
- Photo grid layout (family, dogs Leroy & Isla, fishing, golf, kitchen)
- Short casual copy blocks — NO bullet points, NO stat bars

Sections:
1. **Reedville & The Water** — Little Wicomico River, Chesapeake Bay fishing village
2. **Family** — Megan (Allegiance List Marketing), sons John and Sam
3. **Golf** — passionate golfer
4. **Cooking** — Asian cuisine, complex noodle soups

---

### Page: Contact (`/contact`)

- Intro: "Interested in working together, booking a speaking engagement, or learning more about PropelAI?"
- Contact form: Name, Email, Subject dropdown (General, Speaking, PropelAI Demo, Partnership, Media), Message
- LinkedIn: linkedin.com/in/obrienmike74
- Email: obrienmike@gmail.com (or professional domain when ready)
- Optional: Calendly embed for 30-min intro calls

---

### Interactive Module: Composable Architecture Visualizer

This is a standalone interactive component used on the Insights page and potentially embedded on the Home page. It visualizes the 5-layer architecture from "The Composable Agency" white paper.

#### Layers (top to bottom):
1. **Citizen Experience Layer** — Headless, omnichannel delivery
   - Components: Unified Portal, Mobile App, Voice/Chat, Kiosk/In-Person
2. **Managed Agentic Ecosystem** — AI agents with human-in-the-loop governance
   - Components: Navigation Agent, Eligibility Agent, Compliance Agent, Validation Agent
3. **Packaged Government Capabilities (PGCs)** — Autonomous, interchangeable service modules
   - Components: Benefits Engine, Permitting Module, Case Management, Identity Services, Payments Processing
4. **Government Data Mesh** — Federated data with computational governance
   - Components: Domain Data Products, Data Contracts, Federated Governance, Cross-Agency Query
5. **Cloud-Native Infrastructure** — GCP / multi-cloud platform foundation
   - Components: Vertex AI, BigQuery, GKE/Cloud Run, Apigee Gateway, Security Command Center

#### Interaction:
- 5 clickable layer bars stacked vertically
- Click a layer → detail panel slides in from the right (grid becomes 2-column)
- Detail panel shows: icon, title, full description, component grid, MACH badge
- Click again to collapse
- Each component in the grid has hover highlight
- Active layer gets left teal accent bar + scale(1.01)

#### MACH Badge (bottom of detail panel):
`Microservices · API-First · Cloud-Native · Headless` — Space Mono labels

---

## Project Structure

```
meetmikeobrien/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, nav, footer)
│   ├── page.tsx                # Home
│   ├── globals.css             # Global Tailwind + base styles
│   ├── about/page.tsx
│   ├── work/page.tsx
│   ├── insights/page.tsx
│   ├── propelai/page.tsx
│   ├── projects/page.tsx       # Side projects showcase
│   ├── life/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── nav.tsx
│   ├── footer.tsx
│   ├── section-header.tsx
│   ├── metric-card.tsx
│   ├── reveal.tsx              # Scroll-triggered animation wrapper
│   ├── hero.tsx                # Home page hero
│   ├── composable-visualizer.tsx  # Interactive architecture module
│   ├── career-timeline.tsx     # About page timeline
│   ├── case-study-card.tsx
│   ├── contact-form.tsx
│   ├── featured-work-cards.tsx # Home page featured work section
│   ├── image-lightbox.tsx      # Image zoom lightbox component
│   └── pipeline-visualizer.tsx # PropelAI pipeline step visualizer
├── lib/
│   ├── tokens.ts               # Design token constants
│   ├── case-studies.ts          # Case study data array (7 studies)
│   └── use-counter.ts          # Animated counter hook
├── public/
│   ├── images/                 # Project screenshots & photos
│   │   ├── PropelAI.jpg
│   │   ├── PGAPicker.jpg
│   │   ├── LocusMaps.jpg
│   │   ├── ChefDeCuisine.png   # Recipe input form screenshot
│   │   └── ChefDeCuisine2.png  # Mise en Temps timeline screenshot
│   ├── downloads/
│   │   └── composable-agency.pdf
│   └── contact-handler.php     # PHP form backend
├── tailwind.config.ts
├── next.config.mjs            # Static export, unoptimized images, trailing slashes
├── postcss.config.mjs
├── package.json
└── tsconfig.json
```

---

## Key Dependencies

```json
{
  "dependencies": {
    "next": "^14.2",
    "react": "^18.3",
    "react-dom": "^18.3",
    "framer-motion": "^11",
    "tailwindcss": "^3.4",
    "@tailwindcss/typography": "^0.5"
  },
  "devDependencies": {
    "typescript": "^5.4",
    "@types/react": "^18.3",
    "@types/node": "^20",
    "autoprefixer": "^10",
    "postcss": "^8"
  }
}
```

---

## Deployment

1. Push to `https://github.com/jmobrien1/meetmikeobrien`
2. Connect repo to Vercel (vercel.com → Import Project)
3. In Namecheap DNS, add:
   - A Record: `@` → `76.76.21.21` (Vercel)
   - CNAME: `www` → `cname.vercel-dns.com`
4. In Vercel project settings, add custom domain: `meetmikeobrien.com`
5. Vercel auto-provisions SSL

---

## Content Notes

- **All copy comes from `Website_Content_Guide_v2.docx`** — bios, taglines, metrics, case study descriptions, and page content are all sourced from this document.
- **Placeholder images needed:** headshot, Reedville river shots, family photos, speaking photos. Use solid navy/teal gradient placeholders until real photos are provided.
- **White paper PDF:** "The Composable Agency" needs to be formatted as a downloadable PDF with branded cover page.
- **External links:**
  - LinkedIn: `https://linkedin.com/in/obrienmike74`
  - Thoughtworks blog posts (3 articles — links in content guide)
  - Google Public Sector Leaders Connect, Illinois Data & AI Days (speaking)
- **Legal:** Confirm with Thoughtworks and SMX what case study details are shareable. Use generalized language where NDAs apply.

---

## Reference: Working Prototype

The attached `meetmikeobrien-prototype.jsx` file contains a fully functional React prototype of:
1. The Home Page Hero with animated metrics bar
2. The Composable Architecture Interactive Visualizer
3. The Site Architecture Map

This prototype runs as a single-file React component. Extract the design patterns, tokens, and interaction logic from it when building the Next.js project. The component structure, animation timings, and visual design are production-ready — they just need to be decomposed into the proper Next.js file structure.
