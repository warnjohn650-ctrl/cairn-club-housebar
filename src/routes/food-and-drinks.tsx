import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { business, images, menu } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/food-and-drinks")({
  component: FoodAndDrinks,
  head: () => ({
    meta: [
      { title: "Food & Drinks Menu | Cairn Clubhouse Bar Muirkirk" },
      {
        name: "description",
        content:
          "Homemade breakfast, lunch, dinner and retro puddings, plus cocktails, beer, wine and Scottish whisky at Cairn Clubhouse Bar, Muirkirk.",
      },
      { property: "og:title", content: "Food & Drinks Menu | Cairn Clubhouse Bar Muirkirk" },
      {
        property: "og:description",
        content: "Homemade retro pub food and a full bar in the heart of Ayrshire.",
      },
      { property: "og:url", content: "/food-and-drinks" },
    ],
    links: [{ rel: "canonical", href: "/food-and-drinks" }],
  }),
});

function FoodAndDrinks() {
  const [active, setActive] = useState(menu[0].id);
  const section = menu.find((s) => s.id === active) ?? menu[0];

  return (
    <>
      <PageHero
        image={images.foodPie}
        eyebrow="Food & Drinks"
        title="Homemade retro food, just like your gran's"
        intro="Everything is cooked to order in our own kitchen. Menus change with the seasons — ask about the blackboard specials."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2.5">
            {menu.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(s.id)}
                aria-pressed={active === s.id}
                className={`relative rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                  active === s.id
                    ? "text-primary-foreground"
                    : "border border-border text-foreground/75 hover:border-gold/50 hover:text-gold"
                }`}
              >
                {active === s.id ? (
                  <motion.span
                    layoutId="menu-pill"
                    className="absolute inset-0 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 350, damping: 32 }}
                  />
                ) : null}
                <span className="relative">{s.title}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16"
          >
            <SectionHeading eyebrow={`${section.title} Menu`} title={section.title} subtitle={section.blurb} />

            <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
              <ul className="grid gap-4 sm:grid-cols-2">
                {section.items.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <article className="glass-card group h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-2xl text-beige">{item.name}</h3>
                        <span className="shrink-0 font-display text-xl text-gold">{item.price}</span>
                      </div>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      {item.tag ? (
                        <span className="mt-4 inline-block rounded-full border border-gold/35 px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-gold">
                          {item.tag}
                        </span>
                      ) : null}
                    </article>
                  </motion.li>
                ))}
              </ul>

              {section.image ? (
                <div className="overflow-hidden rounded-3xl border border-border/70 lg:sticky lg:top-28">
                  <img
                    src={section.image}
                    alt={`${section.title} at Cairn Clubhouse Bar`}
                    loading="lazy"
                    className="h-[26rem] w-full object-cover transition-transform duration-[1600ms] hover:scale-110"
                  />
                </div>
              ) : (
                <div className="glass-card grid h-[26rem] place-items-center rounded-3xl text-center lg:sticky lg:top-28">
                  <div className="px-8">
                    <p className="font-display text-3xl text-gold">{section.title}</p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Photo placeholder — ready to swap for a real photo from the bar.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <Reveal delay={0.2}>
            <p className="mt-20 text-center text-sm text-muted-foreground">
              Allergies or dietary needs? Give us a ring on{" "}
              <a className="text-gold hover:underline" href={business.phoneHref}>
                {business.phone}
              </a>{" "}
              and we'll look after you.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
