import type { Metadata } from 'next';
import Reveal from '@/components/reveal';
import SectionHeader from '@/components/section-header';
import MetricCard from '@/components/metric-card';
import PipelineVisualizer from '@/components/pipeline-visualizer';

export const metadata: Metadata = {
  title: 'PropelAI',
  description:
    'AI-powered proposal generation for government contractors. 95%+ compliance extraction. Built on Claude AI, RAG, and graph-based processing.',
};

const techStack = ['n8n Workflows', 'Claude AI', 'RAG Architecture', 'Graph-Based Processing', 'APMP-Aligned Process', 'Multi-Document NLP'];

export default function PropelAIPage() {
  return (
    <>
      {/* Hero */}
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
                <span className="eyebrow">Venture</span>
              </div>
              <h1 className="font-serif text-hero font-normal text-white leading-[1.08] tracking-[-0.025em] mb-6">
                AI-Powered Proposal Generation for Government Contractors
              </h1>
              <p className="font-sans text-body text-slate leading-[1.7]">
                PropelAI automates the proposal lifecycle using an APMP-aligned capture methodology,
                advanced NLP, and graph-based compliance extraction. It reads complex RFPs, extracts
                requirements across multiple documents, and generates compliant, high-quality
                proposal drafts.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="section-padding bg-navy-mid">
        <div className="content-max grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal>
            <div className="p-8 rounded-card border border-red-500/10 bg-navy">
              <h3 className="font-mono text-tag uppercase tracking-[0.12em] text-red-400 mb-4">
                The Problem
              </h3>
              <p className="font-sans text-body text-slate/90 leading-[1.7]">
                Government proposals are complex, compliance-heavy, and time-consuming. Firms spend
                hundreds of hours on each RFP response, with inconsistent quality and frequent
                compliance gaps. Traditional approaches rely on manual review that misses
                requirements and produces inconsistent outputs.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="p-8 rounded-card border border-teal/20 bg-navy">
              <h3 className="font-mono text-tag uppercase tracking-[0.12em] text-teal mb-4">
                The Solution
              </h3>
              <p className="font-sans text-body text-slate/90 leading-[1.7]">
                PropelAI automates the proposal lifecycle using an APMP-aligned capture methodology,
                advanced NLP, and graph-based compliance extraction. It reads complex RFPs, extracts
                requirements across multiple documents, and generates compliant, high-quality
                proposal drafts — achieving 95%+ extraction accuracy and 87/100 quality scores.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pipeline Visualizer */}
      <section className="section-padding bg-navy">
        <div className="content-max">
          <SectionHeader
            eyebrow="How It Works"
            title="The PropelAI Pipeline"
            subtitle="From RFP ingestion to quality-scored proposal drafts — an end-to-end automated workflow."
          />
          <PipelineVisualizer />
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding bg-navy-mid">
        <div className="content-max">
          <SectionHeader eyebrow="Results" title="Performance Metrics" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <MetricCard value={95} suffix="%+" label="Compliance Extraction" delay={0} />
            <MetricCard value={87} suffix="/100" label="Quality Score" delay={150} />
            <MetricCard value={40} suffix="%" label="Previous Baseline" delay={300} />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-navy">
        <div className="content-max">
          <SectionHeader eyebrow="Technology" title="Built With" />
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <Reveal key={tech} delay={i * 60}>
                <span className="px-5 py-2.5 rounded-lg bg-teal/[0.06] border border-teal/10 font-mono text-[0.75rem] text-teal tracking-[0.02em] hover:bg-teal/[0.12] hover:border-teal/20 transition-all duration-300">
                  {tech}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding bg-navy-mid">
        <div className="content-max">
          <SectionHeader
            eyebrow="Origin"
            title="Why I Built PropelAI"
          />
          <Reveal>
            <div className="max-w-[700px] font-sans text-body text-slate/90 leading-[1.8] space-y-4">
              <p>
                After years of leading proposal efforts across government contracts worth hundreds
                of millions of dollars, I saw the same painful pattern repeat: talented teams
                spending weeks manually reviewing RFPs, cross-referencing compliance requirements
                across multiple documents, and producing inconsistent draft responses.
              </p>
              <p>
                The process was ripe for AI transformation. PropelAI was born from the belief that
                the proposal process should be a competitive advantage, not a bottleneck. By
                combining the APMP-aligned capture methodology with modern AI — Claude for generation,
                RAG for knowledge retrieval, and graph-based processing for compliance mapping —
                we&apos;ve built a platform that achieves near-perfect compliance extraction and
                dramatically accelerates the proposal lifecycle.
              </p>
              <p className="text-teal italic">
                PropelAI represents what I love most: taking a real operational problem and building
                a technology solution that actually works.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
