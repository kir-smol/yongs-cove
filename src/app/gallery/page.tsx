"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgentCards from "@/components/AgentCards";
import HomeContactForm from "@/components/HomeContactForm";
import { ALL_LISTINGS, SHARED_AGENTS, IMAGE_CATEGORIES, type ImageCategory } from "@/data/properties";

interface GalleryImage {
  src: string;
  alt: string;
  category: ImageCategory;
  propertyAddress: string;
  propertySlug: string;
}

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [filter, setFilter] = useState<ImageCategory | "all">("all");
  const [propertyFilter, setPropertyFilter] = useState<string>("all");

  // Build a flat list of all images with property info
  const allImages: GalleryImage[] = ALL_LISTINGS.flatMap((listing) =>
    listing.images.map((img) => ({
      src: img.src,
      alt: img.alt,
      category: img.category,
      propertyAddress: listing.property.address,
      propertySlug: listing.property.slug,
    }))
  );

  const filtered = allImages.filter((img) => {
    const catMatch = filter === "all" || img.category === filter;
    const propMatch = propertyFilter === "all" || img.propertySlug === propertyFilter;
    return catMatch && propMatch;
  });

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const navigate = useCallback(
    (dir: number) => {
      setActiveIndex((prev) => (prev + dir + filtered.length) % filtered.length);
    },
    [filtered.length]
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
    <>
      <Header />
      <main>
        <section className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Gallery</h1>
              <p className="mt-2 text-muted">
                Browse photos from all our properties at Young&apos;s Cove
              </p>
            </div>

            {/* Property filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <button
                onClick={() => setPropertyFilter("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  propertyFilter === "all"
                    ? "bg-primary text-white"
                    : "bg-surface-warm text-foreground hover:bg-border"
                }`}
              >
                All Properties
              </button>
              {ALL_LISTINGS.map((listing) => (
                <button
                  key={listing.property.slug}
                  onClick={() => setPropertyFilter(listing.property.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    propertyFilter === listing.property.slug
                      ? "bg-primary text-white"
                      : "bg-surface-warm text-foreground hover:bg-border"
                  }`}
                >
                  {listing.property.address}
                </button>
              ))}
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  filter === "all"
                    ? "bg-foreground text-white"
                    : "bg-border/50 text-foreground hover:bg-border"
                }`}
              >
                All Categories ({filtered.length})
              </button>
              {IMAGE_CATEGORIES.map((cat) => {
                const count = filtered.filter((img) => img.category === cat.key).length;
                if (count === 0 && filter !== cat.key) return null;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setFilter(cat.key)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      filter === cat.key
                        ? "bg-foreground text-white"
                        : "bg-border/50 text-foreground hover:bg-border"
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
                  key={`${img.propertySlug}-${img.src}`}
                  onClick={() => openLightbox(i)}
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
                  {/* Property label on hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-xs font-medium truncate">{img.propertyAddress}</p>
                  </div>
                </button>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-muted py-12">No photos match the selected filters.</p>
            )}
          </div>
        </section>

        <AgentCards agents={SHARED_AGENTS} propertyAddress="Young's Cove" />
        <HomeContactForm />
      </main>
      <Footer />

      {/* Lightbox */}
      {lightboxOpen && filtered[activeIndex] && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
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
              src={filtered[activeIndex].src}
              alt={filtered[activeIndex].alt}
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
              {filtered[activeIndex].alt}
            </p>
            <Link
              href={`/properties/${filtered[activeIndex].propertySlug}`}
              className="text-primary/80 hover:text-primary text-xs mt-1 underline"
              onClick={() => setLightboxOpen(false)}
            >
              {filtered[activeIndex].propertyAddress}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
