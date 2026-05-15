import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import craftHands from "@/assets/craft-hands.jpg";
import craftMood from "@/assets/craft-mood.jpg";

export const Route = createFileRoute("/bespoke")({
  head: () => ({
    meta: [
      { title: "The Bespoke Process — BESPOKEFURNITURE9ja" },
      { name: "description", content: "Our four-stage commission process: consultation, blueprinting, master craft, and delivery — from our Lagos workshop to your home." },
      { property: "og:title", content: "The Bespoke Process — BespokeFurniture9ja" },
      { property: "og:description", content: "From soil to sanctuary. A patient four-stage path to your custom heirloom piece." },
    ],
  }),
  component: BespokePage,
});

const steps = [
  { n: "01", title: "Consultation", body: "Visit our Yaba showroom or book a virtual session to discuss space, utility, and timber selection. We listen first." },
  { n: "02", title: "Blueprinting", body: "Collaborative sketching and digital models. We refine proportion, joinery, and finish — premium quality at an affordable price." },
  { n: "03", title: "Master Craft", body: "Weeks of dedicated work in our Lagos factory. We document each milestone and share progress directly via WhatsApp." },
  { n: "04", title: "Nationwide Delivery", body: "White-glove delivery anywhere in Nigeria. We install, finish, and leave the space ready to live in." },
];

function BespokePage() {
  return (
    <div className="bg-paper text-forest">
      <SiteNav />

      <section className="px-6 md:px-10 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-6">The Bespoke Path</p>
            <h1 className="font-display text-5xl md:text-8xl lg:text-[8rem] leading-[0.9] text-balance">
              Made for the way you actually live.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <p className="text-forest/75 leading-relaxed max-w-md">
              A bespoke commission is a quiet collaboration. You bring the space and the intention; we bring the timber, the time, and the trained hands.
            </p>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="bg-forest text-paper py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-20 md:space-y-28">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`grid grid-cols-12 gap-6 md:gap-12 items-start ${i % 2 === 1 ? "md:pl-32" : ""}`}
              >
                <div className="col-span-12 md:col-span-3">
                  <span className="font-display text-6xl md:text-7xl text-leaf/70">{s.n}</span>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-display text-3xl md:text-4xl mb-4">{s.title}</h3>
                  <p className="text-paper/75 leading-relaxed max-w-lg">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <img
              src={craftMood}
              alt="Wood, fabric, and brass material samples"
              loading="lazy"
              width={1024}
              height={768}
              className="w-full aspect-[4/3] object-cover rounded-sm"
            />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-6">Materials</p>
            <h2 className="font-display text-4xl md:text-5xl mb-8 text-balance leading-[1]">
              Timber chosen for its quiet weight.
            </h2>
            <ul className="divide-y divide-forest/10">
              {[
                ["Iroko", "Hand-planed, oiled. Dense and weather-stable."],
                ["Mahogany", "Smoked or natural. Deep grain, sculptural."],
                ["Walnut", "Imported select. Used for inlay and cabinetry."],
                ["Brass", "Cast in Lagos. Hardware and joinery accents."],
              ].map(([name, desc]) => (
                <li key={name} className="py-5 flex items-baseline gap-6">
                  <span className="font-display text-2xl text-forest min-w-[7rem]">{name}</span>
                  <span className="text-forest/70 text-sm">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto bg-moss/5 border border-forest/10 rounded-sm p-10 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-balance leading-[1]">
              Ready to begin a commission?
            </h2>
            <p className="text-forest/70 max-w-md leading-relaxed mb-8">
              Tell us about the space, the use, and the feeling you want it to carry. We'll respond within two business days.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="bg-forest text-paper px-7 py-3.5 rounded-full text-[11px] uppercase tracking-widest hover:bg-moss transition-colors">
                Begin a project
              </Link>
              <a href="https://wa.me/2347083413055" className="border border-forest/20 px-7 py-3.5 rounded-full text-[11px] uppercase tracking-widest hover:bg-forest hover:text-paper transition-colors">
                WhatsApp us
              </a>
            </div>
          </div>
          <div>
            <img
              src={craftHands}
              alt="Hands at work in the Lagos workshop"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-cover rounded-sm"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
