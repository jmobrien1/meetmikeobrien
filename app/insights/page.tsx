import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/reveal';
import SectionHeader from '@/components/section-header';
import ComposableVisualizer from '@/components/composable-visualizer';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Thought leadership from Mike O\'Brien — The Composable Agency white paper, published articles on AI in government, and speaking engagements.',
};

const blogPosts = [
  {
    title: 'Transforming Government Services with AI',
    date: 'June 2025',
    publisher: 'Thoughtworks',
    desc: 'Introduces agentic AI as a practical approach to public services. Covers the SGX platform, personalized navigation, automated eligibility screening, and cross-agency workflow orchestration.',
    url: 'https://www.thoughtworks.com/en-in/insights/blog/digital-transformation/transforming-government-services-with-ai',
  },
  {
    title: 'Creating a Thriving Business Climate with Agentic AI',
    date: 'August 2025',
    publisher: 'Thoughtworks',
    desc: 'The business-facing companion covering integrated state and local business portals, real-time progress tracking, AI-powered permit automation, and the technical foundation of SGX on Google Cloud.',
    url: 'https://www.thoughtworks.com/en-us/insights/blog/digital-transformation/thriving-business-climate-with-AI-public-services',
  },
  {
    title: 'No Wrong Door: How AI Enables Accessible Government Services',
    date: '2025',
    publisher: 'Thoughtworks',
    desc: 'The citizen-focused piece exploring how AI enables a truly accessible government experience for citizens navigating benefits, services, and assistance programs.',
    url: 'https://www.thoughtworks.com/en-us/insights/blog/digital-transformation/how-ai-enables-accessible-government-for-citizens',
  },
];

const speakingTopics = [
  'The Composable Agency: A New Blueprint for Autonomous Public Service',
  'From $3M to $55M: Scaling Government Accounts Through Trust and Delivery',
  'From AOL to Agentic AI: 20 Years of Government Technology Transformation',
  'Taming the Demon: Responsible AI Governance in Government',
  'The Seamless Government Experience',
  'Building AI Products While Consulting Full-Time',
];

const contentPillars = [
  { name: 'The Composable Agency', desc: 'Modular government, PGCs, MACH architecture, strangler fig modernization' },
  { name: 'Agentic Government', desc: 'Managed AI ecosystems, human-in-the-loop, validation agents' },
  { name: 'Government Data Mesh', desc: 'Decentralized data ownership, compliance-as-code, federated governance' },
  { name: 'The Proposal Economy', desc: 'AI compliance extraction, the future of GovCon capture' },
  { name: 'Seamless Government', desc: 'Citizen-centric, business-friendly, no-wrong-door digital government' },
];

export default function InsightsPage() {
  return (
    <>
      {/* Featured White Paper Hero */}
      <section
        className="section-padding bg-navy relative overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(45,212,168,0.06) 0%, transparent 70%), #0a1628',
        }}
      >
        <div className="content-max">
          <Reveal>
            <div className="max-w-[680px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-px bg-teal" />
                <span className="eyebrow">Featured White Paper</span>
              </div>
              <h1 className="font-serif text-hero font-normal text-white leading-[1.08] tracking-[-0.025em] mb-6">
                The Composable Agency
              </h1>
              <p className="font-sans text-body text-slate leading-[1.7] mb-4">
                A comprehensive framework for autonomous public service — architecting the agentic,
                composable government. Synthesizing MACH architecture, Packaged Government
                Capabilities, and a managed agentic ecosystem.
              </p>
              <p className="font-sans text-body-sm text-slate/70 mb-8">
                ~8,000 words &middot; 7 sections &middot; Published by Thoughtworks
              </p>
              <Link
                href="/downloads/composable-agency.pdf"
                className="inline-block px-8 py-3.5 rounded-lg bg-gradient-to-br from-teal to-teal-dim text-navy font-sans font-semibold text-body-sm tracking-[0.01em] no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(45,212,168,0.3)] transition-all duration-300"
              >
                Download PDF →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interactive Visualizer */}
      <section className="section-padding bg-navy-mid relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(45,212,168,0.04), transparent 70%)',
          }}
        />
        <div className="content-max relative z-[1]">
          <SectionHeader
            eyebrow="Interactive Framework"
            title="The Composable Agency"
            subtitle="A blueprint for autonomous public service — built on MACH architecture, Packaged Government Capabilities, and a managed agentic ecosystem. Click any layer to explore."
          />
          <ComposableVisualizer />
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-navy">
        <div className="content-max">
          <SectionHeader
            eyebrow="Published Articles"
            title="Writing & Insights"
            subtitle="Published thought leadership on AI transformation in government."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogPosts.map((post, i) => (
              <Reveal key={i} delay={i * 100}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-card border border-teal/[0.08] bg-navy-mid hover:border-teal/20 hover:-translate-y-1 transition-all duration-300 h-full no-underline group"
                >
                  <div className="font-mono text-tag uppercase tracking-[0.12em] text-teal mb-2">
                    {post.publisher} &middot; {post.date}
                  </div>
                  <h3 className="font-serif text-card-title font-normal text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="font-sans text-body-sm text-slate leading-[1.65]">
                    {post.desc}
                  </p>
                  <div className="mt-4 font-sans text-[0.82rem] font-semibold text-teal group-hover:translate-x-1 transition-transform">
                    Read Article →
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="section-padding bg-navy-mid">
        <div className="content-max">
          <SectionHeader
            eyebrow="Speaking"
            title="Speaking Topics"
            subtitle="Available for keynotes, panels, and workshops on government technology and AI transformation."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {speakingTopics.map((topic, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="p-5 rounded-card border border-teal/[0.08] bg-navy hover:border-teal/20 transition-all duration-300 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                  <span className="font-sans text-body-sm text-cream/90">
                    {topic}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={500}>
            <div className="mt-6 flex gap-4 flex-wrap">
              <span className="font-mono text-tag uppercase tracking-[0.12em] text-slate">
                Past Speaking:
              </span>
              {['Google Public Sector Leaders Connect', 'Illinois Data & AI Days', 'LinkedIn Live'].map((event) => (
                <span
                  key={event}
                  className="px-3 py-1 rounded-md bg-teal/[0.06] border border-teal/10 font-mono text-tag text-teal tracking-[0.05em]"
                >
                  {event}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content Pillars */}
      <section className="section-padding bg-navy">
        <div className="content-max">
          <SectionHeader
            eyebrow="Content Pillars"
            title="Themes & Focus Areas"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {contentPillars.map((pillar, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="p-5 rounded-card border border-teal/[0.08] bg-navy-mid hover:border-teal/20 transition-all duration-300">
                  <h4 className="font-serif text-[1.1rem] font-normal text-white mb-2">
                    {pillar.name}
                  </h4>
                  <p className="font-sans text-[0.82rem] text-slate leading-[1.6]">
                    {pillar.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
