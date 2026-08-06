import { SectionHeader } from '@/components/ui';
import { MediaPlaceholder, Reveal } from '@/components/MediaPlaceholder';

const blocks = [
  {
    title: 'React and Vite',
    text: 'The website was developed using reusable React components and routes.',
  },
  {
    title: 'React Three Fiber',
    text: 'The Blender model was imported and rendered interactively inside the browser.',
  },
  {
    title: 'GSAP and ScrollTrigger',
    text: 'Scroll-based animations connect the product, text and flavour transitions.',
  },
  {
    title: 'Waiting-list functionality',
    text: 'The form handles submissions and sends an email confirmation using Resend.',
  },
];

const stack = [
  'React', 'Vite', 'Tailwind CSS', 'Three.js',
  'React Three Fiber', 'GSAP', 'Blender', 'Resend',
];

export function WebsiteDevelopment() {
  return (
    <section className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeader
          index="08"
          label="Website development"
          title="Building the interactive website"
        />

        <div className="mt-12 grid gap-px border border-line bg-line lg:mt-16 sm:grid-cols-2">
          {blocks.map((b) => (
            <Reveal key={b.title} className="bg-paper">
              <div className="h-full p-7 lg:p-9">
                <h3 className="text-[17px] font-medium text-ink">{b.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-graphite">
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <MediaPlaceholder
            label="Code screenshot — component structure"
            alt="A screenshot showing the React component code."
            aspect="16 / 10"
          />
          <MediaPlaceholder
            label="Scroll animation — video"
            video
            alt="A screen recording of the scroll-based animations in action."
            aspect="16 / 10"
          />
          <MediaPlaceholder
            label="Component structure / flow diagram"
            alt="A diagram showing how components and routes are organised."
            aspect="16 / 10"
          />
          <MediaPlaceholder
            label="Waiting-list form — screenshot"
            alt="A screenshot of the waiting-list form on the live site."
            aspect="16 / 10"
          />
        </div>

        <Reveal className="mt-12 border-t border-line pt-6">
          <h3 className="text-[12px] font-medium uppercase tracking-wider text-slate">
            Technology stack
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {stack.map((t) => (
              <li
                key={t}
                className="border border-line bg-mist px-3 py-1.5 text-[13px] font-medium text-graphite"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
