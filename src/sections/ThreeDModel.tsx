import { SectionHeader } from '@/components/ui';
import { Reveal } from '@/components/MediaPlaceholder';

import firstBlender from '../assets/firstBlender.jpg';
import secondBlender from '../assets/secondBlender.jpg';
import thirdBlender from '../assets/thirdBlender.jpg';
import fourthBlender from '../assets/fourthBlender.jpg';
import canVideo from '../assets/canVideo.mp4';


const progression = [
  {
    label: 'First Blender exercises',
    caption: 'Learning the interface with simple shapes.',
    image: firstBlender,
  },
  {
    label: 'First can model',
    caption: 'A basic cylinder, too simple for the final product.',
    image: secondBlender,
  },
  {
    label: 'Improved geometry',
    caption: 'Rebuilt with cleaner edge loops and proportions.',
    image: thirdBlender,
  },
  {
    label: 'UV mapping and textures',
    caption: 'Unwrapping the can and applying the label.',
    image: fourthBlender,
  },
];


export function ThreeDModel() {
  return (
    <section
      id="development"
      className="border-b border-night-line bg-night py-20 text-night-text lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">

        <SectionHeader
          index="07"
          label="3D model development"
          title="Creating the 3D product"
          dark
          intro="The first model helped me understand Blender, but it was not detailed enough for the final product. I rebuilt the can and improved the geometry, textures, materials and finishing details."
        />


{/* FINAL 3D MODEL VIDEO */}
<div className="mt-12 lg:mt-16">
  <figure>
    <video
      src={canVideo}
      className="mx-auto block max-h-[70vh] max-w-full"
      autoPlay
      loop
      muted
      playsInline
    />

    <figcaption className="mx-auto mt-3 max-w-fit text-[12px] leading-snug text-night-slate">
      Final rotating 3D can model.
    </figcaption>
  </figure>
</div>

        {/* BLENDER PROGRESSION */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {progression.map((p) => (
            <figure key={p.label}>

              <div className="aspect-[4/3] overflow-hidden border border-night-line bg-night-soft">
                <img
                  src={p.image}
                  alt={p.caption}
                  className="h-full w-full object-contain object-center"
                />
              </div>

              <figcaption className="mt-2 text-[12px] leading-snug text-night-slate">
                <span className="font-medium text-night-text">
                  {p.label}
                </span>

                <br />

                {p.caption}
              </figcaption>

            </figure>
          ))}
        </div>


        {/* REFLECTION */}
        <Reveal className="mt-10 max-w-prose">
          <p className="text-[15px] leading-[1.75] text-night-slate">
            Each step taught me something new. The first exercises were
            about the interface and how to use blender, then getting and idea how to make cylinders and top faces to make the first version of the can,
            then really getting in to more advanced modeling techniques and giving the edges a smooth or sharp look, and finally how to wrap a texture around the can to make it look like the real product.
          </p>
        </Reveal>

      </div>
    </section>
  );
}