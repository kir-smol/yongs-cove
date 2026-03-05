import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import AgentCards from "@/components/AgentCards";
import HomeContactForm from "@/components/HomeContactForm";
import Footer from "@/components/Footer";
import { ALL_LISTINGS, SHARED_AGENTS } from "@/data/properties";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero section */}
        <section className="pt-20 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Young&apos;s Cove
              </h1>
              <p className="mt-2 text-lg sm:text-xl text-primary font-medium">
                Premium Waterfront Living
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Discover exceptional luxury homes in one of Ontario&apos;s most sought-after 
                waterfront communities. New construction by Briarwood Homes, minutes from 
                Prince Edward County.
              </p>
            </div>

            {/* Mobile Book a Viewing button */}
            <div className="md:hidden mb-6">
              <a
                href="#contact"
                className="block w-full text-center px-5 py-3.5 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg transition-colors"
              >
                Book a Viewing
              </a>
            </div>

            {/* Listing cards */}
            <div id="listings" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {ALL_LISTINGS.map((listing) => {
                const { property, images } = listing;
                return (
                  <Link
                    key={property.slug}
                    href={`/properties/${property.slug}`}
                    className="group bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={images[0]?.src ?? "/images/25-front-of-house-hero.jpg"}
                        alt={property.address}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {/* Status badge */}
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {property.status}
                      </div>

                      {/* Photo count */}
                      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-lg">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {images.length} photos
                      </span>

                      {/* Price overlay */}
                      <div className="absolute bottom-3 left-4">
                        <p className="text-2xl font-bold text-white drop-shadow-lg">
                          {property.price}
                        </p>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-5 sm:p-6">
                      <h2 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {property.address}
                      </h2>
                      <p className="text-sm text-muted mt-0.5">
                        {property.city} ({property.ward}), {property.province} {property.postalCode}
                      </p>

                      {/* Specs row */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 pt-4 border-t border-border">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v11m0-4h18m0 4V8a3 3 0 00-3-3H6a3 3 0 00-3 3m18 3V7" />
                          </svg>
                          <span className="text-sm font-semibold text-foreground">{property.bedrooms}</span>
                          <span className="text-xs text-muted">Beds</span>
                        </div>

                        <div className="w-px h-5 bg-border" />

                        <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18M3 12v6a3 3 0 003 3h12a3 3 0 003-3v-6M3 12V7a4 4 0 014-4h1" />
                          </svg>
                          <span className="text-sm font-semibold text-foreground">{property.bathrooms}</span>
                          <span className="text-xs text-muted">Baths</span>
                        </div>

                        <div className="w-px h-5 bg-border" />

                        <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                          <span className="text-sm font-semibold text-foreground">{property.livingArea}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-2.5 py-1 bg-surface-warm text-foreground text-xs font-medium rounded-full">{property.style}</span>
                        <span className="px-2.5 py-1 bg-surface-warm text-foreground text-xs font-medium rounded-full">{property.lotDisplayLabel}</span>
                        <span className="px-2.5 py-1 bg-surface-warm text-foreground text-xs font-medium rounded-full">{property.yearBuilt}</span>
                      </div>

                      {/* Builder */}
                      <p className="mt-3 text-xs text-muted">
                        {property.builder} &middot; MLS# {property.mls}
                      </p>

                      {/* CTA */}
                      <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        View Details
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact form */}
        <HomeContactForm />

        {/* Agents */}
        <AgentCards agents={SHARED_AGENTS} propertyAddress="Young's Cove" />
      </main>
      <Footer />
    </>
  );
}
