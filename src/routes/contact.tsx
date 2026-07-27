import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Clock, Facebook, MapPin, Navigation, Phone } from "lucide-react";
import { business, images, openingHours } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact & Find Us | Cairn Clubhouse Bar Muirkirk" },
      {
        name: "description",
        content:
          "Find Cairn Clubhouse Bar at Muirkirk Caravan Park, Cumnock KA18 3RE. Opening hours, phone number, directions and contact form.",
      },
      { property: "og:title", content: "Contact & Find Us | Cairn Clubhouse Bar Muirkirk" },
      {
        property: "og:description",
        content: "Muirkirk Caravan Park, Cumnock KA18 3RE. Call +44 7514 523928.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const todayIndex = (new Date().getDay() + 6) % 7;

  return (
    <>
      <PageHero
        image={images.exterior}
        eyebrow="Contact"
        title="Come and see us in Muirkirk"
        intro={`${business.addressOneLine}`}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-glow"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Click to call
          </a>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${business.mapsQuery}`}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-beige transition-all hover:-translate-y-0.5 hover:bg-gold/10"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
            Get directions
          </a>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <Reveal>
              <div className="glass-card h-full rounded-3xl p-8">
                <h2 className="font-display text-3xl text-beige">Find us</h2>
                <address className="mt-6 space-y-4 text-sm not-italic text-foreground/85">
                  <span className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    <span>
                      {business.address.line1}
                      <br />
                      {business.address.city}
                      <br />
                      {business.address.postcode}
                      <br />
                      {business.address.country}
                    </span>
                  </span>
                  <a className="flex gap-3 hover:text-gold" href={business.phoneHref}>
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {business.phone}
                  </a>
                  <a
                    className="flex gap-3 hover:text-gold"
                    href={business.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Facebook className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    Facebook page
                  </a>
                </address>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-card h-full rounded-3xl p-8">
                <h2 className="flex items-center gap-3 font-display text-3xl text-beige">
                  <Clock className="h-5 w-5 text-gold" aria-hidden="true" />
                  Opening hours
                </h2>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {openingHours.map((row, i) => (
                    <li
                      key={row.day}
                      className={`flex justify-between gap-4 border-b border-border/40 pb-2 ${
                        i === todayIndex ? "text-gold" : "text-foreground/80"
                      }`}
                    >
                      <span>
                        {row.day}
                        {i === todayIndex ? " · today" : ""}
                      </span>
                      <span className={i === todayIndex ? "" : "text-muted-foreground"}>
                        {row.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass-card h-full rounded-3xl p-8">
                <h2 className="font-display text-3xl text-beige">Send us a message</h2>
                {sent ? (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 rounded-2xl border border-gold/30 bg-gold/10 p-5 text-sm text-beige"
                  >
                    Thanks! Your message has been noted. For anything urgent please call{" "}
                    {business.phone}.
                  </motion.p>
                ) : (
                  <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                    <div>
                      <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-full bg-gold px-6 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-glow"
                    >
                      Send message
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          <div className="mt-24">
            <SectionHeading
              eyebrow="On The Map"
              title="Muirkirk Caravan Park, Cumnock"
              subtitle="Tucked into the Ayrshire countryside, minutes from the A70."
            />
            <Reveal delay={0.15}>
              <div className="mt-12 overflow-hidden rounded-[2rem] border border-border/70">
                <iframe
                  title="Map showing Cairn Clubhouse Bar at Muirkirk Caravan Park"
                  src={`https://www.google.com/maps?q=${business.mapsQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[26rem] w-full grayscale-[35%] contrast-110"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
