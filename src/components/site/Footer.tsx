import { Link } from "@tanstack/react-router";
import { Facebook, MapPin, Phone } from "lucide-react";
import { business, logo, navLinks, openingHours } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-charcoal">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(60%_100%_at_50%_100%,color-mix(in_oklab,var(--gold)_16%,transparent),transparent)]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <img
            src={logo}
            alt={`${business.fullName} logo`}
            width={128}
            height={128}
            loading="lazy"
            className="h-28 w-28"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">{business.bio}</p>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-xs uppercase tracking-[0.35em] text-gold">Explore</h3>
          <ul className="mt-5 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-foreground/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs uppercase tracking-[0.35em] text-gold">Find Us</h3>
          <address className="mt-5 space-y-3 text-sm not-italic text-foreground/80">
            <a className="flex gap-3 transition-colors hover:text-gold" href={business.phoneHref}>
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {business.phone}
            </a>
            <span className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {business.address.line1}
                <br />
                {business.address.city}
                <br />
                {business.address.postcode}, {business.address.country}
              </span>
            </span>
            <a
              className="flex gap-3 transition-colors hover:text-gold"
              href={business.facebook}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Facebook className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              Follow us on Facebook
            </a>
          </address>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.35em] text-gold">Opening Hours</h3>
          <ul className="mt-5 space-y-2 text-sm">
            {openingHours.map((row) => (
              <li key={row.day} className="flex justify-between gap-4 border-b border-border/40 pb-1.5">
                <span className="text-foreground/80">{row.day}</span>
                <span className="text-muted-foreground">{row.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-border/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {business.fullName}. All rights reserved.
          </p>
          <p className="tracking-[0.25em] uppercase text-gold/70">Slàinte Mhath</p>
        </div>
      </div>
    </footer>
  );
}
