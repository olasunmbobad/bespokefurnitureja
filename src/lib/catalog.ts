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
import diningOvalCreamSet from "@/assets/dining-oval-cream-set.png.asset.json";
import sofaSetBestseller from "@/assets/sofa-set-bestseller.jpg";
import diningSetBestseller from "@/assets/dining-set-bestseller.jpg";
import bedroomEmeraldSuite from "@/assets/bedroom-emerald-suite.png.asset.json";
import bedroomMinimalPanelSuite from "@/assets/bedroom-minimal-panel-suite.png.asset.json";
import bedroomLuxeDarkPanelSuite from "@/assets/bedroom-luxe-dark-panel-suite.png.asset.json";
import sofaIvoryCurvedLoungeSet from "@/assets/sofa-ivory-curved-lounge-set.png.asset.json";
import bedCharcoalBouclePlatform from "@/assets/bed-charcoal-boucle-platform.png.asset.json";
import bedGreyTuftedPanel from "@/assets/bed-grey-tufted-panel.png.asset.json";
import bedIvoryBoucleSleigh from "@/assets/bed-ivory-boucle-sleigh.png.asset.json";
import tvFlutedOakWall from "@/assets/tv-console-fluted-oak-wall.png.asset.json";
import tvRoundedOakCredenza from "@/assets/tv-console-rounded-oak-credenza.png.asset.json";
import tvMarbleTopOval from "@/assets/tv-console-marble-top-oval.png.asset.json";
import tvBookmatchedFireplaceWall from "@/assets/tv-console-bookmatched-fireplace-wall.png.asset.json";
import tvStoneFireplaceWall from "@/assets/tv-console-stone-fireplace-wall.png.asset.json";
import tvDisplayFeatureWall from "@/assets/tv-console-display-feature-wall.png.asset.json";
import tvMarbleWoodMediaWall from "@/assets/tv-console-marble-wood-media-wall.png.asset.json";
import sofaGreyBoucleLoungeSet from "@/assets/sofa-grey-boucle-lounge-set.png.asset.json";
import sofaGreyTuftedModular from "@/assets/sofa-grey-tufted-modular-sectional.png.asset.json";
import sofaIvoryCrescent from "@/assets/sofa-ivory-curved-crescent-sectional.png.asset.json";
import sofaHoneySerpentine from "@/assets/sofa-honey-curved-serpentine.png.asset.json";
import sofaTealVelvetSet from "@/assets/sofa-teal-velvet-tufted-set.png.asset.json";
import sofaPearlCorner from "@/assets/sofa-pearl-corner-sectional.png.asset.json";
import sofaCharcoalModular from "@/assets/sofa-charcoal-modular-lounger.png.asset.json";
import sofaIvoryChannelTufted from "@/assets/ivory-channel-tufted-sectional.png.asset.json";
import sofaDoveGreyModular from "@/assets/dove-grey-modular-sectional.png.asset.json";
import sofaCharcoalModularAlt from "@/assets/charcoal-modular-lounger-alt.png.asset.json";
import bedCharcoalBoucleAlt from "@/assets/charcoal-boucle-bed-frame-alt.png.asset.json";
import sofaSandTuftedCorner from "@/assets/sofa-sand-tufted-corner-sectional.png.asset.json";
import sofaIvoryCurvedSuite from "@/assets/sofa-ivory-curved-sectional-suite.png.asset.json";
import sofaGraphiteLounge from "@/assets/sofa-graphite-lounge-modular.png.asset.json";
import sofaSilverPiped from "@/assets/sofa-silver-piped-sofa-set.png.asset.json";
import sofaSlateChenille from "@/assets/sofa-slate-chenille-corner-sectional.png.asset.json";
import diningWalnutPedestal from "@/assets/dining-walnut-pedestal-set.png.asset.json";
import sofaGreenVelvetModular from "@/assets/sofa-green-velvet-modular-sectional.png.asset.json";
import sofaAssign54 from "@/assets/sofa-assign-54.png.asset.json";
import sofaAssign55 from "@/assets/sofa-assign-55.png.asset.json";
import sofaAssign56 from "@/assets/sofa-assign-56.png.asset.json";
import sofaAssign57 from "@/assets/sofa-assign-57.png.asset.json";
import sofaAssign58 from "@/assets/sofa-assign-58.png.asset.json";
import sofaAssign59 from "@/assets/sofa-assign-59.png.asset.json";
import sofaAssign60 from "@/assets/sofa-assign-60.png.asset.json";
import sofaAssign61 from "@/assets/sofa-assign-61.png.asset.json";
import sofaAssign62 from "@/assets/sofa-assign-62.png.asset.json";

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
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}


