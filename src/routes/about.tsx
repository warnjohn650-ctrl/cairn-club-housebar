import { createFileRoute, Link } from "@tanstack/react-router";
import { business, images } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us | Cairn Clubhouse Bar Muirkirk" },
      {
        name: "description",
        content:
          "The story of Cairn Clubhouse Bar at Muirkirk Caravan Park — community atmosphere, homemade cooking and warm Scottish hospitality.",
      },
      { property: "og:title", content: "About Us | Cairn Clubhouse Bar Muirkirk" },
      {
        property: "og:description",
        content:
          "A community clubhouse bar in Ayrshire serving homemade retro food and a warm welcome to locals and holidaymakers.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const timeline = [
  {
    title: "A clubhouse for the park",
    text: "Born as the heart of Muirkirk Caravan Park, our bar was built so guests had somewhere warm to gather after a day in the Ayrshire hills.",
  },
  {
    title: "The kitchen opens",
    text: "Homemade retro cooking took over the menu — steak pie, mince and tatties, sticky toffee pudding. Recipes that taste like home.",
  },
  {
    title: "Weekends come alive",
    text: "Live singers, karaoke and disco nights turned quiet Saturdays into the busiest night in the village.",
  },
  {
    title: "A community gathering place",
    text: "Bingo, quizzes, birthdays and christenings. Locals and visitors sharing the same tables — exactly how a country pub should be.",
  },
];

const values = [
  { title: "Homemade, always", text: "Cooked from scratch in our kitchen, never reheated from a box." },
  { title: "Family friendly", text: "Little ones welcome through the day, with high chairs and wee portions." },
  { title: "Genuinely warm", text: "You'll be greeted by name on the second visit — often the first." },
  { title: "Fair prices", text: "Country pub quality without the city price tag." },
];

function About() {
  return (
    <>
      <PageHero
        image={images.community}
        eyebrow="Our Story"
        title="More than a bar — it's the village living room"
        intro={business.bio}
      />

      <section className="py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-border/70">
              <img
                src={images.exterior}
                alt="The clubhouse at dusk in the Ayrshire countryside"
                width={1600}
                height={900}
                loading="lazy"
                className="h-[26rem] w-full object-cover transition-transform duration-[1600ms] hover:scale-105"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Muirkirk, Ayrshire"
              title="Traditional cooking, modern comfort"
              subtitle="Set within Muirkirk Caravan Park near Cumnock, the Cairn Clubhouse Bar is where the countryside comes indoors. Dark wood, tartan seating and golden lamplight — with a kitchen turning out the retro classics people actually crave."
            />
            <Reveal delay={0.2}>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Whether you're staying on the park, passing through the hills, or you've lived in
                Muirkirk your whole life, you'll find the same thing at our door: a proper welcome, a
                warm room and a plate of something made with care.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Journey" title="How the clubhouse grew" />
          <ol className="relative mx-auto mt-16 max-w-3xl border-l border-gold/25 pl-8 sm:pl-12">
            {timeline.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.1}>
                <div className="relative pb-14 last:pb-0">
                  <span className="absolute -left-[2.55rem] top-1.5 grid h-6 w-6 place-items-center rounded-full border border-gold/50 bg-background sm:-left-[3.8rem]">
                    <span className="h-2 w-2 rounded-full bg-gold" />
                  </span>
                  <h3 className="font-display text-3xl text-beige">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What We Stand For" title="Small pub, big standards" />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 0.08}>
                <div className="glass-card h-full rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-2">
                  <h3 className="font-display text-2xl text-beige">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-20 grid gap-10 sm:grid-cols-3">
            <Counter to={4} label="Event nights weekly" />
            <Counter to={10} suffix="+" label="Whiskies behind the bar" />
            <Counter to={1} suffix="00%" label="Homemade kitchen" />
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-glow"
              >
                Plan your visit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
