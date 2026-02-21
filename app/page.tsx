import Hero from '@/components/hero';
import Reveal from '@/components/reveal';
import FeaturedWorkCards from '@/components/featured-work-cards';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Overview Section */}
      <section
        className="section-padding"
        style={{
          background: 'linear-gradient(180deg, #0a1628, #0f2140)',
        }}
      >
        <div className="content-max">
          <Reveal>
            <div className="max-w-[760px] font-sans text-[clamp(1.1rem,1.6vw,1.3rem)] text-cream/85 leading-[1.8]">
              I lead government technology modernization at Thoughtworks, where
              I&apos;ve built a $5B+ pipeline and closed $20M in AI and modernization
              engagements in my first year. Before that, I captured over $500M in
              contract awards and grew a single state account from $3M to $55M. I
              also built PropelAI — an AI platform that automates government
              proposal generation with near-perfect compliance extraction.{' '}
              <span className="text-teal italic">
                My work sits at the intersection of AI, public service, and
                enterprise delivery.
              </span>
            </div>
          </Reveal>

          <FeaturedWorkCards />
        </div>
      </section>
    </>
  );
}
