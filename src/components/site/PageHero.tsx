import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

export function PageHero({
  image,
  eyebrow,
  title,
  intro,
  children,
}: {
  image: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} className="relative flex min-h-[62vh] items-end overflow-hidden pt-32">
      <motion.img
        src={image}
        alt=""
        aria-hidden="true"
        style={{ y }}
        className="absolute inset-0 h-[120%] w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60"
      />
      <motion.div
        style={{ opacity }}
        className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xs uppercase tracking-[0.45em] text-gold"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-3xl text-balance font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        {intro ? (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22 }}
            className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground"
          >
            {intro}
          </motion.p>
        ) : null}
        {children}
      </motion.div>
    </section>
  );
}
