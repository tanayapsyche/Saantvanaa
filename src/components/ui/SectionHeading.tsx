interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  titleClassName?: string;
}

export function SectionHeading({ label, title, subtitle, centered = true, light = false, titleClassName }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} mb-12 lg:mb-16`}>
      {label && (
        <span className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3 ${light ? "text-secondary" : "text-accent"}`}>
          {label}
        </span>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${titleClassName ?? (light ? "text-light" : "text-dark")}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-light/70" : "text-dark-light"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
