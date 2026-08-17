import { Link } from "@tanstack/react-router";
import livingCollection from "@/assets/gallery-1.png";
import diningCollection from "@/assets/dining-1.png";
import bedroomCollection from "@/assets/bedroom-emerald-suite.png.asset.json";
import bespokeCollection from "@/assets/craft-hands.jpg";

const collections = [
  {
    name: "The Living Room",
    description: "Sofas and lounges built for slow conversation, in textured fabrics and solid hardwood frames.",
    img: livingCollection,
    category: "Sofa",
    count: "12 pieces",
  },
  {
    name: "The Dining Room",
    description: "Tables and chairs where marble meets timber, designed for gatherings that run long into the night.",
    img: diningCollection,
    category: "Dining",
    count: "9 pieces",
  },
  {
    name: "The Bedroom",
    description: "Panel beds and suites finished in walnut, emerald upholstery, and integrated lighting for restful sanctuaries.",
    img: bedroomCollection.url,
    category: "Bedroom",
    count: "6 pieces",
  },
  {
    name: "The Bespoke Edit",
    description: "One-of-a-kind commissions shaped by your space, your timber, and your story — made only once.",
    img: bespokeCollection,
    category: "All",
    count: "By appointment",
  },
];

export function CollectionsShowcase() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-4">Curated by room</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] text-balance">
              Collections.
            </h2>
          </div>
          <p className="max-w-md text-forest/70 leading-relaxed">
            Every collection is a dialogue between Nigerian timber, patient joinery, and the rooms our pieces are asked to complete.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {collections.map((c, i) => (
            <Link
              key={c.name}
              to="/collections"
              search={{ category: c.category === "All" ? undefined : c.category }}
              className={`group relative overflow-hidden rounded-sm bg-moss/5 ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/9]" : "aspect-[4/5]"}`}>
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-2">{c.count}</p>
                      <h3 className="font-display text-3xl md:text-4xl text-paper mb-2">{c.name}</h3>
                      <p className="text-paper/80 text-sm md:text-base leading-relaxed max-w-md">{c.description}</p>
                    </div>
                    <span className="hidden md:flex shrink-0 items-center justify-center w-12 h-12 rounded-full border border-paper/30 text-paper group-hover:bg-paper group-hover:text-forest transition-colors">
                      <span aria-hidden className="text-lg">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
