'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './reveal';

const archLayers = [
  {
    id: 'citizen',
    label: 'Citizen Experience Layer',
    subtitle: 'Headless, omnichannel delivery',
    color: '#4fd1c5',
    icon: '\u{1F464}',
    items: ['Unified Portal', 'Mobile App', 'Voice / Chat', 'Kiosk / In-Person'],
    detail:
      'A headless frontend layer that delivers seamless, personalized government experiences across every channel. Citizens interact with one consistent interface regardless of which agency they need — the "no wrong door" vision brought to life through composable UI components.',
  },
  {
    id: 'agentic',
    label: 'Managed Agentic Ecosystem',
    subtitle: 'AI agents with human-in-the-loop governance',
    color: '#2dd4a8',
    icon: '\u{1F916}',
    items: ['Navigation Agent', 'Eligibility Agent', 'Compliance Agent', 'Validation Agent'],
    detail:
      'AI agents operate within strict guardrails — ephemeral identity, just-in-time consent, and continuous validation agents that audit every decision. Human-in-the-loop governance ensures no citizen-impacting action is taken without appropriate oversight.',
  },
  {
    id: 'pgc',
    label: 'Packaged Government Capabilities',
    subtitle: 'Autonomous, interchangeable service modules',
    color: '#2dd4a8',
    icon: '\u{1F4E6}',
    items: ['Benefits Engine', 'Permitting Module', 'Case Management', 'Identity Services', 'Payments Processing'],
    detail:
      'PGCs are self-contained, API-first service modules — each one encapsulates a complete government function with its own data, logic, and interface contract. They follow MACH principles: Microservices, API-first, Cloud-native, Headless.',
  },
  {
    id: 'mesh',
    label: 'Government Data Mesh',
    subtitle: 'Federated data with computational governance',
    color: '#1a9e7a',
    icon: '\u{1F517}',
    items: ['Domain Data Products', 'Data Contracts', 'Federated Governance', 'Cross-Agency Query'],
    detail:
      'A decentralized data architecture where each agency owns and publishes its data as discoverable, self-describing "data products" with clear contracts and SLAs. Federated computational governance enforces interoperability, privacy, and quality standards automatically.',
  },
  {
    id: 'infra',
    label: 'Cloud-Native Infrastructure',
    subtitle: 'GCP / multi-cloud platform foundation',
    color: '#0d8668',
    icon: '\u{2601}\u{FE0F}',
    items: ['Vertex AI', 'BigQuery', 'GKE / Cloud Run', 'Apigee Gateway', 'Security Command Center'],
    detail:
      'The foundation layer built on Google Cloud Platform — Vertex AI for model serving, BigQuery for analytics, GKE for container orchestration, and Apigee for API management. FedRAMP authorized, CMMC 2.0 compliant.',
  },
];

export default function ComposableVisualizer() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const active = archLayers.find((l) => l.id === activeLayer);

  return (
    <div>
      <div
        className={`grid gap-10 transition-all duration-500 ease-expo ${
          active ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'
        }`}
      >
        {/* Layer Stack */}
        <div className="flex flex-col gap-1">
          {archLayers.map((layer, i) => {
            const isActive = activeLayer === layer.id;
            return (
              <Reveal key={layer.id} delay={300 + i * 80}>
                <button
                  onClick={() => setActiveLayer(isActive ? null : layer.id)}
                  className={`w-full flex items-center gap-4 p-5 rounded-[10px] border text-left transition-all duration-[400ms] ease-expo relative overflow-hidden ${
                    isActive
                      ? 'border-teal/30 scale-[1.01]'
                      : 'border-teal/[0.08] bg-navy-mid hover:border-teal/20'
                  }`}
                  style={{
                    background: isActive
                      ? `linear-gradient(135deg, ${layer.color}12, ${layer.color}06)`
                      : undefined,
                  }}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-[1.1rem] flex-shrink-0 transition-all duration-300 ${
                      isActive ? '' : 'bg-white/[0.03]'
                    }`}
                    style={{
                      background: isActive ? `${layer.color}20` : undefined,
                    }}
                  >
                    {layer.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div
                      className={`font-sans font-semibold text-[0.95rem] mb-0.5 ${
                        isActive ? 'text-white' : 'text-cream'
                      }`}
                    >
                      {layer.label}
                    </div>
                    <div className="font-sans text-[0.78rem] text-slate">
                      {layer.subtitle}
                    </div>
                  </div>

                  <span
                    className={`font-mono text-[0.7rem] tracking-[0.1em] transition-all duration-300 ${
                      isActive ? 'text-teal rotate-90' : 'text-slate'
                    }`}
                  >
                    →
                  </span>

                  {isActive && (
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l"
                      style={{
                        background: `linear-gradient(180deg, ${layer.color}, ${layer.color}60)`,
                      }}
                    />
                  )}
                </button>
              </Reveal>
            );
          })}

          <div className="flex justify-center py-2">
            <div className="flex items-center gap-2 opacity-40">
              <div className="w-1.5 h-1.5 rounded-full bg-teal" />
              <span className="font-mono text-tag text-slate tracking-[0.1em] uppercase">
                API-first · Event-driven · Composable
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-teal" />
            </div>
          </div>
        </div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-navy-mid rounded-[14px] border p-8 relative overflow-hidden"
              style={{ borderColor: `${active.color}20` }}
            >
              <div
                className="absolute -top-[60px] -right-[60px] w-[200px] h-[200px] rounded-full"
                style={{
                  background: `radial-gradient(circle, ${active.color}08, transparent 70%)`,
                }}
              />

              <div className="relative z-[1]">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{active.icon}</span>
                  <h3 className="font-serif text-2xl font-normal text-white">
                    {active.label}
                  </h3>
                </div>

                <p className="font-sans text-body-sm text-slate leading-[1.75] mb-7">
                  {active.detail}
                </p>

                <div className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-teal mb-3.5">
                  Components
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {active.items.map((item) => (
                    <div
                      key={item}
                      className="p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:border-teal/25 hover:bg-teal/[0.03] transition-all duration-200 flex items-center gap-2"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-sm opacity-40"
                        style={{ background: active.color }}
                      />
                      <span className="font-sans text-[0.82rem] text-slate">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.04] flex flex-wrap gap-4">
                  {['Microservices', 'API-First', 'Cloud-Native', 'Headless'].map(
                    (m) => (
                      <span
                        key={m}
                        className="font-mono text-tag tracking-[0.1em] uppercase text-teal opacity-60"
                      >
                        {m}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
