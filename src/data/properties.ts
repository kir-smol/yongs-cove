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
    lotDisplayLabel: "180.8 x 619.6 ft",
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

/* ═══════════════════════════════════════════════════════════
   LISTING 3 — 2 Blue Heron Drive
   ═══════════════════════════════════════════════════════════ */

const IMAGES_2BHD: PropertyImage[] = [
  { src: "/2 BLUE HERON DRIVE/1-2-Blue-Heron-Drive-front-of-house.jpg", alt: "Front exterior at twilight — brick and stone, double garage", category: "exterior" },
  { src: "/2 BLUE HERON DRIVE/2-2-Blue-Heron-Drive-interior.jpg", alt: "Great room — open concept, natural light", category: "living" },
  { src: "/2 BLUE HERON DRIVE/3-2-Blue-Heron-Drive-interior.jpg", alt: "Office — staged workspace, natural light", category: "interior" },
  { src: "/2 BLUE HERON DRIVE/4-2-Blue-Heron-Drive-interior.jpg", alt: "Kitchen — island, pendant lights, hardwood", category: "kitchen" },
  { src: "/2 BLUE HERON DRIVE/5-2-Blue-Heron-Drive-interior.jpg", alt: "Kitchen — cabinetry, stainless appliances", category: "kitchen" },
  { src: "/2 BLUE HERON DRIVE/6-2-Blue-Heron-Drive-interior.jpg", alt: "Dining area — open concept to kitchen", category: "kitchen" },
  { src: "/2 BLUE HERON DRIVE/7-2-Blue-Heron-Drive-interior.jpg", alt: "Living room — fireplace, large windows", category: "living" },
  { src: "/2 BLUE HERON DRIVE/8-2-Blue-Heron-Drive-interior.jpg", alt: "Interior — hallway, hardwood floors", category: "interior" },
  { src: "/2 BLUE HERON DRIVE/9-2-Blue-Heron-Drive-Bedroom-1.jpg", alt: "Primary bedroom — spacious layout, hardwood", category: "bedroom" },
  { src: "/2 BLUE HERON DRIVE/10-2-Blue-Heron-Drive-Bedroom-1.jpg", alt: "Primary bedroom — alternate angle", category: "bedroom" },
  { src: "/2 BLUE HERON DRIVE/11-2-Blue-Heron-Drive-Bedroom-2.jpg", alt: "Bedroom 2 — natural light, hardwood", category: "bedroom" },
  { src: "/2 BLUE HERON DRIVE/12-2-Blue-Heron-Drive-interior.jpg", alt: "Loft — open living space, railing", category: "upper" },
  { src: "/2 BLUE HERON DRIVE/13-2-Blue-Heron-Drive-Bedroom-3.jpg", alt: "Bedroom 3 — bright, large window", category: "bedroom" },
  { src: "/2 BLUE HERON DRIVE/14-2-Blue-Heron-Drive-laundry.jpg", alt: "Laundry room — washer and dryer, cabinetry", category: "interior" },
  { src: "/2 BLUE HERON DRIVE/15-2-Blue-Heron-Drive-backyard.jpg", alt: "Backyard — expansive private lot", category: "exterior" },
  { src: "/2 BLUE HERON DRIVE/16-2-Blue-Heron-Drive-area.jpg", alt: "Aerial — community and surroundings", category: "aerial" },
];

const LISTING_2BHD: PropertyListing = {
  property: {
    slug: "2-blue-heron-drive",
    address: "2 Blue Heron Drive",
    city: "Quinte West",
    ward: "Murray Ward",
    province: "Ontario",
    postalCode: "K0K 1L0",
    country: "Canada",
    mls: "X12768022",
    price: "$985,000",
    priceNum: 985000,
    type: "Single Family",
    buildingType: "House",
    style: "Detached",
    storeys: "2",
    bedrooms: 3,
    bedroomsAboveGrade: 3,
    bathrooms: 3,
    bathroomsPartial: 1,
    livingArea: "2,000–2,500 sq ft",
    lotSize: "94.6 x 144.7 ft",
    lotFrontage: "94 ft 7 in",
    lotDepth: "144 ft 8 in",
    yearBuilt: "New Construction",
    parking: "Attached Garage",
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
    rentalEquipment: "Water Heater, Tankless Water Heater",
    features: "Irregular lot size, Conservation/green belt, Sump Pump",
    lotFeatures: "Lake view",
    annualTaxes: "$0",
    amenitiesNearby: "Beach, Golf Nearby, Hospital, Schools",
    communityName: "Murray Ward",
    locationDescription: "County Rd 64 & Gardenville Rd",
    status: "For Sale",
    daysOnMarket: 25,
    builder: "Briarwood Homes",
    garageLabel: "Attached Garage",
    lotDisplayLabel: "94.6 x 144.7 ft",
  },
  rooms: [
    { level: "Main Level", name: "Dining Room", dimensions: "3.33m x 4.06m", imperial: "10'11\" x 13'4\"" },
    { level: "Main Level", name: "Kitchen", dimensions: "2.62m x 4.06m", imperial: "8'7\" x 13'4\"" },
    { level: "Main Level", name: "Great Room", dimensions: "4.67m x 4.27m", imperial: "15'4\" x 14'" },
    { level: "Main Level", name: "Living Room", dimensions: "3.66m x 3.33m", imperial: "12' x 10'11\"" },
    { level: "Second Level", name: "Primary Bedroom", dimensions: "4.55m x 3.94m", imperial: "14'11\" x 12'11\"" },
    { level: "Second Level", name: "Bedroom 2", dimensions: "3.05m x 3.23m", imperial: "10' x 10'7\"" },
    { level: "Second Level", name: "Bedroom 3", dimensions: "3.66m x 3.33m", imperial: "12' x 10'11\"" },
    { level: "Second Level", name: "Loft", dimensions: "5.46m x 4.19m", imperial: "17'11\" x 13'9\"" },
  ],
  description: `Experience refined living in this stunning detached luxury home located just minutes from the heart of Prince Edward County. Featuring 3 bedrooms and 3 bathrooms, this executive residence offers an exceptional layout designed for both comfort and elegance.

Situated on a premium 94.62 ft x 144.69 ft lot, the property boasts an expansive private backyard — perfect for outdoor entertaining, a future pool, or creating your own serene outdoor oasis.

This beautiful home showcases upscale finishes, timeless craftsmanship, and abundant natural light throughout. The main floor features an open-concept living and dining area, a chef-inspired kitchen, and a luxurious family room, ideal for both everyday living and entertaining.

A rare offering in a highly desirable community near Prince Edward County, surrounded by wineries, beaches, nature trails, and the charm of PEC living. Property taxes have not yet been assessed.`,
  highlights: [
    "Briarwood Homes — executive 2-storey home",
    "3 bedrooms, 3 full bathrooms + 1 half bath",
    "Open-concept living and dining area",
    "Chef-inspired kitchen with upscale finishes",
    "Luxurious family room with fireplace",
    "Premium 94.6 x 144.7 ft lot with expansive backyard",
    "Hardwood and tile flooring throughout",
    "Central A/C + forced air natural gas heating",
    "Attached garage with 9 parking spaces",
    "Minutes from Prince Edward County — wineries, beaches, trails",
  ],
  images: IMAGES_2BHD,
  heroImage: "/2 BLUE HERON DRIVE/1-2-Blue-Heron-Drive-front-of-house.jpg",
  galleryFeatured: [0, 1, 3, 8, 14],
  youtubeVideoId: null,
  agents: SHARED_AGENTS,
  googleMapsUrl: "https://www.google.com/maps/search/2+Blue+Heron+Drive,+Quinte+West,+Ontario+K0K+1L0",
};

/* ═══════════════════════════════════════════════════════════
   LISTING 4 — 18 Blue Heron Drive
   ═══════════════════════════════════════════════════════════ */

