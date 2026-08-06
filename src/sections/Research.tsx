import { SectionHeader } from '@/components/ui';
import { MediaPlaceholder, Reveal } from '@/components/MediaPlaceholder';
import { Lightbulb } from 'lucide-react';

const refs = [
  { label: 'Experience website references', caption: 'Scroll-based product storytelling and premium pacing.' },
  { label: 'Beverage branding', caption: 'How drink brands balance freshness with a premium tone.' },
  { label: 'Typography and layout', caption: 'Editorial type pairings and clear grid structures.' },
  { label: 'Interaction references', caption: 'Micro-interactions and 3D product reveals on the web.' },
];

export function Research() {
  return (
    <section className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeader
          index="04"
          label="Research"
          title="Research and inspiration"
          intro="I researched experience websites, beverage brands and scroll-based product storytelling to determine the direction of the project."
        />

        <div className="mt-12 lg:mt-16">
          <MediaPlaceholder
            label="Moodboard — collected visual references"
            alt="A moodboard collecting visual references for the High-Ball Club project."
            aspect="16 / 8"
          />

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {refs.map((r) => (
              <MediaPlaceholder
                key={r.label}
                label={r.label}
                alt={r.caption}
                aspect="4 / 5"
                caption={r.caption}
              />
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <h3 className="text-[14px] font-medium uppercase tracking-wider text-slate">
              Main conclusions
            </h3>
            <p className="mt-3 max-w-prose text-[15px] leading-[1.75] text-graphite">
              The strongest references combined generous whitespace, a single
              confident accent colour and a scroll experience that revealed the
              product step by step. A heavy, decorative treatment would compete
              with the product itself, so the direction leaned toward restraint.
            </p>
          </Reveal>
          <Reveal>
            <h3 className="text-[14px] font-medium uppercase tracking-wider text-slate">
              Interviews with the founding team
            </h3>
            <p className="mt-3 max-w-prose text-[15px] leading-[1.75] text-graphite">
              Early conversations with the group focused on who the drink is for
              and how it should feel. The shared ambition was a premium but
              approachable identity, not a traditional or formal spirit brand.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-10 border-l-2 border-accent-500 bg-accent-50 px-6 py-5">
          <div className="flex items-start gap-3">
            <Lightbulb size={18} className="mt-0.5 shrink-0 text-accent-600" aria-hidden />
            <p className="text-[15px] leading-[1.7] text-ink">
              <span className="font-medium">Main insight.</span>{' '}
              The identity needed to feel premium without becoming traditional
              or formal.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
