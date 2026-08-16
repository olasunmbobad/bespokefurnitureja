import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import dining1 from "@/assets/dining-1.png";
import dining2 from "@/assets/dining-2.png";
import dining3 from "@/assets/dining-3.png";
import dining4 from "@/assets/dining-4.png";
import dining5 from "@/assets/dining-5.png";
import dining6 from "@/assets/dining-6.png";
import dining8 from "@/assets/dining-8.png";
import sofaSetBestseller from "@/assets/sofa-set-bestseller.jpg";
import diningSetBestseller from "@/assets/dining-set-bestseller.jpg";
import pieceSideboard from "@/assets/piece-sideboard.jpg";
import bedroomEmeraldSuite from "@/assets/bedroom-emerald-suite.png.asset.json";
import bedroomMinimalPanelSuite from "@/assets/bedroom-minimal-panel-suite.png.asset.json";
import bedroomLuxeDarkPanelSuite from "@/assets/bedroom-luxe-dark-panel-suite.png.asset.json";
import sofaIvoryCurvedLoungeSet from "@/assets/sofa-ivory-curved-lounge-set.png.asset.json";
import tvConsoleBookmatchedFireplaceWall from "@/assets/tv-console-bookmatched-fireplace-wall.png.asset.json";
import tvConsoleDisplayFeatureWall from "@/assets/tv-console-display-feature-wall.png.asset.json";
import tvConsoleFlutedOakWall from "@/assets/tv-console-fluted-oak-wall.png.asset.json";
import tvConsoleMarbleTopOval from "@/assets/tv-console-marble-top-oval.png.asset.json";
import tvConsoleRoundedOakCredenza from "@/assets/tv-console-rounded-oak-credenza.png.asset.json";
import tvConsoleStoneFireplaceWall from "@/assets/tv-console-stone-fireplace-wall.png.asset.json";
import bedCharcoalBouclePlatform from "@/assets/bed-charcoal-boucle-platform.png.asset.json";
import bedGreyTuftedPanel from "@/assets/bed-grey-tufted-panel.png.asset.json";
import bedIvoryBoucleSleigh from "@/assets/bed-ivory-boucle-sleigh.png.asset.json";

export const CONSULTATION_FORM_URL = "https://forms.gle/WC1ThJ3Y6sEM6iJu9";

export type Piece = {
  slug: string;
  name: string;
  category: string;
  price: number;
  material: string;
  dim: string;
  images: string[];
};

