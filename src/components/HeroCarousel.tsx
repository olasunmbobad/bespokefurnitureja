import sofaSetBestseller from "@/assets/sofa-set-bestseller.jpg";
import diningSetBestseller from "@/assets/dining-set-bestseller.jpg";
import pieceSideboard from "@/assets/piece-sideboard.jpg";
import pieceDining from "@/assets/piece-dining.jpg";
import pieceArmchair from "@/assets/piece-armchair.jpg";
import bedroomEmeraldSuite from "@/assets/bedroom-emerald-suite.png.asset.json";
import sofaIvory from "@/assets/sofa-ivory-curved-lounge-set.png.asset.json";
import tvFluted from "@/assets/tv-console-fluted-oak-wall.png.asset.json";

const slides = [
  { name: "Sofa Set", img: sofaSetBestseller },
  { name: "Dining Set", img: diningSetBestseller },
  { name: "TV Console", img: pieceSideboard },
  { name: "Ivory Curved Lounge", img: sofaIvory.url },
  { name: "Emerald Bedroom Suite", img: bedroomEmeraldSuite.url },
  { name: "Fluted Oak Media Wall", img: tvFluted.url },
  { name: "Heritage Dining", img: pieceDining },
  { name: "Sculpted Armchair", img: pieceArmchair },
];

export function HeroCarousel() {
  // Duplicate for seamless loop
  const loop = [...slides, ...slides];
  return (
    <section className="relative w-full overflow-hidden bg-forest text-paper">
      <div className="relative h-[60vh] md:h-[75vh] min-h-[420px] overflow-hidden">
        <div className="flex h-full animate-hero-marquee will-change-transform">
          {loop.map((s, i) => (
            <figure
              key={`${s.name}-${i}`}
              className="relative shrink-0 h-full w-screen md:w-[80vw] lg:w-[70vw]"
            >
              <img
                src={s.img}
                alt={s.name}
                className="absolute inset-0 w-full h-full object-cover"
                loading={i < 2 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/10 to-transparent" />
              <figcaption className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-2">
                  Featured
                </p>
                <h3 className="font-display text-3xl md:text-5xl text-paper">
                  {s.name}
                </h3>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Crafted Slowly overlay */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-sage mb-4 drop-shadow">
              Lagos · Est. by hand
            </p>
            <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] text-paper drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
              Crafted <span className="italic text-sage">Slowly</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
