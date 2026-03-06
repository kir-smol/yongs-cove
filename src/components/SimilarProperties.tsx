"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ALL_LISTINGS } from "@/data/properties";

interface SimilarPropertiesProps {
  currentSlug: string;
}

export default function SimilarProperties({ currentSlug }: SimilarPropertiesProps) {
  const others = ALL_LISTINGS.filter((l) => l.property.slug !== currentSlug);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("a")?.offsetWidth ?? 380;
    el.scrollBy({ left: dir === "left" ? -cardWidth - 24 : cardWidth + 24, behavior: "smooth" });
  };

  if (others.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Similar Properties
          </h2>
          <p className="mt-2 text-muted">
            Explore more luxury homes at Young&apos;s Cove
          </p>
        </div>

        {/* Slider container */}
        <div className="relative">
          {/* Left arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="hidden sm:flex absolute sm:-left-5 top-1/2 -translate-y-1/2 z-20 sm:w-11 sm:h-11 items-center justify-center rounded-full border border-border bg-white/95 shadow-lg hover:bg-surface-warm transition-colors"
            >
              <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="hidden sm:flex absolute sm:-right-5 top-1/2 -translate-y-1/2 z-20 sm:w-11 sm:h-11 items-center justify-center rounded-full border border-border bg-white/95 shadow-lg hover:bg-surface-warm transition-colors"
            >
              <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Left fade */}
          {canScrollLeft && (
            <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          )}

          {/* Cards row */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {others.map((listing) => {
              const { property, images } = listing;
              return (
                <Link
                  key={property.slug}
                  href={`/properties/${property.slug}`}
                  className="group flex-shrink-0 w-[85vw] sm:w-[340px] lg:w-[380px] bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 snap-start"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={images[0]?.src ?? "/images/25-front-of-house-hero.jpg"}
                      alt={property.address}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 85vw, 380px"
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
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {property.address}
                    </h3>
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

          {/* Right fade */}
          {canScrollRight && (
            <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
          )}
        </div>
      </div>
    </section>
  );
}
