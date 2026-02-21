import type { Metadata } from 'next';
import Image from 'next/image';
import Reveal from '@/components/reveal';
import SectionHeader from '@/components/section-header';

export const metadata: Metadata = {
  title: 'Life',
  description:
    'Beyond the resume — Reedville, family, golf, and cooking. The personal side of Mike O\'Brien.',
};

export default function LifePage() {
  return (
    <div className="bg-warm-sand text-navy min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ padding: '80px clamp(24px, 6vw, 96px)' }}>
        {/* Warm gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #f5e6d3, #eedcc5)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#c4956a 1px, transparent 1px), linear-gradient(90deg, #c4956a 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="content-max relative z-[1]">
          <Reveal>
            <div className="max-w-[680px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-px bg-warm-terra" />
                <span className="font-mono text-eyebrow uppercase tracking-[0.18em] text-warm-terra font-medium">
                  Beyond the Resume
                </span>
              </div>
              <h1 className="font-serif text-hero font-normal text-navy leading-[1.08] tracking-[-0.025em] mb-6">
                Life Outside Work
              </h1>
              <p className="font-sans text-body text-navy/70 leading-[1.7]">
                The most important things in life don&apos;t show up on a resume. Here&apos;s
                what fills the rest of my time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Family */}
      <section style={{ padding: '80px clamp(24px, 6vw, 96px)' }} className="bg-warm-sand">
        <div className="content-max">
          <SectionHeader eyebrow="Family" title="The O'Brien Crew" light />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Reveal delay={100}>
              <div className="aspect-[4/3] rounded-card overflow-hidden relative">
                <Image src="/images/MeganBoys.jpeg" alt="Megan with John and Sam" fill className="object-cover" />
              </div>
            </Reveal>
            <Reveal>
              <div className="font-sans text-body text-navy/80 leading-[1.8] space-y-4">
                <p>
                  I live in Purcellville, Virginia with my beautiful wife Megan (we are both lifelong Loudoun County residents) and our sons John
                  and Sam. Megan is my ride or die. She is an amazing mom, a hall of fame athlete at
                  Loudoun Valley High School, President of a successful business and just all around
                  pretty awesome. John Jr. (my first name is John) is an accomplished golfer and
                  currently running operations for Megan&apos;s business. Sam had the foresight to see
                  that in the AI era, his general business administration degree at VCU was not going to set himself
                  up for success, has pivoted to learning a skilled trade. The family is completed by
                  two dogs: Leroy and Isla. They are cute. Leroy is a menace. Isla is the sweetest.
                </p>
                <p>
                  The most important people in my life are the reason I work as hard as I do — and
                  the reason I make sure to step away from work when it matters most.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <Reveal delay={100}>
              <div className="rounded-card overflow-hidden">
                <video
                  src="/images/jmUTV.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full rounded-card"
                />
                <p className="font-sans text-[0.82rem] text-navy/60 mt-2">John &amp; Mike</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-card overflow-hidden">
                <video
                  src="/images/SamUTV.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full rounded-card"
                />
                <p className="font-sans text-[0.82rem] text-navy/60 mt-2">Sam</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reedville */}
      <section style={{ padding: '80px clamp(24px, 6vw, 96px)' }} className="bg-[#eedcc5]">
        <div className="content-max">
          <SectionHeader
            eyebrow="The Water"
            title="Reedville & The Little Wicomico"
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Reveal>
              <div className="font-sans text-body text-navy/80 leading-[1.8] space-y-4">
                <p>
                  Our second home sits on the Little Wicomico River in Reedville, Virginia — a
                  small, historic fishing village on the Chesapeake Bay in Virginia&apos;s Northern
                  Neck. It&apos;s one of the last working fishing communities on the East Coast.
                </p>
                <p>
                  The river feeds into the Bay, offering access to some of the best fishing waters
                  in the mid-Atlantic. When the pace of D.C. consulting gets intense, the water
                  is where I reset. There&apos;s something about being out on the Bay that puts
                  everything in perspective.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="aspect-[4/3] rounded-card overflow-hidden relative">
                <Image src="/images/MikeBoat.jpeg" alt="Mike on the water in Reedville" fill className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Golf & Cooking */}
      <section style={{ padding: '80px clamp(24px, 6vw, 96px)' }} className="bg-warm-sand">
        <div className="content-max grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Golf */}
          <Reveal>
            <div className="h-full">
              <div className="aspect-[3/2] rounded-t-card overflow-hidden relative">
                <Image src="/images/mikegolf.jpeg" alt="Mike on the golf course" fill className="object-cover" />
              </div>
              <div className="p-6 rounded-b-card border border-warm-terra/10 border-t-0 bg-[#eedcc5]">
                <h3 className="font-serif text-card-title font-normal text-navy mb-3">Golf</h3>
                <p className="font-sans text-body-sm text-navy/70 leading-[1.7]">
                  A passionate golfer — there are few better ways to clear your head, think through
                  a strategy, and enjoy time outdoors. The parallels between golf and business
                  strategy are endless: patience, preparation, and knowing when to be aggressive.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Cooking */}
          <Reveal delay={150}>
            <div className="h-full">
              <div className="aspect-[3/2] rounded-t-card overflow-hidden relative">
                <Image src="/images/bbh.jpg" alt="Cooking" fill className="object-cover" />
              </div>
              <div className="p-6 rounded-b-card border border-warm-terra/10 border-t-0 bg-[#eedcc5]">
                <h3 className="font-serif text-card-title font-normal text-navy mb-3">Cooking</h3>
                <p className="font-sans text-body-sm text-navy/70 leading-[1.7]">
                  An avid cook with a particular love of Asian cuisine, especially complex noodle
                  soups. There&apos;s something deeply satisfying about the precision and creativity
                  involved — building layers of flavor is not so different from building composable
                  systems.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Photo Grid */}
      <section style={{ padding: '60px clamp(24px, 6vw, 96px)' }} className="bg-[#eedcc5]">
        <div className="content-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: '/images/LeroyIsla.jpeg', alt: 'Leroy and Isla' },
              { src: '/images/meganleroyboat.jpeg', alt: 'The O\'Brien family' },
              { src: '/images/mikeboys.jpeg', alt: 'Mike with John and Sam' },
              { src: '/images/MikeBoat.jpeg', alt: 'Out on the boat' },
            ].map((photo, i) => (
              <Reveal key={photo.alt} delay={i * 80}>
                <div className="aspect-square rounded-card overflow-hidden relative">
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
