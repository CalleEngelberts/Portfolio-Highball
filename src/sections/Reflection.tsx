import { SectionHeader } from '@/components/ui';
import { Reveal } from '@/components/MediaPlaceholder';

const categories = [
  {
    title: 'Creative development',
    items: [
      'Photoshop can design',
      'Blender 3D modelling',
      'Illustrator moodboard',
      'Brand identity',
      'UI/UX design',
      'High/low fidelity prototyping',
      'Storytelling',
      'Responsive design'
    
    ],
  },
  {
    title: 'Technical development',
    items: [
      'React + Vite configuration',
      'Talwind CSS styling',
      'Three.js & React Three Fiber',
      'Scroll animation (GSAP ScrollTrigger)',
      'Responsive development',
      'Form and email integration',
      'Lazy loading & performance optimization',
      'SEO/Privacy integration'
      
    ],
  },
  {
    title: 'Process development',
    items: [
      'Researching',
      'Exploring tools',
      'Documenting problems and improvements',
      'Version control on Github',
      'Testing',
      'Deployment and hosting',
    ],
  },
];

// const improvements = [
//   'More user testing',
//   'Accessibility testing',
//   'Performance optimisation',
//   'Production-ready waiting-list infrastructure',
// ];

export function Reflection() {
  return (
    <section id="reflection" className="border-b border-line bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeader index="11" label="Reflection" title="What I learned" />

        <div className="mt-12 grid gap-px border border-line bg-line lg:mt-16 sm:grid-cols-3">
          {categories.map((c) => (
            <Reveal key={c.title} className="bg-mist">
              <div className="h-full p-7 lg:p-9">
                <h3 className="text-[15px] font-medium text-ink">{c.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-graphite"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 border-t border-line pt-8">
          <h3 className="text-[14px] font-medium uppercase tracking-wider text-slate">
            What I would do differently next time
          </h3>
          <p className="mt-4 max-w-prose text-[15px] leading-[1.75] text-graphite">
            
One thing I would've done differently is doing a bit more research into the tools I used. Spent time exploring WebGL and following tutorials with some assignemnts. While it gave me good idea of how 3D rendering works I realized later that Three.js is  WebGL but better, with more built-in functionality and its faster. So if I could go back, I would have switched to Three.js earlier. <br /> <br />

I also spent time being unsure of the overall web design, I am happy with the final result but sometimes think I could've focused it more around the drink can. If I had more time I would've tried to make a product video as header image that you can interact with through scrolling, it would've been a more professional look and more eye catching than the interactable 3D can model I have now. But maybe I can add it in the future. <br /> <br />

And lastly I learned that you sometimes need to finish what you started, because when I finished my first can design in Blender, the top lid kept rendering badly. Spent a lot of time on it but eventually gave up and put the badly rendered can in the website. But later I was super frustrated with how ugly it looked, and ended up going back and redoing it following the same tutorial more carefully. So basically wasted time by not redoing it in the first place and having to do it last moment. So next time, I just need to finish what I start so I can move on with the next part of the project instead of going back and redoing things I should've finished already.  
          </p>
          {/* <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {improvements.map((imp) => (
              <li
                key={imp}
                className="flex items-center gap-3 border border-line bg-paper px-4 py-3 text-[14px] text-ink"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden />
                {imp}
              </li>
            ))}
          </ul> */}
        </Reveal>
      </div>
    </section>
  );
}
