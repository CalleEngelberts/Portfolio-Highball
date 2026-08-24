import { SectionHeader } from '@/components/ui';
import { Reveal } from '@/components/MediaPlaceholder';

import wireHome from '../assets/wireHome.png';
import wireStory from '../assets/wireStory.png';
import wireFlavor from '../assets/wireFlavor.png';
import highfidelity1 from '../assets/highfidelity1.jpg';
import highfidelity2 from '../assets/highfidelity2.jpg';
import earlyLayout from '../assets/earlyLayout.jpg';
import finalLayout from '../assets/finalLayout.png';


export function UxWireframes() {
  return (
    <section className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        
        <SectionHeader
          index="06"
          label="UX and wireframes"
          title="Designing the website structure"
          
        />


        {/* WIREFRAMES */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          
          {/* HOMEPAGE */}
          <figure>
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-white">
              <img
                src={wireHome}
                alt="Low-fidelity wireframe of the homepage layout."
                className="h-full w-full object-contain object-center"
              />
            </div>

            <figcaption className="mt-3 text-sm text-muted-foreground">
              Homepage wireframe
            </figcaption>
          </figure>


          {/* FLAVOURS PAGE */}
          <figure>
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-white">
              <img
                src={wireFlavor}
                alt="Low-fidelity wireframe of the flavours page."
                className="h-full w-full object-contain object-center"
              />
            </div>

            <figcaption className="mt-3 text-sm text-muted-foreground">
              Flavours-page wireframe
            </figcaption>
          </figure>


          {/* STORY PAGE */}
          <figure>
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-white">
              <img
                src={wireStory}
                alt="Low-fidelity wireframe of the story page."
                className="h-full w-full object-contain object-center"
              />
            </div>

            <figcaption className="mt-3 text-sm text-muted-foreground">
              Story-page wireframe
            </figcaption>
          </figure>

        </div>


        {/* HIGH-FIDELITY + USER FLOW */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
          
          {/* HIGH-FIDELITY DESIGN */}
          <Reveal>
            <figure>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white">
                <img
                  src={highfidelity1}
                  alt="Final high-fidelity design screen for the High-Ball Club website."
                  className="h-full w-full object-contain object-center"
                />
              </div>

              <figcaption className="mt-3 text-sm text-muted-foreground">
                Final high-fidelity screen
              </figcaption>
            </figure>
          </Reveal>


          {/* USER FLOW */}
          <Reveal>
            <figure>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white">
                <img
                  src={highfidelity2}
                  alt="User-flow diagram showing the path through the High-Ball Club website."
                  className="h-full w-full object-contain object-center"
                />
              </div>

              <figcaption className="mt-3 text-sm text-muted-foreground">
                User-flow diagram
              </figcaption>
            </figure>
          </Reveal>

        </div>


        {/* EARLY VS REFINED */}
        <Reveal className="mt-14">
          
          <h3 className="text-[14px] font-medium uppercase tracking-wider text-slate">
            Early version versus refined version
          </h3>

          <div className="mt-5 grid gap-px border border-line bg-line sm:grid-cols-2">
            
            {/* EARLY VERSION */}
            <div className="bg-paper p-6">
              <span className="font-mono text-[12px] text-slate">
                Early version
              </span>

              <figure className="mt-3">
                <div className="aspect-[16/10] overflow-hidden bg-white">
                  <img
                    src={earlyLayout}
                    alt="An earlier version of the homepage layout."
                    className="h-full w-full object-contain object-center"
                  />
                </div>

                <figcaption className="mt-3 text-sm text-muted-foreground">
                  Early homepage layout
                </figcaption>
              </figure>
            </div>


            {/* REFINED VERSION */}
            <div className="bg-paper p-6">
              <span className="font-mono text-[12px] text-accent-600">
                Refined version
              </span>

              <figure className="mt-3">
                <div className="aspect-[16/10] overflow-hidden bg-white">
                  <img
                    src={finalLayout}
                    alt="The refined version of the homepage layout."
                    className="h-full w-full object-contain object-center"
                  />
                </div>

                <figcaption className="mt-3 text-sm text-muted-foreground">
                  Refined homepage layout
                </figcaption>
              </figure>
            </div>

          </div>
        </Reveal>


        {/* EXPLANATION */}
        {/* <Reveal className="mt-8 max-w-prose space-y-3"> */}
          
          {/* <p className="text-[15px] leading-[1.75] text-graphite">
            <span className="font-medium text-ink">
              What changed.
            </span>{' '}
            The early layout placed all sections at equal weight, which made the
            page feel flat. The refined version introduced a clear hierarchy:
            the product first, the story next, and the waiting list as a quiet,
            confident final step.
          </p>

          <p className="text-[15px] leading-[1.75] text-graphite">
            <span className="font-medium text-ink">
              Why it changed.
            </span>{' '}
            The page needed to guide attention rather than present everything at
            once. A guided reading order made the experience feel intentional.
          </p>

          <p className="text-[15px] leading-[1.75] text-graphite">
            <span className="font-medium text-ink">
              How the hierarchy improved.
            </span>{' '}
            Larger imagery, clearer section transitions and a single primary
            call to action helped visitors move from discovery towards sign-up
            without competing choices.
          </p> */}

        {/* </Reveal> */}

      </div>
    </section>
  );
}