"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { IMAGES, IMAGE_CATEGORIES, type ImageCategory } from "@/data/property";

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [filter, setFilter] = useState<ImageCategory | "all">("all");

  const filtered = filter === "all" ? IMAGES : IMAGES.filter((img) => img.category === filter);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const navigate = useCallback(
    (dir: number) => {
      const source = filter === "all" ? IMAGES : IMAGES.filter((img) => img.category === filter);
      setActiveIndex((prev) => (prev + dir + source.length) % source.length);
    },
    [filter]
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
    <section id="gallery" className="py-16 sm:py-20 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">All Photos</h2>
          <p className="mt-2 text-muted">Browse by category</p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "all"
                ? "bg-primary text-white"
                : "bg-surface-warm text-foreground hover:bg-border"
            }`}
          >
            All ({IMAGES.length})
          </button>
          {IMAGE_CATEGORIES.map((cat) => {
            const count = IMAGES.filter((img) => img.category === cat.key).length;
            if (count === 0) return null;
            return (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat.key
                    ? "bg-primary text-white"
                    : "bg-surface-warm text-foreground hover:bg-border"
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Thumbnail grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {filtered.map((img, i) => (
            <button
              key={img.src}
              onClick={() => {
                const realIdx = filter === "all" ? i : IMAGES.findIndex((im) => im.src === img.src);
                openLightbox(realIdx >= 0 ? realIdx : i);
              }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
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
              src={filtered[activeIndex]?.src ?? IMAGES[activeIndex].src}
              alt={filtered[activeIndex]?.alt ?? IMAGES[activeIndex].alt}
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

          <div className="absolute bottom-6 flex flex-col items-center gap-1">
            <p className="text-white/60 text-sm">
              {activeIndex + 1} / {filtered.length}
            </p>
            <p className="text-white/40 text-xs max-w-md text-center">
              {filtered[activeIndex]?.alt ?? IMAGES[activeIndex].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
