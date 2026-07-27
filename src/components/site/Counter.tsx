import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

export function Counter({
  to,
  suffix = "",
  label,
}: {
  to: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <div ref={ref} className="text-center">
      <p className="gold-text font-display text-5xl sm:text-6xl">
        {value}
        {suffix}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
    </div>
  );
}