const raw: Omit<Piece, "slug">[] = [
  { name: "Sofa Set", category: "Sofa", price: 2100000, material: "Cream Bouclé over a seasoned hardwood frame, tailored in our Lagos workshop.", dim: "3+2+1 seater · Custom", images: [sofaSetBestseller, gallery1] },
  { name: "Dining Set", category: "Dining", price: 2800000, material: "Smoked Mahogany table with upholstered seating, built to order.", dim: "Seats 6–8 · Custom", images: [diningSetBestseller] },
  { name: "Cloud Curve Sofa", category: "Sofa", price: 2200000, material: "Charcoal Linen · Sculpted Form", dim: "260 × 100 × 85 cm", images: [gallery2] },
  { name: "Signature Line Sofa Set", category: "Sofa", price: 2500000, material: "Hand-printed Bouclé", dim: "Set of 3 · Custom", images: [gallery3] },
  { name: "Velvet Sculptural Suite", category: "Sofa", price: 2400000, material: "Mocha Velvet · Plinth Base", dim: "Modular suite", images: [gallery4] },
  { name: "Monochrome Living Set", category: "Sofa", price: 2100000, material: "Cream Linen · Piped Detail", dim: "3+2+1 seater", images: [sofaAssign54.url, sofaAssign55.url, sofaAssign56.url, sofaAssign57.url] },
  { name: "Ivory Curved Lounge Set", category: "Sofa", price: 2300000, material: "Textured Ivory Upholstery · Sculpted Accent Chairs", dim: "3 seater + 2 lounge chairs", images: [sofaIvoryCurvedLoungeSet.url] },
  { name: "Onyx Marble Dining Table", category: "Dining", price: 3000000, material: "Walnut Base · Bouclé Armchairs", dim: "Seats 8 · 240 × 110 cm", images: [dining1] },
  { name: "Arched Oval Dining Set", category: "Dining", price: 2800000, material: "Pearl Marble · Sculpted Bouclé", dim: "Seats 6 · 220 × 100 cm", images: [dining2] },
  { name: "Carrara Curve Dining", category: "Dining", price: 2600000, material: "Carrara Marble · Grey Bouclé", dim: "Seats 6 · 200 × 100 cm", images: [dining3] },
  { name: "Walnut Heritage Dining", category: "Dining", price: 2500000, material: "Solid Walnut · Woven Linen", dim: "Seats 6 · 220 × 100 cm", images: [dining4] },
  { name: "Calacatta Console Dining", category: "Dining", price: 2700000, material: "Calacatta Top · Walnut Frame", dim: "Seats 6 · 200 × 95 cm", images: [dining5] },
  { name: "Cane-Back Dining Set", category: "Dining", price: 2200000, material: "Marble Top · Rattan Detail", dim: "Seats 6 · 180 × 95 cm", images: [dining6] },
  { name: "Fluted Pedestal Dining", category: "Dining", price: 2900000, material: "Marble Oval · Fluted Base", dim: "Seats 6 · 200 × 100 cm", images: [dining8] },
  { name: "Cream Oval Dining Set", category: "Dining", price: 2750000, material: "Cream Lacquer Top · Walnut Legs", dim: "Seats 4 · 160 × 90 cm", images: [diningOvalCreamSet.url] },
  { name: "Fluted Oak Media Wall", category: "TV Console", price: 1850000, material: "Fluted oak panelling with a floating cabinet and concealed cable routing.", dim: "300 × 45 × 220 cm", images: [tvFlutedOakWall.url] },
  { name: "Rounded Oak Credenza", category: "TV Console", price: 1250000, material: "Curved oak carcass with slatted doors and soft-close hardware.", dim: "220 × 45 × 55 cm", images: [tvRoundedOakCredenza.url] },
  { name: "Marble Top Oval Console", category: "TV Console", price: 1450000, material: "Honed marble top over a sculpted lacquer base.", dim: "200 × 45 × 55 cm", images: [tvMarbleTopOval.url] },
  { name: "Bookmatched Fireplace Wall", category: "TV Console", price: 2450000, material: "Bookmatched stone feature wall with integrated fireplace and media niche.", dim: "340 × 40 × 250 cm", images: [tvBookmatchedFireplaceWall.url] },
  { name: "Stone Fireplace Media Wall", category: "TV Console", price: 2250000, material: "Textured stone cladding, warm timber shelving, and hidden storage.", dim: "320 × 40 × 240 cm", images: [tvStoneFireplaceWall.url] },
  { name: "Display Feature Wall Unit", category: "TV Console", price: 1950000, material: "Lit display niches with a low walnut console and glass vitrines.", dim: "300 × 45 × 240 cm", images: [tvDisplayFeatureWall.url] },
  { name: "Marble & Wood Media Wall", category: "TV Console", price: 2650000, material: "Bookmatched marble panelling with warm timber fluting, backlit niches, and a gloss floating console.", dim: "360 × 45 × 260 cm", images: [tvMarbleWoodMediaWall.url] },
  { name: "Grey Bouclé Lounge Set", category: "Sofa", price: 2350000, material: "Plump grey bouclé modules with an integrated timber side tray.", dim: "3 seater + lounge chair", images: [sofaAssign58.url] },
  { name: "Grey Tufted Modular Sectional", category: "Sofa", price: 2450000, material: "Deep-tufted grey velvet modules with a matching oversized ottoman.", dim: "L-shape · Custom", images: [sofaAssign59.url, sofaAssign60.url] },
  { name: "Ivory Crescent Sectional", category: "Sofa", price: 2900000, material: "Curved ivory upholstery wrapping a walnut crescent table.", dim: "Curved · Custom", images: [sofaAssign61.url, sofaAssign62.url] },
  { name: "Honey Serpentine Sofa", category: "Sofa", price: 2200000, material: "Sculpted serpentine form in honey chenille on a hardwood frame.", dim: "320 × 100 × 75 cm", images: [sofaHoneySerpentine.url] },
  { name: "Teal Velvet Tufted Set", category: "Sofa", price: 2050000, material: "Grid-tufted teal velvet with slim tapered legs.", dim: "3+1+1 seater", images: [sofaTealVelvetSet.url] },
  { name: "Pearl Corner Sectional", category: "Sofa", price: 2600000, material: "Pearl linen corner sectional with a built-in timber serving tray.", dim: "L-shape · Custom", images: [sofaPearlCorner.url] },
  { name: "Charcoal Modular Lounger", category: "Sofa", price: 2150000, material: "Low-slung charcoal modules with adjustable headrests and a chaise.", dim: "Modular · Custom", images: [sofaCharcoalModular.url, sofaCharcoalModularAlt.url] },
  { name: "Ivory Channel Tufted Sectional", category: "Sofa", price: 2650000, material: "Channel-tufted ivory bouclé wrapping a generous U-shaped sectional with deep seating and soft cushions.", dim: "U-shape · Custom", images: [sofaIvoryChannelTufted.url] },
  { name: "Dove Grey Modular Sectional", category: "Sofa", price: 2450000, material: "Soft dove grey upholstery with contrast black accent pillows and clean modern lines.", dim: "L-shape · Custom", images: [sofaDoveGreyModular.url] },
  { name: "Sand Tufted Corner Sectional", category: "Sofa", price: 2700000, material: "Grid-tufted sand chenille in a generous corner run, paired with a sculpted marble-top table.", dim: "L-shape · Custom", images: [sofaSandTuftedCorner.url] },
  { name: "Ivory Curved Sectional Suite", category: "Sofa", price: 2850000, material: "Sweeping ivory curved sectional with matching swivel lounge chairs.", dim: "Curved · Custom", images: [sofaIvoryCurvedSuite.url] },
  { name: "Graphite Lounge Modular Set", category: "Sofa", price: 2350000, material: "Low-profile graphite modules with a slim marble side console and chaise end.", dim: "Modular · Custom", images: [sofaGraphiteLounge.url] },
  { name: "Silver Piped Sofa Set", category: "Sofa", price: 2250000, material: "Silver-grey chenille with contrast black piping on blackened timber plinths.", dim: "3+2+1 seater", images: [sofaSilverPiped.url] },
  { name: "Slate Chenille Corner Sectional", category: "Sofa", price: 2550000, material: "Plush slate chenille sectional with a built-in timber serving ledge and deep chaise.", dim: "L-shape · Custom", images: [sofaSlateChenille.url] },
  { name: "Moss Velvet Modular Sectional", category: "Sofa", price: 2600000, material: "Rich moss velvet modular sectional with a matching ottoman and deep, relaxed seating.", dim: "L-shape · Custom", images: [sofaGreenVelvetModular.url] },
  { name: "Walnut Pedestal Dining Set", category: "Dining", price: 2850000, material: "Solid walnut pedestal table with upholstered dining chairs.", dim: "Seats 6 · 200 × 100 cm", images: [diningWalnutPedestal.url] },
  { name: "Emerald Panel Bedroom", category: "Bedroom", price: 1500000, material: "Upholstered Headboard · Walnut Detail", dim: "Full bedroom set", images: [bedroomEmeraldSuite.url] },
  { name: "Minimal Panel Bedroom", category: "Bedroom", price: 1200000, material: "Floating Bed Base · Gloss Wardrobe", dim: "Bedroom suite", images: [bedroomMinimalPanelSuite.url] },
  { name: "Luxe Dark Panel Bedroom", category: "Bedroom", price: 1400000, material: "Integrated Lighting · Wood Panel Finish", dim: "Full bedroom set", images: [bedroomLuxeDarkPanelSuite.url] },
  { name: "Charcoal Bouclé Bed Frame", category: "Bedroom", price: 950000, material: "Channel-tufted charcoal bouclé over a solid hardwood frame, with a low platform base and softly rounded footboard. Built for a grounded, hotel-suite calm.", dim: "King · Custom sizes", images: [bedCharcoalBouclePlatform.url, bedCharcoalBoucleAlt.url] },
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
