import { SectionHeader, Button } from '@/components/ui';
import { MediaPlaceholder, Reveal } from '@/components/MediaPlaceholder';

import finalHome from '../assets/finalHome.png';
import finalHomeMobile from '../assets/finalHomeMobile.png';
import finalStory from '../assets/finalStory.png';
import finalStoryMobile from '../assets/finalStoryMobile.png';
import finalFlavor from '../assets/finalFlavor.png';
import finalFlavorMobile from '../assets/finalFlavorMobile.png';
import finalWachtlijst from '../assets/finalWachtlijst.png';
import finalWachtlijstMobile from '../assets/finalWachtlijstMobile.png';


const parts = [
  {
    title: 'Homepage',
    text: 'An interactive introduction to the product.',
    desktop: finalHome,
    mobile: finalHomeMobile,
  },
  {
    title: 'Flavours',
    text: 'A scroll-driven presentation of Lemon, Yuzu and Ginger.',
    desktop: finalFlavor,
    mobile: finalFlavorMobile,
  },
  {
    title: 'Our story',
    text: 'The origin and personal story behind the brand.',
    desktop: finalStory,
    mobile: finalStoryMobile,
  },
  {
    title: 'Waiting list',
    text: 'A simple form and email-confirmation flow.',
    desktop: finalWachtlijst,
    mobile: finalWachtlijstMobile,
  },
];


export function FinalResult() {
  return (
    <section
      id="result"
      className="border-b border-line bg-paper py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">

        <SectionHeader
          index="10"
          label="Final result"
          title="The final result"
          intro="The four main parts of the live website, shown through desktop and mobile screenshots."
        />


        {/* FINAL WEBSITE PAGES */}
        <div className="mt-12 space-y-16 lg:mt-20">
          {parts.map((p, i) => (
            <Reveal key={p.title}>
              <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:gap-12">

                {/* DESKTOP SCREENSHOT */}
                <figure>
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white">
                    <img
                      src={p.desktop}
                      alt={`Desktop screenshot of the ${p.title.toLowerCase()} page on the High-Ball Club website.`}
                      className="h-full w-full object-contain object-center"
                    />
                  </div>

                  <figcaption className="mt-3 text-[12px] leading-snug text-slate">
                    {p.title} — desktop
                  </figcaption>
                </figure>


                {/* TEXT + MOBILE SCREENSHOT */}
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


                  {/* MOBILE SCREENSHOT */}
                  <figure className="mt-6 max-w-[200px]">
                    <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl bg-white">
                      <img
                        src={p.mobile}
                        alt={`Mobile screenshot of the ${p.title.toLowerCase()} page on the High-Ball Club website.`}
                        className="h-full w-full object-contain object-center"
                      />
                    </div>

                    <figcaption className="mt-3 text-[12px] leading-snug text-slate">
                      {p.title} — mobile
                    </figcaption>
                  </figure>

                </div>
              </div>
            </Reveal>
          ))}
        </div>


        {/* WEBSITE WALKTHROUGH VIDEO */}
        {/* <Reveal className="mt-20">
          <MediaPlaceholder
            label="Full-width website walkthrough — video"
            video
            alt="A full walkthrough video of the live High-Ball Club website."
            aspect="21 / 9"
          />
        </Reveal> */}


      
        {/* <Reveal className="mt-10 flex flex-wrap gap-3">
          <Button
            href="https://showcase-highball.vercel.app"
            external
            withArrow
            variant="primary"
          >
            View the live website
          </Button>
        </Reveal> */}

      </div>
    </section>
  );
}