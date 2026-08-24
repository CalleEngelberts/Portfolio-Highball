import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Process', href: '#process' },
  { label: 'Development', href: '#development' },
  { label: 'Result', href: '#result' },
  { label: 'Reflection', href: '#reflection' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = ['overview', 'process', 'development', 'result', 'reflection'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-line bg-paper/90 backdrop-blur-md'
          : 'border-b border-transparent bg-paper'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className="text-[15px] font-semibold tracking-tight text-ink transition-opacity hover:opacity-70"
        >
          Calle Engelberts
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[14px] font-medium transition-colors duration-200 ${
                active === item.href
                  ? 'text-accent-600'
                  : 'text-graphite hover:text-ink'
              }`}
            >
              {item.label}
            </a>
          ))}
          {/* <a
            href="#links"
            className="ml-1 inline-flex items-center gap-1.5 border border-ink bg-ink px-4 py-2 text-[13px] font-medium text-white transition-colors duration-200 hover:bg-ink/85"
          >
            View live project
          </a> */}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-line bg-paper lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-3 text-[15px] font-medium text-graphite transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#links"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center bg-ink px-4 py-3 text-[14px] font-medium text-white"
            >
              View live project
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
