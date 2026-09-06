interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === 'center'
          ? 'text-center mb-12'
          : 'mb-12'
      }
    >
      {eyebrow && (
        <span className="block text-xs font-sans-body tracking-[0.3em] uppercase text-gold mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif-display text-3xl md:text-4xl text-foreground mb-3">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-sans-body text-foreground/60 leading-relaxed ${
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