const IMAGES_18BHD: PropertyImage[] = [
  { src: "/18 BLUE HERON DRIVE/1-18-Blue-Heron-Drive-front-of-house.jpg", alt: "Front exterior at sunset — brick and stone, double garage", category: "exterior" },
  { src: "/18 BLUE HERON DRIVE/2-18-Blue-Heron-Drive-front-of-house.jpg", alt: "Front exterior — alternate angle at dusk", category: "exterior" },
  { src: "/18 BLUE HERON DRIVE/3-18-Blue-Heron-Drive-interior.jpg", alt: "Foyer — hardwood, natural light", category: "interior" },
  { src: "/18 BLUE HERON DRIVE/4-18-Blue-Heron-Drive-interior.jpg", alt: "Great room — fireplace, large windows", category: "living" },
  { src: "/18 BLUE HERON DRIVE/5-18-Blue-Heron-Drive-interior.jpg", alt: "Great room — fireplace, natural light", category: "living" },
  { src: "/18 BLUE HERON DRIVE/6-18-Blue-Heron-Drive-interior.jpg", alt: "Kitchen — island, cabinetry, open concept", category: "kitchen" },
  { src: "/18 BLUE HERON DRIVE/7-18-Blue-Heron-Drive-interior.jpg", alt: "Kitchen — appliances, pendant lights", category: "kitchen" },
  { src: "/18 BLUE HERON DRIVE/8-18-Blue-Heron-Drive-interior.jpg", alt: "Dining area — open to kitchen", category: "kitchen" },
  { src: "/18 BLUE HERON DRIVE/9-18-Blue-Heron-Drive-interior.jpg", alt: "Staircase — hardwood, iron railing", category: "interior" },
  { src: "/18 BLUE HERON DRIVE/10-18-Blue-Heron-Drive-interior.jpg", alt: "Loft — open living space, railing", category: "upper" },
  { src: "/18 BLUE HERON DRIVE/11-18-Blue-Heron-Drive-bedroom.jpg", alt: "Bedroom — spacious, hardwood floors", category: "bedroom" },
  { src: "/18 BLUE HERON DRIVE/12-18-Blue-Heron-Drive-bedroom.jpg", alt: "Bedroom — bright, large window", category: "bedroom" },
  { src: "/18 BLUE HERON DRIVE/13-18-Blue-Heron-Drive-bathroom.jpg", alt: "Bathroom — vanity, modern tile", category: "bathroom" },
  { src: "/18 BLUE HERON DRIVE/14-18-Blue-Heron-Drive-bedroom.jpg", alt: "Bedroom — natural light, neutral tones", category: "bedroom" },
  { src: "/18 BLUE HERON DRIVE/15-18-Blue-Heron-Drive-bedroom.jpg", alt: "Bedroom — spacious layout", category: "bedroom" },
  { src: "/18 BLUE HERON DRIVE/16-18-Blue-Heron-Drive-bedroom.jpg", alt: "Bedroom — alternate angle", category: "bedroom" },
  { src: "/18 BLUE HERON DRIVE/17-18-Blue-Heron-Drive-backyard.jpg", alt: "Backyard — large pie-shaped lot, deck", category: "exterior" },
  { src: "/18 BLUE HERON DRIVE/18-18-Blue-Heron-Drive-front-of-house.jpg", alt: "Front exterior — daytime view", category: "exterior" },
  { src: "/18 BLUE HERON DRIVE/19-18-Blue-Heron-Drive-backyard.jpg", alt: "Backyard — expansive green space", category: "exterior" },
  { src: "/18 BLUE HERON DRIVE/20-18-Blue-Heron-Drive-backyard.jpg", alt: "Backyard — rear view at twilight", category: "exterior" },
  { src: "/18 BLUE HERON DRIVE/21-18-Blue-Heron-Drive-front-of-house.jpg", alt: "Front exterior — street view", category: "exterior" },
  { src: "/18 BLUE HERON DRIVE/22-18-Blue-Heron-Drive-front-of-house.jpg", alt: "Front exterior — aerial view", category: "exterior" },
  { src: "/18 BLUE HERON DRIVE/23-18-Blue-Heron-Drive-front-of-house.jpg", alt: "Aerial — property and community", category: "aerial" },
];

const LISTING_18BHD: PropertyListing = {
  property: {
    slug: "18-blue-heron-drive",
    address: "18 Blue Heron Drive",
    city: "Quinte West",
    ward: "Murray Ward",
    province: "Ontario",
    postalCode: "K0K 1L0",
    country: "Canada",
    mls: "X12784614",
    price: "$985,000",
    priceNum: 985000,
    type: "Single Family",
    buildingType: "House",
    style: "Detached",
    storeys: "2",
    bedrooms: 4,
    bedroomsAboveGrade: 4,
    bathrooms: 3,
    bathroomsPartial: 1,
    livingArea: "2,500–3,000 sq ft",
    lotSize: "75.3 x 171.1 ft",
    lotFrontage: "75 ft 3 in",
    lotDepth: "171 ft 1 in",
    yearBuilt: "New Construction",
    parking: "Attached Garage",
    totalParkingSpaces: 9,
    heating: "Forced Air (Natural Gas)",
    cooling: "Central Air Conditioning",
    fireplace: "1",
    basement: "Crawl Space",
    exteriorFinish: "Brick & Stone",
    flooring: "Tile, Carpeted, Hardwood",
    foundation: "Concrete",
    title: "Freehold",
    water: "Municipal Water",
    sewer: "Sanitary Sewer",
    structures: "Deck, Porch",
    rentalEquipment: "Water Heater, Tankless Water Heater",
    features: "Conservation/green belt, Sump Pump",
    lotFeatures: "Lake view",
    annualTaxes: "$0",
    amenitiesNearby: "Beach, Golf Nearby, Hospital, Schools",
    communityName: "Murray Ward",
    locationDescription: "County Rd 64 & Gardenville Rd",
    status: "For Sale",
    daysOnMarket: 19,
    builder: "Briarwood Homes",
    garageLabel: "Attached Garage",
    lotDisplayLabel: "75.3 x 171.1 ft",
  },
  rooms: [
    { level: "Main Level", name: "Foyer", dimensions: "2.41m x 2.41m", imperial: "7'11\" x 7'11\"" },
    { level: "Main Level", name: "Dining Room", dimensions: "3.94m x 3.48m", imperial: "12'11\" x 11'5\"" },
    { level: "Main Level", name: "Eating Area", dimensions: "4.24m x 2.92m", imperial: "13'11\" x 9'7\"" },
    { level: "Main Level", name: "Kitchen", dimensions: "4.88m x 2.72m", imperial: "16' x 8'11\"" },
    { level: "Main Level", name: "Great Room", dimensions: "5.18m x 3.94m", imperial: "17' x 12'11\"" },
    { level: "Second Level", name: "Loft", dimensions: "4.93m x 4.14m", imperial: "16'2\" x 13'7\"" },
    { level: "Second Level", name: "Primary Bedroom", dimensions: "4.75m x 4.24m", imperial: "15'7\" x 13'11\"" },
    { level: "Second Level", name: "Bedroom 2", dimensions: "3.94m x 3.15m", imperial: "12'11\" x 10'4\"" },
    { level: "Second Level", name: "Bedroom 3", dimensions: "3.94m x 3.15m", imperial: "12'11\" x 10'4\"" },
    { level: "Second Level", name: "Bedroom 4", dimensions: "3.48m x 3.05m", imperial: "11'5\" x 10'" },
    { level: "Second Level", name: "Laundry Room", dimensions: "2.72m x 1.83m", imperial: "8'11\" x 6'" },
  ],
  description: `Discover modern comfort and countryside charm in this beautifully designed new home just minutes from Prince Edward County. Featuring tasteful standard finishes throughout, this property offers the perfect blend of style, space, and serenity.

The bright, open-concept main floor welcomes you with a spacious great room complete with a cozy fireplace, ideal for relaxing or entertaining. The kitchen and dining area flow seamlessly together, creating an inviting atmosphere for family gatherings.

Enjoy a partial lakeview from the rear of the home and unwind on your expansive property — a large pie-shaped lot that offers privacy with no back neighbours.

An attached 3-car garage provides ample space for vehicles, storage, or a workshop area. With modern design and thoughtful layout, this home offers everything you're looking for near the sought-after wineries, beaches, and trails of Prince Edward County. Property taxes have not been assessed yet.`,
  highlights: [
    "Briarwood Homes — 2-storey home with modern finishes",
    "4 bedrooms, 3 full bathrooms + 1 half bath",
    "Open-concept main floor with gas fireplace",
    "Kitchen and dining flow seamlessly together",
    "Large pie-shaped lot — no back neighbours",
    "Partial lakeview from rear of home",
    "Attached 3-car garage with ample storage",
    "Tile, carpeted, and hardwood flooring",
    "Central A/C + forced air natural gas heating",
    "Minutes from Prince Edward County — wineries, beaches, trails",
  ],
  images: IMAGES_18BHD,
  heroImage: "/18 BLUE HERON DRIVE/1-18-Blue-Heron-Drive-front-of-house.jpg",
  galleryFeatured: [0, 4, 5, 10, 16],
  youtubeVideoId: "_CmXHhUQvlE",
  agents: SHARED_AGENTS,
  googleMapsUrl: "https://www.google.com/maps/search/18+Blue+Heron+Drive,+Quinte+West,+Ontario+K0K+1L0",
};

