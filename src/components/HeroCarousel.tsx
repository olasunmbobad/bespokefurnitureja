import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sofaSetBestseller from "@/assets/sofa-set-bestseller.jpg";
import diningSetBestseller from "@/assets/dining-set-bestseller.jpg";
import pieceSideboard from "@/assets/piece-sideboard.jpg";
import bedroomEmeraldSuite from "@/assets/bedroom-emerald-suite.png.asset.json";
import sofaIvory from "@/assets/sofa-ivory-curved-lounge-set.png.asset.json";
import tvFluted from "@/assets/tv-console-fluted-oak-wall.png.asset.json";
import bedroomLuxe from "@/assets/bedroom-luxe-dark-panel-suite.png.asset.json";
import tvMarble from "@/assets/tv-console-marble-top-oval.png.asset.json";

const slides = [
  { name: "Ivory Curved Lounge Set", category: "Sofa", img: sofaIvory.url },
  { name: "Heritage Dining Set", category: "Dining", img: diningSetBestseller },
  { name: "Fluted Oak Media Wall", category: "TV Console", img: tvFluted.url },
  { name: "Emerald Bedroom Suite", category: "Bedroom", img: bedroomEmeraldSuite.url },
  { name: "Bouclé Sofa Set", category: "Sofa", img: sofaSetBestseller },
  { name: "Marble Top Console", category: "TV Console", img: tvMarble.url },
  { name: "Luxe Panel Bedroom", category: "Bedroom", img: bedroomLuxe.url },
  { name: "Hand-planed Sideboard", category: "TV Console", img: pieceSideboard },
];

const INTERVAL = 3500;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [next, paused]);

  return (
    <section
      className="relative w-full overflow-hidden bg-forest text-paper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="relative h-[65vh] md:h-[80vh] min-h-[440px]">
        {/* Slides */}
        {slides.map((s, i) => (
          <figure
            key={s.name}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={i !== index}
          >
            <img
              src={s.img}
              alt={s.name}
              className={`absolute inset-0 w-full h-full object-cover ${
                i === index ? "scale-105" : "scale-100"
              } transition-transform duration-[6000ms] ease-out`}
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-forest/40" />
            <figcaption className="absolute bottom-10 left-6 md:bottom-16 md:left-16 z-10 max-w-xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-3">
                {s.category} · {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </p>
              <h3 className="font-display text-3xl md:text-5xl lg:text-6xl text-paper leading-[0.95]">
                {s.name}
              </h3>
            </figcaption>
          </figure>
        ))}

        {/* Crafted Slowly overlay */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20">
          <div className="px-6 pt-10 pb-12 md:pt-16 md:pb-16">
            <div className="text-center max-w-5xl mx-auto">
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-paper/80 mb-3 md:mb-4">
                Lagos · Est. by hand
              </p>
              <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] leading-[0.85] text-paper drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                Crafted Slowly
              </h2>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 grid place-items-center h-11 w-11 md:h-12 md:w-12 rounded-full bg-paper/10 backdrop-blur-md border border-paper/20 text-paper hover:bg-paper/20 transition"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 grid place-items-center h-11 w-11 md:h-12 md:w-12 rounded-full bg-paper/10 backdrop-blur-md border border-paper/20 text-paper hover:bg-paper/20 transition"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-paper" : "w-1.5 bg-paper/40 hover:bg-paper/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
