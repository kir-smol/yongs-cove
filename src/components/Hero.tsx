import { PROPERTY, HERO_IMAGE } from "@/data/property";

export default function Hero() {
  return (
    <section className="relative pt-20 sm:pt-24">
      <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />

        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12 sm:pb-16">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/90 backdrop-blur-sm rounded-full mb-4">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                {PROPERTY.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
              {PROPERTY.address}
            </h1>
            <p className="mt-2 text-lg sm:text-xl text-white/90 max-w-2xl">
              {PROPERTY.city}, {PROPERTY.province} &mdash; {PROPERTY.builder}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-5">
              <span className="px-4 py-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium rounded-lg border border-white/20">
                {PROPERTY.bedrooms} Bed
              </span>
              <span className="px-4 py-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium rounded-lg border border-white/20">
                {PROPERTY.bathrooms} + 1 Bath
              </span>
              <span className="px-4 py-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium rounded-lg border border-white/20">
                {PROPERTY.livingArea}
              </span>
              <span className="px-4 py-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium rounded-lg border border-white/20">
                Luxury Bungaloft
              </span>
              <span className="px-4 py-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium rounded-lg border border-white/20">
                {PROPERTY.lotSize} Lot
              </span>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-2xl sm:text-3xl font-bold text-white">{PROPERTY.price}</span>
              <span className="text-white/60 text-sm">MLS# {PROPERTY.mls}</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
              >
                Schedule a Private Tour
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-medium rounded-lg transition-colors border border-white/30 text-sm sm:text-base"
              >
                View 49 Photos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
