import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const collections = [
  { id: "living-room", name: "The Living Room", description: "Sculptural sofas and lounge sets in bouclé, linen, and velvet — modular, custom-configured." },
  { id: "dining-room", name: "The Dining Room", description: "Marble-topped and solid-wood dining tables paired with bouclé or cane-back seating." },
  { id: "media-wall", name: "The Media Wall", description: "Fluted oak, bookmatched stone, and integrated-fireplace TV consoles built as feature walls." },
  { id: "bedroom", name: "The Bedroom", description: "Upholstered headboards, panelled suites, and integrated wardrobes in emerald, minimal, and luxe dark finishes." },
  { id: "bespoke", name: "The Bespoke Edit", description: "Fully commissioned pieces designed to a client's space, materials, and dimensions." },
];

export default defineTool({
  name: "list_collections",
  title: "List collections",
  description: "List the curated furniture collections offered by BespokeFurniture9ja.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(collections, null, 2) }],
    structuredContent: { collections },
  }),
});
