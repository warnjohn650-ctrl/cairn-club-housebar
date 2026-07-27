import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <Reveal>
          <p className="text-xs uppercase tracking-[0.42em] text-gold/90">{eyebrow}</p>
        </Reveal>
      ) : null}
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-balance font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.14}>
        <div
          className={`rule-gold mt-6 w-40 ${align === "center" ? "mx-auto" : ""}`}
          aria-hidden="true"
        />
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.2}>
          <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
