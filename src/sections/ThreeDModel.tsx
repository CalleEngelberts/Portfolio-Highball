import { SectionHeader } from '@/components/ui';
import { MediaPlaceholder, Reveal } from '@/components/MediaPlaceholder';

const progression = [
  { label: 'First Blender exercises', caption: 'Learning the interface with simple shapes.' },
  { label: 'First can model', caption: 'A basic cylinder, too simple for the final product.' },
  { label: 'Improved geometry', caption: 'Rebuilt with cleaner edge loops and proportions.' },
  { label: 'UV mapping and textures', caption: 'Unwrapping the can and applying the label.' },
  { label: 'Materials and lighting', caption: 'Metallic finish and soft studio lighting.' },
  { label: 'Water droplets', caption: 'Adding condensation for a refreshing look.' },
  { label: 'Improved lid and pull tab', caption: 'Detailed finishing touches on the top.' },
  { label: 'Final model', caption: 'The completed can ready for the browser.' },
];

export function ThreeDModel() {
  return (
    <section id="development" className="border-b border-night-line bg-night py-20 text-night-text lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeader
          index="07"
          label="3D model development"
          title="Creating the 3D product"
          dark
          intro="The first model helped me understand Blender, but it was not detailed enough for the final product. I rebuilt the can and improved the geometry, textures, materials and finishing details."
        />

        <div className="mt-12 lg:mt-16">
          <MediaPlaceholderDark
            label="Rotating 3D model — video"
            alt="A video recording of the final 3D can model rotating."
            aspect="16 / 9"
            video
          />
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {progression.slice(0, 4).map((p) => (
            <MediaPlaceholderDark
              key={p.label}
              label={p.label}
              alt={p.caption}
              aspect="4 / 3"
              caption={p.caption}
            />
          ))}
        </div>

        <Reveal className="mt-10 max-w-prose">
          <p className="text-[15px] leading-[1.75] text-night-slate">
            Each step taught me something specific. The first exercises were
            about the interface; the rebuild was about surface quality; the
            materials and water droplets were about making the can look
            cold and refreshing. The final model carries all of those lessons
            into a single object that renders smoothly in the browser.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function MediaPlaceholderDark({
  label,
  alt,
  aspect,
  caption,
  video,
}: {
  label: string;
  alt: string;
  aspect: string;
  caption?: string;
  video?: boolean;
}) {
  return (
    <figure>
      <div
        role="img"
        aria-label={alt}
        className="group relative w-full overflow-hidden border border-night-line bg-night-soft text-night-slate transition-colors duration-300 hover:border-night-slate"
        style={{ aspectRatio: aspect }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
          <span className="text-[13px] font-medium tracking-wide">
            {label}
          </span>
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-2 text-[12px] leading-snug text-night-slate">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
