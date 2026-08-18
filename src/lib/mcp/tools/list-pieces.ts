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
