'use client';

import Reveal from './reveal';

const steps = [
  { label: 'RFP Ingestion', desc: 'Multi-document upload and parsing across complex RFP packages.', icon: '\u{1F4C4}' },
  { label: 'Requirement Extraction', desc: 'AI-powered extraction of compliance requirements with 95%+ accuracy.', icon: '\u{1F50D}' },
  { label: 'Compliance Mapping', desc: 'Graph-based mapping of requirements to organizational capabilities.', icon: '\u{1F5FA}\u{FE0F}' },
  { label: 'Draft Generation', desc: 'Automated proposal drafts using APMP-aligned capture methodology.', icon: '\u{270D}\u{FE0F}' },
  { label: 'Quality Scoring', desc: 'Autonomous quality assessment scoring 87/100 on generated proposals.', icon: '\u{2705}' },
];

export default function PipelineVisualizer() {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-3">
      {steps.map((step, i) => (
        <Reveal key={step.label} delay={i * 100} className="flex-1">
          <div className="relative h-full p-5 rounded-card border border-teal/[0.08] bg-navy-mid hover:border-teal/20 transition-all duration-300 group">
            <div className="text-2xl mb-3">{step.icon}</div>
            <div className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-teal mb-2">
              Step {i + 1}
            </div>
            <h4 className="font-sans font-semibold text-[0.95rem] text-white mb-2">
              {step.label}
            </h4>
            <p className="font-sans text-[0.82rem] text-slate leading-[1.6]">
              {step.desc}
            </p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute right-[-14px] top-1/2 -translate-y-1/2 z-10 text-teal/40 font-mono text-sm">
                →
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