export function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const raw: Omit<Piece, "slug">[] = [
  { name: "Sofa Set", category: "Sofa", price: 2100000, material: "Cream Bouclé over a seasoned hardwood frame, tailored in our Lagos workshop.", dim: "3+2+1 seater · Custom", images: [sofaSetBestseller, gallery1, gallery5] },
  { name: "TV Console", category: "TV Console", price: 1800000, material: "Hand-planed Iroko with soft-close joinery and a low, grounded profile.", dim: "Custom widths", images: [pieceSideboard, tvConsoleRoundedOakCredenza.url, tvConsoleMarbleTopOval.url] },
  { name: "Dining Set", category: "Dining", price: 2800000, material: "Smoked Mahogany table with upholstered seating, built to order.", dim: "Seats 6–8 · Custom", images: [diningSetBestseller, dining4, dining1] },
  { name: "Bouclé Sectional Sofa", category: "Sofa", price: 1800000, material: "Cream Bouclé · Hardwood Frame", dim: "Custom configurations", images: [gallery1] },
  { name: "Cloud Curve Sofa", category: "Sofa", price: 2200000, material: "Charcoal Linen · Sculpted Form", dim: "260 × 100 × 85 cm", images: [gallery2] },
  { name: "Signature Line Sofa Set", category: "Sofa", price: 2500000, material: "Hand-printed Bouclé", dim: "Set of 3 · Custom", images: [gallery3] },
  { name: "Velvet Sculptural Suite", category: "Sofa", price: 2400000, material: "Mocha Velvet · Plinth Base", dim: "Modular suite", images: [gallery4] },
  { name: "Monochrome Living Set", category: "Sofa", price: 2100000, material: "Cream Linen · Piped Detail", dim: "3+2+1 seater", images: [gallery5] },
  { name: "Ivory Curved Lounge Set", category: "Sofa", price: 2300000, material: "Textured Ivory Upholstery · Sculpted Accent Chairs", dim: "3 seater + 2 lounge chairs", images: [sofaIvoryCurvedLoungeSet.url] },
  { name: "Onyx Marble Dining Table", category: "Dining", price: 3000000, material: "Walnut Base · Bouclé Armchairs", dim: "Seats 8 · 240 × 110 cm", images: [dining1] },
  { name: "Arched Oval Dining Set", category: "Dining", price: 2800000, material: "Pearl Marble · Sculpted Bouclé", dim: "Seats 6 · 220 × 100 cm", images: [dining2] },
  { name: "Carrara Curve Dining", category: "Dining", price: 2600000, material: "Carrara Marble · Grey Bouclé", dim: "Seats 6 · 200 × 100 cm", images: [dining3] },
  { name: "Walnut Heritage Dining", category: "Dining", price: 2500000, material: "Solid Walnut · Woven Linen", dim: "Seats 6 · 220 × 100 cm", images: [dining4] },
  { name: "Calacatta Console Dining", category: "Dining", price: 2700000, material: "Calacatta Top · Walnut Frame", dim: "Seats 6 · 200 × 95 cm", images: [dining5] },
  { name: "Cane-Back Dining Set", category: "Dining", price: 2200000, material: "Marble Top · Rattan Detail", dim: "Seats 6 · 180 × 95 cm", images: [dining6] },
  { name: "Fluted Pedestal Dining", category: "Dining", price: 2900000, material: "Marble Oval · Fluted Base", dim: "Seats 6 · 200 × 100 cm", images: [dining8] },
  { name: "Fluted Oak Media Wall", category: "TV Console", price: 2000000, material: "Oak Veneer · Ribbed Base Console", dim: "Wall unit · Custom", images: [tvConsoleFlutedOakWall.url] },
  { name: "Stone Fireplace Media Wall", category: "TV Console", price: 2500000, material: "Bookmatched Stone · Built-in Fireplace", dim: "Wall unit · Custom", images: [tvConsoleStoneFireplaceWall.url] },
  { name: "Marble Top Oval Console", category: "TV Console", price: 1600000, material: "Fluted Base · Marble Top", dim: "Low console · Custom", images: [tvConsoleMarbleTopOval.url] },
  { name: "Rounded Oak Credenza", category: "TV Console", price: 1200000, material: "Oak Finish · Soft Radius Ends", dim: "4-door console", images: [tvConsoleRoundedOakCredenza.url] },
  { name: "Bookmatched Fireplace Wall", category: "TV Console", price: 2400000, material: "Stone Slab · Glass Display Towers", dim: "Feature wall · Custom", images: [tvConsoleBookmatchedFireplaceWall.url] },
  { name: "Display Feature TV Wall", category: "TV Console", price: 2200000, material: "Curved Shelving · Marble Base", dim: "Feature wall · Custom", images: [tvConsoleDisplayFeatureWall.url] },
  { name: "Emerald Panel Bedroom", category: "Bedroom", price: 1500000, material: "Upholstered Headboard · Walnut Detail", dim: "Full bedroom set", images: [bedroomEmeraldSuite.url] },
  { name: "Minimal Panel Bedroom", category: "Bedroom", price: 1200000, material: "Floating Bed Base · Gloss Wardrobe", dim: "Bedroom suite", images: [bedroomMinimalPanelSuite.url] },
  { name: "Luxe Dark Panel Bedroom", category: "Bedroom", price: 1400000, material: "Integrated Lighting · Wood Panel Finish", dim: "Full bedroom set", images: [bedroomLuxeDarkPanelSuite.url] },
  { name: "Charcoal Bouclé Bed Frame", category: "Bedroom", price: 950000, material: "Channel-tufted charcoal bouclé over a solid hardwood frame, with a low platform base and softly rounded footboard. Built for a grounded, hotel-suite calm.", dim: "King · Custom sizes", images: [bedCharcoalBouclePlatform.url] },
  { name: "Grey Tufted Panel Bed Frame", category: "Bedroom", price: 850000, material: "A tall diamond-tufted headboard in dove grey upholstery, hand-stitched onto a seasoned hardwood carcass. Classic proportions with a quiet, modern finish.", dim: "King · Custom sizes", images: [bedGreyTuftedPanel.url] },
  { name: "Ivory Bouclé Sleigh Bed Frame", category: "Bedroom", price: 1100000, material: "Curved ivory bouclé wraps a sculpted sleigh silhouette built on kiln-dried hardwood. Generous scroll ends give the frame its soft, enveloping shape.", dim: "King · Custom sizes", images: [bedIvoryBoucleSleigh.url] },
];

export const pieces: Piece[] = raw.map((p) => ({ ...p, slug: slugify(p.name) }));

export function getPiece(slug: string) {
  return pieces.find((p) => p.slug === slug);
}

export function formatPrice(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}
