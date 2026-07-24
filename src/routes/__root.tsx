import "@fontsource/dm-serif-display/400.css";
import "@fontsource/dm-serif-display/400-italic.css";
import "@fontsource/fira-sans/300.css";
import "@fontsource/fira-sans/400.css";
import "@fontsource/fira-sans/500.css";
import "@fontsource/jetbrains-mono/400.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-4">404 — Lost in the grain</p>
        <h1 className="font-display text-6xl text-forest">Page not found</h1>
        <p className="mt-4 text-sm text-forest/70">
          The page you're looking for has been moved or never existed.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-[11px] uppercase tracking-widest text-paper hover:bg-moss transition-colors"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-forest">Something didn't load</h1>
        <p className="mt-3 text-sm text-forest/70">Try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-forest px-5 py-2.5 text-[11px] uppercase tracking-widest text-paper hover:bg-moss"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-forest/20 px-5 py-2.5 text-[11px] uppercase tracking-widest text-forest hover:bg-forest/5">
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
      { title: "BESPOKEFURNITURE9ja — Heirloom Furniture, Crafted in Lagos" },
      { name: "description", content: "Hand-carved Iroko and Mahogany furniture, designed and built slowly in Lagos, Nigeria." },
      { name: "author", content: "BespokeFurniture9ja" },
      { property: "og:title", content: "BESPOKEFURNITURE9ja — Crafted Slowly in Lagos" },
      { property: "og:description", content: "Bespoke heirloom furniture from a Lagos studio. Iroko, mahogany, walnut. Made to last generations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
