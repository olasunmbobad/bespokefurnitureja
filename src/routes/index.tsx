import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroCarousel } from "@/components/HeroCarousel";
import heroChair from "@/assets/brand-logo.png";
import pieceDining from "@/assets/piece-dining.jpg";
import pieceSideboard from "@/assets/piece-sideboard.jpg";
import pieceArmchair from "@/assets/piece-armchair.jpg";
import craftHands from "@/assets/craft-hands.jpg";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import sofaSetBestseller from "@/assets/sofa-set-bestseller.jpg";
import diningSetBestseller from "@/assets/dining-set-bestseller.jpg";

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
  { name: "Sofa Set", material: "Cream Bouclé · Hardwood Frame", img: sofaSetBestseller, no: "01" },
  { name: "TV Console", material: "Hand-planed Iroko", img: pieceSideboard, no: "02" },
  { name: "Dining Set", material: "Smoked Mahogany", img: diningSetBestseller, no: "03" },
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
              alt="BespokeFurniture9ja brand logo"
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-contain rounded-sm bg-paper"
            />
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-forest text-paper py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 md:mb-20">
            <h2 className="font-display text-4xl md:text-5xl">Best selling</h2>
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
              src={ceoPortrait}
              alt="Badmus Soliu Olasubomi — Founder & CEO of BespokeFurniture9ja"
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
                BespokeFurniture9ja was founded by Badmus Soliu Olasubomi — an award-winning furniture brand built on a single promise: premium quality at an affordable price. Our greenhouse showroom in Yaba has become a Lagos landmark.
              </p>
              <p>
                We work with timber sourced from sustainable lots in Nigeria's southern rain belts, selecting each board for grain memory and structural integrity. Every piece is built to order in our factory and delivered nationwide.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md">
              <Stat value="89.5K" label="Instagram family" />
              <Stat value="1,700+" label="Pieces shared" />
              <Stat value="36" label="States delivered" />
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
            — Client, Lagos · via @bespokefurniture9ja
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
