const FEATURES = [
  { icon: "bed", label: "Bedrooms", value: "4" },
  { icon: "bath", label: "Bathrooms", value: "3" },
  { icon: "area", label: "Living Area", value: "2,800 sq ft" },
  { icon: "lot", label: "Lot Size", value: "0.85 acres" },
  { icon: "year", label: "Year Built", value: "2024" },
  { icon: "parking", label: "Parking", value: "2-Car Garage" },
];

const HIGHLIGHTS = [
  "Direct waterfront access with private dock",
  "Open-concept living with floor-to-ceiling windows",
  "Chef's kitchen with premium appliances",
  "Primary suite with water views",
  "Heated floors throughout",
  "Energy-efficient construction",
  "Smart home ready",
  "Landscaped grounds with outdoor entertaining",
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  };
  return <>{icons[type] || null}</>;
}

export default function PropertyDetails() {
  return (
    <section id="details" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Property Details</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Nestled along the pristine shores, Young&apos;s Cove offers an exceptional waterfront
              living experience. This newly constructed residence combines contemporary architecture
              with the natural beauty of its surroundings, creating a sanctuary that&apos;s both
              luxurious and welcoming.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Every detail has been carefully considered — from the expansive windows that flood
              the living spaces with natural light, to the premium finishes that define each room.
              Step outside to your private dock and enjoy direct water access, or entertain guests
              on the beautifully landscaped grounds.
            </p>

            <div className="mt-8">
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
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 sticky top-28">
              <div className="mb-6">
                <p className="text-sm text-muted mb-1">Listed Price</p>
                <p className="text-3xl font-bold text-primary">$1,250,000</p>
                <p className="text-xs text-muted mt-1">MLS# 00000000</p>
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
                Book a Viewing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
