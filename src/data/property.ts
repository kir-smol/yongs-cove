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

export type ImageCategory = "exterior" | "interior" | "kitchen" | "living" | "upper" | "bathroom" | "aerial" | "sunset";

export interface PropertyImage {
  src: string;
  alt: string;
  category: ImageCategory;
}

export const IMAGES: PropertyImage[] = [
  // Exterior front
  { src: "/images/001_DON_8854_5.jpg", alt: "Front exterior — brick and stone facade with double garage", category: "exterior" },
  { src: "/images/002_DON_8853_6.jpg", alt: "Front exterior — angle view", category: "exterior" },
  { src: "/images/003_DON_8856_4.jpg", alt: "Front exterior — full property view", category: "exterior" },
  // Exterior HDR
  { src: "/images/004_DON_9093_HDR_2___.jpg", alt: "Exterior detail", category: "exterior" },
  { src: "/images/005_DON_9098_HDR_2___.jpg", alt: "Exterior detail", category: "exterior" },
  { src: "/images/006_DON_9103_HDR_2___.jpg", alt: "Exterior side view", category: "exterior" },
  // Great room & living
  { src: "/images/007_DON_8865_HDR.jpg", alt: "Double-height great room with gas fireplace and hardwood floors", category: "living" },
  { src: "/images/008_DON_8870_HDR.jpg", alt: "Great room from entry", category: "living" },
  { src: "/images/009_DON_8871_HDR.jpg", alt: "Living area with large windows", category: "living" },
  { src: "/images/010_DON_8874_HDR.jpg", alt: "Open concept with oak staircase and iron spindles", category: "living" },
  { src: "/images/011_DON_8877_HDR.jpg", alt: "Living space detail", category: "living" },
  { src: "/images/012_DON_8880_HDR.jpg", alt: "Main floor open concept", category: "living" },
  // Kitchen
  { src: "/images/013_DON_8885_HDR.jpg", alt: "Kitchen with dark cabinetry and quartz countertops", category: "kitchen" },
  { src: "/images/014_DON_8886_HDR.jpg", alt: "Kitchen island detail", category: "kitchen" },
  { src: "/images/015_DON_8889_HDR.jpg", alt: "Kitchen island overlooking great room with fireplace", category: "kitchen" },
  { src: "/images/016_DON_8892_HDR.jpg", alt: "Kitchen and eating area", category: "kitchen" },
  { src: "/images/017_DON_8897_HDR.jpg", alt: "Kitchen workspace", category: "kitchen" },
  { src: "/images/018_DON_8900_HDR.jpg", alt: "Kitchen appliances and cabinetry", category: "kitchen" },
  // Upper level / Loft
  { src: "/images/019_DON_8906_HDR.jpg", alt: "Upper level loft overlooking great room — 15' x 19'", category: "upper" },
  { src: "/images/020_DON_8909_HDR.jpg", alt: "Upper level hallway", category: "upper" },
  { src: "/images/021_DON_8915_HDR.jpg", alt: "Bedroom 4", category: "upper" },
  { src: "/images/022_DON_8918_HDR.jpg", alt: "Bedroom 5", category: "upper" },
  // Open concept views
  { src: "/images/023_DON_8924_HDR.jpg", alt: "Great room with oversized windows and hardwood", category: "living" },
  { src: "/images/024_DON_8927_HDR.jpg", alt: "Main floor hallway", category: "interior" },
  { src: "/images/025_DON_8930_HDR.jpg", alt: "Interior detail", category: "interior" },
  { src: "/images/026_DON_8933_HDR.jpg", alt: "Interior room", category: "interior" },
  // Bathrooms
  { src: "/images/027_DON_9348_HDR.jpg", alt: "Ensuite bathroom with dual vanity and quartz counters", category: "bathroom" },
  { src: "/images/028_DON_9352_HDR.jpg", alt: "Bathroom detail", category: "bathroom" },
  // Exterior sunset/twilight
  { src: "/images/029_DON_8859_3.jpg", alt: "Rear exterior at dusk", category: "sunset" },
  { src: "/images/030_DON_8860_2.jpg", alt: "Backyard at twilight", category: "sunset" },
  { src: "/images/031_DON_8861_1.jpg", alt: "Exterior evening glow", category: "sunset" },
  { src: "/images/032_DON_9118_HDR_2.jpg", alt: "Rear exterior at golden hour — brick and stone with large windows", category: "sunset" },
  { src: "/images/033_DON_9123_HDR_2.jpg", alt: "Twilight exterior wide shot", category: "sunset" },
  { src: "/images/034_DON_9128_HDR_2.jpg", alt: "Evening exterior view", category: "sunset" },
  // Aerial / Drone
  { src: "/images/035_DJI_20251017112853_0075_D___.jpg", alt: "Aerial — Murray Canal waterway with fall foliage", category: "aerial" },
  { src: "/images/036_DJI_20251017113153_0086_D___.jpg", alt: "Aerial — waterfront community overview", category: "aerial" },
  { src: "/images/037_DJI_20251017115021_0117_D___.jpg", alt: "Aerial — neighborhood from above", category: "aerial" },
  { src: "/images/038_DJI_20251017120206_0149_D___.jpg", alt: "Aerial — development and surrounding forest", category: "aerial" },
  { src: "/images/039_DJI_20251017120211_0150_D___.jpg", alt: "Aerial — community with water views", category: "aerial" },
  { src: "/images/040_DJI_20251017120317_0154_D___.jpg", alt: "Aerial — homes backing onto greenbelt", category: "aerial" },
  { src: "/images/041_DJI_20251017120413_0160_D___.jpg", alt: "Aerial — new construction homes in Young's Cove", category: "aerial" },
  { src: "/images/042_DJI_20251017120439_0162_D___.jpg", alt: "Aerial — streetscape", category: "aerial" },
  { src: "/images/043_DJI_20251017120534_0166_D___.jpg", alt: "Aerial — community overview", category: "aerial" },
  { src: "/images/044_DJI_20251017120738_0171_D___.jpg", alt: "Aerial — wider area view", category: "aerial" },
  { src: "/images/045_DJI_20251017120753_0173_D___.jpg", alt: "Aerial — development and waterfront", category: "aerial" },
  { src: "/images/046_DJI_20251017120921_0179_D___.jpg", alt: "Aerial — property from above", category: "aerial" },
  { src: "/images/047_DJI_20251017120925_0180_D___.jpg", alt: "Aerial — street view from drone", category: "aerial" },
  { src: "/images/048_DJI_20251017120933_0182_D___.jpg", alt: "Aerial — neighborhood context", category: "aerial" },
  { src: "/images/049_DJI_20251017120939_0183_D___.jpg", alt: "Aerial — full community panorama", category: "aerial" },
];

export const HERO_IMAGE = "/images/032_DON_9118_HDR_2.jpg";
export const HERO_AERIAL = "/images/035_DJI_20251017112853_0075_D___.jpg";

export const GALLERY_FEATURED = [
  IMAGES[0],   // Front exterior
  IMAGES[6],   // Great room with fireplace
  IMAGES[14],  // Kitchen island
  IMAGES[30],  // Sunset exterior
  IMAGES[34],  // Murray Canal aerial
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
  { key: "kitchen", label: "Kitchen" },
  { key: "upper", label: "Upper Level" },
  { key: "bathroom", label: "Bathrooms" },
  { key: "interior", label: "Interior" },
  { key: "sunset", label: "Twilight" },
  { key: "aerial", label: "Aerial" },
];
