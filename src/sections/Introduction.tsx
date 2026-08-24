import { Button } from '@/components/ui';
import { MediaPlaceholder, Reveal } from '@/components/MediaPlaceholder';
import websiteVideo from "../assets/homepagevideo.mp4";

export function Introduction() {
  return (
    <section id="top" className="border-b border-line bg-paper pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <Reveal>
          <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-accent-600">
            Portfolio case study
          </span>
          <h1 className="font-serif mt-5 text-[clamp(2.75rem,7vw,5rem)] leading-[1.02] tracking-[-0.01em] text-ink">
            HIGH-BALL CLUB
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-[1.5] text-graphite lg:text-[20px]">
            An interactive product experience website for a premium sparkling
            whisky cocktail.
          </p>
          <p className="mt-6 max-w-xl text-[16px] leading-[1.7] text-graphite">
            For my Showcase of the minor Creative, Design &amp; Technology, I created the
            brand direction, product design, 3D model and interactive website
            for the drink HIGH-BALL CLUB.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-line pt-6 text-[14px] sm:grid-cols-4">
              <div>
                <dt className="text-[12px] uppercase tracking-wider text-slate">
                  Student
                </dt>
                <dd className="mt-1.5 font-medium text-ink">
                  Calle Engelberts
                </dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-wider text-slate">
                  Course
                </dt>
                <dd className="mt-1.5 font-medium text-ink">
                  Creative, Design &amp; Technology Showcase
                </dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-wider text-slate">
                  Year
                </dt>
                <dd className="mt-1.5 font-medium text-ink">2026</dd>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <dt className="text-[12px] uppercase tracking-wider text-slate">
                  Role
                </dt>
                <dd className="mt-1.5 font-medium text-ink">
                  Brand, UX/UI, 3D &amp; front-end
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="flex flex-wrap gap-3">
            <Button href="https://showcase-highball.vercel.app" external withArrow>
              View live project
            </Button>
            {/* <Button href="#process" variant="secondary">
              View project process
            </Button> */}
          </Reveal>
        </div>

       <div className="mt-14">
  <video
    src={websiteVideo}
    className="w-full rounded-2xl"
    autoPlay
    loop
    muted
    playsInline
  />
</div>
      </div>
    </section>
  );
}