/* ═══════════════════════════════════════════════════════════
   LISTING 5 — 46 East Vista Terrace
   ═══════════════════════════════════════════════════════════ */

const IMAGES_46EVT: PropertyImage[] = [
  { src: "/46 EAST VISTA TERRACE/1-east-vista-terrace-front-of-house.jpg", alt: "Front exterior — brick, double garage, covered porch", category: "exterior" },
  { src: "/46 EAST VISTA TERRACE/2-east-vista-terrace-interior.jpg", alt: "Great room — open concept, hardwood floors", category: "living" },
  { src: "/46 EAST VISTA TERRACE/3-east-vista-terrace-interior.jpg", alt: "Great room — 21-foot ceiling, fireplace, loft railing", category: "living" },
  { src: "/46 EAST VISTA TERRACE/4-east-vista-terrace-interior.jpg", alt: "Kitchen — island, modern cabinetry", category: "kitchen" },
  { src: "/46 EAST VISTA TERRACE/5-east-vista-terrace-interior.jpg", alt: "Kitchen — stainless appliances, pendant lights", category: "kitchen" },
  { src: "/46 EAST VISTA TERRACE/6-east-vista-terrace-interior.jpg", alt: "Dining area — open to kitchen", category: "kitchen" },
  { src: "/46 EAST VISTA TERRACE/7-east-vista-terrace-interior.jpg", alt: "Interior — hallway, hardwood floors", category: "interior" },
  { src: "/46 EAST VISTA TERRACE/7-east-vista-terrace-bedroom-1.jpg", alt: "Primary bedroom — spacious, walk-in closet", category: "bedroom" },
  { src: "/46 EAST VISTA TERRACE/8-east-vista-terrace-bedroom-1.jpg", alt: "Primary bedroom — alternate angle", category: "bedroom" },
  { src: "/46 EAST VISTA TERRACE/9-east-vista-terrace-bedroom-2.jpg", alt: "Bedroom 2 — bright, large window", category: "bedroom" },
  { src: "/46 EAST VISTA TERRACE/10-east-vista-terrace-bedroom-2.jpg", alt: "Bedroom 2 — alternate angle", category: "bedroom" },
  { src: "/46 EAST VISTA TERRACE/11-east-vista-terrace-bedroom-3.jpg", alt: "Bedroom 3 — natural light", category: "bedroom" },
  { src: "/46 EAST VISTA TERRACE/12-east-vista-terrace-backyard.jpg", alt: "Backyard — spacious yard, deck", category: "exterior" },
  { src: "/46 EAST VISTA TERRACE/13-east-vista-terrace-front-of-house.jpg", alt: "Front exterior — side angle", category: "exterior" },
  { src: "/46 EAST VISTA TERRACE/14-east-vista-terrace-area.jpg", alt: "Aerial — community and surroundings", category: "aerial" },
  { src: "/46 EAST VISTA TERRACE/15-east-vista-terrace-area.jpg", alt: "Aerial — neighbourhood overview", category: "aerial" },
  { src: "/46 EAST VISTA TERRACE/16-east-vista-terrace-area.jpg", alt: "Aerial — wider community view", category: "aerial" },
  { src: "/46 EAST VISTA TERRACE/17-east-vista-terrace-area.jpg", alt: "Area — nearby amenities", category: "aerial" },
  { src: "/46 EAST VISTA TERRACE/18-east-vista-terrace-front-of-house.jpg", alt: "Front exterior — twilight view", category: "exterior" },
  { src: "/46 EAST VISTA TERRACE/19-east-vista-terrace-front-of-house.jpg", alt: "Front exterior — street perspective", category: "exterior" },
  { src: "/46 EAST VISTA TERRACE/20-east-vista-terrace-area.jpg", alt: "Aerial — property and lake views", category: "aerial" },
  { src: "/46 EAST VISTA TERRACE/21-east-vista-terrace-area.jpg", alt: "Aerial — Young's Cove community", category: "aerial" },
  { src: "/46 EAST VISTA TERRACE/22-east-vista-terrace-area.jpg", alt: "Aerial — neighbourhood and waterfront", category: "aerial" },
  { src: "/46 EAST VISTA TERRACE/23-east-vista-terrace-area.jpg", alt: "Aerial — community with Bay of Quinte", category: "aerial" },
  { src: "/46 EAST VISTA TERRACE/24-east-vista-terrace-front-of-house.jpg", alt: "Front exterior — aerial at sunset", category: "exterior" },
  { src: "/46 EAST VISTA TERRACE/25-east-vista-terrace-front-of-house.jpg", alt: "Front exterior — aerial, wider angle", category: "exterior" },
  { src: "/46 EAST VISTA TERRACE/26-east-vista-terrace-front-of-house.jpg", alt: "Front exterior — aerial overview", category: "exterior" },
];

const LISTING_46EVT: PropertyListing = {
  property: {
    slug: "46-east-vista-terrace",
    address: "46 East Vista Terrace",
    city: "Quinte West",
    ward: "Murray Ward",
    province: "Ontario",
    postalCode: "K0K 1L0",
    country: "Canada",
    mls: "X12784618",
    price: "$979,000",
    priceNum: 979000,
    type: "Single Family",
    buildingType: "House",
    style: "Detached",
    storeys: "2",
    bedrooms: 4,
    bedroomsAboveGrade: 4,
    bathrooms: 3,
    bathroomsPartial: 1,
    livingArea: "2,000–2,500 sq ft",
    lotSize: "69 x 141.3 ft",
    lotFrontage: "69 ft",
    lotDepth: "141 ft 3 in",
    yearBuilt: "New Construction",
    parking: "Attached Garage",
    totalParkingSpaces: 9,
    heating: "Forced Air (Natural Gas)",
    cooling: "Central Air Conditioning, Air Exchanger",
    fireplace: "1",
    basement: "Unfinished",
    exteriorFinish: "Brick",
    flooring: "Tile, Hardwood, Carpeted",
    foundation: "Concrete",
    title: "Freehold",
    water: "Municipal Water",
    sewer: "Sanitary Sewer",
    structures: "Deck",
    rentalEquipment: "Water Heater, Tankless Water Heater",
    features: "",
    annualTaxes: "$0",
    amenitiesNearby: "Beach, Golf Nearby, Hospital",
    communityName: "Murray Ward",
    locationDescription: "County Rd 64 & Gardenville Rd",
    status: "For Sale",
    daysOnMarket: 19,
    builder: "Briarwood Homes",
    garageLabel: "Attached Garage",
    lotDisplayLabel: "69 x 141.3 ft",
  },
  rooms: [
    { level: "Main Level", name: "Eating Area", dimensions: "4.24m x 2.92m", imperial: "13'11\" x 9'7\"" },
    { level: "Main Level", name: "Kitchen", dimensions: "4.85m x 2.72m", imperial: "15'11\" x 8'11\"" },
    { level: "Main Level", name: "Dining Room", dimensions: "3.94m x 3.48m", imperial: "12'11\" x 11'5\"" },
    { level: "Main Level", name: "Great Room", dimensions: "5.16m x 3.94m", imperial: "16'11\" x 12'11\"" },
    { level: "Main Level", name: "Foyer", dimensions: "2.41m x 2.41m", imperial: "7'11\" x 7'11\"" },
    { level: "Second Level", name: "Primary Bedroom", dimensions: "4.24m x 4.24m", imperial: "13'11\" x 13'11\"" },
    { level: "Second Level", name: "Bedroom 2", dimensions: "3.05m x 2.82m", imperial: "10' x 9'3\"" },
    { level: "Second Level", name: "Bedroom 3", dimensions: "3.18m x 3.05m", imperial: "10'5\" x 10'" },
    { level: "Second Level", name: "Bedroom 4", dimensions: "3.58m x 2.82m", imperial: "11'9\" x 9'3\"" },
  ],
  description: `Elegant 4-Bedroom Home Minutes from Prince Edward County. Welcome to this beautifully built 4-bedroom, 2.5-bathroom home offering space, comfort, and style just minutes from Prince Edward County. Situated on a generous lot, this property combines thoughtful design with a peaceful setting — perfect for family living and entertaining.

The main floor features a bright, open-concept layout with tasteful, high-quality standard finishes throughout. The heart of the home is the great room, showcasing a dramatic 21-foot open-to-above ceiling and a cozy fireplace — the ideal spot for relaxing or hosting guests. A well-appointed kitchen with modern cabinetry and ample counter space flows seamlessly into the dining and living areas.

Upstairs, the primary suite offers a tranquil retreat with a private ensuite and walk-in closet. Three additional bedrooms provide plenty of space for family or guests.

Outside, enjoy a spacious yard, an attached 3-car garage, and room for outdoor activities. Conveniently located just a short drive to the County's renowned wineries, beaches, and charming shops. This home also has a full height basement.`,
  highlights: [
    "Briarwood Homes — elegant 4-bedroom, 2-storey home",
    "4 bedrooms, 3 full bathrooms + 1 half bath",
    "Great room with 21-foot open-to-above ceiling and fireplace",
    "Open-concept layout with high-quality finishes",
    "Kitchen with modern cabinetry and ample counter space",
    "Primary suite with private ensuite and walk-in closet",
    "Full height basement — future finishing potential",
    "Attached 3-car garage",
    "Central A/C with air exchanger + forced air natural gas heating",
    "Minutes from Prince Edward County — wineries, beaches, shops",
  ],
  images: IMAGES_46EVT,
  heroImage: "/46 EAST VISTA TERRACE/1-east-vista-terrace-front-of-house.jpg",
  galleryFeatured: [0, 2, 3, 7, 12],
  youtubeVideoId: "AnXiU2ouKWU",
  agents: SHARED_AGENTS,
  googleMapsUrl: "https://www.google.com/maps/search/46+East+Vista+Terrace,+Quinte+West,+Ontario+K0K+1L0",
};

