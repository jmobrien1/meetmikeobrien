'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CaseStudy } from '@/lib/case-studies';

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`rounded-card border transition-all duration-300 cursor-pointer ${
        expanded
          ? 'border-teal/30 bg-navy-mid'
          : 'border-teal/[0.08] bg-navy-mid hover:border-teal/20 hover:-translate-y-1'
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="font-mono text-tag uppercase tracking-[0.12em] text-teal">
            {study.organization}
          </span>
          <div className="text-right flex-shrink-0">
            <div className="font-mono text-[1.1rem] font-bold text-teal leading-none">
              {study.metric}
            </div>
            <div className="font-sans text-[0.7rem] text-slate mt-1">
              {study.metricLabel}
            </div>
          </div>
        </div>

        <h3 className="font-serif text-card-title font-normal text-white mb-2">
          {study.title}
        </h3>
        <p className="font-sans text-body-sm text-slate leading-[1.65]">
          {study.challenge}
        </p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-teal/[0.08] space-y-4">
                <div>
                  <h4 className="font-mono text-tag uppercase tracking-[0.12em] text-teal mb-2">
                    Challenge
                  </h4>
                  <p className="font-sans text-body-sm text-slate/90 leading-[1.7]">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-tag uppercase tracking-[0.12em] text-teal mb-2">
                    Approach
                  </h4>
                  <p className="font-sans text-body-sm text-slate/90 leading-[1.7]">
                    {study.approach}
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-tag uppercase tracking-[0.12em] text-teal mb-2">
                    Impact
                  </h4>
                  <p className="font-sans text-body-sm text-slate/90 leading-[1.7]">
                    {study.impact}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md bg-teal/[0.06] border border-teal/10 font-mono text-tag text-teal tracking-[0.05em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4 font-sans text-[0.78rem] font-medium text-teal/70">
          {expanded ? 'Click to collapse' : 'Click to expand'} →
        </div>
      </div>
    </div>
  );
}
