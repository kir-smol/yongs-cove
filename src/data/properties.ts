/* ─── Shared types ─── */

export type ImageCategory =
  | "exterior"
  | "interior"
  | "kitchen"
  | "living"
  | "upper"
  | "bedroom"
  | "bathroom"
  | "aerial";

export interface PropertyImage {
  src: string;
  alt: string;
  category: ImageCategory;
}

export interface Room {
  level: string;
  name: string;
  dimensions: string;
  imperial: string;
}

export interface Agent {
  name: string;
  title: string;
  brokerage: string;
  brokerageAddress: string;
  phone: string;
  officePhone: string;
  email: string | null;
  website: boolean;
  photo: string;
}

export interface PropertyData {
  slug: string;
  address: string;
  city: string;
  ward: string;
  province: string;
  postalCode: string;
  country: string;
  mls: string;
  price: string;
  priceNum: number;
  type: string;
  buildingType: string;
  style: string;
  storeys: string;
  bedrooms: number;
  bedroomsAboveGrade: number;
  bathrooms: number;
  bathroomsPartial: number;
  livingArea: string;
  lotSize: string;
  lotAcreage?: string;
  lotFrontage: string;
  lotDepth: string;
  yearBuilt: string;
  parking: string;
  totalParkingSpaces: number;
  heating: string;
  cooling: string;
  fireplace: string;
  basement: string;
  exteriorFinish: string;
  flooring: string;
  foundation: string;
  title: string;
  water: string;
  sewer: string;
  structures: string;
  rentalEquipment: string;
  features: string;
  lotFeatures?: string;
  waterfront?: string;
  access?: string;
  annualTaxes?: string;
  amenitiesNearby: string;
  communityName: string;
  locationDescription: string;
  status: string;
  daysOnMarket: number;
  builder: string;
  garageLabel: string;
  lotDisplayLabel: string;
}

export interface PropertyListing {
  property: PropertyData;
  rooms: Room[];
  description: string;
  highlights: string[];
  images: PropertyImage[];
  heroImage: string;
  galleryFeatured: number[];
  youtubeVideoId: string | null;
  agents: Agent[];
  googleMapsUrl: string;
}

export const IMAGE_CATEGORIES: { key: ImageCategory; label: string }[] = [
  { key: "exterior", label: "Exterior" },
  { key: "living", label: "Living Room" },
  { key: "kitchen", label: "Kitchen & Dining" },
  { key: "bedroom", label: "Bedrooms" },
  { key: "bathroom", label: "Bathrooms" },
  { key: "upper", label: "Upper Level" },
  { key: "interior", label: "Interior" },
  { key: "aerial", label: "Aerial" },
];

export const SHARED_AGENTS: Agent[] = [
  {
    name: "Julia Cresiun",
    title: "Salesperson",
    brokerage: "Right at Home Realty",
    brokerageAddress: "16850 Yonge Street #6B, Newmarket, ON L3Y 0A3",
    phone: "416-821-1343",
    officePhone: "905-953-0550",
    email: null,
    website: true,
    photo: "/images/julia-cresiun.png",
  },
  {
    name: "Ashot Kagramaniants",
    title: "Salesperson",
    brokerage: "Right at Home Realty",
    brokerageAddress: "16850 Yonge Street #6B, Newmarket, ON L3Y 0A3",
    phone: "647-400-4338",
    officePhone: "905-953-0550",
    email: null,
    website: false,
    photo: "/images/ashot-kagramaniants.png",
  },
];

/* ═══════════════════════════════════════════════════════════
   LISTING 1 — 13 East Vista Terrace
   ═══════════════════════════════════════════════════════════ */

