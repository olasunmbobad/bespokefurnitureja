import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import heroChair from "@/assets/hero-chair.jpg";
import pieceDining from "@/assets/piece-dining.jpg";
import pieceSideboard from "@/assets/piece-sideboard.jpg";
import pieceArmchair from "@/assets/piece-armchair.jpg";
import craftHands from "@/assets/craft-hands.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BESPOKEFURNITURE9ja — Heirloom Furniture, Crafted in Lagos" },
      { name: "description", content: "Hand-carved Iroko and Mahogany furniture from a Lagos studio. Bespoke pieces designed to last generations." },
      { property: "og:title", content: "BESPOKEFURNITURE9ja — Crafted Slowly in Lagos" },
      { property: "og:description", content: "Heirloom furniture made by master craftsmen in Lagos, Nigeria." },
    ],
  }),
  component: HomePage,
});

const featured = [
  { name: "Omo Dining", material: "Smoked Mahogany", img: pieceDining, no: "01" },
  { name: "Eko Sideboard", material: "Walnut & Brass", img: pieceSideboard, no: "02" },
  { name: "Zaria Lounge", material: "Hand-planed Iroko", img: pieceArmchair, no: "03" },
];

function HomePage() {
  return (
    <div className="bg-paper text-forest">
      <SiteNav />

      {/* Hero */}
      <section className="relative px-6 md:px-10 pt-12 md:pt-20 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 md:gap-8 items-end">
          <div className="col-span-12 lg:col-span-7 animate-reveal-up">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-6">Lagos · Est. by hand</p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-[9rem] xl:text-[10rem] leading-[0.85] text-balance mb-10">
              Crafted <br />
              <span className="italic text-sage">Slowly</span> in Lagos.
            </h1>
            <p className="max-w-md text-base md:text-lg text-forest/80 leading-relaxed font-light">
              We honor the grain of Nigerian Iroko and Mahogany. Each piece is a quiet conversation between ancient joinery and modern silence.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 animate-scale-reveal">
            <img
              src={heroChair}
              alt="Hand-carved iroko lounge chair in a sunlit Lagos courtyard"
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-cover rounded-sm"
            />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-forest/40">
              The Ikoyi Collection · Vol. 04
            </p>
          </div>
        </div>
      </section>

      {/* Current Works */}
      <section className="bg-forest text-paper py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 md:mb-20">
            <h2 className="font-display text-4xl md:text-5xl">Current Works</h2>
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">Vol. 04 / 2024</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {featured.map((p, i) => (
              <article key={p.name} className={i === 1 ? "md:pt-16" : ""}>
                <div className="aspect-[3/4] overflow-hidden rounded-sm bg-paper/5 mb-6">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={768}
                    height={1024}
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-display text-2xl mb-1">{p.name}</h3>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-leaf/70">{p.material}</p>
                  </div>
                  <span className="font-mono text-[10px] border border-paper/20 px-2 py-1">{p.no}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              to="/collections"
              className="inline-flex items-center gap-3 border-b border-paper/30 pb-1 text-[11px] uppercase tracking-widest hover:border-paper transition-colors"
            >
              View full catalog <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="py-24 md:py-32 px-6 md:px-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <img
              src={craftHands}
              alt="A craftsman planing iroko timber by hand"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-cover rounded-sm"
            />
          </div>
          <div className="lg:col-span-7 lg:pt-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-6">Our Story</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] mb-8 text-balance">
              A Lagos workshop. A patient practice.
            </h2>
            <div className="space-y-5 text-forest/80 leading-relaxed max-w-xl">
              <p>
                BespokeFurniture9ja began in a small workshop off Admiralty Way, born from a quiet refusal — that the speed of mass production had forgotten what wood remembers.
              </p>
              <p>
                We work with timber sourced from sustainable lots in Nigeria's southern rain belts, selecting each board for grain memory and structural integrity. Pieces take weeks, sometimes months. They are meant to take longer than that.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md">
              <Stat value="12+" label="Years of practice" />
              <Stat value="200" label="Pieces commissioned" />
              <Stat value="100%" label="Hand finished" />
            </div>
          </div>
        </div>
      </section>

      {/* Process teaser */}
      <section className="bg-moss/5 border-y border-forest/10 py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-6">The Bespoke Path</p>
          <h2 className="font-display text-4xl md:text-6xl mb-8 text-balance leading-[1]">
            From soil to sanctuary, in three movements.
          </h2>
          <p className="text-forest/70 max-w-xl mx-auto mb-12 leading-relaxed">
            A careful sequence — selection, blueprinting, build. We invite you to witness the making.
          </p>
          <Link
            to="/bespoke"
            className="inline-flex items-center gap-3 bg-forest text-paper px-7 py-3.5 rounded-full text-[11px] uppercase tracking-widest hover:bg-forest/90 transition-colors"
          >
            See the process <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <figure className="max-w-4xl mx-auto text-center">
          <blockquote className="font-display italic text-3xl md:text-5xl text-forest/80 leading-tight text-balance">
            "The weight of the iroko table changed the entire energy of our living space. Truly heirloom quality."
          </blockquote>
          <figcaption className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-sage">
            — Tunde A., Victoria Island
          </figcaption>
        </figure>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-forest">{value}</p>
      <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-forest/50">{label}</p>
    </div>
  );
}
