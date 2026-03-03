"use client";

import { useState, useEffect } from "react";
import { AGENTS } from "@/data/property";

const julia = AGENTS[0];
const phoneRaw = julia.phone.replace(/[^0-9+]/g, "");

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={`tel:${phoneRaw}`}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 bg-primary hover:bg-primary-light text-white font-semibold text-sm rounded-full shadow-xl shadow-primary/30 transition-all duration-300 animate-slide-up"
    >
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span className="hidden sm:inline">Call Julia — {julia.phone}</span>
      <span className="sm:hidden">{julia.phone}</span>
    </a>
  );
}
