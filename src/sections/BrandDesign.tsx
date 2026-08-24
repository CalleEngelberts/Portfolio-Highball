import { SectionHeader } from '@/components/ui';
import { Reveal } from '@/components/MediaPlaceholder';

import firstcompo from '../assets/firstcompo.png';
import secondcompo from '../assets/secondcompo.png';
import thirdcompo from '../assets/thirdcompo.png';
import finalcompo from '../assets/finalcompo.png';
import yuzucanlabel from '../assets/yuzucanlabel.png';
import sketches from '../assets/sketches.jpg';


const iterations = [
  {
    label: 'Iteration 01',
    caption: 'First composition with heavier layout.',
    image: firstcompo,
  },
  {
    label: 'Iteration 02',
    caption: 'Lighter can, bolder wordmark.',
    image: secondcompo,
  },
  {
    label: 'Iteration 03',
    caption: 'Typography experiments with a serif.',
    image: thirdcompo,
  },
  {
    label: 'Iteration 04',
    caption: 'Final accent colour and spacing.',
    image: finalcompo,
  },
];


export function BrandDesign() {
  return (
    <section className="border-b border-line bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">

        <SectionHeader
          index="05"
          label="Brand and can design"
          title="Developing the visual identity"
          intro="I explored several designs, fonts and colour combinations. The final direction combines a light can, dark and minimal typography to give it a premium feel."
        />


        <div className="mt-12 space-y-14 lg:mt-16">

          {/* INITIAL SKETCHES + PROGRESSION */}
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">

            <figure>
              <img
                src={sketches}
                alt="Pencil sketches exploring early can compositions and layouts."
                className="w-full rounded-2xl object-cover"
              />

              <figcaption className="mt-3 text-sm text-muted-foreground">
                Initial sketches exploring composition and wordmark placement.
              </figcaption>
            </figure>


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


          {/* DESIGN ITERATIONS */}
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {iterations.map((it) => (
    <figure key={it.label}>
      <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-white">
        <img
          src={it.image}
          alt={it.caption}
          className="h-full w-full object-contain object-center"
        />
      </div>

      <figcaption className="mt-3 text-sm text-muted-foreground">
        <span className="font-medium text-graphite">
          {it.label}
        </span>
        <br />
        {it.caption}
      </figcaption>
    </figure>
  ))}
</div>


          {/* FINAL CAN LABEL */}
          <div>
            <Reveal>
              <h3 className="text-[14px] font-medium uppercase tracking-wider text-slate">
                Can label
              </h3>
            </Reveal>

            <figure className="mt-6">
              <img
                src={yuzucanlabel}
                alt="Final HIGH-BALL Club Yuzu can label."
                className="w-full rounded-2xl object-cover"
              />

              <figcaption className="mt-3 text-sm text-muted-foreground">
                Finalized label for the 3D model based on a Coca-Cola can
                label layout.
              </figcaption>
            </figure>
          </div>

        </div>
      </div>
    </section>
  );
}