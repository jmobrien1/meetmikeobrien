import type { Metadata } from 'next';
import Reveal from '@/components/reveal';
import SectionHeader from '@/components/section-header';
import CaseStudyCard from '@/components/case-study-card';
import { caseStudies } from '@/lib/case-studies';

export const metadata: Metadata = {
  title: 'Work',
  description:
    '$500M+ in government contract captures. 7 case studies spanning cloud migration, AI transformation, and platform development.',
};

export default function WorkPage() {
  return (
    <section
      className="section-padding bg-navy"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(45,212,168,0.04) 0%, transparent 70%), #0a1628',
      }}
    >
      <div className="content-max">
        <SectionHeader
          eyebrow="Portfolio"
          title="Work & Case Studies"
          subtitle="Highlights from 20+ years of government technology transformation — click any card to explore the full case study."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudies.map((study, i) => (
            <Reveal key={study.id} delay={i * 80}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
