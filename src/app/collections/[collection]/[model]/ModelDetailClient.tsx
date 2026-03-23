"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeInUp from "@/components/FadeInUp";
import ElevationSelector from "@/components/ElevationSelector";
import FloorPlanViewer from "@/components/FloorPlanViewer";
import HomeContactForm from "@/components/HomeContactForm";
import type { HomeModel, CollectionSlug } from "@/data/collections";

interface ModelDetailClientProps {
  model: HomeModel;
  collectionName: string;
  collectionSlug: CollectionSlug;
  sharedPdfs: { label: string; href: string }[];
}

export default function ModelDetailClient({
  model,
  collectionName,
  collectionSlug,
  sharedPdfs,
}: ModelDetailClientProps) {
  const [selectedElevation, setSelectedElevation] = useState(model.elevations[0].id);
  const [showLoft, setShowLoft] = useState(false);

  const activeElev = model.elevations.find((e) => e.id === selectedElevation) ?? model.elevations[0];
  const displaySqft = showLoft && activeElev.sqftLoft ? activeElev.sqftLoft : activeElev.sqft;

  // Pick the best available image: loft large > loft > large > base
  const featuredImage = showLoft && activeElev.imageLoft
    ? (activeElev.imageLoftLarge ?? activeElev.imageLoft)
    : (activeElev.imageLarge ?? activeElev.image);

  // Thumbnail: show loft variant if toggled
  const thumbImage = (elev: typeof activeElev) =>
    showLoft && elev.imageLoft ? elev.imageLoft : elev.image;

  const allPdfs = [...model.pdfs, ...sharedPdfs];

  return (
    <>
      {/* Header strip — breadcrumb + title + actions */}
      <section className="pt-24 sm:pt-28 pb-0 bg-surface">
        <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <FadeInUp>
            <nav className="flex items-center gap-2 text-sm text-muted mb-6">
              <Link href="/" className="hover:text-primary-dark transition-colors">Home</Link>
              <svg className="w-3.5 h-3.5 text-border" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href={`/collections/${collectionSlug}`} className="hover:text-primary-dark transition-colors">
                {collectionName}
              </Link>
              <svg className="w-3.5 h-3.5 text-border" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-foreground font-medium">{model.name}</span>
            </nav>
          </FadeInUp>

          {/* Title row */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-8 border-b border-border">
            <FadeInUp delay={100}>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-dark/10 text-primary-dark text-xs font-semibold rounded-full capitalize">
                    {model.type === "two-storey" ? "Two Storey" : "Bungalow"}
                    {model.hasLoft && " / Loft"}
                  </span>
                  <span className="text-sm text-muted">{collectionName}</span>
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground leading-tight tracking-tight">
                  {model.name}
                </h1>
                <p className="mt-2 text-lg text-muted">
                  {displaySqft.toLocaleString()} sq ft
                  {showLoft && activeElev.sqftLoft && (
                    <span className="text-muted/60 text-base ml-2">(with loft)</span>
                  )}
                  <span className="mx-2 text-border">|</span>
                  {model.bedrooms} Bed
                  <span className="mx-2 text-border">|</span>
                  {model.bathrooms} Bath
                </p>
              </div>
            </FadeInUp>

            {/* Action buttons */}
            <FadeInUp delay={200}>
              <div className="flex flex-wrap items-center gap-3">
                {allPdfs.map((pdf) => (
                  <a
                    key={pdf.href}
                    href={pdf.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-surface-warm text-foreground text-sm font-medium rounded-full border border-border hover:border-primary-dark/30 hover:text-primary-dark transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {pdf.label}
                  </a>
                ))}
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-btn hover:bg-btn-hover text-white text-sm font-semibold rounded-full transition-colors"
                >
                  Inquire
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Main two-column content */}
      <section className="py-10 sm:py-14 bg-surface">
        <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-14">

            {/* Left: Elevation render + controls */}
            <div className="space-y-6">
              {/* Elevation render — natural size, not stretched */}
              <FadeInUp delay={150}>
                <div className="rounded-2xl overflow-hidden">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={featuredImage}
                      alt={`${model.name} — ${activeElev.label}`}
                      className="absolute inset-0 w-full h-full object-contain object-center"
                    />
                  </div>
                  <div className="pt-5">
                    <div className="flex items-baseline justify-between mb-4">
                      <h3 className="font-heading text-base font-normal text-foreground">
                        {activeElev.label}
                      </h3>
                      <p className="text-sm text-muted">
                        {displaySqft.toLocaleString()} sq ft
                      </p>
                    </div>
                    {/* Elevation thumbnails */}
                    <div className="grid grid-cols-3 gap-2">
                      {model.elevations.map((elev) => (
                        <button
                          key={elev.id}
                          onClick={() => setSelectedElevation(elev.id)}
                          className={`relative aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all ${
                            elev.id === selectedElevation
                              ? "border-primary-dark ring-2 ring-primary-dark/20"
                              : "border-transparent hover:border-border"
                          }`}
                        >
                          <Image
                            src={thumbImage(elev)}
                            alt={elev.label}
                            fill
                            className="object-cover"
                            sizes="120px"
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-2 py-1">
                            <span className="text-white text-[11px] font-semibold">{elev.id.toUpperCase()}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInUp>

              {/* Loft toggle */}
              {model.hasLoft && (
                <FadeInUp delay={250}>
                  <div className="bg-surface-warm rounded-2xl px-5 py-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">Loft Option</p>
                      <p className="text-xs text-muted mt-0.5">
                        {showLoft
                          ? `${(activeElev.sqftLoft ?? 0).toLocaleString()} sq ft with loft`
                          : `${activeElev.sqft.toLocaleString()} sq ft base`}
                      </p>
                    </div>
                    <button
                      onClick={() => setShowLoft(!showLoft)}
                      className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${
                        showLoft ? "bg-primary-dark" : "bg-border"
                      }`}
                      aria-label="Toggle loft option"
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                          showLoft ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                </FadeInUp>
              )}

              {/* Description */}
              <FadeInUp delay={250}>
                <div className="bg-surface-warm rounded-2xl p-5">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                    About This Home
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {model.description}
                  </p>
                </div>
              </FadeInUp>

              {/* Specs */}
              <FadeInUp delay={300}>
                <div className="bg-surface-warm rounded-2xl p-5">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                    Specifications
                  </h3>
                  <dl className="space-y-2.5 text-sm">
                    {[
                      { label: "Type", value: model.type === "two-storey" ? "Two Storey" : "Bungalow" },
                      { label: "Size Range", value: model.sqftRange },
                      { label: "Bedrooms", value: model.bedrooms },
                      { label: "Bathrooms", value: model.bathrooms },
                      { label: "Levels", value: String(model.floorPlans.length) },
                      { label: "Elevations", value: String(model.elevations.length) },
                      ...(model.hasLoft ? [{ label: "Loft Available", value: "Yes" }] : []),
                    ].map((row, i) => (
                      <div key={row.label}>
                        {i > 0 && <div className="border-t border-border mb-2.5" />}
                        <div className="flex justify-between">
                          <dt className="text-muted">{row.label}</dt>
                          <dd className="font-medium text-foreground">{row.value}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>
              </FadeInUp>

              {/* CTA */}
              <FadeInUp delay={400}>
                <a
                  href="/#contact"
                  className="flex items-center justify-center w-full px-8 py-3.5 bg-btn hover:bg-btn-hover text-white text-sm font-semibold rounded-full transition-colors"
                >
                  Inquire About {model.name}
                </a>
              </FadeInUp>
            </div>

            {/* Right: Floor Plans + Contact Form */}
            <div className="space-y-12">
              <div>
                <FadeInUp>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-heading text-2xl font-normal text-foreground tracking-tight">
                      Floor Plans
                    </h2>
                  </div>
                </FadeInUp>
                <FadeInUp delay={100}>
                  <FloorPlanViewer floorPlans={model.floorPlans} />
                </FadeInUp>
              </div>

              <FadeInUp delay={200}>
                <HomeContactForm modelName={model.name} compact />
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Room dimensions + Features */}
      {(model.rooms?.length || model.features?.length) && (
        <section className="py-10 sm:py-14 bg-surface-warm">
          <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-14">

              {/* Room Dimensions */}
              {model.rooms && model.rooms.length > 0 && (
                <FadeInUp>
                  <div>
                    <h2 className="font-heading text-2xl font-normal text-foreground tracking-tight mb-6">
                      Room Dimensions
                    </h2>
                    <div className="bg-surface rounded-2xl border border-border overflow-hidden">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border bg-surface">
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Room</th>
                            <th className="text-right py-3 px-4 font-semibold text-foreground">Size</th>
                          </tr>
                        </thead>
                        <tbody>
                          {model.rooms.filter((r) => r.dimensions).map((room, i) => (
                            <tr key={room.name} className={i % 2 === 0 ? "bg-surface" : "bg-surface-warm/50"}>
                              <td className="py-3 px-4 text-foreground">
                                {room.name}
                                {room.notes && (
                                  <span className="block text-xs text-muted mt-0.5">{room.notes}</span>
                                )}
                              </td>
                              <td className="py-3 px-4 text-right text-muted font-mono text-xs">
                                {room.dimensions}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {(model.garageSize || model.optionalGarage) && (
                        <div className="border-t border-border px-4 py-3 bg-surface text-sm">
                          {model.garageSize && (
                            <div className="flex justify-between">
                              <span className="text-foreground">Garage</span>
                              <span className="text-muted font-mono text-xs">{model.garageSize}</span>
                            </div>
                          )}
                          {model.optionalGarage && (
                            <div className="flex justify-between mt-1">
                              <span className="text-foreground">Optional Garage</span>
                              <span className="text-muted font-mono text-xs">{model.optionalGarage}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </FadeInUp>
              )}

              {/* Features */}
              {model.features && model.features.length > 0 && (
                <FadeInUp delay={150}>
                  <div>
                    <h2 className="font-heading text-2xl font-normal text-foreground tracking-tight mb-6">
                      Features
                    </h2>
                    <div className="bg-surface rounded-2xl border border-border p-5">
                      <ul className="space-y-3">
                        {model.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm">
                            <svg className="w-4 h-4 text-primary-dark mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeInUp>
              )}
            </div>
          </div>
        </section>
      )}

    </>
  );
}
