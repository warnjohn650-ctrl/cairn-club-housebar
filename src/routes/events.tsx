import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Clock, Phone } from "lucide-react";
import { business, events, images } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Countdown } from "@/components/site/Countdown";

export const Route = createFileRoute("/events")({
  component: Events,
  head: () => ({
    meta: [
      { title: "Events & Entertainment | Cairn Clubhouse Bar Muirkirk" },
      {
        name: "description",
        content:
          "Live music, karaoke and disco nights, Sunday roast and quiz, community bingo — what's on this week at Cairn Clubhouse Bar, Muirkirk.",
      },
      { property: "og:title", content: "Events & Entertainment | Cairn Clubhouse Bar Muirkirk" },
      {
        property: "og:description",
        content: "Live weekend entertainment and community nights in Muirkirk, Ayrshire.",
      },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
});

function Events() {
  const [featured, ...rest] = events;

  return (
    <>
      <PageHero
        image={images.liveMusic}
        eyebrow="Events & Entertainment"
        title="Live music, karaoke and community nights"
        intro="There's something on nearly every night. Free entry, great sound and a room that fills fast."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <article className="group relative overflow-hidden rounded-[2rem] border border-gold/25">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="h-[32rem] w-full object-cover transition-transform duration-[1800ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-gold">Featured Event</p>
                  <h2 className="mt-4 font-display text-4xl text-beige sm:text-5xl">{featured.title}</h2>
                  <p className="mt-3 max-w-xl text-muted-foreground">{featured.description}</p>
                  <div className="mt-5 flex flex-wrap gap-5 text-sm text-foreground/85">
                    <span className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-gold" aria-hidden="true" />
                      {featured.when}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gold" aria-hidden="true" />
                      {featured.time}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Doors open in
                  </p>
                  <Countdown recurring={featured.recurring} />
                </div>
              </div>
            </article>
          </Reveal>

          <div className="mt-24">
            <SectionHeading
              eyebrow="What's On"
              title="Your week at the clubhouse"
              subtitle="Regular nights you can count on, plus special events announced on our Facebook page."
            />
            <ul className="mt-14 grid gap-6 md:grid-cols-3">
              {rest.map((ev, i) => (
                <Reveal as="li" key={ev.title} delay={i * 0.1}>
                  <article className="group h-full overflow-hidden rounded-3xl border border-border/70 bg-card/60 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2">
                    <div className="overflow-hidden">
                      <img
                        src={ev.image}
                        alt={ev.title}
                        loading="lazy"
                        className="h-56 w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                      />
                    </div>
                    <div className="p-7">
                      <p className="text-xs uppercase tracking-[0.3em] text-gold">{ev.when}</p>
                      <h3 className="mt-3 font-display text-2xl text-beige">{ev.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{ev.description}</p>
                      <p className="mt-5 flex items-center gap-2 text-sm text-foreground/80">
                        <Clock className="h-4 w-4 text-gold" aria-hidden="true" />
                        {ev.time}
                      </p>
                      <div className="mt-6">
                        <Countdown recurring={ev.recurring} />
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.2}>
            <div className="glass-card mt-24 rounded-[2rem] p-10 text-center sm:p-14">
              <h2 className="font-display text-4xl text-beige sm:text-5xl">
                Planning a party or function?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Birthdays, christenings, anniversaries and club nights — we'll set the room up, sort
                the buffet and keep the music going.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-glow"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {business.phone}
                </a>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-beige transition-all hover:-translate-y-0.5 hover:bg-gold/10"
                >
                  Message us on Facebook
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
