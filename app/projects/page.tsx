import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/reveal';
import SectionHeader from '@/components/section-header';
import ImageLightbox from '@/components/image-lightbox';

export const metadata: Metadata = {
  title: 'Side Projects',
  description:
    'Personal projects by Mike O\'Brien — PropelAI, ClubHouse Pool, Locus Maps, and Chef de Cuisine. AI-powered tools built outside the day job.',
};

export default function ProjectsPage() {
  return (
    <section
      className="section-padding bg-navy min-h-screen"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(45,212,168,0.04) 0%, transparent 70%), #0a1628',
      }}
    >
      <div className="content-max">
        <SectionHeader
          eyebrow="Side Projects"
          title="Things I'm Building"
          subtitle="AI-powered tools and platforms built outside the day job — where curiosity meets code."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* PropelAI */}
          <Reveal>
            <div className="h-full">
              <div className="aspect-[3/2] rounded-t-card overflow-hidden relative">
                <ImageLightbox src="/images/propelai.png" alt="PropelAI platform screenshot" />
              </div>
              <div className="p-6 rounded-b-card border border-teal/[0.08] border-t-0 bg-navy-mid">
                <h3 className="font-serif text-card-title font-normal text-white mb-2">PropelAI</h3>
                <p className="font-sans text-body-sm text-slate leading-[1.7]">
                  AI-powered proposal generation for government contractors. Ingests RFPs,
                  extracts requirements, maps compliance, and drafts responses — 95%+
                  extraction accuracy.
                </p>
                <Link
                  href="/propelai"
                  className="inline-block mt-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-teal hover:text-white transition-colors no-underline"
                >
                  Learn more &rarr;
                </Link>
              </div>
            </div>
          </Reveal>

          {/* ClubHouse Pool */}
          <Reveal delay={100}>
            <div className="h-full">
              <div className="grid grid-cols-2 gap-1 rounded-t-card overflow-hidden">
                <div className="aspect-[3/2] relative col-span-2">
                  <ImageLightbox src="/images/Clubhouse.png" alt="ClubHouse Pool app" />
                </div>
                <div className="aspect-[3/2] relative">
                  <ImageLightbox src="/images/ClubHouse1.png" alt="ClubHouse Pool feature view" />
                </div>
                <div className="aspect-[3/2] relative">
                  <ImageLightbox src="/images/ClubHouse2.png" alt="ClubHouse Pool analytics" />
                </div>
                <div className="aspect-[3/2] relative col-span-2">
                  <ImageLightbox src="/images/ClubHouse3.png" alt="ClubHouse Pool details" />
                </div>
              </div>
              <div className="p-6 rounded-b-card border border-teal/[0.08] border-t-0 bg-navy-mid">
                <h3 className="font-serif text-card-title font-normal text-white mb-2">ClubHouse Pool</h3>
                <p className="font-sans text-body-sm text-slate leading-[1.7]">
                  A full-stack fantasy golf SaaS running live at clubhousepool.com.
                  Multi-tenant snake draft, real-time ESPN scoring sync, automated
                  head-to-head sidebets, multi-category prize engines, owner
                  authentication via magic link, and a live event feed with
                  AI-generated trash-talk headlines — built on FastAPI, React 19,
                  and SQLite, self-hosted on an NVIDIA DGX Spark.
                </p>
              </div>
            </div>
          </Reveal>

          {/* LocusMaps */}
          <Reveal delay={200}>
            <div className="h-full">
              <div className="grid grid-cols-2 gap-1 rounded-t-card overflow-hidden">
                <div className="aspect-[3/2] relative col-span-2">
                  <ImageLightbox src="/images/LocusMaps1.png" alt="LocusMaps custom poster platform" />
                </div>
                <div className="aspect-[3/2] relative">
                  <ImageLightbox src="/images/LocusMaps2.png" alt="LocusMaps map design view" />
                </div>
                <div className="aspect-[3/2] relative">
                  <ImageLightbox src="/images/LocusMaps3.png" alt="LocusMaps poster gallery" />
                </div>
              </div>
              <div className="p-6 rounded-b-card border border-teal/[0.08] border-t-0 bg-navy-mid">
                <h3 className="font-serif text-card-title font-normal text-white mb-2">Locus Maps</h3>
                <p className="font-sans text-body-sm text-slate leading-[1.7]">
                  A production B2C e-commerce platform at locusmapsai.com with 33
                  AI art styles powered by Gemini, Mapbox GL vector maps, Stripe
                  payments, and automated print fulfillment through Gelato — from
                  digital downloads to framed canvas. Full pipeline: Next.js
                  storefront on Vercel, FastAPI on Cloud Run, GPU render workers
                  on Modal Labs, Cloudflare R2 storage, and an active Etsy shop.
                </p>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Chef de Cuisine — full-width below the grid */}
        <Reveal delay={300}>
          <div className="mt-8 rounded-card border border-teal/[0.08] bg-navy-mid overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="aspect-[3/2] overflow-hidden relative">
                <ImageLightbox src="/images/ChefDeCuisine.png" alt="Chef de Cuisine recipe input interface" />
              </div>
              <div className="aspect-[3/2] overflow-hidden relative">
                <ImageLightbox src="/images/ChefDeCuisine2.png" alt="Chef de Cuisine Mise en Temps cooking timeline" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-card-title font-normal text-white mb-2">Chef de Cuisine</h3>
              <p className="font-sans text-body-sm text-slate leading-[1.7]">
                An AI culinary assistant that turns whatever ingredients you have on hand
                into restaurant-quality recipes. Uses a 4-agent pipeline — auditing
                equipment and skill level, translating ingredients into a dish concept,
                scheduling a phased cooking timeline, and adding executive chef finishing
                touches — powered by local LLM inference and RAG with a culinary knowledge base.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
