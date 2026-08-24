import { Button } from '@/components/ui';
import { Reveal } from '@/components/MediaPlaceholder';
import { ArrowUp, Mail, Link as LinkIcon, ExternalLink } from 'lucide-react';

export function Links() {
  return (
    <section id="links" className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <Reveal>
          <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-accent-600">
            Final links
          </span>
          <h2 className="font-serif mt-4 text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-ink">
            View the project
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-[1.7] text-graphite">
            HIGHBALL CLUB - Creative, Design &amp; Technology Showcase by
            Calle Engelberts, 2026.
          </p>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap gap-3">
          <Button href="https://showcase-highball.vercel.app" external withArrow variant="primary">
            View live website
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-paper py-14">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[15px] font-semibold text-ink">Calle Engelberts</p>
            <p className="mt-2 text-[13px] text-slate">Portfolio case study</p>
          </div>

          <div>
            <p className="text-[12px] font-medium uppercase tracking-wider text-slate">Contact</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="mailto:hello@calleengelberts.example"
                  className="inline-flex items-center gap-2 text-[14px] text-graphite transition-colors hover:text-ink"
                >
                  <Mail size={15} aria-hidden /> Email placeholder
                </a>
              </li>
              <li>
                <a
                  href="#links"
                  className="inline-flex items-center gap-2 text-[14px] text-graphite transition-colors hover:text-ink"
                >
                  <LinkIcon size={15} aria-hidden /> LinkedIn placeholder
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-medium uppercase tracking-wider text-slate">Project</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="#links"
                  className="inline-flex items-center gap-2 text-[14px] text-graphite transition-colors hover:text-ink"
                >
                  <ExternalLink size={15} aria-hidden /> Live project
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:text-right">
            <a
              href="#top"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-ink transition-colors hover:text-accent-600"
            >
              Back to top <ArrowUp size={15} aria-hidden />
            </a>
          </div>
        </div>

        <p className="mt-10 text-[12px] text-slate">
          © 2026 Calle Engelberts. High-Ball Club is a student concept created
          for the Creative, Design &amp; Technology Showcase.
        </p>
      </div>
    </footer>
  );
}
