import { SectionHeader } from '@/components/ui';
import { MediaPlaceholder, Reveal } from '@/components/MediaPlaceholder';

const goals = [
  {
    no: '01',
    title: 'Create a recognisable brand identity.',
    text: 'A visual language that reads as premium and refreshing from the first impression.',
  },
  {
    no: '02',
    title: 'Present the product through an interactive 3D model.',
    text: 'A real-time can in the browser that visitors can rotate and inspect.',
  },
  {
    no: '03',
    title: 'Guide visitors from product discovery towards the waiting list.',
    text: 'A guided flow that moves from story to interest to sign-up without pressure.',
  },
];

export function Challenge() {
  return (
    <section id="challenge" className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeader
          index="02"
          label="The challenge"
          title="The challenge"
          intro="The challenge was to turn a new drink concept into a recognisable digital experience. The website needed to feel premium and refreshing while clearly introducing the product and story."
        />

        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-3 lg:mt-16">
          {goals.map((g) => (
            <Reveal key={g.no} className="bg-paper">
              <div className="h-full p-7 lg:p-9">
                <span className="font-mono text-[13px] text-accent-600">
                  {g.no}
                </span>
                <h3 className="mt-4 text-[17px] font-medium leading-snug text-ink">
                  {g.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-graphite">
                  {g.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <MediaPlaceholder
          label="Final can design or product image"
          alt="Final High-Ball Club can design shown on a clean background."
          aspect="16 / 9"
          className="mt-12"
        />
      </div>
    </section>
  );
}
