/* ─── Pre-construction collection types ─── */

export type CollectionSlug = "vineyard" | "lake";

export type ModelType = "bungalow" | "two-storey";

export interface Elevation {
  id: string; // "a" | "b" | "b2"
  label: string; // "Elevation A" | "Elevation B" | "Elevation B2 — Brick & Stone"
  image: string; // non-loft render
  imageLarge?: string; // large non-loft render (if available)
  imageLoft?: string; // loft render
  imageLoftLarge?: string; // large loft render (if available)
  sqft: number;
  sqftLoft?: number; // only for bungalows with loft option
}

export interface FloorPlan {
  level: string; // "Main Floor" | "Second Floor"
  image: string;
}

export interface Room {
  name: string;
  dimensions: string; // e.g. "11'0\" x 13'0\""
  level: string; // "Main Floor" | "Second Floor"
  notes?: string;
}

export interface HomeModel {
  slug: string;
  name: string;
  collection: CollectionSlug;
  type: ModelType;
  description: string;
  bedrooms: string; // e.g. "2" or "3–5"
  bathrooms: string; // e.g. "2" or "2.5"
  sqftRange: string; // display string e.g. "1,371 – 2,296 sq ft"
  sqftMin: number;
  sqftMax: number;
  hasLoft: boolean;
  elevations: Elevation[];
  floorPlans: FloorPlan[];
  pdfs: { label: string; href: string }[];
  heroImage: string;
  rooms?: Room[];
  features?: string[];
  garageSize?: string;
  optionalGarage?: string;
}

export interface Collection {
  slug: CollectionSlug;
  name: string;
  tagline: string;
  description: string;
  homesiteSize: string; // "65 ft" | "150 ft"
  heroImage: string;
  brochureUrl: string;
  models: HomeModel[];
}

/* ─── Shared PDFs ─── */
export const SHARED_PDFS = [
  { label: "Bonus Preview", href: "/collections/shared/bonus-preview.pdf" },
  { label: "Features & Finishes", href: "/collections/shared/features.pdf" },
];

/* ─── Vineyard Collection — 65 ft homesites ─── */

