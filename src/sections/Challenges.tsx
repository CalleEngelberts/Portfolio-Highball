import { SectionHeader } from '@/components/ui';
import { MediaPlaceholder, Reveal } from '@/components/MediaPlaceholder';

const rows = [
  {
    challenge: 'Outdated React routing syntax',
    tried: 'Copied routing patterns from older tutorials, which conflicted with the current React version.',
    solution: 'Rewrote the routes using the current data-router approach and updated the component structure to match.',
    result: 'Clean, maintainable routing that no longer relies on deprecated syntax.',
  },
  {
    challenge: 'Connecting scrolling and the 3D experience',
    tried: 'Tried driving the 3D camera directly from native scroll events, which felt jumpy and out of sync.',
    solution: 'Used GSAP ScrollTrigger to map scroll progress to the 3D scene and smooth the transitions.',
    result: 'Scroll and 3D animation stay in sync across the page, including on slower devices.',
  },
  {
    challenge: 'Configuring the waiting-list email flow',
    tried: 'Attempted to send emails straight from the browser, which exposed credentials and failed.',
    solution: 'Moved the email send to a small server function and kept the form submission simple on the front end.',
    result: 'Visitors receive a confirmation email and the form stays secure and reliable.',
  },
];

export function Challenges() {
  return (
    <section className="border-b border-line bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeader
          index="09"
          label="Iterations"
          title="Challenges and solutions"
          intro="The project did not go directly from the first idea to the final result. These are three of the moments that required a real change of approach."
        />

        <div className="mt-12 space-y-px border-y border-line bg-line lg:mt-16">
          {rows.map((r, i) => (
            <Reveal key={r.challenge} className="bg-mist">
              <div className="grid gap-8 p-7 lg:grid-cols-[60px_1fr_1fr] lg:gap-10 lg:p-10">
                <div className="flex items-start gap-4 lg:flex-col lg:gap-3">
                  <span className="font-mono text-[28px] leading-none text-accent-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <MediaPlaceholder
                    label="Image or video"
                    alt={`A supporting image or video for the ${r.challenge.toLowerCase()} challenge.`}
                    aspect="16 / 10"
                    className="hidden lg:block"
                  />
                </div>

                <div>
                  <h3 className="text-[12px] font-medium uppercase tracking-wider text-slate">
                    Challenge
                  </h3>
                  <p className="mt-2 text-[16px] font-medium leading-snug text-ink">
                    {r.challenge}
                  </p>
                  <div className="mt-5">
                    <h4 className="text-[12px] font-medium uppercase tracking-wider text-slate">
                      What I tried
                    </h4>
                    <p className="mt-2 text-[14px] leading-[1.65] text-graphite">
                      {r.tried}
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <h4 className="text-[12px] font-medium uppercase tracking-wider text-slate">
                      Final solution
                    </h4>
                    <p className="mt-2 text-[14px] leading-[1.65] text-ink">
                      {r.solution}
                    </p>
                  </div>
                  <div className="mt-5">
                    <h4 className="text-[12px] font-medium uppercase tracking-wider text-accent-600">
                      Result
                    </h4>
                    <p className="mt-2 text-[14px] leading-[1.65] text-graphite">
                      {r.result}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
