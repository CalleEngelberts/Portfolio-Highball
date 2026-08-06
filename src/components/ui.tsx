import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/MediaPlaceholder';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost';
  withArrow?: boolean;
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = 'primary',
  withArrow,
  external,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-5 py-3 text-[14px] font-medium tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3';
  const variants: Record<string, string> = {
    primary:
      'bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700',
    secondary:
      'bg-paper text-ink border border-line hover:border-ink hover:text-ink',
    dark: 'bg-night text-night-text hover:bg-night-soft',
    ghost:
      'text-ink underline-offset-4 decoration-line decoration-1 hover:decoration-ink hover:underline px-1 py-1',
  };
  const Arrow = external ? ArrowUpRight : ArrowRight;
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      {withArrow ? <Arrow size={15} aria-hidden /> : null}
    </a>
  );
}

export function SectionHeader({
  index,
  label,
  title,
  intro,
  dark,
  className = '',
}: {
  index?: string;
  label?: string;
  title: string;
  intro?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <div className="flex items-baseline gap-4">
        {index ? (
          <span
            className={`font-mono text-[13px] tabular-nums ${
              dark ? 'text-night-slate' : 'text-slate'
            }`}
          >
            {index}
          </span>
        ) : null}
        {label ? (
          <span
            className={`text-[12px] font-medium uppercase tracking-[0.18em] ${
              dark ? 'text-accent-300' : 'text-accent-600'
            }`}
          >
            {label}
          </span>
        ) : null}
      </div>
      <h2
        className={`font-serif mt-4 text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] ${
          dark ? 'text-night-text' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 max-w-xl text-[16px] leading-[1.7] ${
            dark ? 'text-night-slate' : 'text-graphite'
          }`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
