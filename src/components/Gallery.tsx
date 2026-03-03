"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

const SAMPLE_IMAGES = [
  { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80", alt: "Property exterior" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Living room" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Kitchen" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Bedroom" },
  { src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80", alt: "Waterfront view" },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const navigate = useCallback(
    (dir: number) => {
      setActiveIndex((prev) => (prev + dir + SAMPLE_IMAGES.length) % SAMPLE_IMAGES.length);
    },
    []
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen, navigate]);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Gallery</h2>
          <p className="mt-2 text-muted">Explore the property through our curated collection</p>
        </div>

        <div className="gallery-grid">
          {SAMPLE_IMAGES.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              {i === SAMPLE_IMAGES.length - 1 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    +{SAMPLE_IMAGES.length - 5} More
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => openLightbox(0)}
            className="text-sm font-medium text-primary hover:text-primary-light transition-colors underline underline-offset-4"
          >
            View all photos
          </button>
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox-overlay fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 text-white/80 hover:text-white p-2"
            aria-label="Previous"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative w-full max-w-5xl mx-8 aspect-[16/10]">
            <Image
              src={SAMPLE_IMAGES[activeIndex].src}
              alt={SAMPLE_IMAGES[activeIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <button
            onClick={() => navigate(1)}
            className="absolute right-4 text-white/80 hover:text-white p-2"
            aria-label="Next"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-6 text-white/60 text-sm">
            {activeIndex + 1} / {SAMPLE_IMAGES.length}
          </div>
        </div>
      )}
    </section>
  );
}
