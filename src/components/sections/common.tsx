import { Sprout } from "lucide-react";

export function Cornflower({ className = "" }: { className?: string }) {
  return (
    <Sprout aria-hidden="true" className={className} strokeWidth={1.5} />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  invert?: boolean;
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-12`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium mb-3 ${
            invert ? "text-gold-soft" : "text-gold"
          }`}
        >
          <span className="h-px w-8 bg-current opacity-60" />
          {eyebrow}
          <span className="h-px w-8 bg-current opacity-60" />
        </div>
      )}
      <h2
        className={`font-serif text-3xl md:text-5xl leading-tight ${
          invert ? "text-cream" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg ${
            invert ? "text-cream-2/80" : "text-foreground/75"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`h-px w-16 bg-gold mx-auto ${className}`} aria-hidden="true" />
  );
}

