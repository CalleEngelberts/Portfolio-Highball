import { SectionHeader } from '@/components/ui';
import { Reveal } from '@/components/MediaPlaceholder';

import flavorVideo from '../assets/flavorVideo.mp4';
import carrouselVideo from '../assets/carrouselVideo.mp4';
import wachtlijstGsap from '../assets/wachtlijstGsap.png';
import componentGsap from '../assets/componentGsap.png';


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
  'React',
  'Vite',
  'Tailwind CSS',
  'Three.js',
  'React Three Fiber',
  'GSAP',
  'Blender',
  'Resend',
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


        {/* DEVELOPMENT BLOCKS */}
        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:mt-16">
          {blocks.map((b) => (
            <Reveal key={b.title} className="bg-paper">
              <div className="h-full p-7 lg:p-9">
                <h3 className="text-[17px] font-medium text-ink">
                  {b.title}
                </h3>

                <p className="mt-3 text-[14px] leading-[1.65] text-graphite">
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>


        {/* DEVELOPMENT MEDIA */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">

          {/* COMPONENT CODE */}
          <figure>
            <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-mist">
              <img
                src={componentGsap}
                alt="Screenshot showing the React and GSAP component code of the scroll animation."
                className="h-full w-full object-contain object-center"
              />
            </div>

            <figcaption className="mt-3 text-[12px] leading-snug text-slate">
              React component and GSAP code structure.
            </figcaption>
          </figure>


          {/* SCROLL ANIMATION */}
          <figure>
            <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-mist">
              <video
                src={flavorVideo}
                className="h-full w-full object-contain object-center"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            <figcaption className="mt-3 text-[12px] leading-snug text-slate">
              Scroll-driven flavour animation using GSAP and ScrollTrigger.
            </figcaption>
          </figure>


          {/* CAROUSEL / FLOW */}
          <figure>
            <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-mist">
              <video
                src={carrouselVideo}
                className="h-full w-full object-contain object-center"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            <figcaption className="mt-3 text-[12px] leading-snug text-slate">
              Animated carousel showing on the homepage.
            </figcaption>
          </figure>


          {/* WAITING LIST */}
          <figure>
            <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-mist">
              <img
                src={wachtlijstGsap}
                alt="Screenshot of the waiting-list functionality on the High-Ball Club website."
                className="h-full w-full object-contain object-center"
              />
            </div>

            <figcaption className="mt-3 text-[12px] leading-snug text-slate">
              Waiting-list implementation and functionality.
            </figcaption>
          </figure>

        </div>


        {/* TECHNOLOGY STACK */}
        <Reveal className="mt-12 border-t border-line pt-6">
          <h3 className="text-[12px] font-medium uppercase tracking-wider text-slate">
            Tech stack
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