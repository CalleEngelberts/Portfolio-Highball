import { SectionHeader } from '@/components/ui';
import { Reveal } from '@/components/MediaPlaceholder';

const info = [
  {
    label: 'Role',
    value: 'Brand design, UX/UI, 3D modelling and front-end development',
  },
  {
    label: 'Deliverables',
    value: 'Brand identity, can design, 3D model, responsive website and waiting-list flow',
  },
  {
    label: 'Tools',
    value: 'Figma, Photoshop, Blender, React, Vite, Tailwind CSS, React Three Fiber, GSAP and Resend',
  },
  {
    label: 'Pages',
    value: 'Homepage, flavours, story and waiting list',
  },
];

export function Overview() {
  return (
    <section id="overview" className="border-b border-line bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeader
          index="01"
          label="Project overview"
          title="Project overview"
        />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="max-w-prose text-[16px] leading-[1.75] text-graphite">
              High-Ball Club is a premium sparkling whisky cocktail concept
              created with a group of friends. The goal of this Showcase
              project was to design and build an interactive website that
              presents the product, explains the brand story and allows
              visitors to join a waiting list.
            </p>
          </Reveal>

          <Reveal>
            <dl className="divide-y divide-line border-y border-line">
              {info.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[120px_1fr] sm:gap-6"
                >
                  <dt className="text-[12px] font-medium uppercase tracking-wider text-slate sm:pt-1">
                    {row.label}
                  </dt>
                  <dd className="text-[15px] leading-[1.6] text-ink">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
