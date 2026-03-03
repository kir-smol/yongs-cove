"use client";

import { useState } from "react";
import { YOUTUBE_VIDEO_ID } from "@/data/property";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`;

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Property Video Tour</h2>
          <p className="mt-2 text-muted">
            Experience Young&apos;s Cove from the comfort of your home
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface-warm shadow-lg border border-border">
            {!playing ? (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${thumbnailUrl}')` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="relative w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                  <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                title="Young's Cove Property Video Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
