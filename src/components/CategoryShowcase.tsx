import { Link } from "@tanstack/react-router";
import { Utensils, Armchair, Tv, BedDouble, LayoutGrid } from "lucide-react";

const categories = [
  { name: "All", icon: LayoutGrid },
  { name: "Sofa", icon: Armchair },
  { name: "Dining", icon: Utensils },
  { name: "TV Console", icon: Tv },
  { name: "Bedroom", icon: BedDouble },
];

export function CategoryShowcase() {
  return (
    <section className="bg-paper border-y border-forest/10 py-10 md:py-14 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-5 gap-4 md:gap-8">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.name}
                to="/collections"
                search={{ category: c.name === "All" ? undefined : c.name }}
                className="group flex flex-col items-center gap-3 md:gap-4 text-center"
              >
                <div className="grid place-items-center w-14 h-14 md:w-20 md:h-20 rounded-full border border-forest/15 bg-moss/5 text-forest group-hover:bg-forest group-hover:text-paper group-hover:border-forest transition-colors duration-300">
                  <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-widest text-forest/80 group-hover:text-forest transition-colors">
                  {c.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
