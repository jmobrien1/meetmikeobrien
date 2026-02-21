# meetmikeobrien.com

Personal brand site for Mike O'Brien — GovTech executive, Thoughtworks Principal, PropelAI founder.

## Stack

- **Framework:** Next.js 14.2 (App Router) with static export (`output: 'export'`)
- **Styling:** Tailwind CSS 3.4 with custom design tokens
- **Animation:** Framer Motion 11
- **Language:** TypeScript 5
- **Deployment:** Vercel (static) — domain at Namecheap

## Key Conventions

- **Fonts:** Instrument Serif (headlines), DM Sans (body), Space Mono (metrics/labels). Never use Inter, Roboto, or system fonts.
- **Colors:** Navy (#0a1628) base, teal (#2dd4a8) accent, slate (#94a3b8) secondary text. The `/life` page uses a warm palette (sand/terra/amber).
- **Components:** Reusable `<SectionHeader>`, `<Reveal>`, `<MetricCard>`, `<ImageLightbox>` used across all pages.
- **Content:** All copy is hardcoded in components and `lib/case-studies.ts`. No CMS, no data fetching.
- **Images:** Static in `public/images/`. Use `<ImageLightbox>` for project screenshots. Images are unoptimized (static export constraint).
- **Contact form:** POSTs to `public/contact-handler.php` (PHP backend, not Next.js API routes).

## Pages (8 routes)

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, metrics bar, overview, featured work |
| `/about` | Bio, career timeline (8 positions), credentials |
| `/work` | 7 case studies (expandable cards) |
| `/insights` | Composable Agency white paper, blog links, speaking |
| `/propelai` | PropelAI product detail with pipeline visualizer |
| `/projects` | Side projects — PropelAI, PGA Pick AI, Locus Maps, Chef de Cuisine |
| `/life` | Personal — Reedville, family, golf, cooking (warm palette) |
| `/contact` | Contact form, LinkedIn, email |

## Build & Deploy

```bash
npm run build    # Generates static export to out/
npm run dev      # Local dev server at localhost:3000
```

Push to `main` on GitHub (`jmobrien1/meetmikeobrien`) — Vercel auto-deploys.

## Content Source

Canonical copy reference: `Website_Content_Guide_v2.docx`
