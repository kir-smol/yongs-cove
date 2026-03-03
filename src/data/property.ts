export const PROPERTY = {
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
};

export const ROOMS = [
  { level: "Main Level", name: "Great Room", dimensions: "4.27m x 5.18m", imperial: "14' x 17'" },
  { level: "Main Level", name: "Eating Area", dimensions: "4.17m x 3.35m", imperial: "13'8\" x 11'" },
  { level: "Main Level", name: "Kitchen", dimensions: "4.32m x 3.05m", imperial: "14'2\" x 10'" },
  { level: "Main Level", name: "Primary Bedroom", dimensions: "4.47m x 4.88m", imperial: "14'8\" x 16'" },
  { level: "Main Level", name: "Bedroom 2", dimensions: "3.35m x 3.05m", imperial: "11' x 10'" },
  { level: "Main Level", name: "Bedroom 3", dimensions: "3.35m x 3.05m", imperial: "11' x 10'" },
  { level: "Upper Level", name: "Bedroom 4", dimensions: "4.17m x 3.35m", imperial: "13'8\" x 11'" },
  { level: "Upper Level", name: "Bedroom 5", dimensions: "3.51m x 3.35m", imperial: "11'6\" x 11'" },
  { level: "Upper Level", name: "Loft", dimensions: "4.57m x 5.79m", imperial: "15' x 19'" },
];

export const LISTING_DESCRIPTION = `Luxury Bungalow with Loft Near Prestigious Prince Edward County — "Briarwood Homes Vineyard Collection"

Experience refined living in this stunning detached Luxury Bungaloft located just minutes from the heart of Prince Edward County. Featuring 5 bedrooms and 4 bathrooms, this executive home offers an exceptional layout designed for both comfort and elegance.

Situated on a premium 72.3 ft x 147 ft lot, the property boasts an expansive, private backyard — perfect for outdoor entertaining, a future pool, or a serene private oasis. This home comes with upscale finishes, timeless craftsmanship, and an abundance of natural light throughout.

The main floor offers an open-concept living and dining area, a chef-inspired kitchen, a luxurious primary suite, and additional bedrooms ideal for family or guests. The loft level provides added living space including 2 bedrooms, a full bathroom, a generous living area, and storage space.

A rare offering in a highly desirable community close to Prince Edward County — surrounded by wineries, nature, beaches, trails, and the charm of PEC living.`;

export type ImageCategory = "exterior" | "interior" | "kitchen" | "living" | "upper" | "bedroom" | "bathroom" | "aerial";

export interface PropertyImage {
  src: string;
  alt: string;
  category: ImageCategory;
}

export const IMAGES: PropertyImage[] = [
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

export const HERO_IMAGE = "/images/25-front-of-house-hero.jpg";

export const GALLERY_FEATURED = [
  IMAGES[0],   // Front hero sunset
  IMAGES[4],   // Staged great room
  IMAGES[11],  // Kitchen
  IMAGES[16],  // Primary bedroom
  IMAGES[26],  // Aerial community
];

export const YOUTUBE_VIDEO_ID = "IHyXb7Thkt0";

export const AGENTS = [
  {
    name: "Julia Cresiun",
    title: "Salesperson",
    brokerage: "Right at Home Realty",
    brokerageAddress: "16850 Yonge Street #6B, Newmarket, ON L3Y 0A3",
    phone: "416-821-1343",
    officePhone: "905-953-0550",
    email: null as string | null,
    website: true,
    photo: null as string | null,
  },
  {
    name: "Ashot Kagramaniants",
    title: "Salesperson",
    brokerage: "Right at Home Realty",
    brokerageAddress: "16850 Yonge Street #6B, Newmarket, ON L3Y 0A3",
    phone: "647-400-4338",
    officePhone: "905-953-0550",
    email: null as string | null,
    website: false,
    photo: null as string | null,
  },
];

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
