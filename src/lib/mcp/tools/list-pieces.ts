import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const pieces = [
  { name: "Bouclé Sectional Sofa", category: "Sofa", material: "Cream Bouclé · Hardwood Frame", dimensions: "Custom configurations" },
  { name: "Cloud Curve Sofa", category: "Sofa", material: "Charcoal Linen · Sculpted Form", dimensions: "260 × 100 × 85 cm" },
  { name: "Signature Line Sofa Set", category: "Sofa", material: "Hand-printed Bouclé", dimensions: "Set of 3 · Custom" },
  { name: "Velvet Sculptural Suite", category: "Sofa", material: "Mocha Velvet · Plinth Base", dimensions: "Modular suite" },
  { name: "Monochrome Living Set", category: "Sofa", material: "Cream Linen · Piped Detail", dimensions: "3+2+1 seater" },
  { name: "Ivory Curved Lounge Set", category: "Sofa", material: "Textured Ivory Upholstery · Sculpted Accent Chairs", dimensions: "3 seater + 2 lounge chairs" },
  { name: "Onyx Marble Dining Table", category: "Dining", material: "Walnut Base · Bouclé Armchairs", dimensions: "Seats 8 · 240 × 110 cm" },
  { name: "Arched Oval Dining Set", category: "Dining", material: "Pearl Marble · Sculpted Bouclé", dimensions: "Seats 6 · 220 × 100 cm" },
  { name: "Carrara Curve Dining", category: "Dining", material: "Carrara Marble · Grey Bouclé", dimensions: "Seats 6 · 200 × 100 cm" },
  { name: "Walnut Heritage Dining", category: "Dining", material: "Solid Walnut · Woven Linen", dimensions: "Seats 6 · 220 × 100 cm" },
  { name: "Calacatta Console Dining", category: "Dining", material: "Calacatta Top · Walnut Frame", dimensions: "Seats 6 · 200 × 95 cm" },
  { name: "Cane-Back Dining Set", category: "Dining", material: "Marble Top · Rattan Detail", dimensions: "Seats 6 · 180 × 95 cm" },
  { name: "Fluted Pedestal Dining", category: "Dining", material: "Marble Oval · Fluted Base", dimensions: "Seats 6 · 200 × 100 cm" },
  { name: "Fluted Oak Media Wall", category: "TV Console", material: "Oak Veneer · Ribbed Base Console", dimensions: "Wall unit · Custom" },
  { name: "Stone Fireplace Media Wall", category: "TV Console", material: "Bookmatched Stone · Built-in Fireplace", dimensions: "Wall unit · Custom" },
  { name: "Marble Top Oval Console", category: "TV Console", material: "Fluted Base · Marble Top", dimensions: "Low console · Custom" },
  { name: "Rounded Oak Credenza", category: "TV Console", material: "Oak Finish · Soft Radius Ends", dimensions: "4-door console" },
  { name: "Bookmatched Fireplace Wall", category: "TV Console", material: "Stone Slab · Glass Display Towers", dimensions: "Feature wall · Custom" },
  { name: "Display Feature TV Wall", category: "TV Console", material: "Curved Shelving · Marble Base", dimensions: "Feature wall · Custom" },
  { name: "Emerald Panel Bedroom", category: "Bedroom", material: "Upholstered Headboard · Walnut Detail", dimensions: "Full bedroom set" },
  { name: "Minimal Panel Bedroom", category: "Bedroom", material: "Floating Bed Base · Gloss Wardrobe", dimensions: "Bedroom suite" },
  { name: "Luxe Dark Panel Bedroom", category: "Bedroom", material: "Integrated Lighting · Wood Panel Finish", dimensions: "Full bedroom set" },
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
