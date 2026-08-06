import { Play, Image } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { ReactNode } from 'react';

type MediaPlaceholderProps = {
  label: string;
  video?: boolean;
  alt?: string;
  aspect?: string;
  caption?: string;
  className?: string;
};

export function MediaPlaceholder({
  label,
  video,
  alt,
  aspect = '16 / 10',
  caption,
  className = '',
}: MediaPlaceholderProps) {
  const { ref, visible } = useReveal();
  return (
    <figure
      ref={ref}
      className={`fade-in ${visible ? 'is-visible' : ''} ${className}`}
    >
      <div
        role="img"
        aria-label={alt || label}
        className="group relative w-full overflow-hidden border border-line bg-fog text-slate transition-colors duration-300 hover:border-slate"
        style={{ aspectRatio: aspect }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper/80 text-graphite transition-colors duration-300 group-hover:border-accent-400 group-hover:text-accent-500">
            {video ? <Play size={16} aria-hidden /> : <Image size={16} aria-hidden />}
          </span>
          <span className="text-[13px] font-medium tracking-wide text-graphite">
            {label}
          </span>
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-2 text-[13px] leading-snug text-slate">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function Reveal({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`fade-in ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
