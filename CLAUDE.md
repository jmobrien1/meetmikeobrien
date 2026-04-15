# meetmikeobrien.com

Personal brand site for Mike O'Brien — GovTech executive, Thoughtworks Principal, PropelAI founder.

## Stack

- **Framework:** Next.js 14.2 (App Router) with static export (`output: 'export'`)
- **Styling:** Tailwind CSS 3.4 with custom design tokens
- **Animation:** Framer Motion 11
- **Language:** TypeScript 5
- **Deployment:** Vercel (static) — domain DNS at Bluehost, A record → `216.198.79.1`

## Key Conventions

- **Fonts:** Instrument Serif (headlines), DM Sans (body), Space Mono (metrics/labels). Never use Inter, Roboto, or system fonts.
- **Colors:** Navy (#0a1628) base, teal (#2dd4a8) accent, slate (#94a3b8) secondary text. The `/life` page uses a warm palette (sand/terra/amber).
- **Components:** Reusable `<SectionHeader>`, `<Reveal>`, `<MetricCard>`, `<ImageLightbox>` used across all pages.
- **Content:** All copy is hardcoded in components and `lib/case-studies.ts`. No CMS, no data fetching.
- **Images:** Static in `public/images/`. Use `<ImageLightbox>` for project screenshots (single image, click-to-zoom). Multi-image projects use grid layouts with multiple `<ImageLightbox>` components. Images are unoptimized (static export constraint).
- **Contact form:** POSTs to `public/contact-handler.php` (PHP backend, not Next.js API routes).

## Pages (8 routes + standalone pages)

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, metrics bar, overview, featured work |
| `/about` | Bio, career timeline (8 positions), credentials |
| `/work` | 7 case studies (expandable cards) |
| `/insights` | Composable Agency white paper, blog links, speaking |
| `/propelai` | PropelAI product detail with pipeline visualizer |
| `/projects` | Side projects — PropelAI, ClubHouse Pool, Locus Maps, Chef de Cuisine |
| `/life` | Personal — Reedville, family, golf, cooking (warm palette) |
| `/contact` | Contact form, LinkedIn, email |
| `/strategic-plan/` | Standalone HTML — Infosys Public Services SLG growth plan |

### Standalone HTML Pages

Standalone pages (not Next.js routes) go in `public/<name>/index.html`. This structure ensures they're served as-is without Next.js client-side routing intercepting them. The `vercel.json` has a redirect from `/strategic-plan.html` → `/strategic-plan/` for backwards compatibility.

## Build & Deploy

```bash
npm run build    # Generates static export to out/
npm run dev      # Local dev server at localhost:3000
```

Push to `main` on GitHub (`jmobrien1/meetmikeobrien`) — Vercel auto-deploys.

## Content Source

Canonical copy reference: `Website_Content_Guide_v2.docx`
