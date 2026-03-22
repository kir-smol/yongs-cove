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
              { label: "Gallery", href: "/gallery", isLink: true },
              { label: "Collections", href: "#collections", isLink: false },
              { label: "Agents", href: "#agents", isLink: false },
            ].map((item) => {
              const cls = `text-sm font-medium transition-colors ${
                transparent
                  ? "text-white/90 hover:text-white"
                  : "text-foreground hover:text-btn"
              }`;
              return item.isLink ? (
                <Link key={item.label} href={item.href} className={cls}>{item.label}</Link>
              ) : (
                <a key={item.label} href={item.href} className={cls}>{item.label}</a>
              );
            })}
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
            <Link href="/gallery" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-surface-warm">Gallery</Link>
            <a href="#collections" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-surface-warm">Collections</a>
            <a href="#agents" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-surface-warm">Agents</a>
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
