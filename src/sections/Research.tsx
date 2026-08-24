import { SectionHeader } from '@/components/ui';
import { MediaPlaceholder, Reveal } from '@/components/MediaPlaceholder';
import { Lightbulb } from 'lucide-react';
import moodboard from "../assets/moodboard.png";

const refs = [
  { label: 'Experience website references', caption: 'Scroll-based product storytelling and premium pacing.' },
  { label: 'Beverage branding', caption: 'How drink brands balance freshness with a premium tone.' },
  { label: 'Typography and layout', caption: 'Editorial type pairings and clear grid structures.' },
  { label: 'Interaction references', caption: 'Micro-interactions and 3D product reveals on the web.' },
];

export function Research() {
  return (
    <section className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeader
          index="04"
          label="Research"
          title="Research and inspiration"
          intro="I researched experience websites, beverage brands and scroll-based product storytelling to determine the direction of the project."
        />

        <div className="mt-12 lg:mt-16">
          <img
            src={moodboard}
            alt="A moodboard collecting visual references for the High-Ball Club project."
           className="w-full rounded-2xl object-cover"
           />

          {/* <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {refs.map((r) => (
              <MediaPlaceholder
                key={r.label}
                label={r.label}
                alt={r.caption}
                aspect="4 / 5"
                caption={r.caption}
              />
            ))}
          </div> */}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <h3 className="text-[14px] font-medium uppercase tracking-wider text-slate">
              Main conclusions
            </h3>
            <p className="mt-3 max-w-prose text-[15px] leading-[1.75] text-graphite">
              My initial inspiration came from experience websites such as <a href="https://sowieso.wero-wallet.eu/nl-en/merchant" className="text-blue-500 hover:text-blue-600">Wero</a>, 
              where I explored different types of animations and interactions 
              that I could potentially use for my own showcase. <br /> <br />

              I also looked at brand websites such as <a href="https://www.jackdaniels.com/" className="text-blue-500 hover:text-blue-600">Jack Daniel’s</a> and <a href="https://www.warsteiner.com/" className="text-blue-500 hover:text-blue-600">Warsteiner</a>. 
              These websites showed me examples of how a brand can be presented in a professional way 
              using product imagery, video, fonts and animations. <br /> <br />
              The biggest source of inspiration was the Heineken website. 
              I especially liked the overall structure, 
              visual style and way the brand and products are presented. 
              Because of this, my final website design is mainly based on the 
              approach and experience of the <a href="https://www.heineken.com/" className="text-blue-500 hover:text-blue-600">Heineken website</a>, while still adding our own twist with animations and a 3D can design.

            </p>
          </Reveal>
          <Reveal>
            <h3 className="text-[14px] font-medium uppercase tracking-wider text-slate">
              Interviews with the team
            </h3>
            <p className="mt-3 max-w-prose text-[15px] leading-[1.75] text-graphite">
              To get a clearer idea of how the website should look and feel, 
              I interviewed two members of the team behind HIGH-BALL about the 
              brand identity, target audience and tone of voice. <br /> <br />

              The main conclusion was that HIGH-BALL should feel premium, tasteful and 
              honest, while still being approachable. 
              The product and its quality should always be the main focus, 
              without overcomplicating the story. I used these insights as a 
              guideline for the website, aiming for a clean and premium visual style 
              that puts the product at the centre of the experience.
            </p>
          </Reveal>
        </div>

        {/* <Reveal className="mt-10 border-l-2 border-accent-500 bg-accent-50 px-6 py-5">
          <div className="flex items-start gap-3">
            <Lightbulb size={18} className="mt-0.5 shrink-0 text-accent-600" aria-hidden />
            <p className="text-[15px] leading-[1.7] text-ink">
              <span className="font-medium">Main insight.</span>{' '}
              The identity needed to feel premium without becoming traditional
              or formal.
            </p>
          </div>
        </Reveal> */}
      </div>
    </section>
  );
}
