import { defineMcp } from "@lovable.dev/mcp-js";
import listCollections from "./tools/list-collections";
import listPieces from "./tools/list-pieces";
import getStudioInfo from "./tools/get-studio-info";

export default defineMcp({
  name: "bespokefurniture9ja-mcp",
  title: "BespokeFurniture9ja",
  version: "0.1.0",
  instructions:
    "Tools for the BespokeFurniture9ja furniture studio. Use `list_collections` to browse curated collections, `list_pieces` to see catalog items (optionally filtered by category), and `get_studio_info` for showroom, contact, and commission process details.",
  tools: [listCollections, listPieces, getStudioInfo],
});
