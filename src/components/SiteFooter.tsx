import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-paper border-t border-forest/10 pt-24 pb-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-20">
          <div>
            <h2 className="font-display text-5xl md:text-6xl mb-8 text-balance leading-[0.95]">
              Bring the forest home.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-forest text-paper px-7 py-3.5 rounded-full text-[11px] uppercase tracking-widest hover:bg-moss transition-colors"
            >
              Begin a Commission
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="space-y-4 font-mono text-sm text-forest/80">
            <p>
              <a href="https://wa.me/2347083413055" className="hover:text-forest underline decoration-sage underline-offset-4">+234 708 341 3055</a>
              <span className="ml-3 text-sage text-[10px] uppercase tracking-widest">WhatsApp</span>
            </p>
            <p>Showroom · Yaba, Lagos · Nigeria</p>
            <p><a href="https://instagram.com/bespokefurniture9ja" target="_blank" rel="noopener" className="hover:text-forest">@bespokefurniture9ja</a></p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-10 border-t border-forest/10 font-mono text-[10px] uppercase tracking-widest text-forest/50">
          <span>© {new Date().getFullYear()} BespokeFurniture9ja</span>
          <div className="flex gap-6">
            <Link to="/collections" search={{ category: undefined }} className="hover:text-forest">Collections</Link>
            <Link to="/bespoke" className="hover:text-forest">Process</Link>
            <Link to="/contact" className="hover:text-forest">Contact</Link>
          </div>
          <span>Sustainable Handcraft</span>
        </div>
      </div>
    </footer>
  );
}