const IMAGES_13EVT: PropertyImage[] = [
  // Exterior
  { src: "/images/25-front-of-house-hero.jpg", alt: "Front exterior at sunset — brick and stone bungaloft", category: "exterior" },
  { src: "/images/1-front-of-house.jpg", alt: "Front exterior — winter twilight with warm lighting", category: "exterior" },
  { src: "/images/23-front.jpg", alt: "Front exterior — daytime winter view, brick and stone", category: "exterior" },
  { src: "/images/22-backyard.jpg", alt: "Rear exterior at twilight — large windows, snowy backyard", category: "exterior" },
  // Great room & living
  { src: "/images/1-interior.jpg", alt: "Staged great room — double-height ceilings, fireplace, oak staircase", category: "living" },
  { src: "/images/2-interior.jpg", alt: "Great room — open concept living area", category: "living" },
  { src: "/images/3-interior.jpg", alt: "Great room — staircase and fireplace view", category: "living" },
  { src: "/images/4-interior.jpg", alt: "Living area — natural light and hardwood floors", category: "living" },
  { src: "/images/5-interior.jpg", alt: "Open concept — living to kitchen flow", category: "living" },
  { src: "/images/6-interior.jpg", alt: "Living and dining area overview", category: "living" },
  { src: "/images/7-interior.jpg", alt: "Interior detail — main floor", category: "interior" },
  // Kitchen & dining
  { src: "/images/8-interior-kitchen.jpg", alt: "Kitchen — dark cabinetry, quartz island with bar stools", category: "kitchen" },
  { src: "/images/9-interior-dining-area.jpg", alt: "Kitchen and dining — open concept", category: "kitchen" },
  { src: "/images/10-interior-dining-area.jpg", alt: "Dining area — elegant staging", category: "kitchen" },
  { src: "/images/11-interior-dining-area.jpg", alt: "Dining area — view towards kitchen", category: "kitchen" },
  { src: "/images/12-interior-dining-area.jpg", alt: "Dining and kitchen — sliding doors to backyard", category: "kitchen" },
  // Primary suite
  { src: "/images/13-master-bedroom.jpg", alt: "Primary bedroom — tray ceiling, hardwood, large windows", category: "bedroom" },
  { src: "/images/14-master-bedroom.jpg", alt: "Primary bedroom — spacious layout with ensuite access", category: "bedroom" },
  { src: "/images/15-master-bath.jpg", alt: "Primary ensuite — dual vanity, quartz counters", category: "bathroom" },
  // Bedrooms
  { src: "/images/16-bedroom-1.jpg", alt: "Bedroom 2 — main floor", category: "bedroom" },
  { src: "/images/19-bedroom-2.jpg", alt: "Bedroom 4 — upper level", category: "bedroom" },
  { src: "/images/20-bedroom-3.jpg", alt: "Bedroom 5 — upper level", category: "bedroom" },
  { src: "/images/21-bedroom-3.jpg", alt: "Bedroom 5 — alternate angle", category: "bedroom" },
  // Upper level / Loft
  { src: "/images/17-upper-floor.jpg", alt: "Upper level loft — staged as living area, 15' x 19'", category: "upper" },
  { src: "/images/18-upper-floor.jpg", alt: "Upper level loft — overlooking great room", category: "upper" },
  // Bathrooms
  { src: "/images/19-bathroom-2.jpg", alt: "Upper level bathroom", category: "bathroom" },
  // Aerial
  { src: "/images/24-arial.jpg", alt: "Aerial — Young's Cove community with Bay of Quinte", category: "aerial" },
];

