import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { Ambient } from "@/components/site/Ambient";
import { business } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="gold-text font-display text-7xl">404</h1>
        <h2 className="mt-4 font-display text-2xl text-beige">This page has called last orders</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Back to the bar
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-beige">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cairn Clubhouse Bar Muirkirk | The Place To Be On Weekends" },
      {
        name: "description",
        content:
          "Warm Scottish country pub at Muirkirk Caravan Park, Cumnock. Homemade retro food, live music, karaoke and a proper welcome every weekend.",
      },
      { name: "author", content: business.fullName },
      { property: "og:site_name", content: business.fullName },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#111111" },
      { property: "og:title", content: "Cairn Clubhouse Bar Muirkirk | The Place To Be On Weekends" },
      { name: "twitter:title", content: "Cairn Clubhouse Bar Muirkirk | The Place To Be On Weekends" },
      { property: "og:description", content: "Warm Scottish country pub at Muirkirk Caravan Park, Cumnock. Homemade retro food, live music, karaoke and a proper welcome every weekend." },
      { name: "twitter:description", content: "Warm Scottish country pub at Muirkirk Caravan Park, Cumnock. Homemade retro food, live music, karaoke and a proper welcome every weekend." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e7d37983-279c-4b41-a880-43fc287e767b/id-preview-c74fc097--914416ab-2aeb-4b5b-acfa-f6858676ff06.lovable.app-1785188286804.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e7d37983-279c-4b41-a880-43fc287e767b/id-preview-c74fc097--914416ab-2aeb-4b5b-acfa-f6858676ff06.lovable.app-1785188286804.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["BarOrPub", "Restaurant", "LocalBusiness"],
          name: business.fullName,
          description: business.bio,
          telephone: business.phone,
          servesCuisine: ["Scottish", "British", "Pub food"],
          priceRange: "££",
          sameAs: [business.facebook],
          address: {
            "@type": "PostalAddress",
            streetAddress: business.address.line1,
            addressLocality: business.address.city,
            postalCode: business.address.postcode,
            addressCountry: "GB",
          },
          openingHours: [
            "Tu-We 16:00-23:00",
            "Th 12:00-23:00",
            "Fr-Sa 12:00-01:00",
            "Su 12:00-23:00",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingScreen />
      <Ambient />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingActions />
    </QueryClientProvider>
  );
}
