const gallery1 = "/images/gallery-1.jpg";
const gallery2 = "/images/gallery-2.jpg";
const gallery3 = "/images/gallery-3.jpg";
const gallery4 = "/images/gallery-4.jpg";
const dining1 = "/images/dining-1.jpg";
const dining2 = "/images/dining-2.jpg";
const dining3 = "/images/dining-3.jpg";
const dining4 = "/images/dining-4.jpg";
const dining5 = "/images/dining-5.jpg";
const dining6 = "/images/dining-6.jpg";
const dining8 = "/images/dining-8.jpg";
const diningOvalCreamSet = "/images/dining-oval-cream-set.jpg";
const sofaSetBestseller = "/images/sofa-set-bestseller.jpg";
const diningSetBestseller = "/images/dining-set-bestseller.jpg";
const bedroomEmeraldSuite = "/images/bedroom-emerald-suite.jpg";
const bedroomMinimalPanelSuite = "/images/bedroom-minimal-panel-suite.jpg";
const bedroomLuxeDarkPanelSuite = "/images/bedroom-luxe-dark-panel-suite.jpg";
const sofaIvoryCurvedLoungeSet = "/images/sofa-ivory-curved-lounge-set.jpg";
const bedCharcoalBouclePlatform = "/images/bed-charcoal-boucle-platform.jpg";
const bedGreyTuftedPanel = "/images/bed-grey-tufted-panel.jpg";
const bedIvoryBoucleSleigh = "/images/bed-ivory-boucle-sleigh.jpg";
const tvFlutedOakWall = "/images/tv-console-fluted-oak-wall.jpg";
const tvRoundedOakCredenza = "/images/tv-console-rounded-oak-credenza.jpg";
const tvMarbleTopOval = "/images/tv-console-marble-top-oval.jpg";
const tvBookmatchedFireplaceWall = "/images/tv-console-bookmatched-fireplace-wall.jpg";
const tvStoneFireplaceWall = "/images/tv-console-stone-fireplace-wall.jpg";
const tvDisplayFeatureWall = "/images/tv-console-display-feature-wall.jpg";
const tvMarbleWoodMediaWall = "/images/tv-console-marble-wood-media-wall.jpg";
const sofaHoneySerpentine = "/images/sofa-honey-curved-serpentine.jpg";
const sofaTealVelvetSet = "/images/sofa-teal-velvet-tufted-set.jpg";
const sofaPearlCorner = "/images/sofa-pearl-corner-sectional.jpg";
const sofaCharcoalModular = "/images/sofa-charcoal-modular-lounger.jpg";
const sofaIvoryChannelTufted = "/images/ivory-channel-tufted-sectional.jpg";
const sofaDoveGreyModular = "/images/dove-grey-modular-sectional.jpg";
const sofaCharcoalModularAlt = "/images/charcoal-modular-lounger-alt.jpg";
const bedCharcoalBoucleAlt = "/images/charcoal-boucle-bed-frame-alt.jpg";
const sofaSandTuftedCorner = "/images/sofa-sand-tufted-corner-sectional.jpg";
const sofaIvoryCurvedSuite = "/images/sofa-ivory-curved-sectional-suite.jpg";
const sofaGraphiteLounge = "/images/sofa-graphite-lounge-modular.jpg";
const sofaSilverPiped = "/images/sofa-silver-piped-sofa-set.jpg";
const sofaSlateChenille = "/images/sofa-slate-chenille-corner-sectional.jpg";
const diningWalnutPedestal = "/images/dining-walnut-pedestal-set.jpg";
const sofaGreenVelvetModular = "/images/sofa-green-velvet-modular-sectional.jpg";
const sofaAssign54 = "/images/sofa-assign-54.jpg";
const sofaAssign55 = "/images/sofa-assign-55.jpg";
const sofaAssign56 = "/images/sofa-assign-56.jpg";
const sofaAssign57 = "/images/sofa-assign-57.jpg";
const sofaAssign58 = "/images/sofa-assign-58.jpg";
const sofaAssign59 = "/images/sofa-assign-59.jpg";
const sofaAssign60 = "/images/sofa-assign-60.jpg";
const sofaAssign61 = "/images/sofa-assign-61.jpg";
const sofaAssign62 = "/images/sofa-assign-62.jpg";

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
  { name: "Monochrome Living Set", category: "Sofa", price: 2100000, material: "Cream Linen · Piped Detail", dim: "3+2+1 seater", images: [sofaAssign54, sofaAssign55, sofaAssign56, sofaAssign57] },
  { name: "Ivory Curved Lounge Set", category: "Sofa", price: 2300000, material: "Textured Ivory Upholstery · Sculpted Accent Chairs", dim: "3 seater + 2 lounge chairs", images: [sofaIvoryCurvedLoungeSet] },
  { name: "Onyx Marble Dining Table", category: "Dining", price: 3000000, material: "Walnut Base · Bouclé Armchairs", dim: "Seats 8 · 240 × 110 cm", images: [dining1] },
  { name: "Arched Oval Dining Set", category: "Dining", price: 2800000, material: "Pearl Marble · Sculpted Bouclé", dim: "Seats 6 · 220 × 100 cm", images: [dining2] },
  { name: "Carrara Curve Dining", category: "Dining", price: 2600000, material: "Carrara Marble · Grey Bouclé", dim: "Seats 6 · 200 × 100 cm", images: [dining3] },
  { name: "Walnut Heritage Dining", category: "Dining", price: 2500000, material: "Solid Walnut · Woven Linen", dim: "Seats 6 · 220 × 100 cm", images: [dining4] },
  { name: "Calacatta Console Dining", category: "Dining", price: 2700000, material: "Calacatta Top · Walnut Frame", dim: "Seats 6 · 200 × 95 cm", images: [dining5] },
  { name: "Cane-Back Dining Set", category: "Dining", price: 2200000, material: "Marble Top · Rattan Detail", dim: "Seats 6 · 180 × 95 cm", images: [dining6] },
  { name: "Fluted Pedestal Dining", category: "Dining", price: 2900000, material: "Marble Oval · Fluted Base", dim: "Seats 6 · 200 × 100 cm", images: [dining8] },
  { name: "Cream Oval Dining Set", category: "Dining", price: 2750000, material: "Cream Lacquer Top · Walnut Legs", dim: "Seats 4 · 160 × 90 cm", images: [diningOvalCreamSet] },
  { name: "Fluted Oak Media Wall", category: "TV Console", price: 1850000, material: "Fluted oak panelling with a floating cabinet and concealed cable routing.", dim: "300 × 45 × 220 cm", images: [tvFlutedOakWall] },
  { name: "Rounded Oak Credenza", category: "TV Console", price: 1250000, material: "Curved oak carcass with slatted doors and soft-close hardware.", dim: "220 × 45 × 55 cm", images: [tvRoundedOakCredenza] },
  { name: "Marble Top Oval Console", category: "TV Console", price: 1450000, material: "Honed marble top over a sculpted lacquer base.", dim: "200 × 45 × 55 cm", images: [tvMarbleTopOval] },
  { name: "Bookmatched Fireplace Wall", category: "TV Console", price: 2450000, material: "Bookmatched stone feature wall with integrated fireplace and media niche.", dim: "340 × 40 × 250 cm", images: [tvBookmatchedFireplaceWall] },
  { name: "Stone Fireplace Media Wall", category: "TV Console", price: 2250000, material: "Textured stone cladding, warm timber shelving, and hidden storage.", dim: "320 × 40 × 240 cm", images: [tvStoneFireplaceWall] },
  { name: "Display Feature Wall Unit", category: "TV Console", price: 1950000, material: "Lit display niches with a low walnut console and glass vitrines.", dim: "300 × 45 × 240 cm", images: [tvDisplayFeatureWall] },
  { name: "Marble & Wood Media Wall", category: "TV Console", price: 2650000, material: "Bookmatched marble panelling with warm timber fluting, backlit niches, and a gloss floating console.", dim: "360 × 45 × 260 cm", images: [tvMarbleWoodMediaWall] },
  { name: "Grey Bouclé Lounge Set", category: "Sofa", price: 2350000, material: "Plump grey bouclé modules with an integrated timber side tray.", dim: "3 seater + lounge chair", images: [sofaAssign58] },
  { name: "Grey Tufted Modular Sectional", category: "Sofa", price: 2450000, material: "Deep-tufted grey velvet modules with a matching oversized ottoman.", dim: "L-shape · Custom", images: [sofaAssign59, sofaAssign60] },
  { name: "Ivory Crescent Sectional", category: "Sofa", price: 2900000, material: "Curved ivory upholstery wrapping a walnut crescent table.", dim: "Curved · Custom", images: [sofaAssign61, sofaAssign62] },
  { name: "Honey Serpentine Sofa", category: "Sofa", price: 2200000, material: "Sculpted serpentine form in honey chenille on a hardwood frame.", dim: "320 × 100 × 75 cm", images: [sofaHoneySerpentine] },
  { name: "Teal Velvet Tufted Set", category: "Sofa", price: 2050000, material: "Grid-tufted teal velvet with slim tapered legs.", dim: "3+1+1 seater", images: [sofaTealVelvetSet] },
  { name: "Pearl Corner Sectional", category: "Sofa", price: 2600000, material: "Pearl linen corner sectional with a built-in timber serving tray.", dim: "L-shape · Custom", images: [sofaPearlCorner] },
  { name: "Charcoal Modular Lounger", category: "Sofa", price: 2150000, material: "Low-slung charcoal modules with adjustable headrests and a chaise.", dim: "Modular · Custom", images: [sofaCharcoalModular, sofaCharcoalModularAlt] },
  { name: "Ivory Channel Tufted Sectional", category: "Sofa", price: 2650000, material: "Channel-tufted ivory bouclé wrapping a generous U-shaped sectional with deep seating and soft cushions.", dim: "U-shape · Custom", images: [sofaIvoryChannelTufted] },
  { name: "Dove Grey Modular Sectional", category: "Sofa", price: 2450000, material: "Soft dove grey upholstery with contrast black accent pillows and clean modern lines.", dim: "L-shape · Custom", images: [sofaDoveGreyModular] },
  { name: "Sand Tufted Corner Sectional", category: "Sofa", price: 2700000, material: "Grid-tufted sand chenille in a generous corner run, paired with a sculpted marble-top table.", dim: "L-shape · Custom", images: [sofaSandTuftedCorner] },
  { name: "Ivory Curved Sectional Suite", category: "Sofa", price: 2850000, material: "Sweeping ivory curved sectional with matching swivel lounge chairs.", dim: "Curved · Custom", images: [sofaIvoryCurvedSuite] },
  { name: "Graphite Lounge Modular Set", category: "Sofa", price: 2350000, material: "Low-profile graphite modules with a slim marble side console and chaise end.", dim: "Modular · Custom", images: [sofaGraphiteLounge] },
  { name: "Silver Piped Sofa Set", category: "Sofa", price: 2250000, material: "Silver-grey chenille with contrast black piping on blackened timber plinths.", dim: "3+2+1 seater", images: [sofaSilverPiped] },
  { name: "Slate Chenille Corner Sectional", category: "Sofa", price: 2550000, material: "Plush slate chenille sectional with a built-in timber serving ledge and deep chaise.", dim: "L-shape · Custom", images: [sofaSlateChenille] },
  { name: "Moss Velvet Modular Sectional", category: "Sofa", price: 2600000, material: "Rich moss velvet modular sectional with a matching ottoman and deep, relaxed seating.", dim: "L-shape · Custom", images: [sofaGreenVelvetModular] },
  { name: "Walnut Pedestal Dining Set", category: "Dining", price: 2850000, material: "Solid walnut pedestal table with upholstered dining chairs.", dim: "Seats 6 · 200 × 100 cm", images: [diningWalnutPedestal] },
  { name: "Emerald Panel Bedroom", category: "Bedroom", price: 1500000, material: "Upholstered Headboard · Walnut Detail", dim: "Full bedroom set", images: [bedroomEmeraldSuite] },
  { name: "Minimal Panel Bedroom", category: "Bedroom", price: 1200000, material: "Floating Bed Base · Gloss Wardrobe", dim: "Bedroom suite", images: [bedroomMinimalPanelSuite] },
  { name: "Luxe Dark Panel Bedroom", category: "Bedroom", price: 1400000, material: "Integrated Lighting · Wood Panel Finish", dim: "Full bedroom set", images: [bedroomLuxeDarkPanelSuite] },
  { name: "Charcoal Bouclé Bed Frame", category: "Bedroom", price: 950000, material: "Channel-tufted charcoal bouclé over a solid hardwood frame, with a low platform base and softly rounded footboard. Built for a grounded, hotel-suite calm.", dim: "King · Custom sizes", images: [bedCharcoalBouclePlatform, bedCharcoalBoucleAlt] },
  { name: "Grey Tufted Panel Bed Frame", category: "Bedroom", price: 850000, material: "A tall diamond-tufted headboard in dove grey upholstery, hand-stitched onto a seasoned hardwood carcass. Classic proportions with a quiet, modern finish.", dim: "King · Custom sizes", images: [bedGreyTuftedPanel] },
  { name: "Ivory Bouclé Sleigh Bed Frame", category: "Bedroom", price: 1100000, material: "Curved ivory bouclé wraps a sculpted sleigh silhouette built on kiln-dried hardwood. Generous scroll ends give the frame its soft, enveloping shape.", dim: "King · Custom sizes", images: [bedIvoryBoucleSleigh] },
];

export const pieces: Piece[] = raw.map((p) => ({ ...p, slug: slugify(p.name) }));

export function getPiece(slug: string) {
  return pieces.find((p) => p.slug === slug);
}

export function formatPrice(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}
