import type { Metadata } from 'next';
import Image from 'next/image';
import Reveal from '@/components/reveal';
import SectionHeader from '@/components/section-header';
import CareerTimeline from '@/components/career-timeline';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Mike O\'Brien — 20+ years of digital government transformation. From AOL to agentic AI, from $3M accounts to $500M+ in wins.',
};

const credentials = [
  { label: 'MS, Management of IT', org: 'University of Virginia' },
  { label: 'BS, Business Administration', org: 'Saint Leo University' },
  { label: 'Active Top Secret', org: 'Security Clearance' },
  { label: 'Generative AI Leader', org: 'Google Certified' },
  { label: 'Cloud Digital Leader', org: 'Google Certified' },
  { label: 'Solutions Architect', org: 'AWS Certified' },
  { label: 'Cloud Practitioner', org: 'AWS Certified' },
  { label: 'Azure Fundamentals', org: 'Microsoft Certified' },
];

export default function AboutPage() {
  return (
    <>
      {/* Bio Section */}
      <section
        className="section-padding bg-navy"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(45,212,168,0.04) 0%, transparent 70%), #0a1628',
        }}
      >
        <div className="content-max">
          <SectionHeader
            eyebrow="About"
            title="The Full Story"
            subtitle="From the early days of AOL to leading AI-driven government modernization at Thoughtworks."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <Reveal>
            <div className="lg:col-span-2 space-y-6 font-sans text-body text-slate/90 leading-[1.8]">
              <p>
                Mike O&apos;Brien is a digital government and AI transformation executive with over 20
                years of experience driving P&amp;L growth, client relationships, and large-scale
                modernization programs across Federal, State, and Local government.
              </p>
              <p>
                As a Principal at Thoughtworks, Mike leads the State, Local and Education practice, serving as a
                trusted advisor to government and higher education CIOs, CTOs, and leadership on AI-first
                transformation strategies, cloud modernization roadmaps, and data platform
                architecture. In his first year, he built a $5B+ strategic pipeline and closed $20M
                in AI and digital modernization engagements — exceeding forecast by 30%. He authored
                &ldquo;The Composable Agency,&rdquo; a comprehensive thought leadership framework
                defining a new blueprint for autonomous public service, and scaled the Seamless
                Government Experience (SGX) platform in partnership with Google Cloud.
              </p>
              <p>
                Prior to Thoughtworks, Mike served as Vice President at SMX (Smartronix), where he
                held full P&amp;L ownership for a $160M/year division serving Federal and State
                clients. He captured over $500M in contract awards, grew the Commonwealth of
                Massachusetts account from $3M to $55M annually (1,730% growth), and led the
                largest cloud migration in Massachusetts history — the Healthcare Insurance Exchange
                implementation.
              </p>
              <p>
                Earlier in his career, Mike held leadership positions at Clearpath Solutions Group,
                where he increased services and cloud revenue 300% and helped drive a successful PE
                acquisition by TH Lee; at Aquilent, where he won a $100M GSA Cloud Services BPA
                and achieved AWS Premier Partnership; and at Smartronix, where he captured major
                Federal deals including a 10-year MSA at the Federal Reserve. He started his career
                at AOL in 1996, where he was promoted nine times over 14 years to Technical
                Director leading a 100+ person global IT infrastructure organization.
              </p>
              <p>
                Mike is also the founder of PropelAI, an AI-powered proposal generation platform
                for government contractors built on the APMP-aligned capture methodology, achieving 95%+
                compliance requirement extraction and 87/100 quality scores on autonomous
                generation.
              </p>
              <p className="text-teal italic">
                Mike lives in Purcellville, Virginia with his wife Megan and their sons John and
                Sam. When he&apos;s not working, you&apos;ll find him on the golf course, out on
                the water fishing and boating from his second home on the Little Wicomico River in
                Reedville, Virginia, or in the kitchen experimenting with a new recipe.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-card overflow-hidden relative aspect-[3/4]">
              <Image src="/images/mike.jpg" alt="Mike O'Brien" fill className="object-cover" />
            </div>
          </Reveal>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="section-padding bg-navy-mid">
        <div className="content-max">
          <SectionHeader
            eyebrow="Career"
            title="The Timeline"
            subtitle="From the early internet at AOL to leading AI transformation at Thoughtworks — click any milestone to expand."
          />
          <CareerTimeline />
        </div>
      </section>

      {/* Credentials Grid */}
      <section className="section-padding bg-navy">
        <div className="content-max">
          <SectionHeader
            eyebrow="Credentials"
            title="Education & Certifications"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {credentials.map((cred, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="p-5 rounded-card border border-teal/[0.08] bg-navy-mid hover:border-teal/20 transition-all duration-300">
                  <div className="font-sans font-semibold text-[0.95rem] text-white mb-1">
                    {cred.label}
                  </div>
                  <div className="font-sans text-[0.78rem] text-slate">
                    {cred.org}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
