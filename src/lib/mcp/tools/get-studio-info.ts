import { defineTool } from "@lovable.dev/mcp-js";

const info = {
  brand: "BESPOKEFURNITURE9ja",
  founder: "Badmus Soliu Olasubomi",
  tagline: "Premium Quality at an Affordable Price",
  showroom: "Yaba, Lagos, Nigeria",
  phone: "+234 708 341 3055",
  whatsapp: "+234 708 341 3055",
  instagram: "@bespokefurniture9ja",
  leadTime: "Two to six weeks max, depending on piece and finish.",
  process: [
    "Consultation — share your space, style, and brief.",
    "Design — sketches, material samples, and pricing.",
    "Craft — hand-built in the Lagos workshop.",
    "Delivery — installed and styled in your home.",
  ],
};

export default defineTool({
  name: "get_studio_info",
  title: "Get studio info",
  description: "Get contact, showroom, and bespoke commission process information for BespokeFurniture9ja.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
    structuredContent: info,
  }),
});