const LISTING_13EVT: PropertyListing = {
  property: {
    slug: "13-east-vista-terrace",
    address: "13 East Vista Terrace",
    city: "Quinte West",
    ward: "Murray Ward",
    province: "Ontario",
    postalCode: "K0K 1L0",
    country: "Canada",
    mls: "X12767930",
    price: "$1,100,000",
    priceNum: 1100000,
    type: "Single Family",
    buildingType: "House",
    style: "Bungalow with Loft",
    storeys: "1.5",
    bedrooms: 5,
    bedroomsAboveGrade: 5,
    bathrooms: 4,
    bathroomsPartial: 1,
    livingArea: "2,500–3,000 sq ft",
    lotSize: "72.3 x 147 ft",
    lotFrontage: "72 ft 3 in",
    lotDepth: "147 ft",
    yearBuilt: "New Construction",
    parking: "Garage",
    totalParkingSpaces: 9,
    heating: "Forced Air (Natural Gas)",
    cooling: "Central Air Conditioning",
    fireplace: "1",
    basement: "Crawl Space",
    exteriorFinish: "Brick & Stone",
    flooring: "Hardwood, Tile",
    foundation: "Concrete",
    title: "Freehold",
    water: "Municipal Water",
    sewer: "Sanitary Sewer",
    structures: "Deck, Porch",
    rentalEquipment: "Tankless Water Heater",
    features: "Backs on Greenbelt, Conservation/Green Belt, Carpet Free",
    amenitiesNearby: "Beach, Marina, Golf, Schools, Hospital",
    communityName: "Murray Ward",
    locationDescription: "County Rd 64 & Gardenville Rd",
    status: "For Sale",
    daysOnMarket: 24,
    builder: "Briarwood Homes — Vineyard Collection",
    garageLabel: "3-Car Garage",
    lotDisplayLabel: "72.3 x 147 ft",
  },
  rooms: [
    { level: "Main Level", name: "Great Room", dimensions: "4.27m x 5.18m", imperial: "14' x 17'" },
    { level: "Main Level", name: "Eating Area", dimensions: "4.17m x 3.35m", imperial: "13'8\" x 11'" },
    { level: "Main Level", name: "Kitchen", dimensions: "4.32m x 3.05m", imperial: "14'2\" x 10'" },
    { level: "Main Level", name: "Primary Bedroom", dimensions: "4.47m x 4.88m", imperial: "14'8\" x 16'" },
    { level: "Main Level", name: "Bedroom 2", dimensions: "3.35m x 3.05m", imperial: "11' x 10'" },
    { level: "Main Level", name: "Bedroom 3", dimensions: "3.35m x 3.05m", imperial: "11' x 10'" },
    { level: "Upper Level", name: "Bedroom 4", dimensions: "4.17m x 3.35m", imperial: "13'8\" x 11'" },
    { level: "Upper Level", name: "Bedroom 5", dimensions: "3.51m x 3.35m", imperial: "11'6\" x 11'" },
    { level: "Upper Level", name: "Loft", dimensions: "4.57m x 5.79m", imperial: "15' x 19'" },
  ],
  description: `Luxury Bungalow with Loft Near Prestigious Prince Edward County — "Briarwood Homes Vineyard Collection"

Experience refined living in this stunning detached Luxury Bungaloft located just minutes from the heart of Prince Edward County. Featuring 5 bedrooms and 4 bathrooms, this executive home offers an exceptional layout designed for both comfort and elegance.

Situated on a premium 72.3 ft x 147 ft lot, the property boasts an expansive, private backyard — perfect for outdoor entertaining, a future pool, or a serene private oasis. This home comes with upscale finishes, timeless craftsmanship, and an abundance of natural light throughout.

The main floor offers an open-concept living and dining area, a chef-inspired kitchen, a luxurious primary suite, and additional bedrooms ideal for family or guests. The loft level provides added living space including 2 bedrooms, a full bathroom, a generous living area, and storage space.

A rare offering in a highly desirable community close to Prince Edward County — surrounded by wineries, nature, beaches, trails, and the charm of PEC living.`,
  highlights: [
    `Briarwood Homes "Vineyard Collection" — luxury bungaloft`,
    "5 bedrooms, 4 full bathrooms + 1 half bath",
    "Soaring double-height great room with gas fireplace",
    "Open-concept main floor — hardwood throughout",
    "Chef-inspired kitchen with quartz countertops and large island",
    "Luxurious primary suite on main floor",
    "Upper level loft (15' x 19') — ideal home office or family room",
    "2 upper bedrooms + full bathroom + storage",
    "Elegant oak staircase with wrought iron spindles",
    "Premium 72.3 x 147 ft lot backing onto greenbelt",
    "Brick and stone exterior — timeless curb appeal",
    "Deck and porch for outdoor living",
    "Carpet-free — hardwood and tile flooring",
    "Central A/C + forced air natural gas heating",
    "Minutes from Prince Edward County — wineries, beaches, trails",
    "Near Murray Canal and Bay of Quinte",
  ],
  images: IMAGES_13EVT,
  heroImage: "/images/25-front-of-house-hero.jpg",
  galleryFeatured: [0, 4, 11, 16, 26],
  youtubeVideoId: "IHyXb7Thkt0",
  agents: SHARED_AGENTS,
  googleMapsUrl: "https://maps.app.goo.gl/YD38zkcytSUF9ZfLA",
};

/* ═══════════════════════════════════════════════════════════
   LISTING 2 — 30 Wellers Way
   ═══════════════════════════════════════════════════════════ */

