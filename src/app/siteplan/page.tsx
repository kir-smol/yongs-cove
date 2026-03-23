import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/FadeInUp";
import HomeContactForm from "@/components/HomeContactForm";

export const metadata: Metadata = {
  title: "Site Plan | Young's Cove — Master-Planned Waterfront Community",
  description:
    "Explore the Young's Cove site plan. View available phases, lot inventory, and the community layout for this master-planned waterfront community in Prince Edward County.",
};

/* ── Phase data ── */
const PHASES = [
  {
    label: "Phase 2A & 2B",
    title: "Lake & Vineyard Lots",
    description:
      "Phase 2A and 2B feature premium Lake Collection lots with direct waterfront access and Vineyard Collection lots nestled among natural green spaces. A limited selection of homesites remain available.",
    pdfHref: "/siteplan/phase-2a-2b-inventory.pdf",
    pdfLabel: "Download Phase 2A & 2B Inventory",
  },
  {
    label: "Phase 3A",
    title: "Lake & Vineyard Lots",
    description:
      "Phase 3A introduces new Lake and Vineyard homesites along the community's eastern corridor, offering generous lot sizes, mature tree lines, and proximity to on-site trails and parks.",
    pdfHref: "/siteplan/phase-3a-inventory.pdf",
    pdfLabel: "Download Phase 3A Inventory",
  },
];

/* ── Legend data ── */
const LEGEND_ITEMS = [
  { label: "Phase 2A Lake", color: "bg-blue-500" },
  { label: "Phase 2B Vineyard", color: "bg-emerald-500" },
  { label: "Phase 3A Lake", color: "bg-sky-400" },
  { label: "Phase 3A Vineyard", color: "bg-lime-500" },
  { label: "Sold", color: "bg-neutral-400" },
];

export default function SiteplanPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-surface overflow-hidden">
          <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInUp>
              <p className="font-label text-sm font-semibold text-primary-dark uppercase tracking-widest mb-4">
                Community Layout
              </p>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground leading-[1.1] tracking-tight max-w-4xl mx-auto">
                The Site Plan
              </h1>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="mt-6 text-xl sm:text-2xl text-muted italic max-w-2xl mx-auto">
                A master-planned community shaped by nature.
              </p>
            </FadeInUp>
            <FadeInUp delay={300}>
              <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-3xl mx-auto">
                Young&apos;s Cove has been thoughtfully designed to preserve the
                natural landscape while offering a range of Lake and Vineyard
                homesites across multiple phases. Explore the community layout
                below to find your ideal lot.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* COMMUNITY MAP */}
        <section className="py-14 sm:py-20 bg-surface-warm">
          <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="text-center mb-10">
                <p className="font-label text-sm font-semibold text-primary-dark uppercase tracking-widest mb-3">
                  Overview
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-normal text-foreground leading-[1.16] tracking-tight">
                  Community Map
                </h2>
              </div>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/siteplan-community-map.jpg"
                  alt="Young's Cove community site plan map"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1264px) 100vw, 1264px"
                  priority
                />
              </div>
            </FadeInUp>

            {/* LEGEND */}
            <FadeInUp delay={200}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {LEGEND_ITEMS.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span
                      className={`w-4 h-4 rounded-sm ${item.color}`}
                    />
                    <span className="text-sm text-muted">{item.label}</span>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* PHASE CARDS */}
        <section className="py-14 sm:py-20 bg-surface">
          <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="text-center mb-10">
                <p className="font-label text-sm font-semibold text-primary-dark uppercase tracking-widest mb-3">
                  Phases & Inventory
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-normal text-foreground leading-[1.16] tracking-tight">
                  Explore Available Phases
                </h2>
              </div>
            </FadeInUp>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {PHASES.map((phase, i) => (
                <FadeInUp key={phase.label} delay={i * 100}>
                  <div className="bg-surface-warm rounded-2xl border border-border p-8 sm:p-10 h-full flex flex-col">
                    <p className="font-label text-sm font-semibold text-primary-dark uppercase tracking-widest mb-2">
                      {phase.label}
                    </p>
                    <h3 className="font-heading text-2xl sm:text-3xl font-normal text-foreground leading-tight tracking-tight">
                      {phase.title}
                    </h3>
                    <p className="mt-4 text-muted text-base leading-relaxed flex-1">
                      {phase.description}
                    </p>
                    <a
                      href={phase.pdfHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-btn hover:bg-btn-hover text-white text-sm font-semibold rounded-full transition-colors self-start"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3"
                        />
                      </svg>
                      {phase.pdfLabel}
                    </a>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — BOOK APPOINTMENT */}
        <section className="py-14 sm:py-20 bg-surface-warm">
          <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="bg-primary-dark rounded-2xl px-8 py-10 sm:px-12 sm:py-14 text-center">
                <h3 className="font-heading text-2xl sm:text-3xl font-normal text-white leading-tight tracking-tight">
                  Find Your Perfect Homesite
                </h3>
                <p className="mt-3 text-white/80 text-base max-w-xl mx-auto">
                  Visit the Young&apos;s Cove Presentation Centre to walk the
                  site plan in person, explore available lots, and discover which
                  phase and collection is right for you.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-dark text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
                  >
                    Book an Appointment
                  </a>
                  <a
                    href="/collections/vineyard"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 text-white text-sm font-semibold rounded-full border border-white/30 hover:bg-white/25 transition-colors"
                  >
                    Explore Collections
                  </a>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* CONTACT FORM */}
        <HomeContactForm />
      </main>
      <Footer />
    </>
  );
}
