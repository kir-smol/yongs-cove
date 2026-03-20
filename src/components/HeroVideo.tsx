"use client";

import { useEffect, useState } from "react";

export default function HeroVideo() {
  const videoId = "qnEAwQUYp8g";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* YouTube iframe */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
        title="Young's Cove Video Tour"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] sm:w-[200%] sm:h-[200%] pointer-events-none"
        style={{ border: "none" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-24 sm:pb-32">
        <h1
          className={`font-heading text-5xl sm:text-6xl lg:text-[72px] font-normal text-white leading-[1.1] tracking-tight max-w-4xl transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Waterfront Homes on Lake Ontario — Prince Edward County
        </h1>

        {/* Dual CTAs */}
        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#collections"
            className="px-8 py-3.5 bg-btn hover:bg-btn-hover text-white font-semibold rounded-full transition-colors text-sm"
          >
            Explore Collections
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-full border border-white/30 transition-colors text-sm"
          >
            Book Your Visit
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 ease-out delay-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
