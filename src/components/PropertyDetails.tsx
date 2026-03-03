"use client";

import { useState } from "react";
import { PROPERTY, LISTING_DESCRIPTION, ROOMS } from "@/data/property";

const FEATURES = [
  { icon: "bed", label: "Bedrooms", value: String(PROPERTY.bedrooms) },
  { icon: "bath", label: "Bathrooms", value: `${PROPERTY.bathrooms} + 1 Half` },
  { icon: "area", label: "Square Footage", value: PROPERTY.livingArea },
  { icon: "lot", label: "Lot Size", value: PROPERTY.lotSize },
  { icon: "year", label: "Built", value: PROPERTY.yearBuilt },
  { icon: "parking", label: "Garage", value: "3-Car Garage" },
];

const HIGHLIGHTS = [
  `Briarwood Homes "Vineyard Collection" — luxury bungaloft`,
  "5 bedrooms, 4 full bathrooms + 1 half bath",
  "Soaring double-height great room with gas fireplace",
  "Open-concept main floor — hardwood throughout",
  "Chef-inspired kitchen with quartz countertops and large island",
  "Luxurious primary suite on main floor",
  "Upper level loft (15' x 19') — ideal home office or family room",
  "2 upper bedrooms + full bathroom + storage",
  "Elegant oak staircase with wrought iron spindles",
  `Premium ${PROPERTY.lotSize} lot backing onto greenbelt`,
  "Brick and stone exterior — timeless curb appeal",
  "Deck and porch for outdoor living",
  "Carpet-free — hardwood and tile flooring",
  "Central A/C + forced air natural gas heating",
  "Minutes from Prince Edward County — wineries, beaches, trails",
  "Near Murray Canal and Bay of Quinte",
];

function FeatureIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    bed: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v11m0-4h18m0 4V8a3 3 0 00-3-3H6a3 3 0 00-3 3m18 3V7" />
      </svg>
    ),
    bath: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18M3 12v6a3 3 0 003 3h12a3 3 0 003-3v-6M3 12V7a4 4 0 014-4h1" />
      </svg>
    ),
    area: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    lot: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15" />
      </svg>
    ),
    year: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    parking: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.5 17.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM4 15.5h-.5a1 1 0 01-1-1v-3a1 1 0 011-1h1l2-3.5h7l2.5 3.5h2.5a1 1 0 011 1v3a1 1 0 01-1 1H20M8 15.5h8" />
      </svg>
    ),
  };
  return <>{icons[type] || null}</>;
}

export default function PropertyDetails() {
  const [metric, setMetric] = useState(false);
  const paragraphs = LISTING_DESCRIPTION.split("\n\n");
  const mainRooms = ROOMS.filter((r) => r.level === "Main Level");
  const upperRooms = ROOMS.filter((r) => r.level === "Upper Level");

  return (
    <section id="details" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Property Details</h2>
            <p className="text-sm text-muted mt-1">
              {PROPERTY.address}, {PROPERTY.city}, {PROPERTY.province} {PROPERTY.postalCode}
            </p>
            <p className="text-xs text-muted mt-0.5">
              {PROPERTY.builder} &middot; {PROPERTY.locationDescription}
            </p>

            {paragraphs.map((p, i) => (
              <p key={i} className={`${i === 0 ? "mt-6 text-lg font-medium text-foreground" : "mt-4 text-muted"} leading-relaxed`}>
                {p}
              </p>
            ))}

            {/* Room dimensions */}
            <div className="mt-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Room Dimensions</h3>
                <div className="flex items-center bg-surface-warm rounded-lg p-0.5">
                  <button
                    onClick={() => setMetric(false)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      !metric ? "bg-white text-foreground shadow-sm" : "text-muted hover:text-foreground"
                    }`}
                  >
                    Imperial
                  </button>
                  <button
                    onClick={() => setMetric(true)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      metric ? "bg-white text-foreground shadow-sm" : "text-muted hover:text-foreground"
                    }`}
                  >
                    Metric
                  </button>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Main Level</h4>
                  <div className="space-y-2">
                    {mainRooms.map((r) => (
                      <div key={r.name} className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-sm text-foreground">{r.name}</span>
                        <span className="text-sm text-muted">{metric ? r.dimensions : r.imperial}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Upper Level</h4>
                  <div className="space-y-2">
                    {upperRooms.map((r) => (
                      <div key={r.name} className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-sm text-foreground">{r.name}</span>
                        <span className="text-sm text-muted">{metric ? r.dimensions : r.imperial}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-foreground mb-4">Property Highlights</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional specs */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-foreground mb-4">Property Summary</h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {[
                  ["Property Type", PROPERTY.type],
                  ["Building Type", `${PROPERTY.buildingType} — ${PROPERTY.style}`],
                  ["Storeys", PROPERTY.storeys],
                  ["Title", PROPERTY.title],
                  ["Exterior", PROPERTY.exteriorFinish],
                  ["Foundation", PROPERTY.foundation],
                  ["Flooring", PROPERTY.flooring],
                  ["Heating", PROPERTY.heating],
                  ["Cooling", PROPERTY.cooling],
                  ["Fireplace", PROPERTY.fireplace],
                  ["Basement", PROPERTY.basement],
                  ["Structures", PROPERTY.structures],
                  ["Water", PROPERTY.water],
                  ["Sewer", PROPERTY.sewer],
                  ["Rental Equipment", PROPERTY.rentalEquipment],
                  ["Amenities Nearby", PROPERTY.amenitiesNearby],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-sm text-muted">{label}</span>
                    <span className="text-sm font-medium text-foreground text-right max-w-[55%]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 sticky top-28">
              <div className="mb-6">
                <p className="text-sm text-muted mb-1">Listed Price</p>
                <p className="text-3xl font-bold text-primary">{PROPERTY.price}</p>
                <p className="text-xs text-muted mt-1">MLS# {PROPERTY.mls}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {FEATURES.map((f) => (
                  <div key={f.icon} className="flex items-center gap-3 py-3 border-b border-border/50">
                    <span className="text-primary">
                      <FeatureIcon type={f.icon} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{f.value}</p>
                      <p className="text-xs text-muted">{f.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-4 bg-surface-warm rounded-lg">
                <p className="text-xs text-muted mb-1">Builder</p>
                <p className="text-sm font-semibold text-foreground">{PROPERTY.builder}</p>
                <p className="text-xs text-muted mt-2 mb-1">Location</p>
                <p className="text-sm text-foreground">{PROPERTY.locationDescription}</p>
              </div>

              <a
                href="#contact"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg transition-colors"
              >
                Request More Info
              </a>

              <a
                href="#contact"
                className="mt-3 w-full inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Book a Private Viewing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