/* ═══════════════════════════════════════════════════════════
   LISTING 6 — 12 Larissa Park Drive
   ═══════════════════════════════════════════════════════════ */

const IMAGES_12LPD: PropertyImage[] = [
  { src: "/12 LARISSA PARK DRIVE/1-12-larissa-park-drive-front-of-house.jpg", alt: "Front exterior at twilight — stone and siding, double garage", category: "exterior" },
  { src: "/12 LARISSA PARK DRIVE/2-12-larissa-park-drive-interior.jpg", alt: "Great room — open concept, hardwood floors", category: "living" },
  { src: "/12 LARISSA PARK DRIVE/3-12-larissa-park-drive-interior.jpg", alt: "Great room — fireplace, natural light", category: "living" },
  { src: "/12 LARISSA PARK DRIVE/4-12-larissa-park-drive-interior.jpg", alt: "Kitchen — island, quartz countertops", category: "kitchen" },
  { src: "/12 LARISSA PARK DRIVE/5-12-larissa-park-drive-interior.jpg", alt: "Kitchen — cabinetry, stainless appliances", category: "kitchen" },
  { src: "/12 LARISSA PARK DRIVE/6-12-larissa-park-drive-interior.jpg", alt: "Dining area — open to kitchen", category: "kitchen" },
  { src: "/12 LARISSA PARK DRIVE/7-12-larissa-park-drive-interior.jpg", alt: "Interior — hallway, hardwood floors", category: "interior" },
  { src: "/12 LARISSA PARK DRIVE/8-12-larissa-park-drive-interior.jpg", alt: "Bathroom — vanity, modern finishes", category: "bathroom" },
  { src: "/12 LARISSA PARK DRIVE/9-12-larissa-park-drive-interior.jpg", alt: "Ensuite — spa-style, dual vanity", category: "bathroom" },
  { src: "/12 LARISSA PARK DRIVE/10-12-larissa-park-drive-interior.jpg", alt: "Interior — loft area, railing", category: "upper" },
  { src: "/12 LARISSA PARK DRIVE/11-12-larissa-park-drive-interior.jpg", alt: "Upper level loft — open living space", category: "upper" },
  { src: "/12 LARISSA PARK DRIVE/12-12-larissa-park-drive-interior.jpg", alt: "Interior — staircase, hardwood", category: "interior" },
  { src: "/12 LARISSA PARK DRIVE/13-12-larissa-park-drive-bedroom-1.jpg", alt: "Primary bedroom — spacious, walk-in closet", category: "bedroom" },
  { src: "/12 LARISSA PARK DRIVE/14-12-larissa-park-drive-bedroom-1.jpg", alt: "Primary bedroom — alternate angle", category: "bedroom" },
  { src: "/12 LARISSA PARK DRIVE/15-12-larissa-park-drive-bedroom-2.jpg", alt: "Bedroom 2 — bright, hardwood", category: "bedroom" },
  { src: "/12 LARISSA PARK DRIVE/16-12-larissa-park-drive-bedroom-3.jpg", alt: "Bedroom 3 — natural light", category: "bedroom" },
  { src: "/12 LARISSA PARK DRIVE/17-12-larissa-park-drive-bedroom-3.jpg", alt: "Bedroom 3 — alternate angle", category: "bedroom" },
  { src: "/12 LARISSA PARK DRIVE/18-12-larissa-park-drive-bedroom-4.jpg", alt: "Bedroom 4 — spacious layout", category: "bedroom" },
  { src: "/12 LARISSA PARK DRIVE/19-12-larissa-park-drive-laundry.jpg", alt: "Laundry room — washer and dryer, cabinetry", category: "interior" },
  { src: "/12 LARISSA PARK DRIVE/20-12-larissa-park-drive-backyard.jpg", alt: "Backyard — private lot, green space", category: "exterior" },
  { src: "/12 LARISSA PARK DRIVE/21-12-larissa-park-drive-front-of-house.jpg", alt: "Front exterior — daytime view", category: "exterior" },
];

const LISTING_12LPD: PropertyListing = {
  property: {
    slug: "12-larissa-park-drive",
    address: "12 Larissa Park Drive",
    city: "Quinte West",
    ward: "Murray Ward",
    province: "Ontario",
    postalCode: "K0K 1L0",
    country: "Canada",
    mls: "X12768052",
    price: "$955,000",
    priceNum: 955000,
    type: "Single Family",
    buildingType: "House",
    style: "Bungaloft",
    storeys: "1.5",
    bedrooms: 4,
    bedroomsAboveGrade: 4,
    bathrooms: 4,
    bathroomsPartial: 0,
    livingArea: "2,000–2,500 sq ft",
    lotSize: "86 x 137.4 ft",
    lotFrontage: "86 ft",
    lotDepth: "137 ft 4 in",
    yearBuilt: "New Construction",
    parking: "Attached Garage",
    totalParkingSpaces: 4,
    heating: "Forced Air (Natural Gas)",
    cooling: "Central Air Conditioning",
    fireplace: "0",
    basement: "Unfinished",
    exteriorFinish: "Brick, Vinyl Siding",
    flooring: "Tile, Hardwood, Carpeted",
    foundation: "Poured Concrete",
    title: "Freehold",
    water: "Municipal Water",
    sewer: "Sanitary Sewer",
    structures: "",
    rentalEquipment: "Water Heater, Tankless Water Heater",
    features: "Conservation/green belt",
    annualTaxes: "$7,859.44",
    amenitiesNearby: "Beach, Golf Nearby, Hospital, Schools",
    communityName: "Murray Ward",
    locationDescription: "County Rd 64 & Gardenville Rd",
    status: "For Sale",
    daysOnMarket: 25,
    builder: "Briarwood Homes",
    garageLabel: "Attached Garage",
    lotDisplayLabel: "86 x 137.4 ft",
  },
  rooms: [
    { level: "Main Level", name: "Dining Room", dimensions: "3.15m x 3.05m", imperial: "10'4\" x 10'" },
    { level: "Main Level", name: "Kitchen", dimensions: "3.15m x 2.72m", imperial: "10'4\" x 8'11\"" },
    { level: "Main Level", name: "Great Room", dimensions: "3.66m x 5.16m", imperial: "12' x 16'11\"" },
    { level: "Main Level", name: "Primary Bedroom", dimensions: "3.66m x 3.94m", imperial: "12' x 12'11\"" },
    { level: "Main Level", name: "Bedroom 2", dimensions: "3.33m x 3.33m", imperial: "10'11\" x 10'11\"" },
    { level: "Main Level", name: "Bedroom 3", dimensions: "3.28m x 3.15m", imperial: "10'9\" x 10'4\"" },
    { level: "Upper Level", name: "Bedroom 4", dimensions: "3.94m x 3.58m", imperial: "12'11\" x 11'9\"" },
    { level: "Upper Level", name: "Bedroom 5", dimensions: "3.66m x 3.33m", imperial: "12' x 10'11\"" },
    { level: "Upper Level", name: "Loft", dimensions: "3.45m x 6.32m", imperial: "11'4\" x 20'9\"" },
  ],
  description: `Luxury Bungaloft Near Prestigious Prince Edward County — "Briarwood Homes Vineyard Collection"

Experience refined living in this stunning detached Bungaloft located just minutes from the heart of Prince Edward County. Featuring 5 bedrooms and 4 bathrooms, this executive home offers an exceptional layout designed for both comfort and elegance.

The home's design includes elegant quartz countertops, custom-crafted kitchen cabinetry, and a sleek undermount stainless steel sink. The expansive primary suite offers a walk-in closet and a luxurious five-piece spa-style ensuite.

A well-planned layout provides a semi-ensuite bathroom shared by the second and third bedrooms, along with the convenience of a main-floor laundry room. A rare offering in a highly desirable community close to Prince Edward County — surrounded by wineries, nature, beaches, trails, and the charm of PEC living.`,
  highlights: [
    "Briarwood Homes Vineyard Collection — luxury bungaloft",
    "4 bedrooms, 4 full bathrooms",
    "Quartz countertops and custom kitchen cabinetry",
    "Primary suite with walk-in closet and 5-piece spa ensuite",
    "Semi-ensuite shared by bedrooms 2 and 3",
    "Main-floor laundry room",
    "Upper level loft with additional bedrooms",
    "Poured concrete foundation — built to last",
    "Central A/C + forced air natural gas heating",
    "Minutes from Prince Edward County — wineries, beaches, trails",
  ],
  images: IMAGES_12LPD,
  heroImage: "/12 LARISSA PARK DRIVE/1-12-larissa-park-drive-front-of-house.jpg",
  galleryFeatured: [0, 2, 3, 12, 19],
  youtubeVideoId: "YCKHq11RG6Y",
  agents: SHARED_AGENTS,
  googleMapsUrl: "https://www.google.com/maps/search/12+Larissa+Park+Drive,+Quinte+West,+Ontario+K0K+1L0",
};

