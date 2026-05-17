import { Link } from "@tanstack/react-router";

const links = [
  { to: "/collections", label: "Collections" },
  { to: "/bespoke", label: "The Process" },
  { to: "/", label: "Our Story", hash: "story" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-paper/80 backdrop-blur-md border-b border-forest/5">
      <Link to="/" className="font-display text-xl md:text-2xl tracking-tight uppercase text-forest">
        Bespoke<span className="text-sage">Furniture9ja</span>
      </Link>
      <div className="hidden md:flex gap-10 text-[11px] font-medium uppercase tracking-[0.2em] text-forest/70">
        <Link to="/collections" className="hover:text-forest transition-colors" activeProps={{ className: "text-forest" }}>Collections</Link>
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
    </nav>
  );
}