const VINEYARD_MODELS: HomeModel[] = [
  {
    slug: "clear-point",
    name: "Clear Point",
    collection: "vineyard",
    type: "bungalow",
    description: "A charming 2-bedroom bungalow designed for effortless single-level living. The Clear Point welcomes you with a cathedral ceiling in the great room anchored by a gas fireplace, a gourmet kitchen with granite countertops and flush breakfast bar, and a master suite with full ensuite. Built with 2x6 exterior walls, R-50 attic insulation, 9-foot main-floor ceilings, and high-efficiency forced-air heating with central air — all in a smartly designed 1,202 sq ft footprint.",
    bedrooms: "2",
    bathrooms: "2",
    sqftRange: "1,202 sq ft",
    sqftMin: 1202,
    sqftMax: 1202,
    hasLoft: false,
    elevations: [
      { id: "a", label: "Elevation A", image: "/collections/vineyard/elevations/clear-point-a-sm.jpg", imageLarge: "/collections/vineyard/elevations/clear-point-a.jpg", sqft: 1202 },
      { id: "b", label: "Elevation B", image: "/collections/vineyard/elevations/clear-point-b-sm.jpg", imageLarge: "/collections/vineyard/elevations/clear-point-b.jpg", sqft: 1202 },
    ],
    floorPlans: [
      { level: "Main Floor", image: "/collections/vineyard/floorplans/clear-point-main.jpg" },
    ],
    pdfs: [
      { label: "Floor Plan PDF", href: "/collections/vineyard/pdfs/clear-point.pdf" },
    ],
    heroImage: "/collections/vineyard/elevations/clear-point-b.jpg",
    rooms: [
      { name: "Master Bedroom", dimensions: "11'0\" x 13'0\"", level: "Main Floor" },
      { name: "Great Room", dimensions: "13'0\" x 18'6\"", level: "Main Floor", notes: "Cathedral ceiling" },
      { name: "Kitchen", dimensions: "11'0\" x 9'6\"", level: "Main Floor" },
      { name: "Breakfast", dimensions: "11'0\" x 9'0\"", level: "Main Floor", notes: "Flush breakfast bar" },
      { name: "Bedroom 2", dimensions: "10'0\" x 11'0\"", level: "Main Floor" },
      { name: "Bath", dimensions: "", level: "Main Floor" },
      { name: "Foyer", dimensions: "", level: "Main Floor" },
      { name: "Mud Room", dimensions: "", level: "Main Floor" },
      { name: "Garage", dimensions: "20'0\" x 20'0\"", level: "Main Floor" },
    ],
    features: [
      "Direct vent gas fireplace",
      "Cathedral ceiling in great room",
      "Flush breakfast bar",
      "Sliding door to backyard",
      "Tankless water heater",
      "Unfinished storage / furnace utility",
      "Optional door where grade permits",
    ],
    garageSize: "20'0\" x 20'0\"",
    optionalGarage: "10'0\" x 20'0\"",
  },
  {
    slug: "picton-bay",
    name: "Picton Bay",
    collection: "vineyard",
    type: "bungalow",
    description: "A versatile bungalow offering single-level living or an expanded loft with up to 4 bedrooms. The Picton Bay features a gas fireplace in the great room, a gourmet kitchen with granite countertops, and a master suite with glass shower and walk-in closet. Enjoy 9-foot main-floor ceilings, smooth finishes throughout, ceramic tile flooring in the kitchen and baths, and an optional loft that adds two bedrooms plus an open living area overhead.",
    bedrooms: "2–4",
    bathrooms: "2–3",
    sqftRange: "1,371 – 2,296 sq ft",
    sqftMin: 1371,
    sqftMax: 2296,
    hasLoft: true,
    elevations: [
      { id: "a", label: "Elevation A", image: "/collections/vineyard/elevations/picton-bay-a-sm.jpg", imageLarge: "/collections/vineyard/elevations/picton-bay-a.jpg", imageLoft: "/collections/vineyard/elevations/picton-bay-a-loft-sm.jpg", imageLoftLarge: "/collections/vineyard/elevations/picton-bay-a-loft.jpg", sqft: 1374, sqftLoft: 2296 },
      { id: "b", label: "Elevation B", image: "/collections/vineyard/elevations/picton-bay-b-sm.jpg", imageLarge: "/collections/vineyard/elevations/picton-bay-b.jpg", imageLoft: "/collections/vineyard/elevations/picton-bay-b-loft-sm.jpg", imageLoftLarge: "/collections/vineyard/elevations/picton-bay-b-loft.jpg", sqft: 1371, sqftLoft: 2293 },
      { id: "b2", label: "Elevation B2 — Brick & Stone", image: "/collections/vineyard/elevations/picton-bay-b2-sm.jpg", imageLarge: "/collections/vineyard/elevations/picton-bay-b2.jpg", imageLoft: "/collections/vineyard/elevations/picton-bay-b2-loft-sm.jpg", imageLoftLarge: "/collections/vineyard/elevations/picton-bay-b2-loft.jpg", sqft: 1371, sqftLoft: 2293 },
    ],
    floorPlans: [
      { level: "Main Floor", image: "/collections/vineyard/floorplans/picton-bay-main.jpg" },
      { level: "Second Floor", image: "/collections/vineyard/floorplans/picton-bay-second.jpg" },
    ],
    pdfs: [
      { label: "Rendering Sheet", href: "/collections/vineyard/pdfs/picton-bay-r.pdf" },
      { label: "Floor Plan PDF", href: "/collections/vineyard/pdfs/picton-bay-fp.pdf" },
    ],
    heroImage: "/collections/vineyard/elevations/picton-bay-a.jpg",
    rooms: [
      { name: "Master Bedroom", dimensions: "12'0\" x 13'0\"", level: "Main Floor" },
      { name: "Great Room", dimensions: "12'0\" x 17'0\"", level: "Main Floor", notes: "Direct vent gas fireplace" },
      { name: "Dining", dimensions: "10'4\" x 10'0\"", level: "Main Floor" },
      { name: "Kitchen", dimensions: "10'4\" x 9'0\"", level: "Main Floor" },
      { name: "Bedroom 2", dimensions: "11'0\" x 11'6\"", level: "Main Floor" },
      { name: "Loft", dimensions: "10'4\" x 20'8\"", level: "Second Floor" },
      { name: "Bedroom 3", dimensions: "12'0\" x 11'0\"", level: "Second Floor" },
      { name: "Bedroom 4", dimensions: "13'0\" x 11'8\"", level: "Second Floor" },
    ],
    features: [
      "Direct vent gas fireplace",
      "Glass shower in ensuite",
      "Walk-in closet",
      "Flush breakfast bar",
      "Sliding door",
      "Open to above in loft condition",
    ],
    garageSize: "20'0\" x 20'0\"",
    optionalGarage: "10'0\" x 20'0\"",
  },
  {
    slug: "cherry-valley",
    name: "Cherry Valley",
    collection: "vineyard",
    type: "bungalow",
    description: "A spacious bungalow with an optional loft for growing families. The Cherry Valley offers a generous master suite with glass shower, a den for flexible living, and an open-concept great room with gas fireplace and high-level windows flooding the space with natural light. Finished with granite kitchen countertops, ceramic tile floors, 9-foot ceilings, and oak-trimmed staircases — the loft option adds two bedrooms and a dramatic open-to-above living space up to 2,639 sq ft.",
    bedrooms: "2–4",
    bathrooms: "2–3",
    sqftRange: "1,549 – 2,639 sq ft",
    sqftMin: 1549,
    sqftMax: 2639,
    hasLoft: true,
    elevations: [
      { id: "a", label: "Elevation A", image: "/collections/vineyard/elevations/cherry-valley-a-sm.jpg", imageLarge: "/collections/vineyard/elevations/cherry-valley-a.jpg", imageLoft: "/collections/vineyard/elevations/cherry-valley-a-loft-sm.jpg", imageLoftLarge: "/collections/vineyard/elevations/cherry-valley-a-loft.jpg", sqft: 1549, sqftLoft: 2639 },
      { id: "b", label: "Elevation B", image: "/collections/vineyard/elevations/cherry-valley-b-sm.jpg", imageLarge: "/collections/vineyard/elevations/cherry-valley-b.jpg", imageLoft: "/collections/vineyard/elevations/cherry-valley-b-loft-sm.jpg", imageLoftLarge: "/collections/vineyard/elevations/cherry-valley-b-loft.jpg", sqft: 1549, sqftLoft: 2595 },
      { id: "b2", label: "Elevation B2 — Brick & Stone", image: "/collections/vineyard/elevations/cherry-valley-b2-sm.jpg", imageLarge: "/collections/vineyard/elevations/cherry-valley-b2.jpg", imageLoft: "/collections/vineyard/elevations/cherry-valley-b2-loft-sm.jpg", imageLoftLarge: "/collections/vineyard/elevations/cherry-valley-b2-loft.jpg", sqft: 1549, sqftLoft: 2595 },
    ],
    floorPlans: [
      { level: "Main Floor", image: "/collections/vineyard/floorplans/cherry-valley-main.jpg" },
      { level: "Second Floor", image: "/collections/vineyard/floorplans/cherry-valley-second.jpg" },
    ],
    pdfs: [
      { label: "Rendering Sheet", href: "/collections/vineyard/pdfs/cherry-valley-r.pdf" },
      { label: "Floor Plan PDF", href: "/collections/vineyard/pdfs/cherry-valley-fp.pdf" },
    ],
    heroImage: "/collections/vineyard/elevations/cherry-valley-a.jpg",
    rooms: [
      { name: "Master Bedroom", dimensions: "15'0\" x 14'8\"", level: "Main Floor" },
      { name: "Great Room", dimensions: "16'0\" x 14'0\"", level: "Main Floor", notes: "Direct vent gas fireplace" },
      { name: "Dining", dimensions: "16'0\" x 9'0\"", level: "Main Floor" },
      { name: "Kitchen", dimensions: "17'0\" x 8'0\"", level: "Main Floor" },
      { name: "Bedroom 2", dimensions: "12'0\" x 9'0\"", level: "Main Floor" },
      { name: "Loft", dimensions: "21'0\" x 17'6\"", level: "Second Floor" },
      { name: "Bedroom 3", dimensions: "11'0\" x 14'0\"", level: "Second Floor", notes: "Sloped ceiling" },
      { name: "Bedroom 4", dimensions: "11'4\" x 14'0\"", level: "Second Floor" },
    ],
    features: [
      "Direct vent gas fireplace",
      "Glass shower in ensuite",
      "Walk-in closet",
      "Flush breakfast bar",
      "High level windows",
      "Open to above in loft condition",
    ],
    garageSize: "20'0\" x 20'0\"",
    optionalGarage: "10'0\" x 20'0\"",
  },
  {
    slug: "bloomfield",
    name: "Bloomfield",
    collection: "vineyard",
    type: "bungalow",
    description: "A refined bungalow with dual walk-in closets in the master suite, a den, and an optional loft reaching up to 2,717 sq ft. The Bloomfield features a gas fireplace with painted white mantle, high-level windows for natural light, and an optional double-sink granite-topped ensuite vanity. Finished with 9-foot ceilings, smooth walls, ceramic tile in all wet areas, and high-efficiency heating with central air — designed for comfortable, elegant living.",
    bedrooms: "2–4",
    bathrooms: "2–3",
    sqftRange: "1,653 – 2,717 sq ft",
    sqftMin: 1653,
    sqftMax: 2717,
    hasLoft: true,
    elevations: [
      { id: "a", label: "Elevation A", image: "/collections/vineyard/elevations/bloomfield-a-sm.jpg", imageLarge: "/collections/vineyard/elevations/bloomfield-a.jpg", imageLoft: "/collections/vineyard/elevations/bloomfield-a-loft-sm.jpg", imageLoftLarge: "/collections/vineyard/elevations/bloomfield-a-loft.jpg", sqft: 1653, sqftLoft: 2717 },
      { id: "b", label: "Elevation B", image: "/collections/vineyard/elevations/bloomfield-b-sm.jpg", imageLarge: "/collections/vineyard/elevations/bloomfield-b.jpg", imageLoft: "/collections/vineyard/elevations/bloomfield-b-loft-sm.jpg", imageLoftLarge: "/collections/vineyard/elevations/bloomfield-b-loft.jpg", sqft: 1653, sqftLoft: 2674 },
      { id: "b2", label: "Elevation B2 — Brick & Stone", image: "/collections/vineyard/elevations/bloomfield-b2-sm.jpg", imageLarge: "/collections/vineyard/elevations/bloomfield-b2.jpg", imageLoft: "/collections/vineyard/elevations/bloomfield-b2-loft-sm.jpg", imageLoftLarge: "/collections/vineyard/elevations/bloomfield-b2-loft.jpg", sqft: 1653, sqftLoft: 2674 },
    ],
    floorPlans: [
      { level: "Main Floor", image: "/collections/vineyard/floorplans/bloomfield-main.jpg" },
      { level: "Second Floor", image: "/collections/vineyard/floorplans/bloomfield-second.jpg" },
    ],
    pdfs: [
      { label: "Rendering Sheet", href: "/collections/vineyard/pdfs/bloomfield-r.pdf" },
      { label: "Floor Plan PDF", href: "/collections/vineyard/pdfs/bloomfield-fp.pdf" },
    ],
    heroImage: "/collections/vineyard/elevations/bloomfield-a.jpg",
    rooms: [
      { name: "Master Bedroom", dimensions: "11'0\" x 15'6\"", level: "Main Floor" },
      { name: "Great Room", dimensions: "10'0\" x 13'8\"", level: "Main Floor", notes: "Direct vent gas fireplace" },
      { name: "Dining", dimensions: "15'4\" x 15'8\"", level: "Main Floor" },
      { name: "Kitchen", dimensions: "10'0\" x 13'8\"", level: "Main Floor" },
      { name: "Bedroom 2", dimensions: "12'0\" x 10'0\"", level: "Main Floor" },
      { name: "Loft", dimensions: "13'9\" x 19'10\"", level: "Second Floor" },
      { name: "Bedroom 3", dimensions: "13'4\" x 13'4\"", level: "Second Floor" },
      { name: "Bedroom 4", dimensions: "13'4\" x 13'6\"", level: "Second Floor", notes: "Walk-in closet" },
    ],
    features: [
      "Direct vent gas fireplace",
      "Glass shower in ensuite",
      "Optional double sink in ensuite",
      "Dual walk-in closets in master",
      "High level windows",
      "Optional window seat",
    ],
    garageSize: "20'0\" x 20'0\"",
    optionalGarage: "10'0\" x 22'0\"",
  },
  {
    slug: "glenora",
    name: "Glenora",
    collection: "vineyard",
    type: "bungalow",
    description: "The largest bungalow in the Vineyard Collection, the Glenora offers 3 bedrooms on the main floor with a tray ceiling in the master and a sloped-ceiling great room with gas fireplace. The spa-inspired ensuite features a glass shower, and the gourmet kitchen includes granite countertops and a pantry. With 9-foot ceilings, ceramic tile flooring, and an oversized garage, the loft option expands to 5 bedrooms including a study — up to 2,790 sq ft of living space.",
    bedrooms: "3–5",
    bathrooms: "2–3",
    sqftRange: "1,770 – 2,790 sq ft",
    sqftMin: 1770,
    sqftMax: 2790,
    hasLoft: true,
    elevations: [
      { id: "a", label: "Elevation A", image: "/collections/vineyard/elevations/glenora-a-sm.jpg", imageLarge: "/collections/vineyard/elevations/glenora-a.jpg", imageLoft: "/collections/vineyard/elevations/glenora-a-loft-sm.jpg", imageLoftLarge: "/collections/vineyard/elevations/glenora-a-loft.jpg", sqft: 1770, sqftLoft: 2775 },
      { id: "b", label: "Elevation B", image: "/collections/vineyard/elevations/glenora-b-sm.jpg", imageLarge: "/collections/vineyard/elevations/glenora-b.jpg", imageLoft: "/collections/vineyard/elevations/glenora-b-loft-sm.jpg", imageLoftLarge: "/collections/vineyard/elevations/glenora-b-loft.jpg", sqft: 1784, sqftLoft: 2790 },
      { id: "b2", label: "Elevation B2 — Brick & Stone", image: "/collections/vineyard/elevations/glenora-b2-sm.jpg", imageLarge: "/collections/vineyard/elevations/glenora-b2.jpg", imageLoft: "/collections/vineyard/elevations/glenora-b2-loft-sm.jpg", imageLoftLarge: "/collections/vineyard/elevations/glenora-b2-loft.jpg", sqft: 1784, sqftLoft: 2790 },
    ],
    floorPlans: [
      { level: "Main Floor", image: "/collections/vineyard/floorplans/glenora-main.jpg" },
      { level: "Second Floor", image: "/collections/vineyard/floorplans/glenora-second.jpg" },
    ],
    pdfs: [
      { label: "Rendering Sheet", href: "/collections/vineyard/pdfs/glenora-r.pdf" },
      { label: "Floor Plan PDF", href: "/collections/vineyard/pdfs/glenora-fp.pdf" },
    ],
    heroImage: "/collections/vineyard/elevations/glenora-a.jpg",
    rooms: [
      { name: "Master Bedroom", dimensions: "14'8\" x 16'0\"", level: "Main Floor", notes: "Tray ceiling" },
      { name: "Great Room", dimensions: "14'0\" x 17'0\"", level: "Main Floor", notes: "Sloped ceiling, gas fireplace" },
      { name: "Breakfast", dimensions: "13'6\" x 11'0\"", level: "Main Floor" },
      { name: "Kitchen", dimensions: "14'0\" x 12'0\"", level: "Main Floor" },
      { name: "Bedroom 2", dimensions: "11'0\" x 10'0\"", level: "Main Floor" },
      { name: "Bedroom 3", dimensions: "11'0\" x 13'0\"", level: "Main Floor" },
      { name: "Bedroom 4", dimensions: "13'6\" x 11'0\"", level: "Second Floor" },
      { name: "Study / Bedroom 5", dimensions: "11'6\" x 11'0\"", level: "Second Floor", notes: "Sloped ceiling" },
      { name: "Loft", dimensions: "12'0\" x 19'0\"", level: "Second Floor" },
    ],
    features: [
      "Tray ceiling in master bedroom",
      "Sloped ceiling in great room",
      "Direct vent gas fireplace",
      "Spa ensuite with glass shower",
      "Pantry",
      "Sliding door",
    ],
    garageSize: "30'4\" x 20'0\"",
  },
  // ── Two-Storey ──
  {
    slug: "brighton",
    name: "Brighton",
    collection: "vineyard",
    type: "two-storey",
    description: "A smartly designed two-storey with 3 bedrooms and a gas fireplace in the open-concept great room. The main floor features a gourmet kitchen with granite countertops and flush breakfast bar opening to the dining area. Upstairs, the master offers a walk-in closet and ensuite, while bedroom 3 boasts a cathedral ceiling. Built with 9-foot main-floor and 8-foot second-floor ceilings, smooth finishes, ceramic tile, and a paved driveway.",
    bedrooms: "3",
    bathrooms: "2.5",
    sqftRange: "1,336 – 1,343 sq ft",
    sqftMin: 1336,
    sqftMax: 1343,
    hasLoft: false,
    elevations: [
      { id: "a", label: "Elevation A", image: "/collections/vineyard/elevations/brighton-a-sm.jpg", imageLarge: "/collections/vineyard/elevations/brighton-a.jpg", sqft: 1343 },
      { id: "b", label: "Elevation B", image: "/collections/vineyard/elevations/brighton-b-sm.jpg", imageLarge: "/collections/vineyard/elevations/brighton-b.jpg", sqft: 1336 },
      { id: "b2", label: "Elevation B2 — Brick & Stone", image: "/collections/vineyard/elevations/brighton-b2-sm.jpg", imageLarge: "/collections/vineyard/elevations/brighton-b2.jpg", sqft: 1336 },
    ],
    floorPlans: [
      { level: "Main Floor", image: "/collections/vineyard/floorplans/brighton-main.jpg" },
      { level: "Second Floor", image: "/collections/vineyard/floorplans/brighton-second.jpg" },
    ],
    pdfs: [
      { label: "Rendering Sheet", href: "/collections/vineyard/pdfs/brighton-r.pdf" },
      { label: "Floor Plan PDF", href: "/collections/vineyard/pdfs/brighton-fp.pdf" },
    ],
    heroImage: "/collections/vineyard/elevations/brighton-a.jpg",
    rooms: [
      { name: "Great Room", dimensions: "17'8\" x 11'0\"", level: "Main Floor", notes: "Direct vent gas fireplace" },
      { name: "Dining", dimensions: "14'0\" x 9'0\"", level: "Main Floor" },
      { name: "Kitchen", dimensions: "12'8\" x 9'0\"", level: "Main Floor" },
      { name: "Master Bedroom", dimensions: "12'0\" x 10'8\"", level: "Second Floor" },
      { name: "Bedroom 2", dimensions: "9'0\" x 10'8\"", level: "Second Floor" },
      { name: "Bedroom 3", dimensions: "12'8\" x 9'0\"", level: "Second Floor", notes: "Cathedral ceiling" },
    ],
    features: [
      "Direct vent gas fireplace",
      "Cathedral ceiling in bedroom 3",
      "Walk-in closet",
      "Flush breakfast bar",
      "Garden door",
    ],
    garageSize: "20'0\" x 20'0\"",
    optionalGarage: "10'0\" x 20'0\"",
  },
  {
    slug: "southshore",
    name: "Southshore",
    collection: "vineyard",
    type: "two-storey",
    description: "A generous two-storey featuring a formal room, a great room with gas fireplace and optional waffle ceiling, and a gourmet kitchen with granite countertops. The second-floor master suite includes a walk-in closet and ensuite with ceramic tile and chrome fixtures. With 9-foot main-floor ceilings, smooth finishes throughout, and well-separated living and sleeping spaces across 1,653–1,675 sq ft.",
    bedrooms: "3",
    bathrooms: "2.5",
    sqftRange: "1,653 – 1,675 sq ft",
    sqftMin: 1653,
    sqftMax: 1675,
    hasLoft: false,
    elevations: [
      { id: "a", label: "Elevation A", image: "/collections/vineyard/elevations/southshore-a-sm.jpg", imageLarge: "/collections/vineyard/elevations/southshore-a.jpg", sqft: 1675 },
      { id: "b", label: "Elevation B", image: "/collections/vineyard/elevations/southshore-b-sm.jpg", imageLarge: "/collections/vineyard/elevations/southshore-b.jpg", sqft: 1653 },
      { id: "b2", label: "Elevation B2 — Brick & Stone", image: "/collections/vineyard/elevations/southshore-b2-sm.jpg", imageLarge: "/collections/vineyard/elevations/southshore-b2.jpg", sqft: 1653 },
    ],
    floorPlans: [
      { level: "Main Floor", image: "/collections/vineyard/floorplans/southshore-main.jpg" },
      { level: "Second Floor", image: "/collections/vineyard/floorplans/southshore-second.jpg" },
    ],
    pdfs: [
      { label: "Rendering Sheet", href: "/collections/vineyard/pdfs/southshore-r.pdf" },
      { label: "Floor Plan PDF", href: "/collections/vineyard/pdfs/southshore-fp.pdf" },
    ],
    heroImage: "/collections/vineyard/elevations/southshore-a.jpg",
    rooms: [
      { name: "Great Room", dimensions: "16'6\" x 12'6\"", level: "Main Floor", notes: "Gas fireplace, optional waffle ceiling" },
      { name: "Breakfast", dimensions: "9'0\" x 16'10\"", level: "Main Floor" },
      { name: "Kitchen", dimensions: "9'0\" x 14'6\"", level: "Main Floor" },
      { name: "Formal Room", dimensions: "12'4\" x 16'6\"", level: "Main Floor" },
      { name: "Master Bedroom", dimensions: "11'0\" x 12'8\"", level: "Second Floor" },
      { name: "Bedroom 2", dimensions: "10'0\" x 9'0\"", level: "Second Floor" },
      { name: "Bedroom 3", dimensions: "10'8\" x 10'2\"", level: "Second Floor" },
    ],
    features: [
      "Direct vent gas fireplace",
      "Optional waffle ceiling in great room",
      "Walk-in closet",
      "Flush breakfast bar",
      "Garden door",
    ],
    garageSize: "20'0\" x 20'0\"",
    optionalGarage: "10'0\" x 20'0\"",
  },
  {
    slug: "milford",
    name: "Milford",
    collection: "vineyard",
    type: "two-storey",
    description: "A distinctive two-storey with the master bedroom on the main floor — ideal for accessibility and convenience. The Milford features a dramatic great room open to above with gas fireplace, a gourmet kitchen with granite countertops, and 9-foot main-floor ceilings. The second floor offers two bedrooms with an optional 4th bedroom, bringing the home up to 1,932 sq ft. Finished with ceramic tile, smooth ceilings, and high-efficiency heating with central air.",
    bedrooms: "3–4",
    bathrooms: "2.5",
    sqftRange: "1,725 – 1,759 sq ft",
    sqftMin: 1725,
    sqftMax: 1759,
    hasLoft: false,
    elevations: [
      { id: "a", label: "Elevation A", image: "/collections/vineyard/elevations/milford-a-sm.jpg", imageLarge: "/collections/vineyard/elevations/milford-a.jpg", sqft: 1759 },
      { id: "b", label: "Elevation B", image: "/collections/vineyard/elevations/milford-b-sm.jpg", imageLarge: "/collections/vineyard/elevations/milford-b.jpg", sqft: 1725 },
      { id: "b2", label: "Elevation B2 — Brick & Stone", image: "/collections/vineyard/elevations/milford-b2-sm.jpg", imageLarge: "/collections/vineyard/elevations/milford-b2.jpg", sqft: 1725 },
    ],
    floorPlans: [
      { level: "Main Floor", image: "/collections/vineyard/floorplans/milford-main.jpg" },
      { level: "Second Floor", image: "/collections/vineyard/floorplans/milford-second.jpg" },
    ],
    pdfs: [
      { label: "Rendering Sheet", href: "/collections/vineyard/pdfs/milford-r.pdf" },
      { label: "Floor Plan PDF", href: "/collections/vineyard/pdfs/milford-fp.pdf" },
    ],
    heroImage: "/collections/vineyard/elevations/milford-a.jpg",
    rooms: [
      { name: "Great Room", dimensions: "11'0\" x 18'0\"", level: "Main Floor", notes: "Gas fireplace, open to above" },
      { name: "Dining", dimensions: "10'6\" x 14'0\"", level: "Main Floor" },
      { name: "Kitchen", dimensions: "8'0\" x 14'0\"", level: "Main Floor" },
      { name: "Master Bedroom", dimensions: "11'6\" x 13'0\"", level: "Main Floor" },
      { name: "Bedroom 2", dimensions: "11'6\" x 10'8\"", level: "Second Floor" },
      { name: "Bedroom 3", dimensions: "10'6\" x 12'0\"", level: "Second Floor" },
      { name: "Opt. Bedroom 4", dimensions: "11'0\" x 12'8\"", level: "Second Floor", notes: "Sloped ceiling" },
    ],
    features: [
      "Direct vent gas fireplace",
      "Sloped ceiling with open to above",
      "Flush breakfast bar",
      "Sliding door",
    ],
    garageSize: "20'0\" x 20'0\"",
    optionalGarage: "10'0\" x 20'0\"",
  },
  {
    slug: "trillium",
    name: "Trillium",
    collection: "vineyard",
    type: "two-storey",
    description: "A stately two-storey with a soaring great room open to above, a formal room with optional coffered ceiling, and a spacious second-floor loft. The Trillium features a large master suite with optional double-sink ensuite, granite countertops in the gourmet kitchen, and 9-foot main-floor ceilings. With ceramic tile in all wet areas, oak-trimmed staircases, and an optional 4th bedroom — up to 2,208 sq ft of refined living.",
    bedrooms: "3–4",
    bathrooms: "2.5",
    sqftRange: "2,161 – 2,208 sq ft",
    sqftMin: 2161,
    sqftMax: 2208,
    hasLoft: false,
    elevations: [
      { id: "a", label: "Elevation A", image: "/collections/vineyard/elevations/trillium-a-sm.jpg", imageLarge: "/collections/vineyard/elevations/trillium-a.jpg", sqft: 2208 },
      { id: "b", label: "Elevation B", image: "/collections/vineyard/elevations/trillium-b-sm.jpg", imageLarge: "/collections/vineyard/elevations/trillium-b.jpg", sqft: 2161 },
      { id: "b2", label: "Elevation B2 — Brick & Stone", image: "/collections/vineyard/elevations/trillium-b2-sm.jpg", imageLarge: "/collections/vineyard/elevations/trillium-b2.jpg", sqft: 2161 },
    ],
    floorPlans: [
      { level: "Main Floor", image: "/collections/vineyard/floorplans/trillium-main.jpg" },
      { level: "Second Floor", image: "/collections/vineyard/floorplans/trillium-second.jpg" },
    ],
    pdfs: [
      { label: "Rendering Sheet", href: "/collections/vineyard/pdfs/trillium-r.pdf" },
      { label: "Floor Plan PDF", href: "/collections/vineyard/pdfs/trillium-fp.pdf" },
    ],
    heroImage: "/collections/vineyard/elevations/trillium-a.jpg",
    rooms: [
      { name: "Great Room", dimensions: "15'4\" x 14'0\"", level: "Main Floor", notes: "Gas fireplace, open to above" },
      { name: "Dining", dimensions: "11'0\" x 13'4\"", level: "Main Floor" },
      { name: "Kitchen", dimensions: "8'6\" x 13'4\"", level: "Main Floor" },
      { name: "Formal Room", dimensions: "12'0\" x 11'0\"", level: "Main Floor", notes: "Optional coffered ceiling" },
      { name: "Master Bedroom", dimensions: "15'0\" x 13'0\"", level: "Second Floor" },
      { name: "Bedroom 2", dimensions: "10'0\" x 10'6\"", level: "Second Floor" },
      { name: "Bedroom 3", dimensions: "12'0\" x 11'0\"", level: "Second Floor" },
      { name: "Loft", dimensions: "18'0\" x 13'8\"", level: "Second Floor" },
    ],
    features: [
      "Direct vent gas fireplace",
      "Sloped ceiling with open to above",
      "Optional coffered ceiling",
      "Sliding door",
      "Optional double sink in ensuite",
    ],
    garageSize: "20'0\" x 22'0\"",
    optionalGarage: "10'0\" x 20'0\"",
  },
  {
    slug: "wellington",
    name: "Wellington",
    collection: "vineyard",
    type: "two-storey",
    description: "The largest two-storey in the Vineyard Collection, the Wellington offers 4 bedrooms with an alternate plan for up to 5 bedrooms and 2,515 sq ft. Featuring a dramatic open-to-above great room with gas fireplace, a gourmet kitchen with granite countertops, island, servery and pantry, and a coffered-ceiling dining room. Built with 9-foot main-floor ceilings, smooth finishes, ceramic tile, high-performance windows, and high-efficiency heating with central air.",
    bedrooms: "4–5",
    bathrooms: "2.5–3.5",
    sqftRange: "2,246 – 2,302 sq ft",
    sqftMin: 2246,
    sqftMax: 2302,
    hasLoft: false,
    elevations: [
      { id: "a", label: "Elevation A", image: "/collections/vineyard/elevations/wellington-a-sm.jpg", imageLarge: "/collections/vineyard/elevations/wellington-a.jpg", sqft: 2302 },
      { id: "b", label: "Elevation B", image: "/collections/vineyard/elevations/wellington-b-sm.jpg", imageLarge: "/collections/vineyard/elevations/wellington-b.jpg", sqft: 2246 },
      { id: "b2", label: "Elevation B2 — Brick & Stone", image: "/collections/vineyard/elevations/wellington-b2-sm.jpg", imageLarge: "/collections/vineyard/elevations/wellington-b2.jpg", sqft: 2246 },
    ],
    floorPlans: [
      { level: "Main Floor", image: "/collections/vineyard/floorplans/wellington-main.jpg" },
      { level: "Second Floor", image: "/collections/vineyard/floorplans/wellington-second.jpg" },
    ],
    pdfs: [
      { label: "Rendering Sheet", href: "/collections/vineyard/pdfs/wellington-r.pdf" },
      { label: "Floor Plan PDF", href: "/collections/vineyard/pdfs/wellington-fp.pdf" },
    ],
    heroImage: "/collections/vineyard/elevations/wellington-a.jpg",
    rooms: [
      { name: "Great Room", dimensions: "13'0\" x 17'0\"", level: "Main Floor", notes: "Gas fireplace, open to above" },
      { name: "Breakfast", dimensions: "9'6\" x 14'0\"", level: "Main Floor" },
      { name: "Kitchen", dimensions: "9'0\" x 14'0\"", level: "Main Floor" },
      { name: "Dining", dimensions: "11'6\" x 13'0\"", level: "Main Floor", notes: "Optional coffered ceiling" },
      { name: "Master Bedroom", dimensions: "14'0\" x 14'0\"", level: "Second Floor" },
      { name: "Bedroom 2", dimensions: "9'4\" x 10'0\"", level: "Second Floor" },
      { name: "Bedroom 3", dimensions: "10'0\" x 10'6\"", level: "Second Floor" },
      { name: "Bedroom 4", dimensions: "9'4\" x 11'10\"", level: "Second Floor" },
    ],
    features: [
      "Direct vent gas fireplace",
      "Sloped ceiling with open to above",
      "Optional coffered ceiling in dining",
      "Servery and pantry",
      "Sliding door",
      "Island",
    ],
    garageSize: "20'0\" x 20'0\"",
    optionalGarage: "10'0\" x 20'0\"",
  },
];

