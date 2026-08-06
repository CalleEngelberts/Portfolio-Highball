import { SectionHeader } from '@/components/ui';
import { Reveal } from '@/components/MediaPlaceholder';

const categories = [
  {
    title: 'Creative development',
    items: [
      'Brand identity',
      'Can design',
      'Visual hierarchy',
      'Storytelling',
      'Iteration',
    ],
  },
  {
    title: 'Technical development',
    items: [
      'React',
      'Browser-based 3D',
      'Scroll animation',
      'Responsive development',
      'Form and email integration',
    ],
  },
  {
    title: 'Process development',
    items: [
      'Breaking a large project into smaller prototypes',
      'Researching tools',
      'Testing different solutions',
      'Documenting problems and improvements',
    ],
  },
];

const improvements = [
  'More user testing',
  'Accessibility testing',
  'Performance optimisation',
  'Production-ready waiting-list infrastructure',
];

export function Reflection() {
  return (
    <section id="reflection" className="border-b border-line bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeader index="11" label="Reflection" title="What I learned" />

        <div className="mt-12 grid gap-px border border-line bg-line lg:mt-16 sm:grid-cols-3">
          {categories.map((c) => (
            <Reveal key={c.title} className="bg-mist">
              <div className="h-full p-7 lg:p-9">
                <h3 className="text-[15px] font-medium text-ink">{c.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-graphite"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 border-t border-line pt-8">
          <h3 className="text-[14px] font-medium uppercase tracking-wider text-slate">
            What I would improve next
          </h3>
          <p className="mt-4 max-w-prose text-[15px] leading-[1.75] text-graphite">
            With more time, I would focus on four areas that would move the
            project closer to a production-ready product.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {improvements.map((imp) => (
              <li
                key={imp}
                className="flex items-center gap-3 border border-line bg-paper px-4 py-3 text-[14px] text-ink"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden />
                {imp}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
