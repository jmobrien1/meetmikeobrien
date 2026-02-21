import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/reveal';
import SectionHeader from '@/components/section-header';
import ImageLightbox from '@/components/image-lightbox';

export const metadata: Metadata = {
  title: 'Side Projects',
  description:
    'Personal projects by Mike O\'Brien — PropelAI, PGA Pick AI, Locus Maps, and Chef de Cuisine. AI-powered tools built outside the day job.',
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
                <ImageLightbox src="/images/PropelAI.jpg" alt="PropelAI platform screenshot" />
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

          {/* PGA Pick AI */}
          <Reveal delay={100}>
            <div className="h-full">
              <div className="aspect-[3/2] rounded-t-card overflow-hidden relative">
                <ImageLightbox src="/images/PGAPicker.jpg" alt="PGA Pick AI analytics app" />
              </div>
              <div className="p-6 rounded-b-card border border-teal/[0.08] border-t-0 bg-navy-mid">
                <h3 className="font-serif text-card-title font-normal text-white mb-2">PGA Pick AI</h3>
                <p className="font-sans text-body-sm text-slate leading-[1.7]">
                  An AI-driven analytics app for PGA tournament predictions. Combines
                  player stats, course history, and conditions to generate data-backed picks.
                </p>
              </div>
            </div>
          </Reveal>

          {/* LocusMaps */}
          <Reveal delay={200}>
            <div className="h-full">
              <div className="aspect-[3/2] rounded-t-card overflow-hidden relative">
                <ImageLightbox src="/images/LocusMaps.jpg" alt="LocusMaps custom poster platform" />
              </div>
              <div className="p-6 rounded-b-card border border-teal/[0.08] border-t-0 bg-navy-mid">
                <h3 className="font-serif text-card-title font-normal text-white mb-2">Locus Maps</h3>
                <p className="font-sans text-body-sm text-slate leading-[1.7]">
                  A B2C platform that uses AI to generate custom map posters, star maps,
                  route maps, and coordinate prints — with automated print fulfillment
                  through Gelato.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Chef de Cuisine */}
          <Reveal delay={300}>
            <div className="h-full">
              <div className="aspect-[3/2] rounded-t-card overflow-hidden relative">
                <ImageLightbox src="/images/ChefDeCuisine.png" alt="Chef de Cuisine recipe input interface" />
              </div>
              <div className="p-6 border border-teal/[0.08] border-t-0 bg-navy-mid">
                <h3 className="font-serif text-card-title font-normal text-white mb-2">Chef de Cuisine</h3>
                <p className="font-sans text-body-sm text-slate leading-[1.7]">
                  An AI culinary assistant that turns whatever ingredients you have on hand
                  into restaurant-quality recipes. Uses a 4-agent pipeline — auditing
                  equipment and skill level, translating ingredients into a dish concept,
                  scheduling a phased cooking timeline, and adding executive chef finishing
                  touches — powered by local LLM inference and RAG with a culinary knowledge base.
                </p>
              </div>
              <div className="aspect-[3/2] overflow-hidden relative">
                <ImageLightbox src="/images/ChefDeCuisine2.png" alt="Chef de Cuisine Mise en Temps cooking timeline" />
              </div>
              <div className="h-2 rounded-b-card bg-navy-mid border-x border-b border-teal/[0.08]" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
