import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const pieces = [
  { name: "Cloud Curve Sofa", category: "Sofa", price: 2200000, material: "Charcoal Linen · Sculpted Form", dimensions: "260 × 100 × 85 cm" },
  { name: "Signature Line Sofa Set", category: "Sofa", price: 2500000, material: "Hand-printed Bouclé", dimensions: "Set of 3 · Custom" },
  { name: "Velvet Sculptural Suite", category: "Sofa", price: 2400000, material: "Mocha Velvet · Plinth Base", dimensions: "Modular suite" },
  { name: "Monochrome Living Set", category: "Sofa", price: 2100000, material: "Cream Linen · Piped Detail", dimensions: "3+2+1 seater" },
  { name: "Ivory Curved Lounge Set", category: "Sofa", price: 2300000, material: "Textured Ivory Upholstery · Sculpted Accent Chairs", dimensions: "3 seater + 2 lounge chairs" },
  { name: "Onyx Marble Dining Table", category: "Dining", price: 3000000, material: "Walnut Base · Bouclé Armchairs", dimensions: "Seats 8 · 240 × 110 cm" },
  { name: "Arched Oval Dining Set", category: "Dining", price: 2800000, material: "Pearl Marble · Sculpted Bouclé", dimensions: "Seats 6 · 220 × 100 cm" },
  { name: "Carrara Curve Dining", category: "Dining", price: 2600000, material: "Carrara Marble · Grey Bouclé", dimensions: "Seats 6 · 200 × 100 cm" },
  { name: "Walnut Heritage Dining", category: "Dining", price: 2500000, material: "Solid Walnut · Woven Linen", dimensions: "Seats 6 · 220 × 100 cm" },
  { name: "Calacatta Console Dining", category: "Dining", price: 2700000, material: "Calacatta Top · Walnut Frame", dimensions: "Seats 6 · 200 × 95 cm" },
  { name: "Cane-Back Dining Set", category: "Dining", price: 2200000, material: "Marble Top · Rattan Detail", dimensions: "Seats 6 · 180 × 95 cm" },
  { name: "Fluted Pedestal Dining", category: "Dining", price: 2900000, material: "Marble Oval · Fluted Base", dimensions: "Seats 6 · 200 × 100 cm" },
  { name: "Cream Oval Dining Set", category: "Dining", price: 2750000, material: "Cream Lacquer Top · Walnut Legs", dimensions: "Seats 4 · 160 × 90 cm" },
  { name: "Fluted Oak Media Wall", category: "TV Console", price: 1850000, material: "Fluted oak panelling with a floating cabinet and concealed cable routing.", dimensions: "300 × 45 × 220 cm" },
  { name: "Rounded Oak Credenza", category: "TV Console", price: 1250000, material: "Curved oak carcass with slatted doors and soft-close hardware.", dimensions: "220 × 45 × 55 cm" },
  { name: "Marble Top Oval Console", category: "TV Console", price: 1450000, material: "Honed marble top over a sculpted lacquer base.", dimensions: "200 × 45 × 55 cm" },
  { name: "Bookmatched Fireplace Wall", category: "TV Console", price: 2450000, material: "Bookmatched stone feature wall with integrated fireplace and media niche.", dimensions: "340 × 40 × 250 cm" },
  { name: "Stone Fireplace Media Wall", category: "TV Console", price: 2250000, material: "Textured stone cladding, warm timber shelving, and hidden storage.", dimensions: "320 × 40 × 240 cm" },
  { name: "Display Feature Wall Unit", category: "TV Console", price: 1950000, material: "Lit display niches with a low walnut console and glass vitrines.", dimensions: "300 × 45 × 240 cm" },
  { name: "Marble & Wood Media Wall", category: "TV Console", price: 2650000, material: "Bookmatched marble panelling with warm timber fluting, backlit niches, and a gloss floating console.", dimensions: "360 × 45 × 260 cm" },
  { name: "Grey Bouclé Lounge Set", category: "Sofa", price: 2350000, material: "Plump grey bouclé modules with an integrated timber side tray.", dimensions: "3 seater + lounge chair" },
  { name: "Grey Tufted Modular Sectional", category: "Sofa", price: 2450000, material: "Deep-tufted grey velvet modules with a matching oversized ottoman.", dimensions: "L-shape · Custom" },
  { name: "Ivory Crescent Sectional", category: "Sofa", price: 2900000, material: "Curved ivory upholstery wrapping a walnut crescent table.", dimensions: "Curved · Custom" },
  { name: "Honey Serpentine Sofa", category: "Sofa", price: 2200000, material: "Sculpted serpentine form in honey chenille on a hardwood frame.", dimensions: "320 × 100 × 75 cm" },
  { name: "Teal Velvet Tufted Set", category: "Sofa", price: 2050000, material: "Grid-tufted teal velvet with slim tapered legs.", dimensions: "3+1+1 seater" },
  { name: "Pearl Corner Sectional", category: "Sofa", price: 2600000, material: "Pearl linen corner sectional with a built-in timber serving tray.", dimensions: "L-shape · Custom" },
  { name: "Charcoal Modular Lounger", category: "Sofa", price: 2150000, material: "Low-slung charcoal modules with adjustable headrests and a chaise.", dimensions: "Modular · Custom" },
  { name: "Ivory Channel Tufted Sectional", category: "Sofa", price: 2650000, material: "Channel-tufted ivory bouclé wrapping a generous U-shaped sectional with deep seating and soft cushions.", dimensions: "U-shape · Custom" },
  { name: "Dove Grey Modular Sectional", category: "Sofa", price: 2450000, material: "Soft dove grey upholstery with contrast black accent pillows and clean modern lines.", dimensions: "L-shape · Custom" },
  { name: "Sand Tufted Corner Sectional", category: "Sofa", price: 2700000, material: "Grid-tufted sand chenille in a generous corner run, paired with a sculpted marble-top table.", dimensions: "L-shape · Custom" },
  { name: "Ivory Curved Sectional Suite", category: "Sofa", price: 2850000, material: "Sweeping ivory curved sectional with matching swivel lounge chairs.", dimensions: "Curved · Custom" },
  { name: "Graphite Lounge Modular Set", category: "Sofa", price: 2350000, material: "Low-profile graphite modules with a slim marble side console and chaise end.", dimensions: "Modular · Custom" },
  { name: "Silver Piped Sofa Set", category: "Sofa", price: 2250000, material: "Silver-grey chenille with contrast black piping on blackened timber plinths.", dimensions: "3+2+1 seater" },
  { name: "Slate Chenille Corner Sectional", category: "Sofa", price: 2550000, material: "Plush slate chenille sectional with a built-in timber serving ledge and deep chaise.", dimensions: "L-shape · Custom" },
  { name: "Moss Velvet Modular Sectional", category: "Sofa", price: 2600000, material: "Rich moss velvet modular sectional with a matching ottoman and deep, relaxed seating.", dimensions: "L-shape · Custom" },
  { name: "Walnut Pedestal Dining Set", category: "Dining", price: 2850000, material: "Solid walnut pedestal table with upholstered dining chairs.", dimensions: "Seats 6 · 200 × 100 cm" },
  { name: "Emerald Panel Bedroom", category: "Bedroom", price: 1500000, material: "Upholstered Headboard · Walnut Detail", dimensions: "Full bedroom set" },
  { name: "Minimal Panel Bedroom", category: "Bedroom", price: 1200000, material: "Floating Bed Base · Gloss Wardrobe", dimensions: "Bedroom suite" },
  { name: "Luxe Dark Panel Bedroom", category: "Bedroom", price: 1400000, material: "Integrated Lighting · Wood Panel Finish", dimensions: "Full bedroom set" },
  { name: "Charcoal Bouclé Bed Frame", category: "Bedroom", price: 950000, material: "Channel-tufted charcoal bouclé over a solid hardwood frame, with a low platform base and softly rounded footboard.", dimensions: "King · Custom sizes" },
  { name: "Grey Tufted Panel Bed Frame", category: "Bedroom", price: 850000, material: "A tall diamond-tufted headboard in dove grey upholstery, hand-stitched onto a seasoned hardwood carcass.", dimensions: "King · Custom sizes" },
  { name: "Ivory Bouclé Sleigh Bed Frame", category: "Bedroom", price: 1100000, material: "Curved ivory bouclé wraps a sculpted sleigh silhouette built on kiln-dried hardwood.", dimensions: "King · Custom sizes" },
];

export default defineTool({
  name: "list_pieces",
  title: "List furniture pieces",
  description: "List furniture pieces in the BespokeFurniture9ja catalog. Optionally filter by category.",
  inputSchema: {
    category: z
      .enum(["Sofa", "Dining", "TV Console", "Bedroom"])
      .optional()
      .describe("Optional category filter."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const filtered = category ? pieces.filter((p) => p.category === category) : pieces;
    return {
      content: [{ type: "text", text: JSON.stringify(filtered, null, 2) }],
      structuredContent: { pieces: filtered, count: filtered.length },
    };
  },
});
