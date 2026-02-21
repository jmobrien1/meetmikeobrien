interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-12 h-px ${light ? 'bg-warm-terra' : 'bg-teal'}`} />
        <span
          className={`font-mono text-eyebrow uppercase tracking-[0.18em] font-medium ${
            light ? 'text-warm-terra' : 'text-teal'
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`font-serif text-section font-normal leading-[1.12] tracking-[-0.02em] ${
          light ? 'text-navy' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-sans text-body leading-[1.7] max-w-[620px] mt-4 ${
            light ? 'text-navy/70' : 'text-slate'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