const IMAGES_30WW: PropertyImage[] = [
  // Exterior
  { src: "/30 Wellers Way Images/1-30-wellers-1-front-of-house.jpg", alt: "Aerial front exterior at sunset — brick and stone bungaloft", category: "exterior" },
  { src: "/30 Wellers Way Images/2-30-wellers-2-front-of-house.jpg", alt: "Front exterior at twilight — triple garage, lake views", category: "exterior" },
  { src: "/30 Wellers Way Images/3-30-wellers-3-front-of-house.jpg", alt: "Front exterior — covered porch, stone accents", category: "exterior" },
  // Great room & living
  { src: "/30 Wellers Way Images/4-30-wellers-interior-1.jpg", alt: "Great room — double-height ceilings, loft, kitchen island", category: "living" },
  { src: "/30 Wellers Way Images/5-30-wellers-interior-2.jpg", alt: "Great room — hardwood floors, expansive windows", category: "living" },
  { src: "/30 Wellers Way Images/6-30-wellers-interior-3.jpg", alt: "Great room — loft balcony, kitchen, pendant lights", category: "living" },
  { src: "/30 Wellers Way Images/7-30-wellers-interior-4.jpg", alt: "Living area — open concept to kitchen and loft", category: "living" },
  { src: "/30 Wellers Way Images/8-30-wellers-interior-5.jpg", alt: "Living room — gas fireplace, vaulted ceiling", category: "living" },
  { src: "/30 Wellers Way Images/9-30-wellers-interior-6.jpg", alt: "Great room — fireplace and large windows", category: "living" },
  // Kitchen & dining
  { src: "/30 Wellers Way Images/10-30-wellers-interior-7.jpg", alt: "Kitchen — quartz island, pendant lights, stainless appliances", category: "kitchen" },
  { src: "/30 Wellers Way Images/11-30-wellers-interior-8.jpg", alt: "Kitchen — custom cabinetry, glass-front uppers", category: "kitchen" },
  { src: "/30 Wellers Way Images/12-30-wellers-interior-9.jpg", alt: "Kitchen — range hood, built-in cabinetry", category: "kitchen" },
  { src: "/30 Wellers Way Images/13-30-wellers-interior-10.jpg", alt: "Kitchen — island, open concept to living", category: "kitchen" },
  { src: "/30 Wellers Way Images/14-30-wellers-interior-11.jpg", alt: "Kitchen — countertops, glass-front display cabinets", category: "kitchen" },
  { src: "/30 Wellers Way Images/15-30-wellers-interior-12.jpg", alt: "Kitchen — island with bar stools, sliding doors to deck", category: "kitchen" },
  { src: "/30 Wellers Way Images/16-30-wellers-interior-13.jpg", alt: "Kitchen and eating area — pendant lights, hardwood", category: "kitchen" },
  { src: "/30 Wellers Way Images/17-30-wellers-interior-14.jpg", alt: "Kitchen — full island, tall cabinetry, open to living", category: "kitchen" },
  { src: "/30 Wellers Way Images/18-30-wellers-interior-15.jpg", alt: "Hallway and entryway — hardwood floors", category: "interior" },
  // Dining & staircase
  { src: "/30 Wellers Way Images/19-30-wellers-interior-16.jpg", alt: "Dining area — staircase to loft, double-height windows", category: "living" },
  // Upper level / Loft
  { src: "/30 Wellers Way Images/20-30-wellers-interior-17.jpg", alt: "Upper level loft — sectional sofa, iron and oak railing", category: "upper" },
  { src: "/30 Wellers Way Images/21-30-wellers-interior-18.jpg", alt: "Upper level loft — overlooking great room", category: "upper" },
  // Primary suite
  { src: "/30 Wellers Way Images/22-30-wellers-master-bedroom.jpg", alt: "Primary bedroom — tray ceiling, ensuite access, hardwood", category: "bedroom" },
  { src: "/30 Wellers Way Images/23-30-wellers-master-bedroom.jpg", alt: "Primary bedroom — alternate angle", category: "bedroom" },
  { src: "/30 Wellers Way Images/24-30-wellers-bathroom.jpg", alt: "Primary ensuite — dual vanity, marble, glass shower", category: "bathroom" },
  { src: "/30 Wellers Way Images/25-30-wellers-master-bedroom.jpg", alt: "Primary bedroom — ensuite doorway, tray ceiling", category: "bedroom" },
  { src: "/30 Wellers Way Images/26-30-wellers-bathroom.jpg", alt: "Primary ensuite — freestanding tub, marble tile", category: "bathroom" },
  // Bedrooms
  { src: "/30 Wellers Way Images/27-30-wellers-bedroom.jpg", alt: "Bedroom 2 — green accents, countryside views", category: "bedroom" },
  { src: "/30 Wellers Way Images/28-30-wellers-bedroom.jpg", alt: "Bedroom 3 — warm lighting, nightstands", category: "bedroom" },
  { src: "/30 Wellers Way Images/29-30-wellers-bedroom.jpg", alt: "Bedroom 3 — neutral tones, large window", category: "bedroom" },
  { src: "/30 Wellers Way Images/30-30-wellers-bedroom.jpg", alt: "Bedroom 3 — alternate angle", category: "bedroom" },
  { src: "/30 Wellers Way Images/31-30-wellers-bedroom.jpg", alt: "Bedroom 4 — hardwood, water views", category: "bedroom" },
  { src: "/30 Wellers Way Images/32-30-wellers-bedroom.jpg", alt: "Bedroom 4 — alternate angle", category: "bedroom" },
  { src: "/30 Wellers Way Images/33-30-wellers-bedroom.jpg", alt: "Bedroom 5 — modern staging", category: "bedroom" },
  { src: "/30 Wellers Way Images/34-30-wellers-bedroom.jpg", alt: "Bedroom 5 — alternate angle", category: "bedroom" },
  // Bathrooms
  { src: "/30 Wellers Way Images/35-30-wellers-bathroom.jpg", alt: "Bathroom — dark tile, tub/shower, glass door", category: "bathroom" },
  { src: "/30 Wellers Way Images/36-30-wellers-bathroom.jpg", alt: "Laundry room — front-load washer and dryer, utility sink", category: "interior" },
  // Backyard
  { src: "/30 Wellers Way Images/37-30-wellers-backyard.jpg", alt: "Backyard at twilight — fire pit, Adirondack chairs", category: "exterior" },
  { src: "/30 Wellers Way Images/38-30-wellers-backyard.jpg", alt: "Aerial rear exterior at sunset — deck, fire pit, large yard", category: "exterior" },
];