/* ═══════════════════════════════════════════════════════════
   LISTING 7 — 3 Larissa Park Drive
   ═══════════════════════════════════════════════════════════ */

const IMAGES_3LPD: PropertyImage[] = [
  { src: "/3 LARISSA PARK DRIVE/1-3-larissa-park-drive-front-of-house.jpg", alt: "Front exterior at twilight — brick and stone bungalow", category: "exterior" },
  { src: "/3 LARISSA PARK DRIVE/2-3-larissa-park-drive-interior.jpg", alt: "Great room — open concept, hardwood", category: "living" },
  { src: "/3 LARISSA PARK DRIVE/3-3-larissa-park-drive-interior.jpg", alt: "Kitchen — island, quartz countertops", category: "kitchen" },
  { src: "/3 LARISSA PARK DRIVE/4-3-larissa-park-drive-interior.jpg", alt: "Kitchen — cabinetry, stainless appliances", category: "kitchen" },
  { src: "/3 LARISSA PARK DRIVE/5-3-larissa-park-drive-interior.jpg", alt: "Eating area — open to kitchen", category: "kitchen" },
  { src: "/3 LARISSA PARK DRIVE/6-3-larissa-park-drive-interior.jpg", alt: "Interior — hallway, neutral tones", category: "interior" },
  { src: "/3 LARISSA PARK DRIVE/7-3-larissa-park-drive-interior.jpg", alt: "Bathroom — vanity, modern tile", category: "bathroom" },
  { src: "/3 LARISSA PARK DRIVE/8-3-larissa-park-drive-interior.jpg", alt: "Ensuite — spa-style, walk-in shower", category: "bathroom" },
  { src: "/3 LARISSA PARK DRIVE/9-3-larissa-park-drive-bedroom.jpg", alt: "Bedroom — spacious, large window", category: "bedroom" },
  { src: "/3 LARISSA PARK DRIVE/10-3-larissa-park-drive-bedroom.jpg", alt: "Bedroom — bright, hardwood floors", category: "bedroom" },
  { src: "/3 LARISSA PARK DRIVE/11-3-larissa-park-drive-bedroom.jpg", alt: "Bedroom — natural light, neutral tones", category: "bedroom" },
  { src: "/3 LARISSA PARK DRIVE/12-3-larissa-park-drive-laundry.jpg", alt: "Laundry room — washer and dryer, cabinetry", category: "interior" },
  { src: "/3 LARISSA PARK DRIVE/13-3-larissa-park-drive-backyard.jpg", alt: "Backyard — private lot, green space", category: "exterior" },
];

const LISTING_3LPD: PropertyListing = {
  property: {
    slug: "3-larissa-park-drive",
    address: "3 Larissa Park Drive",
    city: "Quinte West",
    ward: "Murray Ward",
    province: "Ontario",
    postalCode: "K0L 1L0",
    country: "Canada",
    mls: "X12768064",
    price: "$899,000",
    priceNum: 899000,
    type: "Single Family",
    buildingType: "House",
    style: "Bungalow",
    storeys: "1",
    bedrooms: 3,
    bedroomsAboveGrade: 3,
    bathrooms: 3,
    bathroomsPartial: 1,
    livingArea: "1,500–2,000 sq ft",
    lotSize: "68.9 x 137.8 ft",
    lotFrontage: "68 ft 10 in",
    lotDepth: "137 ft 9 in",
    yearBuilt: "New Construction",
    parking: "Attached Garage",
    totalParkingSpaces: 6,
    heating: "Forced Air (Natural Gas)",
    cooling: "Central Air Conditioning",
    fireplace: "0",
    basement: "Unfinished",
    exteriorFinish: "Brick & Stone",
    flooring: "Laminate, Tile",
    foundation: "Poured Concrete",
    title: "Freehold",
    water: "Municipal Water",
    sewer: "Sanitary Sewer",
    structures: "",
    rentalEquipment: "Water Heater, Tankless Water Heater",
    features: "Carpet Free",
    annualTaxes: "$6,209.73",
    amenitiesNearby: "Beach, Golf Nearby, Hospital, Schools",
    communityName: "Murray Ward",
    locationDescription: "County Rd 64 & Gardenville Rd",
    status: "For Sale",
    daysOnMarket: 25,
    builder: "Briarwood Homes",
    garageLabel: "Attached Garage",
    lotDisplayLabel: "68.9 x 137.8 ft",
  },
  rooms: [
    { level: "Main Level", name: "Great Room", dimensions: "4.27m x 5.16m", imperial: "14' x 16'11\"" },
    { level: "Main Level", name: "Kitchen", dimensions: "4.32m x 3.05m", imperial: "14'2\" x 10'" },
    { level: "Main Level", name: "Eating Area", dimensions: "4.17m x 3.33m", imperial: "13'8\" x 10'11\"" },
    { level: "Main Level", name: "Primary Bedroom", dimensions: "4.45m x 4.88m", imperial: "14'7\" x 16'" },
    { level: "Main Level", name: "Bedroom 2", dimensions: "3.33m x 3.05m", imperial: "10'11\" x 10'" },
    { level: "Main Level", name: "Bedroom 3", dimensions: "3.33m x 3.05m", imperial: "10'11\" x 10'" },
  ],
  description: `Luxury Bungalow Near Prestigious Prince Edward County — "Briarwood Homes Vineyard Collection"

Experience refined living in this stunning detached Bungalow located just minutes from the heart of Prince Edward County. Featuring 3 bedrooms and 3 bathrooms, this executive home offers an exceptional layout designed for both comfort and elegance.

The home's design includes elegant quartz countertops, custom-crafted kitchen cabinetry, and a sleek undermount stainless steel sink. The expansive primary suite offers a walk-in closet and a luxurious five-piece spa-style ensuite.

A well-planned layout provides a semi-ensuite bathroom shared by the second and third bedrooms, along with the convenience of a main-floor laundry room. A rare offering in a highly desirable community close to Prince Edward County — surrounded by wineries, nature, beaches, trails, and the charm of PEC living.`,
  highlights: [
    "Briarwood Homes Vineyard Collection — luxury bungalow",
    "3 bedrooms, 3 full bathrooms + 1 half bath",
    "Single-storey living — all bedrooms on main floor",
    "Quartz countertops and custom kitchen cabinetry",
    "Primary suite with walk-in closet and 5-piece spa ensuite",
    "Main-floor laundry room",
    "Carpet-free — laminate and tile throughout",
    "Poured concrete foundation",
    "Central A/C + forced air natural gas heating",
    "Minutes from Prince Edward County — wineries, beaches, trails",
  ],
  images: IMAGES_3LPD,
  heroImage: "/3 LARISSA PARK DRIVE/1-3-larissa-park-drive-front-of-house.jpg",
  galleryFeatured: [0, 1, 2, 8, 12],
  youtubeVideoId: "gGN-QUmfQsA",
  agents: SHARED_AGENTS,
  googleMapsUrl: "https://www.google.com/maps/search/3+Larissa+Park+Drive,+Quinte+West,+Ontario+K0K+1L0",
};

