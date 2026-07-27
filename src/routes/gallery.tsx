import { createFileRoute } from "@tanstack/react-router";
import { business, images } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Gallery | Cairn Clubhouse Bar Muirkirk" },
      {
        name: "description",
        content:
          "Photos of Cairn Clubhouse Bar in Muirkirk — the fireside bar, homemade food, live music nights and our community weekends.",
      },
      { property: "og:title", content: "Gallery | Cairn Clubhouse Bar Muirkirk" },
      {
        property: "og:description",
        content: "Inside the warmest wee clubhouse bar in Ayrshire.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function Gallery() {
  return (
    <>
      <PageHero
        image={images.barWhisky}
        eyebrow="Gallery"
        title="Nights, plates and familiar faces"
        intro="A look inside the clubhouse. Photos are updated regularly — the newest ones always land on our Facebook page first."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid />

          <Reveal delay={0.15}>
            <div className="glass-card mt-16 rounded-3xl p-8 text-center">
              <p className="text-sm leading-relaxed text-muted-foreground">
                These images set the tone of the venue and can be swapped for your own bar photos at
                any time. For the latest real photos from inside the clubhouse, visit our{" "}
                <a
                  className="text-gold underline-offset-4 hover:underline"
                  href={business.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Facebook page
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