/* ─── Lake Collection — 150 ft homesites ─── */

const LAKE_MODELS: HomeModel[] = [
  {
    slug: "devonshire",
    name: "Devonshire",
    collection: "lake",
    type: "bungalow",
    description: "An inviting bungalow on a spacious 150' homesite with a vaulted-ceiling great room, gas fireplaces in both the great room and master bedroom, and a coffered-ceiling foyer. The gourmet kitchen features granite countertops and an island, while the ensuite offers a glass shower. Built with 9-foot ceilings, R-50 attic insulation, and high-efficiency heating with central air — the optional loft adds a study, a third bedroom, and open living space up to 2,083 sq ft.",
    bedrooms: "2–4",
    bathrooms: "2–3",
    sqftRange: "1,405 – 2,083 sq ft",
    sqftMin: 1405,
    sqftMax: 2083,
    hasLoft: true,
    elevations: [
      { id: "a", label: "Elevation A", image: "/collections/lake/elevations/devonshire-a.jpg", imageLarge: "/collections/lake/elevations/devonshire-large.jpg", imageLoft: "/collections/lake/elevations/devonshire-a-loft.jpg", sqft: 1405, sqftLoft: 2083 },
      { id: "b", label: "Elevation B", image: "/collections/lake/elevations/devonshire-b.jpg", imageLarge: "/collections/lake/elevations/devonshire-b.jpg", imageLoft: "/collections/lake/elevations/devonshire-b-loft.jpg", sqft: 1405, sqftLoft: 2061 },
      { id: "b2", label: "Elevation B2 — Brick & Stone", image: "/collections/lake/elevations/devonshire-b2.jpg", imageLarge: "/collections/lake/elevations/devonshire-b2.jpg", imageLoft: "/collections/lake/elevations/devonshire-b2-loft.jpg", sqft: 1405, sqftLoft: 2061 },
    ],
    floorPlans: [
      { level: "Main Floor", image: "/collections/lake/floorplans/devonshire-main.jpg" },
      { level: "Second Floor", image: "/collections/lake/floorplans/devonshire-second.jpg" },
    ],
    pdfs: [
      { label: "Rendering Sheet", href: "/collections/lake/pdfs/devonshire-r.pdf" },
      { label: "Floor Plan PDF", href: "/collections/lake/pdfs/devonshire-fp.pdf" },
    ],
    heroImage: "/collections/lake/elevations/devonshire-large.jpg",
    rooms: [
      { name: "Master Bedroom", dimensions: "12'0\" x 15'6\"", level: "Main Floor", notes: "Gas fireplace" },
      { name: "Great Room", dimensions: "15'6\" x 16'0\"", level: "Main Floor", notes: "Vaulted ceiling, gas fireplace" },
      { name: "Kitchen", dimensions: "9'6\" x 17'0\"", level: "Main Floor", notes: "Island" },
      { name: "Dining Room", dimensions: "11'0\" x 12'10\"", level: "Main Floor" },
      { name: "Bedroom 2", dimensions: "12'0\" x 10'0\"", level: "Main Floor" },
      { name: "Loft", dimensions: "11'6\" x 17'0\"", level: "Second Floor" },
      { name: "Bedroom 3", dimensions: "9'4\" x 10'0\"", level: "Second Floor" },
      { name: "Study / Bedroom 4", dimensions: "10'4\" x 9'6\"", level: "Second Floor" },
    ],
    features: [
      "Gas fireplace in master bedroom",
      "Direct vent gas fireplace in great room",
      "Vaulted ceiling",
      "Coffered ceiling in foyer",
      "Glass shower in ensuite",
      "Walk-in closet",
    ],
    garageSize: "20'0\" x 20'0\"",
    optionalGarage: "10'0\" x 20'0\"",
  },
  {
    slug: "carrying-place",
    name: "Carrying Place",
    collection: "lake",
    type: "bungalow",
    description: "A well-appointed bungalow featuring dual gas fireplaces in the master bedroom and vaulted great room, a breakfast nook with flush breakfast bar, and a coffered-ceiling foyer. The gourmet kitchen includes granite countertops, and the master ensuite features a glass shower with walk-in closet. Finished with 9-foot ceilings, ceramic tile flooring, and smooth ceilings throughout — the loft option extends the home to 2,382 sq ft with a study and third bedroom.",
    bedrooms: "2–4",
    bathrooms: "2–3",
    sqftRange: "1,612 – 2,382 sq ft",
    sqftMin: 1612,
    sqftMax: 2382,
    hasLoft: true,
    elevations: [
      { id: "a", label: "Elevation A", image: "/collections/lake/elevations/carrying-place-a.jpg", imageLarge: "/collections/lake/elevations/carrying-place-large.jpg", imageLoft: "/collections/lake/elevations/carrying-place-a-loft.jpg", sqft: 1612, sqftLoft: 2382 },
      { id: "b", label: "Elevation B", image: "/collections/lake/elevations/carrying-place-b.jpg", imageLarge: "/collections/lake/elevations/carrying-place-b.jpg", imageLoft: "/collections/lake/elevations/carrying-place-b-loft.jpg", sqft: 1621, sqftLoft: 2361 },
      { id: "b2", label: "Elevation B2 — Brick & Stone", image: "/collections/lake/elevations/carrying-place-b2.jpg", imageLarge: "/collections/lake/elevations/carrying-place-b2.jpg", imageLoft: "/collections/lake/elevations/carrying-place-b2-loft.jpg", sqft: 1621, sqftLoft: 2361 },
    ],
    floorPlans: [
      { level: "Main Floor", image: "/collections/lake/floorplans/carrying-place-main.jpg" },
      { level: "Second Floor", image: "/collections/lake/floorplans/carrying-place-second.jpg" },
    ],
    pdfs: [
      { label: "Rendering Sheet", href: "/collections/lake/pdfs/carrying-place-r.pdf" },
      { label: "Floor Plan PDF", href: "/collections/lake/pdfs/carrying-place-fp.pdf" },
    ],
    heroImage: "/collections/lake/elevations/carrying-place-large.jpg",
    rooms: [
      { name: "Master Bedroom", dimensions: "16'0\" x 12'0\"", level: "Main Floor", notes: "Gas fireplace" },
      { name: "Great Room", dimensions: "13'0\" x 20'0\"", level: "Main Floor", notes: "Vaulted ceiling, gas fireplace" },
      { name: "Kitchen", dimensions: "11'6\" x 10'0\"", level: "Main Floor", notes: "Flush breakfast bar" },
      { name: "Breakfast", dimensions: "11'6\" x 10'0\"", level: "Main Floor" },
      { name: "Dining Room", dimensions: "11'0\" x 14'0\"", level: "Main Floor" },
      { name: "Bedroom 2", dimensions: "11'0\" x 10'0\"", level: "Main Floor" },
      { name: "Loft", dimensions: "11'6\" x 21'0\"", level: "Second Floor", notes: "Sloped ceiling" },
      { name: "Bedroom 3", dimensions: "10'4\" x 10'6\"", level: "Second Floor" },
      { name: "Study / Bedroom 4", dimensions: "9'6\" x 10'0\"", level: "Second Floor" },
    ],
    features: [
      "Direct vent gas fireplace in master and great room",
      "Vaulted ceiling",
      "Coffered ceiling in foyer",
      "Glass shower in ensuite",
      "Walk-in closet",
    ],
    garageSize: "20'0\" x 20'0\"",
    optionalGarage: "10'0\" x 20'0\"",
  },
  {
    slug: "sandbanks",
    name: "Sandbanks",
    collection: "lake",
    type: "bungalow",
    description: "A premium bungalow with 3 bedrooms on the main floor, a powder room, and a vaulted great room with gas fireplace. The Sandbanks features a master suite with its own gas fireplace, glass shower, and walk-in closet, plus a gourmet kitchen with granite countertops and island. With 9-foot ceilings, coffered foyer, ceramic tile in all wet areas, and a generous 29'7\" garage — the optional loft adds two bedrooms up to 2,367 sq ft.",
    bedrooms: "3–5",
    bathrooms: "2.5–3.5",
    sqftRange: "1,790 – 2,367 sq ft",
    sqftMin: 1790,
    sqftMax: 2367,
    hasLoft: true,
    elevations: [
      { id: "a", label: "Elevation A", image: "/collections/lake/elevations/sandbanks-a.jpg", imageLarge: "/collections/lake/elevations/sandbanks-large.jpg", imageLoft: "/collections/lake/elevations/sandbanks-a-loft.jpg", sqft: 1790, sqftLoft: 2367 },
      { id: "b", label: "Elevation B", image: "/collections/lake/elevations/sandbanks-b.jpg", imageLarge: "/collections/lake/elevations/sandbanks-b.jpg", imageLoft: "/collections/lake/elevations/sandbanks-b-loft.jpg", sqft: 1790, sqftLoft: 2340 },
      { id: "b2", label: "Elevation B2 — Brick & Stone", image: "/collections/lake/elevations/sandbanks-b2.jpg", imageLarge: "/collections/lake/elevations/sandbanks-b2.jpg", imageLoft: "/collections/lake/elevations/sandbanks-b2-loft.jpg", sqft: 1790, sqftLoft: 2340 },
    ],
    floorPlans: [
      { level: "Main Floor", image: "/collections/lake/floorplans/sandbanks-main.jpg" },
      { level: "Second Floor", image: "/collections/lake/floorplans/sandbanks-second.jpg" },
    ],
    pdfs: [
      { label: "Rendering Sheet", href: "/collections/lake/pdfs/sandbanks-r.pdf" },
      { label: "Floor Plan PDF", href: "/collections/lake/pdfs/sandbanks-fp.pdf" },
    ],
    heroImage: "/collections/lake/elevations/sandbanks-large.jpg",
    rooms: [
      { name: "Master Bedroom", dimensions: "16'0\" x 13'0\"", level: "Main Floor", notes: "Gas fireplace" },
      { name: "Great Room", dimensions: "15'0\" x 16'0\"", level: "Main Floor", notes: "Vaulted ceiling, gas fireplace" },
      { name: "Kitchen", dimensions: "9'6\" x 16'0\"", level: "Main Floor", notes: "Island" },
      { name: "Dining Room", dimensions: "13'4\" x 12'0\"", level: "Main Floor" },
      { name: "Bedroom 2", dimensions: "9'0\" x 10'0\"", level: "Main Floor" },
      { name: "Bedroom 3", dimensions: "9'0\" x 10'0\"", level: "Main Floor" },
      { name: "Loft", dimensions: "14'0\" x 12'8\"", level: "Second Floor", notes: "Open to below" },
      { name: "Bedroom 4", dimensions: "9'0\" x 8'6\"", level: "Second Floor" },
      { name: "Study / Bedroom 5", dimensions: "9'0\" x 12'4\"", level: "Second Floor" },
    ],
    features: [
      "Direct vent gas fireplace in master and great room",
      "Vaulted ceiling",
      "Coffered ceiling in foyer",
      "Glass shower in ensuite",
      "Walk-in closet",
      "Powder room",
    ],
    garageSize: "29'7\" x 20'0\"",
  },
  {
    slug: "loyalist",
    name: "Loyalist",
    collection: "lake",
    type: "bungalow",
    description: "A luxurious bungalow with 3 bedrooms on the main floor, coffered ceilings in the foyer and dining room, and a grand vaulted great room. The Loyalist features a master suite with oversized glass shower, a gourmet kitchen with granite countertops and island, and a breakfast nook. Built with 9-foot ceilings, ceramic tile, high-performance windows, and a 33' triple-width garage — the optional loft adds 2 bedrooms and a study up to 2,659 sq ft.",
    bedrooms: "3–5",
    bathrooms: "2.5–3.5",
    sqftRange: "1,860 – 2,659 sq ft",
    sqftMin: 1860,
    sqftMax: 2659,
    hasLoft: true,
    elevations: [
      { id: "a", label: "Elevation A", image: "/collections/lake/elevations/loyalist-a.jpg", imageLarge: "/collections/lake/elevations/loyalist-large.jpg", imageLoft: "/collections/lake/elevations/loyalist-a-loft.jpg", sqft: 1860, sqftLoft: 2635 },
      { id: "b", label: "Elevation B", image: "/collections/lake/elevations/loyalist-b.jpg", imageLarge: "/collections/lake/elevations/loyalist-b.jpg", imageLoft: "/collections/lake/elevations/loyalist-b-loft.jpg", sqft: 1860, sqftLoft: 2659 },
      { id: "b2", label: "Elevation B2 — Brick & Stone", image: "/collections/lake/elevations/loyalist-b2.jpg", imageLarge: "/collections/lake/elevations/loyalist-b2.jpg", imageLoft: "/collections/lake/elevations/loyalist-b2-loft.jpg", sqft: 1860, sqftLoft: 2659 },
    ],
    floorPlans: [
      { level: "Main Floor", image: "/collections/lake/floorplans/loyalist-main.jpg" },
      { level: "Second Floor", image: "/collections/lake/floorplans/loyalist-second.jpg" },
    ],
    pdfs: [
      { label: "Rendering Sheet", href: "/collections/lake/pdfs/loyalist-r.pdf" },
      { label: "Floor Plan PDF", href: "/collections/lake/pdfs/loyalist-fp.pdf" },
    ],
    heroImage: "/collections/lake/elevations/loyalist-large.jpg",
    rooms: [
      { name: "Master Bedroom", dimensions: "11'0\" x 17'0\"", level: "Main Floor" },
      { name: "Great Room", dimensions: "13'0\" x 26'0\"", level: "Main Floor", notes: "Vaulted ceiling" },
      { name: "Kitchen", dimensions: "11'8\" x 12'0\"", level: "Main Floor", notes: "Island" },
      { name: "Breakfast", dimensions: "11'0\" x 12'0\"", level: "Main Floor" },
      { name: "Bedroom 2", dimensions: "13'6\" x 10'0\"", level: "Main Floor" },
      { name: "Bedroom 3", dimensions: "10'4\" x 11'0\"", level: "Main Floor", notes: "Gas fireplace" },
      { name: "Loft", dimensions: "11'8\" x 17'0\"", level: "Second Floor" },
      { name: "Bedroom 4", dimensions: "11'0\" x 13'0\"", level: "Second Floor" },
      { name: "Study / Bedroom 5", dimensions: "11'0\" x 13'0\"", level: "Second Floor" },
    ],
    features: [
      "Direct vent gas fireplace",
      "Vaulted ceiling",
      "Coffered ceiling in foyer and dining",
      "Glass shower in ensuite",
      "Walk-in closet",
      "Powder room",
    ],
    garageSize: "33'0\" x 22'0\"",
  },
  {
    slug: "quinte",
    name: "Quinte",
    collection: "lake",
    type: "bungalow",
    description: "A grand bungalow with a cathedral-ceiling great room, coffered-ceiling dining room, a courtyard entry, and 3 bedrooms on the main floor with walk-in closets. The gourmet kitchen features granite countertops, and the master ensuite includes a glass shower. With 9-foot ceilings, ceramic tile, smooth finishes, a 2-car plus 1-car garage, and high-efficiency heating with central air — the optional loft adds 2 bedrooms and a study up to 2,707 sq ft.",
    bedrooms: "3–5",
    bathrooms: "2.5–3.5",
    sqftRange: "2,031 – 2,707 sq ft",
    sqftMin: 2031,
    sqftMax: 2707,
    hasLoft: true,
    elevations: [
      { id: "a", label: "Elevation A", image: "/collections/lake/elevations/quinte-a.jpg", imageLarge: "/collections/lake/elevations/quinte-large.jpg", imageLoft: "/collections/lake/elevations/quinte-a-loft.jpg", sqft: 2041, sqftLoft: 2707 },
      { id: "b", label: "Elevation B", image: "/collections/lake/elevations/quinte-b.jpg", imageLarge: "/collections/lake/elevations/quinte-b.jpg", imageLoft: "/collections/lake/elevations/quinte-b-loft.jpg", sqft: 2031, sqftLoft: 2681 },
      { id: "b2", label: "Elevation B2 — Brick & Stone", image: "/collections/lake/elevations/quinte-b2.jpg", imageLarge: "/collections/lake/elevations/quinte-b2.jpg", imageLoft: "/collections/lake/elevations/quinte-b2-loft.jpg", sqft: 2031, sqftLoft: 2681 },
    ],
    floorPlans: [
      { level: "Main Floor", image: "/collections/lake/floorplans/quinte-main.jpg" },
      { level: "Second Floor", image: "/collections/lake/floorplans/quinte-second.jpg" },
    ],
    pdfs: [
      { label: "Rendering Sheet", href: "/collections/lake/pdfs/quinte-r.pdf" },
      { label: "Floor Plan PDF", href: "/collections/lake/pdfs/quinte-fp.pdf" },
    ],
    heroImage: "/collections/lake/elevations/quinte-large.jpg",
    rooms: [
      { name: "Master Bedroom", dimensions: "12'0\" x 17'0\"", level: "Main Floor" },
      { name: "Great Room", dimensions: "16'0\" x 19'0\"", level: "Main Floor", notes: "Cathedral ceiling, gas fireplace" },
      { name: "Kitchen", dimensions: "10'0\" x 14'0\"", level: "Main Floor" },
      { name: "Dining Room", dimensions: "12'0\" x 14'0\"", level: "Main Floor", notes: "Coffered ceiling" },
      { name: "Bedroom 2", dimensions: "12'0\" x 16'0\"", level: "Main Floor" },
      { name: "Bedroom 3", dimensions: "11'0\" x 11'0\"", level: "Main Floor" },
      { name: "Loft", dimensions: "12'6\" x 18'6\"", level: "Second Floor" },
      { name: "Bedroom 4", dimensions: "11'0\" x 11'8\"", level: "Second Floor" },
      { name: "Study / Bedroom 5", dimensions: "11'0\" x 10'4\"", level: "Second Floor" },
    ],
    features: [
      "Cathedral ceiling in great room",
      "Direct vent gas fireplace",
      "Coffered ceiling in dining room",
      "Glass shower in ensuite",
      "Walk-in closets",
      "Courtyard",
    ],
    garageSize: "23'0\" x 23'0\"",
  },
  {
    slug: "west-lake",
    name: "West Lake",
    collection: "lake",
    type: "bungalow",
    description: "An expansive bungalow with 3 bedrooms on the main floor, a vaulted great room, and a master suite with gas fireplace and glass shower. The gourmet kitchen features granite countertops opening to a large breakfast area, complemented by a mud room and powder room. Built with 9-foot ceilings, ceramic tile, oak-trimmed staircases, and a generous 29'7\" garage — the optional loft adds 2 bedrooms up to 3,133 sq ft of estate living.",
    bedrooms: "3–5",
    bathrooms: "2.5–3.5",
    sqftRange: "2,311 – 3,133 sq ft",
    sqftMin: 2311,
    sqftMax: 3133,
    hasLoft: true,
    elevations: [
      { id: "a", label: "Elevation A", image: "/collections/lake/elevations/west-lake-a.jpg", imageLarge: "/collections/lake/elevations/west-lake-large.jpg", imageLoft: "/collections/lake/elevations/west-lake-a-loft.jpg", sqft: 2311, sqftLoft: 3133 },
      { id: "b", label: "Elevation B", image: "/collections/lake/elevations/west-lake-b.jpg", imageLarge: "/collections/lake/elevations/west-lake-b.jpg", imageLoft: "/collections/lake/elevations/west-lake-b-loft.jpg", sqft: 2316, sqftLoft: 3133 },
      { id: "b2", label: "Elevation B2 — Brick & Stone", image: "/collections/lake/elevations/west-lake-b2.jpg", imageLarge: "/collections/lake/elevations/west-lake-b2.jpg", imageLoft: "/collections/lake/elevations/west-lake-b2-loft.jpg", sqft: 2316, sqftLoft: 3133 },
    ],
    floorPlans: [
      { level: "Main Floor", image: "/collections/lake/floorplans/west-lake-main.jpg" },
      { level: "Second Floor", image: "/collections/lake/floorplans/west-lake-second.jpg" },
    ],
    pdfs: [
      { label: "Rendering Sheet", href: "/collections/lake/pdfs/west-lake-r.pdf" },
      { label: "Floor Plan PDF", href: "/collections/lake/pdfs/west-lake-fp.pdf" },
    ],
    heroImage: "/collections/lake/elevations/west-lake-large.jpg",
    rooms: [
      { name: "Master Bedroom", dimensions: "18'11\" x 13'0\"", level: "Main Floor", notes: "Gas fireplace" },
      { name: "Great Room", dimensions: "20'6\" x 15'0\"", level: "Main Floor", notes: "Vaulted ceiling" },
      { name: "Kitchen", dimensions: "9'6\" x 13'5\"", level: "Main Floor" },
      { name: "Breakfast", dimensions: "11'0\" x 16'0\"", level: "Main Floor" },
      { name: "Dining Room", dimensions: "13'0\" x 12'0\"", level: "Main Floor" },
      { name: "Bedroom 2", dimensions: "13'6\" x 10'0\"", level: "Main Floor" },
      { name: "Bedroom 3", dimensions: "12'0\" x 10'0\"", level: "Main Floor" },
      { name: "Loft", dimensions: "18'2\" x 13'5\"", level: "Second Floor" },
      { name: "Bedroom 4", dimensions: "12'7\" x 11'11\"", level: "Second Floor" },
      { name: "Study / Bedroom 5", dimensions: "12'0\" x 10'0\"", level: "Second Floor" },
    ],
    features: [
      "Direct vent gas fireplace in master",
      "Vaulted ceiling in great room",
      "Glass shower in ensuite",
      "Walk-in closet",
      "Mud room",
      "Powder room",
    ],
    garageSize: "29'7\" x 20'0\"",
  },
  {
    slug: "prince-edward",
    name: "Prince Edward",
    collection: "lake",
    type: "bungalow",
    description: "A prestigious bungalow with 3 bedrooms, a vaulted great room with gas fireplace, an optional gas fireplace in the master, and a gourmet kitchen with granite countertops, pantry, and servery. The master ensuite features a glass shower and walk-in closet. With 9-foot ceilings, ceramic tile, a mud room, powder room, and a 2-car garage — the optional loft adds 2 bedrooms and a study up to 3,213 sq ft of luxury lakeside living.",
    bedrooms: "3–5",
    bathrooms: "2.5–3.5",
    sqftRange: "2,336 – 3,213 sq ft",
    sqftMin: 2336,
    sqftMax: 3213,
    hasLoft: true,
    elevations: [
      { id: "a", label: "Elevation A", image: "/collections/lake/elevations/prince-edward-a.jpg", imageLarge: "/collections/lake/elevations/prince-edward-large.jpg", imageLoft: "/collections/lake/elevations/prince-edward-a-loft.jpg", sqft: 2336, sqftLoft: 3202 },
      { id: "b", label: "Elevation B", image: "/collections/lake/elevations/prince-edward-b.jpg", imageLarge: "/collections/lake/elevations/prince-edward-b.jpg", imageLoft: "/collections/lake/elevations/prince-edward-b-loft.jpg", sqft: 2336, sqftLoft: 3213 },
      { id: "b2", label: "Elevation B2 — Brick & Stone", image: "/collections/lake/elevations/prince-edward-b2.jpg", imageLarge: "/collections/lake/elevations/prince-edward-b2.jpg", imageLoft: "/collections/lake/elevations/prince-edward-b2-loft.jpg", sqft: 2336, sqftLoft: 3213 },
    ],
    floorPlans: [
      { level: "Main Floor", image: "/collections/lake/floorplans/prince-edward-main.jpg" },
      { level: "Second Floor", image: "/collections/lake/floorplans/prince-edward-second.jpg" },
    ],
    pdfs: [
      { label: "Rendering Sheet", href: "/collections/lake/pdfs/prince-edward-r.pdf" },
      { label: "Floor Plan PDF", href: "/collections/lake/pdfs/prince-edward-fp.pdf" },
    ],
    heroImage: "/collections/lake/elevations/prince-edward-large.jpg",
    rooms: [
      { name: "Master Bedroom", dimensions: "13'4\" x 16'0\"", level: "Main Floor", notes: "Optional gas fireplace" },
      { name: "Great Room", dimensions: "20'0\" x 14'0\"", level: "Main Floor", notes: "Vaulted ceiling, gas fireplace" },
      { name: "Kitchen", dimensions: "14'6\" x 9'4\"", level: "Main Floor" },
      { name: "Breakfast", dimensions: "14'0\" x 11'0\"", level: "Main Floor" },
      { name: "Dining Room", dimensions: "13'0\" x 12'6\"", level: "Main Floor" },
      { name: "Bedroom 2", dimensions: "11'6\" x 12'0\"", level: "Main Floor" },
      { name: "Bedroom 3", dimensions: "11'0\" x 11'0\"", level: "Main Floor" },
      { name: "Loft", dimensions: "14'6\" x 14'2\"", level: "Second Floor" },
      { name: "Bedroom 4", dimensions: "11'6\" x 11'0\"", level: "Second Floor" },
      { name: "Study / Bedroom 5", dimensions: "12'6\" x 11'6\"", level: "Second Floor" },
    ],
    features: [
      "Direct vent gas fireplace in great room",
      "Optional gas fireplace in master",
      "Vaulted ceiling",
      "Glass shower in ensuite",
      "Walk-in closet",
      "Pantry and servery",
      "Mud room",
      "Powder room",
    ],
    garageSize: "22'0\" x 20'0\"",
  },
  {
    slug: "northpoint",
    name: "Northpoint",
    collection: "lake",
    type: "bungalow",
    description: "The crown jewel of the Lake Collection — a sprawling estate bungalow with a guest suite featuring its own ensuite, a private library, and dual walk-in closets in the master. The gourmet kitchen includes granite countertops, and the great room is anchored by a gas fireplace. Built with 9-foot ceilings, ceramic tile, smooth finishes, high-performance windows, and a 2-car plus 1-car garage — the optional loft with additional bedrooms reaches up to 3,738 sq ft of estate living.",
    bedrooms: "2–5",
    bathrooms: "3.5–4.5",
    sqftRange: "2,717 – 3,738 sq ft",
    sqftMin: 2717,
    sqftMax: 3738,
    hasLoft: true,
    elevations: [
      { id: "a", label: "Elevation A", image: "/collections/lake/elevations/northpoint-a.jpg", imageLarge: "/collections/lake/elevations/northpoint-large.jpg", imageLoft: "/collections/lake/elevations/northpoint-a-loft.jpg", imageLoftLarge: "/collections/lake/elevations/northpoint-a-loft-large.jpg", sqft: 2717, sqftLoft: 3727 },
      { id: "b", label: "Elevation B", image: "/collections/lake/elevations/northpoint-b.jpg", imageLarge: "/collections/lake/elevations/northpoint-b.jpg", imageLoft: "/collections/lake/elevations/northpoint-b-loft.jpg", sqft: 2728, sqftLoft: 3738 },
      { id: "b2", label: "Elevation B2 — Brick & Stone", image: "/collections/lake/elevations/northpoint-b2.jpg", imageLarge: "/collections/lake/elevations/northpoint-b2.jpg", imageLoft: "/collections/lake/elevations/northpoint-b2-loft.jpg", sqft: 2728, sqftLoft: 3738 },
    ],
    floorPlans: [
      { level: "Main Floor", image: "/collections/lake/floorplans/northpoint-main.jpg" },
      { level: "Second Floor", image: "/collections/lake/floorplans/northpoint-second.jpg" },
    ],
    pdfs: [
      { label: "Rendering Sheet", href: "/collections/lake/pdfs/northpoint-r.pdf" },
      { label: "Floor Plan PDF", href: "/collections/lake/pdfs/northpoint-fp.pdf" },
    ],
    heroImage: "/collections/lake/elevations/northpoint-large.jpg",
    rooms: [
      { name: "Master Bedroom", dimensions: "19'0\" x 16'0\"", level: "Main Floor", notes: "Optional gas fireplace" },
      { name: "Great Room", dimensions: "15'0\" x 18'10\"", level: "Main Floor", notes: "Direct vent gas fireplace" },
      { name: "Kitchen", dimensions: "12'8\" x 11'6\"", level: "Main Floor" },
      { name: "Breakfast", dimensions: "12'0\" x 11'6\"", level: "Main Floor" },
      { name: "Dining Room", dimensions: "16'0\" x 19'0\"", level: "Main Floor" },
      { name: "Guest Suite", dimensions: "15'0\" x 11'0\"", level: "Main Floor", notes: "Ensuite" },
      { name: "Bedroom 2", dimensions: "15'0\" x 11'0\"", level: "Main Floor", notes: "Semi-ensuite" },
      { name: "Library", dimensions: "12'0\" x 13'2\"", level: "Main Floor" },
      { name: "Loft", dimensions: "19'2\" x 17'10\"", level: "Second Floor", notes: "Open to below" },
      { name: "Bedroom 4", dimensions: "11'0\" x 13'0\"", level: "Second Floor" },
      { name: "Bedroom 5", dimensions: "12'4\" x 19'4\"", level: "Second Floor" },
    ],
    features: [
      "Direct vent gas fireplace in great room",
      "Optional gas fireplace in master",
      "Guest suite with ensuite",
      "Library",
      "Dual walk-in closets",
      "Powder room",
      "9' ceilings",
    ],
    garageSize: "23'0\" x 23'0\"",
  },
];

