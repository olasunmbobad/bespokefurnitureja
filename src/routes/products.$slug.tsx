import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { CONSULTATION_FORM_URL, formatPrice, getPiece, pieces } from "@/lib/catalog";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const piece = getPiece(params.slug);
    if (!piece) throw notFound();
    return { piece };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Piece not found — BESPOKEFURNITURE9ja" }, { name: "robots", content: "noindex" }] };
    }
    const { piece } = loaderData;
    const title = `${piece.name} — BESPOKEFURNITURE9ja`;
    const description = `${piece.name} · ${formatPrice(piece.price)} · ${piece.dim}. Built to order in our Lagos studio.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: PieceNotFound,
  component: ProductDetail,
});

function ProductDetail() {
  const { piece } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const related = pieces.filter((p) => p.category === piece.category && p.slug !== piece.slug).slice(0, 3);

  return (
    <div className="bg-paper text-forest min-h-screen">
      <SiteNav />

      <div className="px-6 md:px-10 pt-10">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-forest/60 hover:text-forest transition-colors"
          >
            <span aria-hidden>←</span> Back to homepage
          </Link>
        </div>
      </div>

      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-moss/5">
              <img
                src={piece.images[active]}
                alt={`${piece.name} — view ${active + 1}`}
                width={1200}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>

            {piece.images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {piece.images.map((src, i) => (
                  <button
                    key={src + i}
                    onClick={() => setActive(i)}
                    aria-label={`View photo ${i + 1} of ${piece.name}`}
                    aria-current={i === active}
                    className={`shrink-0 w-24 h-24 md:w-28 md:h-28 overflow-hidden rounded-sm border transition-colors ${
                      i === active ? "border-forest" : "border-forest/15 hover:border-forest/50"
                    }`}
                  >
                    <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="lg:col-span-5 lg:pt-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-5">{piece.category}</p>
            <h1 className="font-display text-4xl md:text-6xl leading-[0.95] text-balance">{piece.name}</h1>
            <p className="mt-5 font-mono text-xl md:text-2xl font-medium text-moss">{formatPrice(piece.price)}</p>
            <p className="mt-8 text-lg md:text-xl text-forest/80 leading-relaxed">{piece.material}</p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-forest/50">{piece.dim}</p>

            <a
              href={CONSULTATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-moss text-paper px-10 py-5 rounded-full text-base md:text-lg font-medium tracking-wide shadow-lg shadow-forest/20 hover:bg-forest transition-colors"
            >
              Get Your Free Consultation
              <span aria-hidden>→</span>
            </a>

            <p className="mt-6 text-sm text-forest/60 leading-relaxed">
              Built to order in our Lagos studio. Lead times typically range from two to six weeks max.
            </p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="px-6 md:px-10 pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl mb-10">More in {piece.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((p) => (
                <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group">
                  <div className="aspect-[3/4] overflow-hidden rounded-sm bg-moss/5 mb-5">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                  </div>
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  <p className="font-mono text-sm font-medium text-moss mt-1">{formatPrice(p.price)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}

function PieceNotFound() {
  return (
    <div className="bg-paper text-forest min-h-screen">
      <SiteNav />
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="font-display text-4xl md:text-6xl mb-6">This piece isn't here.</h1>
        <p className="text-forest/70 mb-10">It may have been renamed or retired from the catalog.</p>
        <Link to="/collections" search={{ category: undefined }} className="inline-flex items-center gap-3 bg-forest text-paper px-7 py-3.5 rounded-full text-[11px] uppercase tracking-widest">
          Browse the catalog <span aria-hidden>→</span>
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}
