"use client";

import { useState } from "react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-16 sm:py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Virtual Tour</h2>
          <p className="mt-2 text-white/70">
            Experience Young&apos;s Cove from the comfort of your home
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/50">
            {!playing ? (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
              >
                {/* Placeholder thumbnail */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="relative w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                  <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-black text-white/60">
                {/* Replace with actual video embed */}
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <p className="text-sm">Video player placeholder</p>
                  <p className="text-xs mt-1">Replace with your property video URL</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
