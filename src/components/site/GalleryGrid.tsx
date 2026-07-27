import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/lib/site";

const spanClass: Record<string, string> = {
  wide: "sm:col-span-2",
  tall: "sm:row-span-2",
  normal: "",
};

export function GalleryGrid({ limit }: { limit?: number }) {
  const items = limit ? gallery.slice(0, limit) : gallery;
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => ((i ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft") setActive((i) => ((i ?? 0) - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, items.length]);

  return (
    <>
      <ul className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[240px]">
        {items.map((item, i) => (
          <motion.li
            key={item.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={spanClass[item.span] ?? ""}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block h-full w-full overflow-hidden rounded-2xl border border-border/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={`Open image: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              <span className="absolute inset-x-4 bottom-4 translate-y-3 text-left text-sm text-beige opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.alt}
              </span>
            </button>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-background/95 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close image viewer"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold hover:bg-gold/10"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                setActive((i) => ((i ?? 0) - 1 + items.length) % items.length);
              }}
              className="absolute left-3 grid h-12 w-12 place-items-center rounded-full border border-gold/30 text-gold hover:bg-gold/10 sm:left-8"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                setActive((i) => ((i ?? 0) + 1) % items.length);
              }}
              className="absolute right-3 grid h-12 w-12 place-items-center rounded-full border border-gold/30 text-gold hover:bg-gold/10 sm:right-8"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={items[active].src}
                alt={items[active].alt}
                className="max-h-[75vh] w-full rounded-2xl object-contain"
              />
              <figcaption className="mt-4 text-center text-sm text-muted-foreground">
                {items[active].alt}
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