/* ═══════════════════════════════════════════════════════════
   LISTING 8 — 42 Wellers Way
   ═══════════════════════════════════════════════════════════ */

const IMAGES_42WW: PropertyImage[] = [
  { src: "/42 WELLERS WAY/1-42-wellers-way-front-of-house.jpg", alt: "Aerial front exterior — brick and stone bungaloft, lake views", category: "exterior" },
  { src: "/42 WELLERS WAY/2-42-wellers-way-front-of-house.jpg", alt: "Front exterior — covered porch, triple garage", category: "exterior" },
  { src: "/42 WELLERS WAY/3-42-wellers-way-interior.jpg", alt: "Great room — double-height ceiling, fireplace", category: "living" },
  { src: "/42 WELLERS WAY/4-42-wellers-way-interior.jpg", alt: "Great room — open concept, hardwood", category: "living" },
  { src: "/42 WELLERS WAY/5-42-wellers-way-interior.jpg", alt: "Living area — natural light, large windows", category: "living" },
  { src: "/42 WELLERS WAY/6-42-wellers-way-interior.jpg", alt: "Kitchen — island, quartz countertops", category: "kitchen" },
  { src: "/42 WELLERS WAY/7-42-wellers-way-interior.jpg", alt: "Kitchen — cabinetry, stainless appliances", category: "kitchen" },
  { src: "/42 WELLERS WAY/8-42-wellers-way-interior.jpg", alt: "Dining area — open to kitchen", category: "kitchen" },
  { src: "/42 WELLERS WAY/9-42-wellers-way-interior.jpg", alt: "Library — built-in shelving, hardwood", category: "interior" },
  { src: "/42 WELLERS WAY/10-42-wellers-way-interior.jpg", alt: "Interior — hallway, neutral finishes", category: "interior" },
  { src: "/42 WELLERS WAY/11-42-wellers-way-interior.jpg", alt: "Staircase — hardwood, iron railing", category: "interior" },
  { src: "/42 WELLERS WAY/12-42-wellers-way-interior.jpg", alt: "Upper level loft — open living space", category: "upper" },
  { src: "/42 WELLERS WAY/13-42-wellers-way-interior.jpg", alt: "Interior — mudroom, tile flooring", category: "interior" },
  { src: "/42 WELLERS WAY/14-42-wellers-way-bathroom.jpg", alt: "Bathroom — half bath, modern finishes", category: "bathroom" },
  { src: "/42 WELLERS WAY/15-42-wellers-way-interior.jpg", alt: "Laundry room — cabinetry, tile floor", category: "interior" },
  { src: "/42 WELLERS WAY/16-42-wellers-way-interior.jpg", alt: "Interior — open concept overview", category: "living" },
  { src: "/42 WELLERS WAY/17-42-wellers-way-interior.jpg", alt: "Ensuite — spa-style, glass shower", category: "bathroom" },
  { src: "/42 WELLERS WAY/18-42-wellers-way-bedroom-1.jpg", alt: "Primary bedroom — spacious, walk-in closet", category: "bedroom" },
  { src: "/42 WELLERS WAY/19-42-wellers-way-bedroom-1.jpg", alt: "Primary bedroom — alternate angle", category: "bedroom" },
  { src: "/42 WELLERS WAY/20-42-wellers-way-bathroom.jpg", alt: "Bathroom — vanity, modern tile", category: "bathroom" },
  { src: "/42 WELLERS WAY/21-42-wellers-way-bathroom.jpg", alt: "Bathroom — tub/shower, tile surround", category: "bathroom" },
  { src: "/42 WELLERS WAY/22-42-wellers-way-bedroom-2.jpg", alt: "Bedroom 2 — hardwood, natural light", category: "bedroom" },
  { src: "/42 WELLERS WAY/23-42-wellers-way-bedroom-3.jpg", alt: "Bedroom 3 — spacious layout", category: "bedroom" },
  { src: "/42 WELLERS WAY/24-42-wellers-way-bathroom.jpg", alt: "Bathroom — double vanity, modern finishes", category: "bathroom" },
  { src: "/42 WELLERS WAY/25-42-wellers-way-bedroom-4.jpg", alt: "Bedroom 4 — bright, large window", category: "bedroom" },
  { src: "/42 WELLERS WAY/26-42-wellers-way-bathroom.jpg", alt: "Bathroom — vanity, tile flooring", category: "bathroom" },
  { src: "/42 WELLERS WAY/27-42-wellers-way-bedroom-5.jpg", alt: "Bedroom 5 — spacious, neutral tones", category: "bedroom" },
  { src: "/42 WELLERS WAY/28-42-wellers-way-bedroom-5.jpg", alt: "Bedroom 5 — alternate angle", category: "bedroom" },
  { src: "/42 WELLERS WAY/29-42-wellers-way-front-of-house.jpg", alt: "Front exterior — winter twilight", category: "exterior" },
  { src: "/42 WELLERS WAY/30-42-wellers-way-front-of-house.jpg", alt: "Front exterior — aerial winter view", category: "exterior" },
  { src: "/42 WELLERS WAY/31-42-wellers-way-front-of-house.jpg", alt: "Aerial — property with lake behind", category: "aerial" },
  { src: "/42 WELLERS WAY/32-42-wellers-way-front-of-house.jpg", alt: "Aerial — Young's Cove community", category: "aerial" },
];

const LISTING_42WW: PropertyListing = {
  property: {
    slug: "42-wellers-way",
    address: "42 Wellers Way",
    city: "Quinte West",
    ward: "Murray Ward",
    province: "Ontario",
    postalCode: "K0K 1L0",
    country: "Canada",
    mls: "X12785728",
    price: "$1,799,000",
    priceNum: 1799000,
    type: "Single Family",
    buildingType: "House",
    style: "Bungaloft",
    storeys: "1.5",
    bedrooms: 5,
    bedroomsAboveGrade: 5,
    bathrooms: 5,
    bathroomsPartial: 1,
    livingArea: "3,500–5,000 sq ft",
    lotSize: "156.6 x 539.3 ft",
    lotAcreage: "1.88 acres",
    lotFrontage: "156 ft 7 in",
    lotDepth: "539 ft 3 in",
    yearBuilt: "New Construction",
    parking: "Attached Garage",
    totalParkingSpaces: 9,
    heating: "Forced Air (Natural Gas)",
    cooling: "Central Air Conditioning",
    fireplace: "0",
    basement: "Unfinished",
    exteriorFinish: "Brick & Stone",
    flooring: "Laminate, Tile",
    foundation: "Poured Concrete",
    title: "Freehold",
    water: "Municipal Water",
    sewer: "Sanitary Sewer",
    structures: "",
    rentalEquipment: "Water Heater, Tankless Water Heater",
    features: "Irregular lot size",
    lotFeatures: "Lake view, Unobstructed Water View",
    waterfront: "Lake Ontario",
    access: "Public Road, Year-round access",
    annualTaxes: "$12,014.82",
    amenitiesNearby: "Beach, Golf Nearby, Hospital, Schools",
    communityName: "Murray Ward",
    locationDescription: "Wellers Way & County Rd 64",
    status: "For Sale",
    daysOnMarket: 19,
    builder: "Briarwood Homes",
    garageLabel: "Attached Garage",
    lotDisplayLabel: "156.6 x 539.3 ft",
  },
  rooms: [
    { level: "Main Level", name: "Great Room", dimensions: "5.82m x 4.55m", imperial: "19'1\" x 14'11\"" },
    { level: "Main Level", name: "Kitchen", dimensions: "3.89m x 3.51m", imperial: "12'9\" x 11'6\"" },
    { level: "Main Level", name: "Eating Area", dimensions: "3.89m x 3.51m", imperial: "12'9\" x 11'6\"" },
    { level: "Main Level", name: "Dining Room", dimensions: "3.63m x 5.16m", imperial: "11'11\" x 16'11\"" },
    { level: "Main Level", name: "Library", dimensions: "3.66m x 4.01m", imperial: "12' x 13'2\"" },
    { level: "Main Level", name: "Primary Bedroom", dimensions: "4.85m x 4.85m", imperial: "15'11\" x 15'11\"" },
    { level: "Main Level", name: "Bedroom 2", dimensions: "3.63m x 3.33m", imperial: "11'11\" x 10'11\"" },
    { level: "Main Level", name: "Bedroom 3", dimensions: "4.55m x 3.33m", imperial: "14'11\" x 10'11\"" },
    { level: "Upper Level", name: "Loft", dimensions: "5.54m x 5.21m", imperial: "18'2\" x 17'1\"" },
    { level: "Upper Level", name: "Bedroom 4", dimensions: "3.33m x 3.94m", imperial: "10'11\" x 12'11\"" },
    { level: "Upper Level", name: "Bedroom 5", dimensions: "3.76m x 5.89m", imperial: "12'4\" x 19'4\"" },
  ],
  description: `Luxury Bungaloft on 1.88 Acres Backing Onto Water Near Prestigious Prince Edward County — "Briarwood Homes Lakeside Collection"

Experience refined living in this stunning detached Bungaloft located just minutes from the heart of Prince Edward County. Featuring 5 bedrooms and 4.5 bathrooms, this executive home offers an exceptional layout designed for both comfort and elegance.

The home's design includes elegant quartz countertops, custom-crafted kitchen cabinetry, and a sleek undermount stainless steel sink. The expansive primary suite offers a walk-in closet and a luxurious five-piece spa-style ensuite.

A well-planned layout provides a semi-ensuite bathroom shared by the second and third bedrooms, along with the convenience of a main-floor laundry room. Situated on a premium 156 ft x 539 ft lot, the property boasts an expansive, private backyard — perfect for outdoor entertaining, a future pool, or a serene private oasis.

A rare offering in a highly desirable community close to Prince Edward County — surrounded by wineries, nature, beaches, trails, and the charm of PEC living.`,
  highlights: [
    "Briarwood Homes Lakeside Collection — luxury bungaloft",
    "5 bedrooms, 5 full bathrooms + 1 half bath",
    "3,500–5,000 sq ft of living space",
    "1.88-acre lot backing onto Lake Ontario",
    "Unobstructed water views",
    "Library, great room, and formal dining",
    "Primary suite with walk-in closet and 5-piece spa ensuite",
    "Upper level loft with two additional bedrooms",
    "Attached garage with 9 parking spaces",
    "Year-round access — minutes from Prince Edward County",
  ],
  images: IMAGES_42WW,
  heroImage: "/42 WELLERS WAY/1-42-wellers-way-front-of-house.jpg",
  galleryFeatured: [0, 2, 5, 17, 30],
  youtubeVideoId: "gXc4rK9w_YI",
  agents: SHARED_AGENTS,
  googleMapsUrl: "https://www.google.com/maps/search/42+Wellers+Way,+Quinte+West,+Ontario+K0K+1L0",
};

