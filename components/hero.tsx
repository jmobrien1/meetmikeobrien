'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MetricCard from './metric-card';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative overflow-hidden flex flex-col bg-navy"
      style={{ minHeight: 'calc(100vh - 72px)' }}
    >
      {/* Atmospheric Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 20%, rgba(45,212,168,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 60% 80% at 20% 80%, rgba(15,33,64,0.8) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 90% 90%, rgba(45,212,168,0.03) 0%, transparent 50%)
          `,
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#2dd4a8 1px, transparent 1px),
            linear-gradient(90deg, #2dd4a8 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating Accent Lines */}
      <div
        className="absolute z-0"
        style={{
          top: '15%',
          right: '-5%',
          width: 400,
          height: 1,
          background: 'linear-gradient(90deg, rgba(45,212,168,0.25), transparent)',
          transform: 'rotate(-25deg)',
        }}
      />
      <div
        className="absolute z-0"
        style={{
          bottom: '25%',
          left: '-3%',
          width: 300,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(45,212,168,0.19))',
          transform: 'rotate(15deg)',
        }}
      />

      {/* Main Content */}
      <div
        className="flex-1 flex flex-col justify-center relative z-[1] content-max w-full"
        style={{ padding: '48px clamp(24px, 6vw, 96px) 40px' }}
      >
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-7 transition-all duration-[800ms] ease-expo"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '200ms',
          }}
        >
          <div className="w-12 h-px bg-teal" />
          <span className="eyebrow">
            Principal, Thoughtworks &middot; Founder, PropelAI
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-hero font-normal text-white leading-[1.08] tracking-[-0.025em] max-w-[820px] m-0 transition-all duration-1000 ease-expo"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '400ms',
          }}
        >
          From AOL to{' '}
          <span className="italic bg-gradient-to-br from-teal to-[#4fd1c5] bg-clip-text text-transparent">
            agentic AI
          </span>
          —transforming how government serves people.
        </h1>

        {/* Subheadline */}
        <p
          className="font-sans text-body text-slate leading-[1.7] max-w-[640px] mt-7 transition-all duration-[900ms] ease-expo"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '650ms',
          }}
        >
          20+ years transforming government technology. $500M+ in contract captures.
          From $3M accounts to the largest cloud migration in Massachusetts history.
          Author of{' '}
          <em className="text-teal italic">The Composable Agency</em>.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-3.5 mt-10 transition-all duration-[900ms] ease-expo"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '850ms',
          }}
        >
          <Link
            href="/about"
            className="px-7 py-3.5 rounded-lg border border-teal/25 bg-teal/[0.06] text-teal font-sans font-semibold text-body-sm tracking-[0.01em] no-underline hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(45,212,168,0.1)] transition-all duration-300"
          >
            About Me
          </Link>
          <Link
            href="/insights"
            className="px-8 py-3.5 rounded-lg bg-gradient-to-br from-teal to-teal-dim text-navy font-sans font-semibold text-body-sm tracking-[0.01em] no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(45,212,168,0.3)] transition-all duration-300"
          >
            The Composable Agency <span className="ml-2">&rarr;</span>
          </Link>
          <Link
            href="/propelai"
            className="px-7 py-3.5 rounded-lg border border-teal/25 bg-teal/[0.06] text-teal font-sans font-semibold text-body-sm tracking-[0.01em] no-underline hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(45,212,168,0.1)] transition-all duration-300"
          >
            Explore PropelAI
          </Link>
        </div>
      </div>

      {/* Metrics Bar */}
      <div
        className="border-t border-teal/[0.08]"
        style={{
          padding: '0 clamp(24px, 6vw, 96px)',
          background: 'linear-gradient(180deg, transparent, rgba(10,22,40,0.5))',
        }}
      >
        <div className="content-max grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0.5 py-3">
          <MetricCard value={500} prefix="$" suffix="M+" label="Contract Captures" delay={100} />
          <MetricCard value={5} prefix="$" suffix="B+" label="Pipeline Built" delay={250} />
          <MetricCard value={20} suffix="+" label="Years in GovTech" delay={400} />
          <MetricCard value={1730} suffix="%" label="Account Growth" delay={550} />
          <MetricCard value={95} suffix="%+" label="Compliance Extraction" delay={700} />
        </div>
      </div>
    </section>
  );
}
