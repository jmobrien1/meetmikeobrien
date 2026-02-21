import type { Metadata } from 'next';
import Reveal from '@/components/reveal';
import SectionHeader from '@/components/section-header';
import ContactForm from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Mike O\'Brien — speaking engagements, consulting inquiries, PropelAI demos, and partnerships.',
};

export default function ContactPage() {
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
          eyebrow="Contact"
          title="Let's Connect"
          subtitle="Interested in working together, booking a speaking engagement, or learning more about PropelAI? Get in touch."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          {/* Contact Info Sidebar */}
          <div>
            <Reveal delay={200}>
              <div className="space-y-6">
                {/* Email */}
                <div className="p-5 rounded-card border border-teal/[0.08] bg-navy-mid">
                  <div className="font-mono text-tag uppercase tracking-[0.12em] text-teal mb-2">
                    Email
                  </div>
                  <a
                    href="mailto:obrienmike@gmail.com"
                    className="font-sans text-body-sm text-cream hover:text-teal transition-colors no-underline"
                  >
                    obrienmike@gmail.com
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="p-5 rounded-card border border-teal/[0.08] bg-navy-mid">
                  <div className="font-mono text-tag uppercase tracking-[0.12em] text-teal mb-2">
                    LinkedIn
                  </div>
                  <a
                    href="https://www.linkedin.com/in/mikeobrien74/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-body-sm text-cream hover:text-teal transition-colors no-underline"
                  >
                    linkedin.com/in/mikeobrien74
                  </a>
                </div>

                {/* Location */}
                <div className="p-5 rounded-card border border-teal/[0.08] bg-navy-mid">
                  <div className="font-mono text-tag uppercase tracking-[0.12em] text-teal mb-2">
                    Location
                  </div>
                  <div className="font-sans text-body-sm text-cream">
                    Washington, D.C. Metro Area
                  </div>
                  <div className="font-sans text-[0.78rem] text-slate mt-1">
                    Purcellville, Virginia
                  </div>
                </div>

                {/* Speaking */}
                <div className="p-5 rounded-card border border-teal/[0.08] bg-navy-mid">
                  <div className="font-mono text-tag uppercase tracking-[0.12em] text-teal mb-2">
                    Speaking
                  </div>
                  <p className="font-sans text-[0.82rem] text-slate leading-[1.6]">
                    Available for keynotes, panels, and workshops on government technology
                    transformation and AI.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
