'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './reveal';

const timelineData = [
  {
    id: 'aol',
    years: '1996–2010',
    title: 'AOL — The Foundation',
    role: 'Technical Director',
    summary: 'Promoted 9 times over 14 years to lead a 100+ person global IT infrastructure organization.',
    detail:
      'Started at AOL in 1996 — the early internet era — and was promoted nine times to an executive leadership role overseeing Global IT Infrastructure and Support Services. Built foundational technical and leadership capabilities during the most transformative period in internet history.',
    metric: '9 Promotions',
  },
  {
    id: 'bamboo',
    years: '2010–2012',
    title: 'Bamboo Solutions — Microsoft Ecosystem',
    role: 'Vice President',
    summary: 'Led professional services and customer success for a leading Microsoft SharePoint solutions provider.',
    detail:
      'Led the professional services and customer success organizations for a leading provider of solutions in the Microsoft SharePoint ecosystem. Managed end-to-end service delivery, client engagement strategy, and team performance across both practices.',
    metric: 'VP',
  },
  {
    id: 'smartronix',
    years: '2012–2014',
    title: 'Smartronix — Into Government Cloud',
    role: 'Director, Cloud Solutions',
    summary: 'Led cloud services unit with P&L responsibility. Won Federal Reserve MSA and $10B DOI IDIQ.',
    detail:
      'Led a cloud services unit with P&L responsibility and a team of 35 consultants. Key wins included a 10-year MSA at the Federal Reserve and the $10B DOI Cloud IDIQ. This marked the entry into government technology at scale.',
    metric: '$10B IDIQ',
  },
  {
    id: 'aquilent',
    years: '2014–2015',
    title: 'Aquilent — Building a Cloud Practice',
    role: 'Director, Cloud Solutions Group',
    summary: 'Won $100M GSA BPA. Achieved $20M run rate in 3 months. Earned AWS Premier Partner status.',
    detail:
      'Built and scaled a government cloud practice with full BD, capture, P&L, and partner management accountability. Won the $100M GSA Cloud Services BPA, achieved $20M annual run rate within 3 months (HHS-CMS and other Federal clients), and earned AWS Premier Partnership status.',
    metric: '$100M BPA',
  },
  {
    id: 'clearpath',
    years: '2015–2018',
    title: 'Clearpath Solutions Group — Transformation & PE Exit',
    role: 'Vice President',
    summary: 'Transformed VAR to solutions provider. 300% revenue growth. Enabled PE acquisition by TH Lee.',
    detail:
      'Transformed the organization from a VAR to a modern IT solutions provider with public sector market penetration. Increased services and cloud revenue 300% within 2 years. Added AWS and Azure capabilities. The capabilities built were key factors in the successful private equity acquisition by TH Lee.',
    metric: '300% Growth',
  },
  {
    id: 'smx',
    years: '2018–2024',
    title: 'SMX — The $500M Chapter',
    role: 'VP, State & Local and Federal Civilian',
    summary: '$500M+ in captures. Grew Massachusetts from $3M to $55M. Led largest cloud migration in state history.',
    detail:
      'Recruited to return to Smartronix to help scale the business for private equity sale as a strategic account director. Promoted to VP with full P&L ownership for a $160M/year division. Captured over $500M in contract awards. Grew the Commonwealth of Massachusetts account from $3M to $55M annually (1,730% growth). Executive Sponsor for programs across FBI, CISA, Department of State, and the Federal Reserve.',
    metric: '$500M+',
  },
  {
    id: 'ob-consulting',
    years: '2024',
    title: 'OB Consulting — Independence',
    role: 'Principal',
    summary: 'Founded independent consultancy following the $1.15B PE transaction.',
    detail:
      'Founded independent consultancy following the successful $1.15B private equity transaction (SMX/Smartronix). Led growth strategy, capture/proposal development, and digital transformation advisory for government contractors seeking to scale Federal and SLED market presence.',
    metric: '$1.15B PE',
  },
  {
    id: 'thoughtworks',
    years: '2024–Present',
    title: 'Thoughtworks — The Current Chapter',
    role: 'Principal, Public Sector',
    summary: '$5B+ pipeline. $20M closed in year one. Authored The Composable Agency. Launched SGX.',
    detail:
      'Recruited to scale the US public sector practice. Built $5B+ strategic pipeline. Closed $20M in AI and digital modernization engagements within first year, exceeding forecast by 30%. Authored "The Composable Agency" framework. Scaled the SGX platform in partnership with Google Cloud. Built PropelAI — an AI-powered capture and proposal platform.',
    metric: '$5B+ Pipeline',
  },
];

export default function CareerTimeline() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-px bg-teal/20" />

      <div className="flex flex-col gap-3">
        {timelineData.map((item, i) => {
          const isOpen = expanded === item.id;
          return (
            <Reveal key={item.id} delay={i * 80}>
              <button
                onClick={() => setExpanded(isOpen ? null : item.id)}
                className="w-full text-left relative pl-12"
              >
                {/* Dot */}
                <div
                  className={`absolute left-[14px] top-6 w-[11px] h-[11px] rounded-full border-2 transition-all duration-300 ${
                    isOpen
                      ? 'bg-teal border-teal scale-125'
                      : 'bg-navy border-teal/40'
                  }`}
                />

                <div
                  className={`p-5 rounded-card border transition-all duration-300 ${
                    isOpen
                      ? 'border-teal/30 bg-navy-mid'
                      : 'border-teal/[0.08] bg-navy-mid/50 hover:border-teal/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-tag uppercase tracking-[0.12em] text-teal mb-1">
                        {item.years}
                      </div>
                      <h3 className="font-serif text-[1.2rem] font-normal text-white mb-1">
                        {item.title}
                      </h3>
                      <div className="font-sans text-body-sm text-slate">
                        {item.role}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[0.75rem] font-bold text-teal whitespace-nowrap">
                        {item.metric}
                      </span>
                      <span
                        className={`font-mono text-[0.7rem] text-slate transition-transform duration-300 ${
                          isOpen ? 'rotate-90' : ''
                        }`}
                      >
                        &rarr;
                      </span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-teal/[0.08]">
                          <p className="font-sans text-body-sm text-slate/90 leading-[1.7]">
                            {item.detail}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
