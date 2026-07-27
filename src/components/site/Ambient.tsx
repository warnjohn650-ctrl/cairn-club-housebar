import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/** Floating embers + a soft glow that follows the pointer. */
export function Ambient() {
  const [mounted, setMounted] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 20 });
  const sy = useSpring(y, { stiffness: 60, damping: 20 });

  useEffect(() => {
    setMounted(true);
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  const embers = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        left: `${(i * 37) % 100}%`,
        size: 2 + ((i * 7) % 5),
        delay: (i * 1.7) % 14,
        duration: 14 + ((i * 3) % 10),
      })),
    [],
  );

  if (!mounted) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute -left-48 -top-48 h-96 w-96 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_14%,transparent),transparent_65%)] blur-2xl"
      />
      {embers.map((e, i) => (
        <span
          key={i}
          className="absolute bottom-[-10vh] rounded-full bg-gold/70 blur-[1px]"
          style={{
            left: e.left,
            width: e.size,
            height: e.size,
            animation: `emberrise ${e.duration}s linear ${e.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
