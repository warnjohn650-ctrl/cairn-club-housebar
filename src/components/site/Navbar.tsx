import { useEffect, useMemo, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { business, logo, navLinks } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const links = useMemo(() => navLinks, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 py-2 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-4"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:px-8"
      >
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={`${business.fullName} home`}>
          <motion.img
            src={logo}
            alt={`${business.fullName} logo`}
            width={72}
            height={72}
            whileHover={{ scale: 1.06, rotate: -1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className={`shrink-0 drop-shadow-[0_0_18px_rgba(212,160,23,0.25)] transition-all duration-500 ${
              scrolled ? "h-12 w-12" : "h-16 w-16"
            }`}
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight tracking-wide text-beige sm:text-xl">
              Cairn Clubhouse Bar
            </span>
            <span className="block text-[0.6rem] uppercase tracking-[0.4em] text-gold/80">Muirkirk</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="group relative px-4 py-2 text-sm uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-gold"
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 bottom-1 h-px origin-left bg-gold transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
          <a
            href={business.phoneHref}
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-soft via-gold to-gold-soft bg-[length:200%_100%] px-5 py-2.5 text-sm font-medium tracking-wide text-primary-foreground transition-[background-position,box-shadow,transform] duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_50%] hover:shadow-glow"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1 px-6 py-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    to={link.to}
                    className="block border-b border-border/40 py-3 font-display text-2xl text-beige transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-4">
                <a
                  href={business.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-medium text-primary-foreground"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {business.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
