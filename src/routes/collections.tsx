import { createFileRoute, useSearch, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import dining1 from "@/assets/dining-1.png";
import dining2 from "@/assets/dining-2.png";
import dining3 from "@/assets/dining-3.png";
import dining4 from "@/assets/dining-4.png";
import dining5 from "@/assets/dining-5.png";
import dining6 from "@/assets/dining-6.png";
import dining8 from "@/assets/dining-8.png";
import bedroomEmeraldSuite from "@/assets/bedroom-emerald-suite.png.asset.json";
import bedroomMinimalPanelSuite from "@/assets/bedroom-minimal-panel-suite.png.asset.json";
import bedroomLuxeDarkPanelSuite from "@/assets/bedroom-luxe-dark-panel-suite.png.asset.json";
import sofaIvoryCurvedLoungeSet from "@/assets/sofa-ivory-curved-lounge-set.png.asset.json";
import tvConsoleBookmatchedFireplaceWall from "@/assets/tv-console-bookmatched-fireplace-wall.png.asset.json";
import tvConsoleDisplayFeatureWall from "@/assets/tv-console-display-feature-wall.png.asset.json";
import tvConsoleFlutedOakWall from "@/assets/tv-console-fluted-oak-wall.png.asset.json";
import tvConsoleMarbleTopOval from "@/assets/tv-console-marble-top-oval.png.asset.json";
import tvConsoleRoundedOakCredenza from "@/assets/tv-console-rounded-oak-credenza.png.asset.json";
import tvConsoleStoneFireplaceWall from "@/assets/tv-console-stone-fireplace-wall.png.asset.json";

export const Route = createFileRoute("/collections")({
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
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
  { name: "Bouclé Sectional Sofa", category: "Sofa", material: "Cream Bouclé · Hardwood Frame", img: gallery1, dim: "Custom configurations" },
  { name: "Cloud Curve Sofa", category: "Sofa", material: "Charcoal Linen · Sculpted Form", img: gallery2, dim: "260 × 100 × 85 cm" },
  { name: "Signature Line Sofa Set", category: "Sofa", material: "Hand-printed Bouclé", img: gallery3, dim: "Set of 3 · Custom" },
  { name: "Velvet Sculptural Suite", category: "Sofa", material: "Mocha Velvet · Plinth Base", img: gallery4, dim: "Modular suite" },
  { name: "Monochrome Living Set", category: "Sofa", material: "Cream Linen · Piped Detail", img: gallery5, dim: "3+2+1 seater" },
  { name: "Ivory Curved Lounge Set", category: "Sofa", material: "Textured Ivory Upholstery · Sculpted Accent Chairs", img: sofaIvoryCurvedLoungeSet.url, dim: "3 seater + 2 lounge chairs" },
  { name: "Onyx Marble Dining Table", category: "Dining", material: "Walnut Base · Bouclé Armchairs", img: dining1, dim: "Seats 8 · 240 × 110 cm" },
  { name: "Arched Oval Dining Set", category: "Dining", material: "Pearl Marble · Sculpted Bouclé", img: dining2, dim: "Seats 6 · 220 × 100 cm" },
  { name: "Carrara Curve Dining", category: "Dining", material: "Carrara Marble · Grey Bouclé", img: dining3, dim: "Seats 6 · 200 × 100 cm" },
  { name: "Walnut Heritage Dining", category: "Dining", material: "Solid Walnut · Woven Linen", img: dining4, dim: "Seats 6 · 220 × 100 cm" },
  { name: "Calacatta Console Dining", category: "Dining", material: "Calacatta Top · Walnut Frame", img: dining5, dim: "Seats 6 · 200 × 95 cm" },
  { name: "Cane-Back Dining Set", category: "Dining", material: "Marble Top · Rattan Detail", img: dining6, dim: "Seats 6 · 180 × 95 cm" },
  { name: "Fluted Pedestal Dining", category: "Dining", material: "Marble Oval · Fluted Base", img: dining8, dim: "Seats 6 · 200 × 100 cm" },
  { name: "Fluted Oak Media Wall", category: "TV Console", material: "Oak Veneer · Ribbed Base Console", img: tvConsoleFlutedOakWall.url, dim: "Wall unit · Custom" },
  { name: "Stone Fireplace Media Wall", category: "TV Console", material: "Bookmatched Stone · Built-in Fireplace", img: tvConsoleStoneFireplaceWall.url, dim: "Wall unit · Custom" },
  { name: "Marble Top Oval Console", category: "TV Console", material: "Fluted Base · Marble Top", img: tvConsoleMarbleTopOval.url, dim: "Low console · Custom" },
  { name: "Rounded Oak Credenza", category: "TV Console", material: "Oak Finish · Soft Radius Ends", img: tvConsoleRoundedOakCredenza.url, dim: "4-door console" },
  { name: "Bookmatched Fireplace Wall", category: "TV Console", material: "Stone Slab · Glass Display Towers", img: tvConsoleBookmatchedFireplaceWall.url, dim: "Feature wall · Custom" },
  { name: "Display Feature TV Wall", category: "TV Console", material: "Curved Shelving · Marble Base", img: tvConsoleDisplayFeatureWall.url, dim: "Feature wall · Custom" },
  { name: "Emerald Panel Bedroom", category: "Bedroom", material: "Upholstered Headboard · Walnut Detail", img: bedroomEmeraldSuite.url, dim: "Full bedroom set" },
  { name: "Minimal Panel Bedroom", category: "Bedroom", material: "Floating Bed Base · Gloss Wardrobe", img: bedroomMinimalPanelSuite.url, dim: "Bedroom suite" },
  { name: "Luxe Dark Panel Bedroom", category: "Bedroom", material: "Integrated Lighting · Wood Panel Finish", img: bedroomLuxeDarkPanelSuite.url, dim: "Full bedroom set" },
];

const categories = ["All", "Sofa", "Dining", "TV Console", "Bedroom", "Bespoke"];

function CollectionsPage() {
  const search = useSearch({ from: "/collections" });
  const initialCategory = categories.includes(search.category ?? "") ? search.category : "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory ?? "All");

  useEffect(() => {
    if (search.category && categories.includes(search.category)) {
      setActiveCategory(search.category);
    }
  }, [search.category]);

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
                  onClick={() => setActiveCategory(c)}
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
          {filteredPieces.map((p, i) => (
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
                <h3 className="font-display text-2xl">{p.name}</h3>
                <span className="font-mono text-[10px] text-forest/50 whitespace-nowrap">{p.dim}</span>
              </div>
            </article>
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
