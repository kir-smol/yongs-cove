export default function Hero() {
  return (
    <section className="relative pt-20 sm:pt-24">
      <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-primary-dark overflow-hidden">
        {/* Placeholder for hero image/video — replace with actual property media */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80')",
          }}
        />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12 sm:pb-16">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/90 backdrop-blur-sm rounded-full mb-4">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Now Selling
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
              Young&apos;s Cove
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-white/90 max-w-2xl">
              Premium waterfront living — where nature meets modern comfort.
              Your private retreat on the water.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <span className="px-4 py-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium rounded-lg border border-white/20">
                Waterfront
              </span>
              <span className="px-4 py-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium rounded-lg border border-white/20">
                New Construction
              </span>
              <span className="px-4 py-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium rounded-lg border border-white/20">
                Private Dock
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8">
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
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
