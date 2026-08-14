import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-forest/5">
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <Link to="/" className="font-display text-xl md:text-2xl tracking-tight uppercase text-forest">
          Bespoke<span className="text-sage">Furniture9ja</span>
        </Link>
        <div className="hidden md:flex gap-10 text-[18px] font-semibold uppercase tracking-[0.2em] text-forest/70">
          <Link to="/collections" search={{ category: undefined }} className="hover:text-forest transition-colors" activeProps={{ className: "text-forest" }}>Collections</Link>
          <Link to="/bespoke" className="hover:text-forest transition-colors" activeProps={{ className: "text-forest" }}>The Process</Link>
          <Link to="/" hash="story" className="hover:text-forest transition-colors">Our Story</Link>
          <Link to="/contact" className="hover:text-forest transition-colors" activeProps={{ className: "text-forest" }}>Contact</Link>
        </div>
        <Link
          to="/contact"
          className="px-5 py-2 border border-forest/20 rounded-full text-[10px] uppercase tracking-widest hover:bg-forest hover:text-paper transition-colors"
        >
          Inquiry
        </Link>
      </div>
      <div className="flex md:hidden overflow-x-auto gap-6 px-6 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Link to="/collections" search={{ category: undefined }} className="shrink-0 text-[16px] font-semibold uppercase tracking-[0.2em] text-forest/70 hover:text-forest transition-colors" activeProps={{ className: "text-forest" }}>Collections</Link>
        <Link to="/bespoke" className="shrink-0 text-[16px] font-semibold uppercase tracking-[0.2em] text-forest/70 hover:text-forest transition-colors" activeProps={{ className: "text-forest" }}>The Process</Link>
        <Link to="/" hash="story" className="shrink-0 text-[16px] font-semibold uppercase tracking-[0.2em] text-forest/70 hover:text-forest transition-colors">Our Story</Link>
        <Link to="/contact" className="shrink-0 text-[16px] font-semibold uppercase tracking-[0.2em] text-forest/70 hover:text-forest transition-colors" activeProps={{ className: "text-forest" }}>Contact</Link>
      </div>
    </nav>
  );
}
