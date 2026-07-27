import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, Facebook, Phone } from "lucide-react";
import { business } from "@/lib/site";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop ? (
          <motion.button
            key="top"
            type="button"
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 bg-background/70 text-gold backdrop-blur-md transition-colors hover:bg-gold/15"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        ) : null}
      </AnimatePresence>

      <motion.a
        href={business.facebook}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Visit our Facebook page"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="grid h-12 w-12 place-items-center rounded-full border border-gold/25 bg-card/80 text-beige backdrop-blur-md transition-colors hover:text-gold"
      >
        <Facebook className="h-5 w-5" />
      </motion.a>

      <motion.a
        href={business.phoneHref}
        aria-label={`Call ${business.fullName} on ${business.phone}`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="animate-pulse-glow grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold-soft to-gold text-primary-foreground shadow-glow"
      >
        <Phone className="h-6 w-6" />
      </motion.a>
    </div>
  );
}