const LISTING_30WW: PropertyListing = {
  property: {
    slug: "30-wellers-way",
    address: "30 Wellers Way",
    city: "Quinte West",
    ward: "Murray Ward",
    province: "Ontario",
    postalCode: "K0K 1L0",
    country: "Canada",
    mls: "X12784728",
    price: "$1,749,000",
    priceNum: 1749000,
    type: "Single Family",
    buildingType: "House",
    style: "Bungaloft",
    storeys: "1.5",
    bedrooms: 5,
    bedroomsAboveGrade: 5,
    bathrooms: 4,
    bathroomsPartial: 1,
    livingArea: "2,500–3,000 sq ft",
    lotSize: "180.8 x 619.6 ft",
    lotAcreage: "2–4.99 acres",
    lotFrontage: "180 ft 9 in",
    lotDepth: "619 ft 7 in",
    yearBuilt: "New Construction",
    parking: "Attached Garage",
    totalParkingSpaces: 9,
    heating: "Forced Air (Natural Gas)",
    cooling: "Central Air Conditioning",
    fireplace: "1",
    basement: "Crawl Space",
    exteriorFinish: "Brick & Stone",
    flooring: "Hardwood",
    foundation: "Poured Concrete",
    title: "Freehold",
    water: "Municipal Water",
    sewer: "Sanitary Sewer",
    structures: "Deck, Porch",
    rentalEquipment: "Water Heater, Tankless Water Heater",
    features: "Irregular lot size, Flat site",
    lotFeatures: "Lake view",
    waterfront: "Lake Ontario",
    access: "Year-round access",
    annualTaxes: "$10,551.88",
    amenitiesNearby: "Wineries, Fine Dining, Beaches, Prince Edward County",
    communityName: "Murray Ward",
    locationDescription: "Wellers Way & County Rd 64",
    status: "For Sale",
    daysOnMarket: 18,
    builder: "Briarwood Homes",
    garageLabel: "Attached Garage",
    lotDisplayLabel: "2–4.99 acres",
  },
  rooms: [
    { level: "Main Level", name: "Great Room", dimensions: "3.94m x 7.90m", imperial: "12'11\" x 25'11\"" },
    { level: "Main Level", name: "Kitchen", dimensions: "3.58m x 3.66m", imperial: "11'9\" x 12'" },
    { level: "Main Level", name: "Eating Area", dimensions: "3.33m x 3.66m", imperial: "10'11\" x 12'" },
    { level: "Main Level", name: "Primary Bedroom", dimensions: "3.33m x 4.88m", imperial: "10'11\" x 16'" },
    { level: "Main Level", name: "Bedroom 2", dimensions: "4.11m x 3.05m", imperial: "13'6\" x 10'" },
    { level: "Main Level", name: "Bedroom 3", dimensions: "3.05m x 3.33m", imperial: "10' x 10'11\"" },
    { level: "Upper Level", name: "Bedroom 4", dimensions: "3.33m x 3.94m", imperial: "10'11\" x 12'11\"" },
    { level: "Upper Level", name: "Bedroom 5", dimensions: "3.33m x 3.94m", imperial: "10'11\" x 12'11\"" },
    { level: "Upper Level", name: "Loft", dimensions: "3.58m x 5.16m", imperial: "11'9\" x 16'11\"" },
  ],
  description: `Luxury Bungaloft on 2 Acres Backing Onto Water — Near Prestigious Prince Edward County by Briarwood Homes

Just minutes from the heart of Prince Edward County, this exceptional residence offers the perfect blend of luxury, serenity, and convenience. Designed with elegance and comfort in mind, this home features an open-concept layout with soaring ceilings, expansive windows that flood the space with natural light, and premium finishes throughout.

The gourmet kitchen is a chef's dream, complete with high-end appliances, custom cabinetry, and a spacious island perfect for entertaining. The main-floor primary suite provides a peaceful retreat with a spa-inspired ensuite and generous walk-in closet.

The upper loft offers flexible living space — ideal for a home office, guest suite, or additional lounge area. Thoughtfully designed indoor and outdoor spaces make this home perfect for both relaxing and hosting.

Step outside to enjoy breathtaking water views, expansive green space, and the privacy of estate living — while still being close to wineries, fine dining, beaches, and all the charm Prince Edward County has to offer. A rare opportunity to own a luxury lakeside property in one of Ontario's most sought-after destinations.`,
  highlights: [
    "Briarwood Homes — luxury bungaloft on 2 acres",
    "5 bedrooms, 4 full bathrooms + 1 half bath",
    "Soaring ceilings with expansive natural light",
    "Open-concept layout with premium finishes throughout",
    "Gourmet kitchen with high-end appliances, custom cabinetry & island",
    "Main-floor primary suite with spa-inspired ensuite & walk-in closet",
    "Upper loft — ideal home office, guest suite, or lounge area",
    "2 upper bedrooms + full bathroom",
    "Breathtaking water views — backing onto Lake Ontario",
    "Estate-sized 2–4.99 acre lot (180.8 x 619.6 ft)",
    "Brick and stone exterior — timeless curb appeal",
    "Poured concrete foundation — built to last",
    "Hardwood flooring throughout",
    "Central A/C + forced air natural gas heating + gas fireplace",
    "Year-round access with attached garage (9 parking spaces)",
    "Minutes from Prince Edward County — wineries, fine dining, beaches",
  ],
  images: IMAGES_30WW,
  heroImage: "/30 Wellers Way Images/1-30-wellers-1-front-of-house.jpg",
  galleryFeatured: [0, 3, 9, 21, 36],
  youtubeVideoId: "qnEAwQUYp8g",
  agents: SHARED_AGENTS,
  googleMapsUrl: "https://www.google.com/maps/search/30+Wellers+Way,+Quinte+West,+Ontario+K0K+1L0",
};

/* ─── Exports ─── */

export const ALL_LISTINGS: PropertyListing[] = [
  LISTING_13EVT,
  LISTING_30WW,
];

export function getListingBySlug(slug: string): PropertyListing | undefined {
  return ALL_LISTINGS.find((l) => l.property.slug === slug);
}

export function getAllSlugs(): string[] {
  return ALL_LISTINGS.map((l) => l.property.slug);
}
