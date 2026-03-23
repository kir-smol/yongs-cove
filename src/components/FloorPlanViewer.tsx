"use client";

import { useState } from "react";
import Image from "next/image";
import type { FloorPlan } from "@/data/collections";

interface FloorPlanViewerProps {
  floorPlans: FloorPlan[];
}

export default function FloorPlanViewer({ floorPlans }: FloorPlanViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const active = floorPlans[activeIndex];

  return (
    <>
      <div>
        {floorPlans.length > 1 && (
          <div className="flex gap-2 mb-4">
            {floorPlans.map((fp, i) => (
              <button
                key={fp.level}
                onClick={() => setActiveIndex(i)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  i === activeIndex
                    ? "bg-primary-dark text-white"
                    : "bg-surface-warm text-muted hover:text-foreground"
                }`}
              >
                {fp.level}
              </button>
            ))}
          </div>
        )}

        <button
          onClick={() => setLightboxOpen(true)}
          className="relative w-full bg-white rounded-2xl border border-border overflow-hidden cursor-zoom-in group"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={active.image}
              alt={active.level}
              fill
              className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
          <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-lg">
            {active.level}
          </div>
          <div className="absolute top-3 right-3 px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            Enlarge
          </div>
        </button>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Close"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Floor level tabs */}
          {floorPlans.length > 1 && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {floorPlans.map((fp, i) => (
                <button
                  key={fp.level}
                  onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    i === activeIndex
                      ? "bg-white text-foreground"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  {fp.level}
                </button>
              ))}
            </div>
          )}

          {/* Full-size image */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.image}
              alt={active.level}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
