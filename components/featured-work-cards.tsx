import Link from 'next/link';
import Reveal from './reveal';

const cards: { tag: string; title: string; desc: string; href: string; accent: string; external?: boolean }[] = [
  {
    tag: 'White Paper',
    title: 'The Composable Agency',
    desc: 'A comprehensive framework for autonomous public service — MACH architecture, PGCs, and the Managed Agentic Ecosystem.',
    href: '/insights',
    accent: 'text-teal',
  },
  {
    tag: 'Platform',
    title: 'Seamless Government Experience',
    desc: 'The first landmark PaaS deal at Thoughtworks — AI-driven, composable architecture built on Google Cloud.',
    href: 'https://www.thoughtworks.com/en-us/what-we-do/customer-experience-product-design/seamless-government-experience',
    external: true,
    accent: 'text-[#4fd1c5]',
  },
  {
    tag: 'Venture',
    title: 'PropelAI',
    desc: 'AI-powered proposal generation achieving 95%+ compliance extraction. Built on n8n, Claude AI, and graph-based processing.',
    href: '/propelai',
    accent: 'text-teal-dim',
  },
];

export default function FeaturedWorkCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
      {cards.map((card, i) => {
        const className = "block p-7 rounded-card border border-teal/[0.08] bg-navy-mid cursor-pointer transition-all duration-[400ms] ease-expo h-full hover:border-teal/20 hover:-translate-y-1 no-underline group";
        const inner = (
          <>
            <span className={`font-mono text-tag uppercase tracking-[0.15em] ${card.accent}`}>
              {card.tag}
            </span>
            <h3 className="font-serif text-card-title font-normal text-white mt-3 mb-3">
              {card.title}
            </h3>
            <p className="font-sans text-body-sm text-slate leading-[1.65]">{card.desc}</p>
            <div className="mt-5 font-sans text-[0.82rem] font-semibold text-teal group-hover:translate-x-1 transition-transform">
              Explore &rarr;
            </div>
          </>
        );
        return (
        <Reveal key={i} delay={200 + i * 120}>
          {card.external ? (
            <a href={card.href} target="_blank" rel="noopener noreferrer" className={className}>
              {inner}
            </a>
          ) : (
            <Link href={card.href} className={className}>
              {inner}
            </Link>
          )}
        </Reveal>
        );
      })}
    </div>
  );
}
