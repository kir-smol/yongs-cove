"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">YC</span>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-semibold text-primary tracking-tight">
                Young&apos;s Cove
              </span>
              <span className="hidden sm:block text-xs text-muted -mt-1">
                Waterfront Living
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#listings" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Listings
            </Link>
            <a href="#gallery" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#details" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Details
            </a>
            <a href="#agents" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Agents
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-light transition-colors"
            >
              Book a Viewing
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <Link href="/#listings" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground py-2">Listings</Link>
            <a href="#gallery" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground py-2">Gallery</a>
            <a href="#details" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground py-2">Details</a>
            <a href="#agents" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground py-2">Agents</a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg"
            >
              Book a Viewing
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