/* ─── Collection definitions ─── */

export const VINEYARD_COLLECTION: Collection = {
  slug: "vineyard",
  name: "The Vineyard Collection",
  tagline: "Homes on 65' Homesites",
  description:
    "These spacious homes are nestled around natural green spaces and parks. The home styles and designs have been created for families of all shapes and sizes — bungalows, bungalow lofts, and two-storey homes with architectural details of elegance and refinement.",
  homesiteSize: "65 ft",
  heroImage: "/images/vineyard-collection-render.jpg",
  brochureUrl: "https://issuu.com/adlogicview/docs/vineyard_web_booklet?fr=sM2NkNzMxMjEzOTM",
  models: VINEYARD_MODELS,
};

export const LAKE_COLLECTION: Collection = {
  slug: "lake",
  name: "The Lake Collection",
  tagline: "Luxury Residences on 150' Homesites",
  description:
    "These luxury residences on amazing 150 foot homesites create picture-perfect streetscapes with stunning lake views backing onto sandy dunes. Bungalow and bungalow loft designs with premium waterfront positioning.",
  homesiteSize: "150 ft",
  heroImage: "/images/lake-collection-render.jpg",
  brochureUrl: "https://issuu.com/adlogicview/docs/lake_web_booklet?fr=sZjRhNzMxMjEzOTM",
  models: LAKE_MODELS,
};

export const ALL_COLLECTIONS: Collection[] = [VINEYARD_COLLECTION, LAKE_COLLECTION];

/* ─── Lookup helpers ─── */

export function getCollectionBySlug(slug: string): Collection | undefined {
  return ALL_COLLECTIONS.find((c) => c.slug === slug);
}

export function getModelBySlug(collectionSlug: string, modelSlug: string): HomeModel | undefined {
  const collection = getCollectionBySlug(collectionSlug);
  return collection?.models.find((m) => m.slug === modelSlug);
}

export function getAllModelParams(): { collection: string; model: string }[] {
  return ALL_COLLECTIONS.flatMap((c) =>
    c.models.map((m) => ({ collection: c.slug, model: m.slug }))
  );
}