/* ═══════════════════════════════════════════════════════════
   LISTING 9 — 53 Wellers Way
   ═══════════════════════════════════════════════════════════ */

const IMAGES_53WW: PropertyImage[] = [
  { src: "/53 WELLERS WAY/1-53-wellers-way-front-of-house.jpg", alt: "Front exterior at twilight — brick and stone bungalow", category: "exterior" },
  { src: "/53 WELLERS WAY/2-53-wellers-way-interior.jpg", alt: "Foyer — hardwood, coat closet", category: "interior" },
  { src: "/53 WELLERS WAY/3-53-wellers-way-interior.jpg", alt: "Great room — fireplace, natural light", category: "living" },
  { src: "/53 WELLERS WAY/4-53-wellers-way-interior.jpg", alt: "Great room — open concept, hardwood", category: "living" },
  { src: "/53 WELLERS WAY/5-53-wellers-way-interior.jpg", alt: "Kitchen — island, quartz countertops", category: "kitchen" },
  { src: "/53 WELLERS WAY/6-53-wellers-way-interior.jpg", alt: "Kitchen — cabinetry, stainless appliances", category: "kitchen" },
  { src: "/53 WELLERS WAY/7-53-wellers-way-interior.jpg", alt: "Eating area — open to kitchen", category: "kitchen" },
  { src: "/53 WELLERS WAY/8-53-wellers-way-interior.jpg", alt: "Interior — hallway, hardwood floors", category: "interior" },
  { src: "/53 WELLERS WAY/9-53-wellers-way-interior.jpg", alt: "Ensuite — spa-style, walk-in shower", category: "bathroom" },
  { src: "/53 WELLERS WAY/10-53-wellers-way-interior.jpg", alt: "Bathroom — vanity, modern tile", category: "bathroom" },
  { src: "/53 WELLERS WAY/11-53-wellers-way-interior.jpg", alt: "Interior — laundry area, cabinetry", category: "interior" },
  { src: "/53 WELLERS WAY/12-53-wellers-way-interior.jpg", alt: "Interior — mudroom, tile flooring", category: "interior" },
  { src: "/53 WELLERS WAY/13-53-wellers-way-interior.jpg", alt: "Interior — garage entry, storage", category: "interior" },
  { src: "/53 WELLERS WAY/14-53-wellers-way-bathroom.jpg", alt: "Bathroom — half bath, modern finishes", category: "bathroom" },
  { src: "/53 WELLERS WAY/15-53-wellers-way-bedroom-1.jpg", alt: "Primary bedroom — spacious, walk-in closet", category: "bedroom" },
  { src: "/53 WELLERS WAY/16-53-wellers-way-bedroom-1.jpg", alt: "Primary bedroom — alternate angle", category: "bedroom" },
  { src: "/53 WELLERS WAY/17-53-wellers-way-bedroom-1.jpg", alt: "Primary bedroom — ensuite access", category: "bedroom" },
  { src: "/53 WELLERS WAY/18-53-wellers-way-bedroom-2.jpg", alt: "Bedroom 2 — bright, large window", category: "bedroom" },
  { src: "/53 WELLERS WAY/19-53-wellers-way-bedroom-2.jpg", alt: "Bedroom 2 — alternate angle", category: "bedroom" },
  { src: "/53 WELLERS WAY/20-53-wellers-way-bedroom-3.jpg", alt: "Bedroom 3 — natural light, hardwood", category: "bedroom" },
  { src: "/53 WELLERS WAY/21-53-wellers-way-bedroom-3.jpg", alt: "Bedroom 3 — alternate angle", category: "bedroom" },
  { src: "/53 WELLERS WAY/22-53-wellers-way-bathroom.jpg", alt: "Bathroom — vanity, tile floor", category: "bathroom" },
  { src: "/53 WELLERS WAY/23-53-wellers-way-bathroom.jpg", alt: "Bathroom — tub/shower, glass door", category: "bathroom" },
  { src: "/53 WELLERS WAY/24-53-wellers-way-bathroom.jpg", alt: "Bathroom — modern finishes, tile", category: "bathroom" },
  { src: "/53 WELLERS WAY/25-53-wellers-way-front-of-house.jpg", alt: "Front exterior — daytime view", category: "exterior" },
  { src: "/53 WELLERS WAY/26-53-wellers-way-backyard.jpg", alt: "Backyard — expansive private lot", category: "exterior" },
  { src: "/53 WELLERS WAY/27-53-wellers-way-front-of-house.jpg", alt: "Aerial — property and neighbourhood", category: "aerial" },
  { src: "/53 WELLERS WAY/28-53-wellers-way-area.jpg", alt: "Aerial — Young's Cove community", category: "aerial" },
  { src: "/53 WELLERS WAY/29-53-wellers-way-area.jpg", alt: "Aerial — community and waterfront", category: "aerial" },
];

