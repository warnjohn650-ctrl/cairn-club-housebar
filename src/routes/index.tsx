import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { CalendarDays, Flame, HeartHandshake, Music, Phone, UtensilsCrossed } from "lucide-react";
import { business, images, logo, menu } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Counter } from "@/components/site/Counter";
import { Testimonials } from "@/components/site/Testimonials";
import { GalleryGrid } from "@/components/site/GalleryGrid";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Cairn Clubhouse Bar Muirkirk | The Place To Be On Weekends" },
      {
        name: "description",
        content:
          "Warm Scottish country pub at Muirkirk Caravan Park, Cumnock. Homemade retro food, live music, karaoke and a proper welcome every weekend.",
      },
      { property: "og:title", content: "Cairn Clubhouse Bar Muirkirk | The Place To Be On Weekends" },
      {
        property: "og:description",
        content:
          "Homemade retro food just like your gran's cooking, live weekend entertainment and a warm Scottish welcome.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const highlights = [
  {
    icon: UtensilsCrossed,
    title: "Homemade Retro Food",
    text: "Steak pie, mince and tatties, sticky toffee pudding — cooked fresh, just like your gran's.",
  },
  {
    icon: Music,
    title: "Live Weekend Entertainment",
    text: "Local singers, karaoke and disco nights that fill the room every Friday and Saturday.",
  },
  {
    icon: HeartHandshake,
    title: "Everybody Welcome",
    text: "Family friendly through the day, buzzing at night. Caravan park guests and locals alike.",
  },
  {
    icon: Flame,
    title: "Warm & Cosy",
    text: "Wood, tartan, golden light and a fire in the corner. The kind of bar you don't want to leave.",
  },
];

function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative flex min-h-dvh items-center justify-center overflow-hidden"
      >
        <motion.img
          src={images.heroInterior}
          alt="The warm, fire-lit interior of Cairn Clubhouse Bar"
          width={1920}
          height={1088}
          style={{ y: bgY }}
          className="absolute inset-0 h-[125%] w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_40%,transparent,color-mix(in_oklab,var(--background)_92%,transparent))]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/45 to-background"
        />

        <motion.div
          style={{ y: contentY, opacity: fade }}
          className="relative z-10 mx-auto max-w-4xl px-4 pb-20 pt-32 text-center sm:px-6"
        >
          <motion.img
            src={logo}
            alt={`${business.fullName} logo`}
            width={260}
            height={260}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="animate-floaty mx-auto h-44 w-44 drop-shadow-[0_0_60px_rgba(212,160,23,0.3)] sm:h-56 sm:w-56"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="mt-8 text-[0.7rem] uppercase tracking-[0.5em] text-gold"
          >
            Muirkirk Caravan Park · Ayrshire
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-balance font-display text-5xl leading-[0.98] sm:text-7xl lg:text-8xl"
          >
            The Place To Be <span className="gold-text">On Weekends</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2 }}
            className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-foreground/85 sm:text-lg"
          >
            Enjoy delicious homemade retro food, live entertainment and a warm Scottish welcome.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.15 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/food-and-drinks"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-soft via-gold to-gold-soft bg-[length:200%_100%] px-7 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_50%] hover:shadow-glow"
            >
              <UtensilsCrossed className="h-4 w-4" aria-hidden="true" />
              View Menu
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-beige backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10"
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Upcoming Events
            </Link>
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-foreground/90 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <span className="block h-14 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent" />
        </motion.div>
      </section>

      {/* WHY VISIT */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Visit Us"
            title="A proper Scottish welcome, every single time"
            subtitle={business.bio}
          />
          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal as="li" key={h.title} delay={i * 0.08}>
                <div className="glass-card group h-full rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-2">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/12 text-gold transition-colors duration-500 group-hover:bg-gold/20">
                    <h.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl text-beige">{h.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* STORY STRIP */}
      <section className="relative overflow-hidden py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-border/70">
                <img
                  src={images.fireside}
                  alt="Tartan armchairs beside the fire at the clubhouse"
                  width={1000}
                  height={1400}
                  loading="lazy"
                  className="h-[30rem] w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
                />
              </div>
              <div className="glass-card absolute -bottom-8 -right-4 hidden rounded-2xl px-7 py-5 sm:block">
                <p className="font-display text-3xl text-gold">Est. Muirkirk</p>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Caravan Park Clubhouse
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Clubhouse"
              title="Wood, warmth and the sound of a good night"
              subtitle="We're the clubhouse bar at Muirkirk Caravan Park — a country pub where holidaymakers and locals share the same tables. Golden light, tartan corners, cold pints and food made from scratch in our own kitchen."
            />
            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-3 gap-6">
                <Counter to={7} label="Nights a week" />
                <Counter to={40} suffix="+" label="Dishes made fresh" />
                <Counter to={100} suffix="%" label="Warm welcome" />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-2 border-b border-gold/50 pb-1 text-sm uppercase tracking-[0.25em] text-gold transition-colors hover:border-gold"
              >
                Our story
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHEF'S RECOMMENDATION */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Chef's Recommendation"
            title="Homemade favourites from our kitchen"
            subtitle="A wee taste of the menu. Everything is cooked to order, so it lands hot and honest."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { img: images.foodPie, ...menu[1].items[3] },
              { img: images.foodRoast, ...menu[2].items[0] },
              { img: images.foodDessert, ...menu[4].items[0] },
            ].map((dish, i) => (
              <Reveal key={dish.name} delay={i * 0.1}>
                <article className="group overflow-hidden rounded-3xl border border-border/70 bg-card/60 backdrop-blur-sm">
                  <div className="overflow-hidden">
                    <img
                      src={dish.img}
                      alt={dish.name}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="h-64 w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-7">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-2xl text-beige">{dish.name}</h3>
                      <span className="font-display text-xl text-gold">{dish.price}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {dish.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.25}>
            <div className="mt-14 text-center">
              <Link
                to="/food-and-drinks"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all duration-500 hover:-translate-y-0.5 hover:shadow-glow"
              >
                See the full menu
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WEEKEND HIGHLIGHTS */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <img
          src={images.partyNight}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Weekend Highlights"
            title="Friday sing, Saturday swing, Sunday roast"
            subtitle="The weekend starts here. Free entry, live sound and a room full of familiar faces."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { day: "Friday", title: "Karaoke & Disco", time: "9pm – 1am" },
              { day: "Saturday", title: "Live Music", time: "9pm till late" },
              { day: "Sunday", title: "Roast & Quiz", time: "12pm & 7pm" },
            ].map((n, i) => (
              <Reveal key={n.day} delay={i * 0.1}>
                <div className="glass-card rounded-3xl p-8 text-center transition-transform duration-500 hover:-translate-y-2">
                  <p className="text-xs uppercase tracking-[0.4em] text-gold">{n.day}</p>
                  <h3 className="mt-4 font-display text-3xl text-beige">{n.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{n.time}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Kind Words" title="What our regulars say" />
          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* PHOTO SHOWCASE */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Photo Showcase"
            title="Inside the clubhouse"
            subtitle="A glimpse of the nights, the plates and the people. Follow our Facebook page for the latest photos."
          />
          <div className="mt-14">
            <GalleryGrid limit={6} />
          </div>
          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-beige transition-all hover:-translate-y-0.5 hover:bg-gold/10"
              >
                Full gallery
              </Link>
              <a
                href={business.facebook}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-glow"
              >
                Facebook feed
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
