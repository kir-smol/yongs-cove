"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/youngscove-logo.jpg"
              alt="Young's Cove - Prince Edward Estates"
              width={160}
              height={96}
              className="h-8 sm:h-14 w-auto transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", href: "/", isLink: true },
              { label: "Experience", href: "/experience", isLink: true },
              { label: "Siteplan", href: "/siteplan", isLink: true },
              { label: "Gallery", href: "/gallery", isLink: true },
            ].map((item) => (
              <Link key={item.label} href={item.href} className={`text-sm font-medium transition-colors ${
                transparent
                  ? "text-white/90 hover:text-white"
                  : "text-foreground hover:text-btn"
              }`}>{item.label}</Link>
            ))}
            {/* Collections dropdown */}
            <div className="relative group">
              <button className={`text-sm font-medium transition-colors ${
                transparent
                  ? "text-white/90 hover:text-white"
                  : "text-foreground hover:text-btn"
              }`}>
                Collections
                <svg className="inline w-3.5 h-3.5 ml-1 -mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-lg border border-border py-2 min-w-[200px]">
                  <Link href="/collections/vineyard" className="block px-4 py-2.5 text-sm text-foreground hover:bg-surface-warm hover:text-btn transition-colors">
                    Vineyard Collection
                  </Link>
                  <Link href="/collections/lake" className="block px-4 py-2.5 text-sm text-foreground hover:bg-surface-warm hover:text-btn transition-colors">
                    Lake Collection
                  </Link>
                </div>
              </div>
            </div>
            <a href={isHome ? "#agents" : "/#agents"} className={`text-sm font-medium transition-colors ${
              transparent
                ? "text-white/90 hover:text-white"
                : "text-foreground hover:text-btn"
            }`}>Agents</a>
            <a
              href="#contact"
              className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-colors ${
                transparent
                  ? "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
                  : "bg-btn hover:bg-btn-hover text-white"
              }`}
            >
              Book a Visit
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 ${transparent ? "text-white" : "text-foreground"}`}
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-surface-warm">Home</Link>
            <Link href="/experience" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-surface-warm">Experience</Link>
            <Link href="/siteplan" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-surface-warm">Siteplan</Link>
            <Link href="/gallery" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-surface-warm">Gallery</Link>
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-muted uppercase tracking-wider">Collections</p>
            </div>
            <Link href="/collections/vineyard" onClick={() => setMobileOpen(false)} className="block px-4 py-3 pl-8 text-sm font-medium text-foreground rounded-lg hover:bg-surface-warm">Vineyard Collection</Link>
            <Link href="/collections/lake" onClick={() => setMobileOpen(false)} className="block px-4 py-3 pl-8 text-sm font-medium text-foreground rounded-lg hover:bg-surface-warm">Lake Collection</Link>
            <a href={isHome ? "#agents" : "/#agents"} onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-surface-warm">Agents</a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center mt-2 px-5 py-3 bg-primary text-foreground text-sm font-semibold rounded-full"
            >
              Book a Visit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
