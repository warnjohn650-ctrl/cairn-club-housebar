import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { business, logo } from "@/lib/site";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), 1500);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-8">
            <motion.img
              src={logo}
              alt=""
              width={180}
              height={180}
              initial={{ opacity: 0, scale: 0.86 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="h-40 w-40 drop-shadow-[0_0_40px_rgba(212,160,23,0.35)]"
            />
            <div className="h-px w-56 overflow-hidden bg-border">
              <motion.div
                className="h-full bg-gradient-to-r from-transparent via-gold to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <p className="text-[0.65rem] uppercase tracking-[0.5em] text-gold/80">
              {business.town}
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
