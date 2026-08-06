import { SectionHeader } from '@/components/ui';
import { MediaPlaceholder, Reveal } from '@/components/MediaPlaceholder';

const iterations = [
  { label: 'Iteration 01', caption: 'First composition with heavier layout.' },
  { label: 'Iteration 02', caption: 'Lighter can, bolder wordmark.' },
  { label: 'Iteration 03', caption: 'Typography experiments with a serif.' },
  { label: 'Iteration 04', caption: 'Final accent colour and spacing.' },
];

export function BrandDesign() {
  return (
    <section className="border-b border-line bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeader
          index="05"
          label="Brand and can design"
          title="Developing the visual identity"
          intro="I explored several compositions, fonts and colour combinations. The final direction combines a light can, dark typography and one bright flavour accent."
        />

        <div className="mt-12 space-y-14 lg:mt-16">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            <MediaPlaceholder
              label="Initial sketches — first ideas on paper"
              alt="Pencil sketches exploring early can compositions and layouts."
              aspect="4 / 3"
              caption="Initial sketches exploring composition and wordmark placement."
            />
            <div className="space-y-6">
              <Reveal>
                <h3 className="text-[14px] font-medium uppercase tracking-wider text-slate">
                  The progression
                </h3>
                <ol className="mt-3 space-y-2.5 text-[15px] leading-[1.6] text-graphite">
                  {[
                    'Initial sketches',
                    'Early digital design',
                    'Typography experiments',
                    'Colour experiments',
                    'Final can design',
                  ].map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="font-mono text-[13px] text-accent-600">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {iterations.map((it) => (
              <MediaPlaceholder
                key={it.label}
                label={it.label}
                alt={it.caption}
                aspect="3 / 4"
                caption={it.caption}
              />
            ))}
          </div>

          <Reveal>
            <h3 className="text-[14px] font-medium uppercase tracking-wider text-slate">
              Before &amp; after
            </h3>
          </Reveal>
          <BeforeAfter />

          <MediaPlaceholder
            label="Final can design — front and back"
            alt="The final High-Ball Club can design, front and back views."
            aspect="16 / 9"
            caption="Final direction: a light can, dark typography and one bright flavour accent."
          />
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <Reveal>
      <div className="grid gap-6 sm:grid-cols-2">
        <MediaPlaceholder
          label="Early can design"
          alt="Early version of the can design before refinement."
          aspect="1 / 1"
        />
        <MediaPlaceholder
          label="Refined can design"
          alt="Refined final version of the can design."
          aspect="1 / 1"
        />
      </div>
      <p className="mt-4 max-w-prose text-[14px] leading-[1.7] text-graphite">
        The early design carried too much visual weight. Refining the
        typography, reducing the colour palette and giving the wordmark more
        space made the can feel lighter and more premium.
      </p>
    </Reveal>
  );
}
