import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/FadeInUp";
import ModelCard from "@/components/ModelCard";
import { VINEYARD_COLLECTION, SHARED_PDFS } from "@/data/collections";

export const metadata: Metadata = {
  title: "Vineyard Collection — Homes on 65' Lots | Young's Cove",
  description:
    "Explore the Vineyard Collection at Young's Cove — bungalows, bungalow lofts, and two-storey homes on 65-foot homesites in Quinte West, Ontario. View floor plans and elevations.",
};

export default function VineyardCollectionPage() {
  const collection = VINEYARD_COLLECTION;
  const bungalows = collection.models.filter((m) => m.type === "bungalow");
  const twoStoreys = collection.models.filter((m) => m.type === "two-storey");

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={collection.heroImage}
              alt={collection.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <Link
                href="/#collections"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-6 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                All Collections
              </Link>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="font-label text-sm font-semibold text-white/70 uppercase tracking-widest mb-3">
                {collection.tagline}
              </p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight tracking-tight">
                {collection.name}
              </h1>
            </FadeInUp>
            <FadeInUp delay={300}>
              <p className="mt-6 text-white/80 text-lg max-w-2xl leading-relaxed">
                {collection.description}
              </p>
            </FadeInUp>
            <FadeInUp delay={400}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={collection.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Digital Brochure
                </a>
                {SHARED_PDFS.map((pdf) => (
                  <a
                    key={pdf.href}
                    href={pdf.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {pdf.label}
                  </a>
                ))}
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Bungalow / Loft Models */}
        <section className="py-14 sm:py-20 lg:py-28 bg-surface">
          <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <p className="font-label text-sm font-semibold text-primary-dark uppercase tracking-widest mb-3">
                Bungalow &amp; Bungalow Loft
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground leading-[1.16] tracking-tight">
                {bungalows.length} Bungalow Models
              </h2>
            </FadeInUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {bungalows.map((model, i) => (
                <FadeInUp key={model.slug} delay={i * 150}>
                  <ModelCard model={model} index={i} />
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Two-Storey Models */}
        <section className="py-14 sm:py-20 lg:py-28 bg-surface-warm">
          <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <p className="font-label text-sm font-semibold text-primary-dark uppercase tracking-widest mb-3">
                Two Storey
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground leading-[1.16] tracking-tight">
                {twoStoreys.length} Two-Storey Models
              </h2>
            </FadeInUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {twoStoreys.map((model, i) => (
                <FadeInUp key={model.slug} delay={i * 150}>
                  <ModelCard model={model} index={i} />
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-14 sm:py-20 bg-primary-dark">
          <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight">
              Ready to Find Your Dream Home?
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Visit our Presentation Centre at 2247 County Road 64, Quinte West to explore models in person.
            </p>
            <a
              href="/#contact"
              className="mt-8 inline-flex items-center px-8 py-3.5 bg-white text-primary-dark text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Book Your Visit
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