const LISTING_53WW: PropertyListing = {
  property: {
    slug: "53-wellers-way",
    address: "53 Wellers Way",
    city: "Quinte West",
    ward: "Murray Ward",
    province: "Ontario",
    postalCode: "K0K 1L0",
    country: "Canada",
    mls: "X12768068",
    price: "$1,100,000",
    priceNum: 1100000,
    type: "Single Family",
    buildingType: "House",
    style: "Bungalow",
    storeys: "1",
    bedrooms: 3,
    bedroomsAboveGrade: 3,
    bathrooms: 3,
    bathroomsPartial: 1,
    livingArea: "1,500–2,000 sq ft",
    lotSize: "132.9 x 162.7 ft",
    lotAcreage: "Under 1/2 acre",
    lotFrontage: "132 ft 10 in",
    lotDepth: "162 ft 8 in",
    yearBuilt: "New Construction",
    parking: "Attached Garage",
    totalParkingSpaces: 6,
    heating: "Forced Air (Natural Gas)",
    cooling: "Central Air Conditioning",
    fireplace: "1",
    basement: "Unfinished",
    exteriorFinish: "Brick & Stone",
    flooring: "Hardwood, Tile, Carpeted",
    foundation: "Poured Concrete",
    title: "Freehold",
    water: "Municipal Water",
    sewer: "Sanitary Sewer",
    structures: "",
    rentalEquipment: "Water Heater",
    features: "Flat site, Conservation/green belt",
    annualTaxes: "$0",
    amenitiesNearby: "Beach, Golf Nearby, Hospital, Schools",
    communityName: "Murray Ward",
    locationDescription: "Wellers Way & County Rd 64",
    status: "For Sale",
    daysOnMarket: 25,
    builder: "Briarwood Homes",
    garageLabel: "Attached Garage",
    lotDisplayLabel: "132.9 x 162.7 ft",
  },
  rooms: [
    { level: "Main Level", name: "Great Room", dimensions: "4.27m x 5.16m", imperial: "14' x 16'11\"" },
    { level: "Main Level", name: "Eating Area", dimensions: "4.17m x 3.33m", imperial: "13'8\" x 10'11\"" },
    { level: "Main Level", name: "Kitchen", dimensions: "4.32m x 3.05m", imperial: "14'2\" x 10'" },
    { level: "Main Level", name: "Primary Bedroom", dimensions: "4.45m x 4.88m", imperial: "14'7\" x 16'" },
    { level: "Main Level", name: "Bedroom 2", dimensions: "3.33m x 3.05m", imperial: "10'11\" x 10'" },
    { level: "Main Level", name: "Bedroom 3", dimensions: "3.33m x 3.05m", imperial: "10'11\" x 10'" },
  ],
  description: `Luxury Bungalow Near Prestigious Prince Edward County — "Briarwood Homes Lakeside Collection"

Experience refined living in this stunning detached Bungalow located just minutes from the heart of Prince Edward County. Featuring 3 bedrooms and 3 bathrooms, this executive home offers an exceptional layout designed for both comfort and elegance.

The home's design includes elegant quartz countertops, custom-crafted kitchen cabinetry, and a sleek undermount stainless steel sink. The expansive primary suite offers a walk-in closet and a luxurious five-piece spa-style ensuite.

A well-planned layout provides a semi-ensuite bathroom shared by the second and third bedrooms, along with the convenience of a main-floor laundry room. Situated on a premium 132 ft x 163 ft lot, the property boasts an expansive, private backyard — perfect for outdoor entertaining, a future pool, or a serene private oasis.

A rare offering in a highly desirable community close to Prince Edward County — surrounded by wineries, nature, beaches, trails, and the charm of PEC living. Property taxes have not been assessed yet.`,
  highlights: [
    "Briarwood Homes Lakeside Collection — luxury bungalow",
    "3 bedrooms, 3 full bathrooms + 1 half bath",
    "Single-storey living with gas fireplace",
    "Quartz countertops and custom kitchen cabinetry",
    "Primary suite with walk-in closet and 5-piece spa ensuite",
    "Main-floor laundry room",
    "132.9 x 162.7 ft lot — expansive private backyard",
    "Poured concrete foundation",
    "Central A/C + forced air natural gas heating",
    "Minutes from Prince Edward County — wineries, beaches, trails",
  ],
  images: IMAGES_53WW,
  heroImage: "/53 WELLERS WAY/1-53-wellers-way-front-of-house.jpg",
  galleryFeatured: [0, 2, 4, 14, 25],
  youtubeVideoId: "0ebos-rmjXg",
  agents: SHARED_AGENTS,
  googleMapsUrl: "https://www.google.com/maps/search/53+Wellers+Way,+Quinte+West,+Ontario+K0K+1L0",
};

/* ═══════════════════════════════════════════════════════════
   LISTING 10 — 71 Wellers Way
   ═══════════════════════════════════════════════════════════ */

const IMAGES_71WW: PropertyImage[] = [
  { src: "/71 WELLERS WAY/1-71-wellers-way.jpg", alt: "Rendering — The NorthPoint bungaloft, brick and stone elevation", category: "exterior" },
];

const LISTING_71WW: PropertyListing = {
  property: {
    slug: "71-wellers-way",
    address: "71 Wellers Way",
    city: "Quinte West",
    ward: "Murray Ward",
    province: "Ontario",
    postalCode: "K0K 1L0",
    country: "Canada",
    mls: "X12746582",
    price: "$1,251,383",
    priceNum: 1251383,
    type: "Single Family",
    buildingType: "House",
    style: "Bungaloft",
    storeys: "1.5",
    bedrooms: 5,
    bedroomsAboveGrade: 5,
    bathrooms: 5,
    bathroomsPartial: 1,
    livingArea: "3,500–5,000 sq ft",
    lotSize: "154.9 x 227.4 ft",
    lotFrontage: "154 ft 10 in",
    lotDepth: "227 ft 4 in",
    yearBuilt: "New Construction",
    parking: "Attached Garage",
    totalParkingSpaces: 6,
    heating: "Forced Air (Natural Gas)",
    cooling: "Central Air Conditioning",
    fireplace: "0",
    basement: "Unfinished",
    exteriorFinish: "Brick",
    flooring: "",
    foundation: "Poured Concrete",
    title: "Freehold",
    water: "Municipal Water",
    sewer: "Sanitary Sewer",
    structures: "",
    rentalEquipment: "",
    features: "Irregular lot size",
    annualTaxes: "$0",
    amenitiesNearby: "Parks, Scenic Trails, Golf Courses, Wineries, Beaches",
    communityName: "Murray Ward",
    locationDescription: "Wellers Way & County Rd 64",
    status: "For Sale",
    daysOnMarket: 30,
    builder: "Briarwood Homes",
    garageLabel: "Attached Garage",
    lotDisplayLabel: "154.9 x 227.4 ft",
  },
  rooms: [
    { level: "Main Level", name: "Great Room", dimensions: "4.55m x 0.81m", imperial: "14'11\" x 2'8\"" },
    { level: "Main Level", name: "Kitchen", dimensions: "3.89m x 3.51m", imperial: "12'9\" x 11'6\"" },
    { level: "Main Level", name: "Eating Area", dimensions: "3.89m x 3.51m", imperial: "12'9\" x 11'6\"" },
    { level: "Main Level", name: "Dining Room", dimensions: "3.63m x 4.55m", imperial: "11'11\" x 14'11\"" },
    { level: "Main Level", name: "Library", dimensions: "3.66m x 4.01m", imperial: "12' x 13'2\"" },
    { level: "Main Level", name: "Primary Bedroom", dimensions: "4.85m x 4.85m", imperial: "15'11\" x 15'11\"" },
    { level: "Main Level", name: "Bedroom 2", dimensions: "3.63m x 3.33m", imperial: "11'11\" x 10'11\"" },
    { level: "Main Level", name: "Bedroom 3", dimensions: "4.55m x 3.33m", imperial: "14'11\" x 10'11\"" },
    { level: "Upper Level", name: "Loft", dimensions: "5.54m x 5.21m", imperial: "18'2\" x 17'1\"" },
    { level: "Upper Level", name: "Bedroom 4", dimensions: "3.33m x 3.94m", imperial: "10'11\" x 12'11\"" },
    { level: "Upper Level", name: "Bedroom 5", dimensions: "3.76m x 5.89m", imperial: "12'4\" x 19'4\"" },
  ],
  description: `Must see! Executive Bungaloft crafted by Briarwood Homes is located at the gateway to Prince Edward County. Spanning 3,727 square feet, this 5-bedroom, 4.5-bathroom bungalow with loft and 3-car garage is close to parks, scenic trails, golf courses, wineries, and beautiful beaches.

This property is ideal for multi-generational living in a serene, highly desirable community.`,
  highlights: [
    "Briarwood Homes — executive bungaloft, 3,727 sq ft",
    "5 bedrooms, 5 full bathrooms + 1 half bath",
    "Bungalow with loft — ideal for multi-generational living",
    "Library, great room, and formal dining",
    "3-car attached garage",
    "154.9 x 227.4 ft lot",
    "Poured concrete foundation",
    "Central A/C + forced air natural gas heating",
    "Gateway to Prince Edward County",
    "Close to parks, trails, golf, wineries, beaches",
  ],
  images: IMAGES_71WW,
  heroImage: "/71 WELLERS WAY/1-71-wellers-way.jpg",
  galleryFeatured: [0],
  youtubeVideoId: null,
  agents: SHARED_AGENTS,
  googleMapsUrl: "https://www.google.com/maps/search/71+Wellers+Way,+Quinte+West,+Ontario+K0K+1L0",
};

/* ─── Exports ─── */

export const ALL_LISTINGS: PropertyListing[] = [
  LISTING_13EVT,
  LISTING_30WW,
  LISTING_2BHD,
  LISTING_18BHD,
  LISTING_46EVT,
  LISTING_12LPD,
  LISTING_3LPD,
  LISTING_42WW,
  LISTING_53WW,
  LISTING_71WW,
];

export function getListingBySlug(slug: string): PropertyListing | undefined {
  return ALL_LISTINGS.find((l) => l.property.slug === slug);
}

export function getAllSlugs(): string[] {
  return ALL_LISTINGS.map((l) => l.property.slug);
}
