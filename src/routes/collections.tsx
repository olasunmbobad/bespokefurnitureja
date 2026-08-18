import { createFileRoute, useSearch, useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { pieces, formatPrice } from "@/lib/catalog";

export const Route = createFileRoute("/collections")({
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Collections — BESPOKEFURNITURE9ja" },
      { name: "description", content: "Browse our curated catalog: dining, lounge, bedroom, and bespoke pieces in Iroko, Mahogany, and Walnut." },
      { property: "og:title", content: "Collections — BespokeFurniture9ja" },
      { property: "og:description", content: "Heirloom furniture catalog. Lagos studio." },
    ],
  }),
  component: CollectionsPage,
});

const categories = ["All", "Sofa", "Dining", "TV Console", "Bedroom", "Bespoke"];

function CollectionsPage() {
  const search = useSearch({ from: "/collections" });
  const navigate = useNavigate({ from: "/collections" });
  const initialCategory = categories.includes(search.category ?? "") ? search.category : "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory ?? "All");

  useEffect(() => {
    if (search.category && categories.includes(search.category)) {
      setActiveCategory(search.category);
    }
  }, [search.category]);

  const selectCategory = (c: string) => {
    setActiveCategory(c);
    navigate({
      search: { category: c === "All" ? undefined : c },
      replace: true,
    });
  };

  const filteredPieces = activeCategory === "All" ? pieces : pieces.filter((p) => p.category === activeCategory);
  return (
    <div className="bg-paper text-forest min-h-screen">
      <SiteNav />

      <header className="px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-6">The Catalog</p>
          <h1 className="font-display text-5xl md:text-8xl leading-[0.9] text-balance max-w-4xl">
            Pieces, by category.
          </h1>
          <p className="mt-8 max-w-xl text-forest/70 leading-relaxed">
            Each work is built to order in our Lagos studio. Lead times typically range from two to six weeks max.
          </p>

          <div className="mt-12 flex overflow-x-auto md:flex-wrap gap-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2">
            {categories.map((c) => {
              const isActive = c === activeCategory;
              return (
                <button
                  key={c}
                  onClick={() => selectCategory(c)}
                  className={`shrink-0 px-4 py-2 rounded-full border text-[11px] uppercase tracking-widest transition-colors ${
                    isActive
                      ? "bg-forest text-paper border-forest"
                      : "border-forest/15 text-forest/70 hover:bg-forest hover:text-paper hover:border-forest"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredPieces.map((p) => (
            <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group block">
              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-moss/5 mb-6">
                <img
                  src={p.images[0]}
                  alt={p.name}
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  <p className="font-mono text-sm font-medium text-moss mt-1">{formatPrice(p.price)}</p>
                </div>
                <span className="font-mono text-[10px] text-forest/50 whitespace-nowrap">{p.dim}</span>
              </div>
            </Link>
          ))}
          {filteredPieces.length === 0 && (
            <p className="col-span-full text-center text-forest/60 py-16">
              No pieces in this category yet. Upload images and we'll add them here.
            </p>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
