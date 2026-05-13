import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import pieceDining from "@/assets/piece-dining.jpg";
import pieceSideboard from "@/assets/piece-sideboard.jpg";
import pieceArmchair from "@/assets/piece-armchair.jpg";
import heroChair from "@/assets/hero-chair.jpg";
import craftMood from "@/assets/craft-mood.jpg";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — BESPOKEFURNITURE9ja" },
      { name: "description", content: "Browse our curated catalog: dining, lounge, storage, and bespoke pieces in Iroko, Mahogany, and Walnut." },
      { property: "og:title", content: "Collections — BespokeFurniture9ja" },
      { property: "og:description", content: "Heirloom furniture catalog. Lagos studio." },
    ],
  }),
  component: CollectionsPage,
});

const pieces = [
  { name: "Omo Dining Table", category: "Dining", material: "Smoked Mahogany", img: pieceDining, dim: "240 × 100 × 75 cm" },
  { name: "Eko Sideboard", category: "Storage", material: "Walnut & Brass", img: pieceSideboard, dim: "180 × 50 × 80 cm" },
  { name: "Zaria Lounge Chair", category: "Lounge", material: "Hand-planed Iroko", img: pieceArmchair, dim: "82 × 88 × 78 cm" },
  { name: "Ikoyi Patio Chair", category: "Outdoor", material: "Iroko & Cane", img: heroChair, dim: "70 × 95 × 88 cm" },
  { name: "Atelier Moodboard", category: "Accents", material: "Mixed Materials", img: craftMood, dim: "Custom" },
  { name: "Itan Credenza", category: "Storage", material: "Walnut & Brass", img: pieceSideboard, dim: "200 × 50 × 85 cm" },
];

const categories = ["All", "Dining", "Lounge", "Storage", "Outdoor", "Accents"];

function CollectionsPage() {
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
            Each work is built to order in our Lagos studio. Lead times typically range from six to twelve weeks.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            {categories.map((c) => (
              <button
                key={c}
                className="px-4 py-2 rounded-full border border-forest/15 text-[11px] uppercase tracking-widest text-forest/70 hover:bg-forest hover:text-paper hover:border-forest transition-colors"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {pieces.map((p, i) => (
            <article key={p.name + i} className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-moss/5 mb-6">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-sage mb-2">{p.category}</p>
                  <h3 className="font-display text-2xl mb-1">{p.name}</h3>
                  <p className="text-sm text-forest/60">{p.material}</p>
                </div>
                <span className="font-mono text-[10px] text-forest/50 whitespace-nowrap">{p.dim}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
