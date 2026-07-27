import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => window.clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <div className="mx-auto max-w-3xl">
      <div className="glass-card relative min-h-[18rem] overflow-hidden rounded-3xl p-8 sm:min-h-[16rem] sm:p-12">
        <Quote className="h-8 w-8 text-gold/60" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6"
          >
            <p className="font-display text-2xl leading-snug text-beige sm:text-3xl">“{t.quote}”</p>
            <footer className="mt-6 text-sm uppercase tracking-[0.25em] text-gold/85">
              {t.author} · <span className="text-muted-foreground">{t.origin}</span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex justify-center gap-2.5">
        {testimonials.map((item, i) => (
          <button
            key={item.author}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show review from ${item.author}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-10 bg-gold" : "w-4 bg-border hover:bg-gold/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
