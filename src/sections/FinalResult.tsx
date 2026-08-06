import { SectionHeader, Button } from '@/components/ui';
import { MediaPlaceholder, Reveal } from '@/components/MediaPlaceholder';

const parts = [
  {
    title: 'Homepage',
    text: 'An interactive introduction to the product.',
  },
  {
    title: 'Flavours',
    text: 'A scroll-driven presentation of Lemon, Yuzu and Ginger.',
  },
  {
    title: 'Our story',
    text: 'The origin and personal story behind the brand.',
  },
  {
    title: 'Waiting list',
    text: 'A simple form and email-confirmation flow.',
  },
];

export function FinalResult() {
  return (
    <section id="result" className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeader
          index="10"
          label="Final result"
          title="The final result"
          intro="The four main parts of the live website, shown through desktop screenshots and short descriptions."
        />

        <div className="mt-12 space-y-16 lg:mt-20">
          {parts.map((p, i) => (
            <Reveal key={p.title}>
              <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:gap-12">
                <MediaPlaceholder
                  label={`${p.title} — desktop screenshot`}
                  alt={`Desktop screenshot of the ${p.title.toLowerCase()} page on the live High-Ball Club website.`}
                  aspect="16 / 10"
                />
                <div className="lg:pt-2">
                  <span className="font-mono text-[13px] text-accent-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 text-[22px] font-medium text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.65] text-graphite">
                    {p.text}
                  </p>
                  <MediaPlaceholder
                    label={`${p.title} — mobile`}
                    alt={`Mobile screenshot of the ${p.title.toLowerCase()} page.`}
                    aspect="9 / 16"
                    className="mt-6 max-w-[200px]"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <MediaPlaceholder
            label="Full-width website walkthrough — video"
            video
            alt="A full walkthrough video of the live High-Ball Club website."
            aspect="21 / 9"
          />
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap gap-3">
          <Button href="#links" external withArrow variant="primary">
            View the live website
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
