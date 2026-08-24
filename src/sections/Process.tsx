import { SectionHeader } from '@/components/ui';
import { Reveal } from '@/components/MediaPlaceholder';

const phases = [
  { no: '1', title: 'Research and inspiration', text: 'Direction, references and insights from experience websites.' },
  { no: '2', title: 'Brand and can design', text: 'Sketches, typography, colour and the final can.' },
  { no: '3', title: 'UX and wireframes', text: 'Structure, user flow and high-fidelity screens.' },
  { no: '4', title: '3D modelling and development', text: 'Blender model, React build and scroll animations.' },
  { no: '5', title: 'Testing and refinement', text: 'Review, fixes and the final result.' },
];

export function Process() {
  return (
    <section id="process" className="border-b border-line bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeader index="03" label="The process" title="The process" />

        <div className="mt-12 lg:mt-16">
          {/* Desktop horizontal timeline */}
          <ol className="hidden lg:grid lg:grid-cols-5 lg:gap-6">
            {phases.map((p, i) => (
              <Reveal key={p.no} className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink bg-mist font-mono text-[13px] text-ink">
                    {p.no}
                  </span>
                  <span className="h-px flex-1 bg-line" aria-hidden />
                </div>
                <h3 className="mt-5 text-[15px] font-medium leading-snug text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-graphite">
                  {p.text}
                </p>
                {i < phases.length - 1 ? (
                  <span className="sr-only">then</span>
                ) : null}
              </Reveal>
            ))}
          </ol>

          {/* Mobile vertical timeline */}
          <ol className="relative space-y-8 lg:hidden">
            <span className="absolute left-[18px] top-2 bottom-2 w-px bg-line" aria-hidden />
            {phases.map((p) => (
              <Reveal key={p.no} className="relative pl-12">
                <span className="absolute left-0 flex h-9 w-9 items-center justify-center rounded-full border border-ink bg-paper font-mono text-[13px] text-ink">
                  {p.no}
                </span>
                <h3 className="text-[15px] font-medium leading-snug text-ink">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-[1.6] text-graphite">
                  {p.text}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
