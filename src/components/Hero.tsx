"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { PROPERTY, IMAGES, GALLERY_FEATURED } from "@/data/property";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/YD38zkcytSUF9ZfLA";

export default function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [scrollToIndex, setScrollToIndex] = useState(0);
  const [heroIdx, setHeroIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const openGalleryModal = () => {
    setScrollToIndex(0);
    setLightboxOpen(true);
  };

  const openLightbox = (index: number) => {
    const realIdx = IMAGES.findIndex((img) => img.src === GALLERY_FEATURED[index]?.src);
    setScrollToIndex(realIdx >= 0 ? realIdx : 0);
    setLightboxOpen(true);
  };

  const navigateHero = useCallback((dir: number) => {
    setHeroIdx((prev) => (prev + dir + IMAGES.length) % IMAGES.length);
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen || !scrollRef.current) return;
    const target = scrollRef.current.children[scrollToIndex] as HTMLElement | undefined;
    if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
  }, [lightboxOpen, scrollToIndex]);

  return (
    <>
      <section className="pt-16 sm:pt-20 bg-white">
        {/* Title bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                {PROPERTY.address}
              </h1>
              <p className="text-sm text-muted mt-0.5">
                {PROPERTY.city} ({PROPERTY.ward}), {PROPERTY.province} {PROPERTY.postalCode}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary border border-border rounded-lg hover:bg-surface-warm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Directions
              </a>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: PROPERTY.address, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary border border-border rounded-lg hover:bg-surface-warm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Image gallery grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-2 gap-1.5 rounded-xl overflow-hidden" style={{ height: "clamp(300px, 50vh, 520px)" }}>
            {/* Main hero image with arrows */}
            <div className="relative sm:col-span-2 sm:row-span-2 overflow-hidden group">
              <button onClick={openGalleryModal} className="absolute inset-0 z-10 cursor-pointer">
                <Image
                  src={IMAGES[heroIdx].src}
                  alt={IMAGES[heroIdx].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </button>

              {/* Left arrow */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateHero(-1); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous photo"
              >
                <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right arrow */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateHero(1); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next photo"
              >
                <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Photo counter */}
              <span className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-lg pointer-events-none">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {heroIdx + 1} / {IMAGES.length}
              </span>
            </div>

            {/* 4 thumbnail images */}
            {GALLERY_FEATURED.slice(1, 5).map((img, i) => (
              <button
                key={img.src}
                onClick={() => openLightbox(i + 1)}
                className="relative overflow-hidden group cursor-pointer hidden sm:block"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                {i === 3 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      + {IMAGES.length - 5} photos
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Property info bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-10">
            {/* Left: price, address, specs */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline gap-4">
                <span className="text-3xl sm:text-4xl font-bold text-primary">{PROPERTY.price}</span>
                <span className="text-sm text-muted">MLS# {PROPERTY.mls}</span>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/10 text-accent-dark text-xs font-semibold rounded-full">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {PROPERTY.status}
                </div>
              </div>

              <p className="mt-2 text-sm text-muted">
                {PROPERTY.builder} &middot; Prince Edward County
              </p>

              {/* Specs row */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-5 pt-5 border-t border-border">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v11m0-4h18m0 4V8a3 3 0 00-3-3H6a3 3 0 00-3 3m18 3V7" />
                  </svg>
                  <div>
                    <span className="text-lg font-bold text-foreground">{PROPERTY.bedrooms}</span>
                    <span className="text-sm text-muted ml-1">Beds</span>
                  </div>
                </div>

                <div className="w-px h-8 bg-border hidden sm:block" />

                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18M3 12v6a3 3 0 003 3h12a3 3 0 003-3v-6M3 12V7a4 4 0 014-4h1" />
                  </svg>
                  <div>
                    <span className="text-lg font-bold text-foreground">{PROPERTY.bathrooms}</span>
                    <span className="text-sm text-muted ml-1">Baths</span>
                  </div>
                </div>

                <div className="w-px h-8 bg-border hidden sm:block" />

                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <div>
                    <span className="text-lg font-bold text-foreground">{PROPERTY.livingArea}</span>
                  </div>
                </div>

                <div className="w-px h-8 bg-border hidden sm:block" />

                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18" />
                  </svg>
                  <div>
                    <span className="text-lg font-bold text-foreground">{PROPERTY.lotSize}</span>
                    <span className="text-sm text-muted ml-1">Lot</span>
                  </div>
                </div>

                <div className="w-px h-8 bg-border hidden sm:block" />

                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.5 17.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM4 15.5h-.5a1 1 0 01-1-1v-3a1 1 0 011-1h1l2-3.5h7l2.5 3.5h2.5a1 1 0 011 1v3a1 1 0 01-1 1H20M8 15.5h8" />
                  </svg>
                  <div>
                    <span className="text-lg font-bold text-foreground">3-Car</span>
                    <span className="text-sm text-muted ml-1">Garage</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-4">
                <span className="px-3 py-1 bg-surface-warm text-foreground text-xs font-medium rounded-full">{PROPERTY.style}</span>
                <span className="px-3 py-1 bg-surface-warm text-foreground text-xs font-medium rounded-full">{PROPERTY.exteriorFinish}</span>
                <span className="px-3 py-1 bg-surface-warm text-foreground text-xs font-medium rounded-full">{PROPERTY.title}</span>
                <span className="px-3 py-1 bg-surface-warm text-foreground text-xs font-medium rounded-full">{PROPERTY.parking}</span>
                <span className="px-3 py-1 bg-surface-warm text-foreground text-xs font-medium rounded-full">{PROPERTY.yearBuilt}</span>
              </div>
            </div>

            {/* Right: CTA box */}
            <div className="lg:w-[340px] shrink-0">
              <div className="bg-primary rounded-xl p-6 text-white">
                <p className="text-sm font-medium text-white/80 mb-3">Interested in this property?</p>
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors"
                >
                  Schedule a Private Tour
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                <div className="flex items-center gap-3 my-3">
                  <div className="flex-1 h-px bg-white/20" />
                  <span className="text-xs text-white/50">or</span>
                  <div className="flex-1 h-px bg-white/20" />
                </div>

                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send an Inquiry
                </a>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 mt-3 px-6 py-2.5 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox — vertical scroll gallery modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-white">
          <button
            onClick={() => setLightboxOpen(false)}
            className="fixed top-4 right-4 z-[110] text-foreground/70 hover:text-foreground p-2 bg-white/80 rounded-full backdrop-blur-sm shadow-sm"
            aria-label="Close"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="fixed top-4 left-4 z-[110] text-foreground/60 text-sm bg-white/80 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
            {IMAGES.length} photos
          </div>

          <div ref={scrollRef} className="h-full overflow-y-auto scroll-smooth">
            <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 space-y-4">
              {IMAGES.map((img, i) => (
                <div key={img.src} className="relative w-full">
                  <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      priority={i < 3}
                    />
                  </div>
                  <p className="text-muted text-xs text-center mt-2">
                    {i + 1} / {IMAGES.length} &middot; {img.alt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
