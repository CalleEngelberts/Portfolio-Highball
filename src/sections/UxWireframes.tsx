import { SectionHeader } from '@/components/ui';
import { MediaPlaceholder, Reveal } from '@/components/MediaPlaceholder';

export function UxWireframes() {
  return (
    <section className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeader
          index="06"
          label="UX and wireframes"
          title="Designing the website structure"
          intro="The website was designed as a guided experience that first introduces the product, then presents the flavours and story, and finally leads visitors towards the waiting list."
        />

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          <MediaPlaceholder
            label="Homepage wireframe"
            alt="Low-fidelity wireframe of the homepage layout."
            aspect="3 / 4"
          />
          <MediaPlaceholder
            label="Flavours-page wireframe"
            alt="Low-fidelity wireframe of the flavours page."
            aspect="3 / 4"
          />
          <MediaPlaceholder
            label="Story-page wireframe"
            alt="Low-fidelity wireframe of the story page."
            aspect="3 / 4"
          />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          <Reveal>
            <MediaPlaceholder
              label="Final high-fidelity screen"
              alt="A final high-fidelity design screen for the website."
              aspect="4 / 3"
            />
          </Reveal>
          <Reveal>
            <MediaPlaceholder
              label="User-flow diagram"
              alt="A simple user-flow diagram showing the path through the site."
              aspect="4 / 3"
            />
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <h3 className="text-[14px] font-medium uppercase tracking-wider text-slate">
            Early version versus refined version
          </h3>
          <div className="mt-5 grid gap-px border border-line bg-line sm:grid-cols-2">
            <div className="bg-paper p-6">
              <span className="font-mono text-[12px] text-slate">Early version</span>
              <MediaPlaceholder
                label="Early homepage layout"
                alt="An earlier version of the homepage layout."
                aspect="16 / 10"
                className="mt-3"
              />
            </div>
            <div className="bg-paper p-6">
              <span className="font-mono text-[12px] text-accent-600">Refined version</span>
              <MediaPlaceholder
                label="Refined homepage layout"
                alt="The refined version of the homepage layout."
                aspect="16 / 10"
                className="mt-3"
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8 space-y-3 max-w-prose">
          <p className="text-[15px] leading-[1.75] text-graphite">
            <span className="font-medium text-ink">What changed.</span> The
            early layout placed all sections at equal weight, which made the
            page feel flat. The refined version introduced a clear hierarchy:
            the product first, the story next, and the waiting list as a
            quiet, confident final step.
          </p>
          <p className="text-[15px] leading-[1.75] text-graphite">
            <span className="font-medium text-ink">Why it changed.</span> The
            page needed to guide attention rather than present everything at
            once. A guided reading order made the experience feel intentional.
          </p>
          <p className="text-[15px] leading-[1.75] text-graphite">
            <span className="font-medium text-ink">How the hierarchy improved.</span>{' '}
            Larger imagery, clearer section transitions and a single primary
            call to action helped visitors move from discovery towards sign-up
            without competing choices.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
