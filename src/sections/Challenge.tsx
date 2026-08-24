import { SectionHeader } from '@/components/ui';
import { MediaPlaceholder, Reveal } from '@/components/MediaPlaceholder';
import canYuzu from "../assets/canYuzu.png";

const goals = [
  {
    no: '01',
    title: 'Create a recognisable brand identity.',
    text: 'Giving a premium and refreshing feel from the first impression.',
  },
  {
    no: '02',
    title: 'Present the product through an interactive 3D model.',
    text: 'A real-time can in the browser that visitors can rotate and inspect.',
  },
  {
    no: '03',
    title: 'Encourage visitors to sign up for the waiting list.',
    text: 'Build interest in the product and make signing up feel like the next step',
  },
];

export function Challenge() {
  return (
    <section id="challenge" className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeader
          index="02"
          label="The project"
          title="The project"
          intro="The project was to turn a new drink concept into a digital showcase experience. The website needed to feel premium while also clearly introducing the product and story."
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

        <img
            src={canYuzu}
            alt="A moodboard collecting visual references for the High-Ball Club project."
           className="w-full rounded-2xl object-cover"
           />
      </div>
    </section>
  );
}
