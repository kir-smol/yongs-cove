import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/FadeInUp";
import HomeContactForm from "@/components/HomeContactForm";

export const metadata: Metadata = {
  title: "The Experience | Young's Cove — Prince Edward County Lifestyle",
  description:
    "Discover the Prince Edward County lifestyle at Young's Cove. Protected shoreline, wine country, trails, parks, and a vibrant cultural scene — all just outside your door.",
};

/* ── FAQ data ── */
const FAQS = [
  {
    q: "What outdoor activities and amenities are available at Young's Cove?",
    a: "Young's Cove is designed around the outdoors. Within the community itself, residents have access to kilometres of walking and cycling pathways, a zen park for quiet reflection, and a proposed children's water park. The community borders 7,000 feet of Lake Ontario shoreline — making boating, kayaking, canoeing, fishing, and open-water swimming part of everyday life rather than a special occasion.\n\nOn the water, nearby marinas and sailing clubs provide access to Lake Ontario for boating and sailing enthusiasts. Year-round, the surrounding landscape rewards every season: hiking and cycling in spring and summer, snowmobiling and cross-country skiing in winter, and birding and wildlife watching whenever the mood strikes. Multiple golf courses are also located in the immediate area.",
  },
  {
    q: "What makes Young's Cove different from other waterfront communities in Ontario?",
    a: "Young's Cove is the only master-planned waterfront community in Prince Edward County, offering 7,000 feet of Lake Ontario shoreline, protected wetlands, and hundreds of acres of preserved forest woven into the community's site plan. Unlike cottage clusters or resort-style subdivisions, Young's Cove is planned as a full residential community — with distinct collections, on-site amenities, and a natural setting that has been deliberately protected rather than cleared.\n\nTwo collections serve different buyer profiles: the Vineyard Collection offers 65 ft lots nestled in green spaces, ideal for families and those seeking community; the Lake Collection offers 150 ft lots with direct lake and dune views, designed for buyers who want the full lakefront experience. That combination — scale, setting, and choice — is not found elsewhere in the county.",
  },
  {
    q: "What provincial parks and beaches are near Young's Cove?",
    a: "Young's Cove sits within easy reach of three of Ontario's most celebrated provincial parks. Sandbanks Provincial Park — famous for its towering white sand dunes and one of the largest freshwater sandbar systems in the world — is a short drive away, as is Presqu'ile Provincial Park, known for its exceptional birding, swimming beaches, and historic lighthouse. North Beach Provincial Park offers quieter swimming and open lake views.\n\nTogether, these parks give Young's Cove residents access to some of the finest natural landscapes in eastern Ontario, all without leaving the county.",
  },
  {
    q: "Are there new home developments in Prince Edward County?",
    a: "New single-family home developments in Prince Edward County are rare — the region is predominantly resale, heritage, and rural properties. Young's Cove by Briarwood Development Group represents one of the only purpose-built new home communities currently available in the broader county area, offering buyers the opportunity to own a newly constructed single-family home with modern finishes and full community planning in a region where new builds are genuinely uncommon.\n\nBriarwood Development Group is an established Ontario developer with a 28-year track record of communities across the province, bringing the credibility of an experienced builder to one of Ontario's most desirable destinations.",
  },
  {
    q: "Is Prince Edward County a good place to live year-round?",
    a: "Prince Edward County has evolved well beyond a seasonal destination. The region — known affectionately as \"The County\" — now draws full-time residents, remote workers, retirees, and families drawn by its combination of natural beauty, cultural richness, and a pace of life that's genuinely different from the city. Wellington, Picton, and Brighton each offer independent shops, acclaimed restaurants, galleries, and farmers' markets that operate throughout the year.\n\nYoung's Cove is located in Carrying Place near Quinte West, placing residents within easy reach of everyday essentials in Belleville and Trenton, while the broader Prince Edward County lifestyle — farm-to-table dining, open-air festivals, antique shops, arts studios — provides the kind of richness that rewards living here in every season.",
  },
  {
    q: "How far are Young's Cove houses from Toronto, Ottawa, and Montreal?",
    a: "Young's Cove is approximately 2 hours from Toronto, 2.5 hours from Ottawa, and roughly 3.5 hours from Montreal — making it one of the most accessible waterfront communities in Ontario for buyers relocating from any of Canada's three largest cities. The community is located on County Rd. 64 in Quinte West, with convenient highway access from all three cities.\n\nFor remote workers and retirees in particular, that distance strikes a rare balance: genuinely removed from city life, without being unreachable from it.",
  },
  {
    q: "How do I book a visit or register for pricing and floor plans?",
    a: "Young's Cove operates an appointment-only Presentation Centre at 2247 County Rd. 64, Quinte West. You can book your visit, register for pricing and floor plans, or request information about both the Vineyard and Lake Collections through the contact page.\n\nHomesites in the Lake Collection are limited. If direct lakefront access is your priority, booking early gives you the widest choice of lots and orientations.",
  },
];

/* ── Feature sections data ── */
const SECTIONS = [
  {
    label: "Nature & Conservation",
    title: "Living, Breathing Forest",
    body: "Young's Cove is built around nature, not in spite of it. Protected wetlands and old-growth forest corridors are the landscape your home looks out onto every morning.",
    bullets: [
      "Protected wetlands and conservation areas woven throughout the site plan",
      "Hundreds of acres of preserved forest form a natural green boundary",
      "Resident wildlife and bird watching",
      "Sandbanks & Presqu'ile Provincial Parks — miles of white sand dune beaches minutes away",
      "Zen park, a space for quiet, reflection, and connection with nature",
      "Kilometres of walking and biking pathways threading through the community",
    ],
    closing:
      "Conservation, sustainability, and green living are built into the foundation of this community. Surround yourself every day with all the best that nature has to offer.",
    image: "/images/aerial-summer.jpg",
    imageAlt: "Aerial view of Young's Cove natural landscape",
    reversed: false,
  },
  {
    label: "Water & Recreation",
    title: "Lake Ontario is Your Backyard Playground",
    body: "Whether you're setting sail at sunrise or paddling a quiet cove at dusk, the water here offers something rare on Lake Ontario — access that feels personal, not crowded.",
    bullets: [
      "Boating, sailing & yachting — nearby marinas and sailing/yacht clubs on Lake Ontario",
      "Windsurfing & water sports for the adventure-minded",
      "Kayaking and canoeing along the shoreline's sheltered coves and inlets",
    ],
    closing:
      "The waters and surrounding islands of Lake Ontario are a sports and boating enthusiast's playground. At Young's Cove, that playground starts at your property line.",
    image: "/images/22-backyard.jpg",
    imageAlt: "Lake Ontario waterfront at Young's Cove",
    reversed: true,
  },
  {
    label: "Trails, Parks & Family Life",
    title: "A Community Where Every Age Thrives",
    body: "Young's Cove is for life at every stage. Families find adventure on the trails and in the parks. Those seeking peace find it in the quiet of preserved green space. And all four seasons reward the curious with constantly changing landscapes.",
    bullets: [
      "Zen park — designed for solitude and mindful outdoor time",
      "Kilometres of on-site hiking and cycling trails through forest and shoreline",
      "Multiple golf courses nearby for a round any day of the week",
      "Cross-country skiing & snowmobiling in winter across open countryside",
      "Year-round natural beauty — each season brings new vistas and new reasons to be outside",
    ],
    closing:
      "The trails, parks, and open land here aren't features on a brochure — they're the daily rhythm of life at Young's Cove, right outside your back door.",
    image: "/images/24-arial.jpg",
    imageAlt: "Trails and green spaces at Young's Cove",
    reversed: false,
  },
  {
    label: "The County Lifestyle",
    title: "The County, Culture, and a Life Well-Lived",
    body: "This is a region of plenty not found anywhere else — and choosing Young's Cove means choosing to live inside it, not just visit.",
    bullets: [
      "Vineyards & wineries tours and tastings",
      "Various award-winning restaurants",
      "Farm-to-table dining, a thriving food culture rooted in the land",
      "Antique shops & studios",
      "Year-round cultural calendar that rivals cities many times its size",
    ],
    closing:
      "All these create a cultural richness that only grows with time. Young's Cove puts you at its gateway.",
    image: "/images/23-front.jpg",
    imageAlt: "Prince Edward County lifestyle",
    reversed: true,
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-surface overflow-hidden">
          <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInUp>
              <p className="font-label text-sm font-semibold text-primary-dark uppercase tracking-widest mb-4">
                The Experience
              </p>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground leading-[1.1] tracking-tight max-w-4xl mx-auto">
                Your Perfect Prince Edward County Lifestyle Experience
              </h1>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="mt-6 text-xl sm:text-2xl text-muted italic max-w-2xl mx-auto">
                Life here isn&apos;t a weekend escape. It&apos;s every day.
              </p>
            </FadeInUp>
            <FadeInUp delay={300}>
              <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-3xl mx-auto">
                Just outside your door is one of Ontario&apos;s most extraordinary regions where
                protected shoreline meets wine country, and centuries-old forest trails lead to
                open-water horizons. At Young&apos;s Cove, the experience of Prince Edward County
                isn&apos;t something you visit. It&apos;s something you live.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* FEATURE SECTIONS */}
        {SECTIONS.map((section, idx) => (
          <section
            key={section.label}
            className={`py-14 sm:py-20 ${idx % 2 === 0 ? "bg-surface" : "bg-surface-warm"}`}
          >
            <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  section.reversed ? "lg:direction-rtl" : ""
                }`}
                style={section.reversed ? { direction: "rtl" } : undefined}
              >
                {/* Image */}
                <FadeInUp delay={100}>
                  <div
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                    style={section.reversed ? { direction: "ltr" } : undefined}
                  >
                    <Image
                      src={section.image}
                      alt={section.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </FadeInUp>

                {/* Text */}
                <div style={section.reversed ? { direction: "ltr" } : undefined}>
                  <FadeInUp>
                    <p className="font-label text-sm font-semibold text-primary-dark uppercase tracking-widest mb-3">
                      {section.label}
                    </p>
                  </FadeInUp>
                  <FadeInUp delay={100}>
                    <h2 className="font-heading text-3xl sm:text-4xl font-normal text-foreground leading-[1.16] tracking-tight">
                      {section.title}
                    </h2>
                  </FadeInUp>
                  <FadeInUp delay={200}>
                    <p className="mt-4 text-muted text-base leading-relaxed">
                      {section.body}
                    </p>
                  </FadeInUp>
                  <FadeInUp delay={300}>
                    <ul className="mt-6 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm text-foreground">
                          <svg
                            className="w-4 h-4 text-primary-dark mt-0.5 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </FadeInUp>
                  <FadeInUp delay={400}>
                    <p className="mt-6 text-muted text-sm leading-relaxed italic">
                      {section.closing}
                    </p>
                  </FadeInUp>
                </div>
              </div>
            </div>

            {/* CTA block after first two sections */}
            {idx === 1 && (
              <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-20">
                <FadeInUp>
                  <div className="bg-primary-dark rounded-2xl px-8 py-10 sm:px-12 sm:py-14 text-center">
                    <h3 className="font-heading text-2xl sm:text-3xl font-normal text-white leading-tight tracking-tight">
                      Ready to Experience Lakefront Living?
                    </h3>
                    <p className="mt-3 text-white/80 text-base max-w-xl mx-auto">
                      Explore our collections and find the home that fits your lifestyle on
                      Prince Edward County&apos;s most extraordinary waterfront.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                      <a
                        href="/collections/vineyard"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-dark text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
                      >
                        Vineyard Collection
                      </a>
                      <a
                        href="/collections/lake"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 text-white text-sm font-semibold rounded-full border border-white/30 hover:bg-white/25 transition-colors"
                      >
                        Lake Collection
                      </a>
                    </div>
                  </div>
                </FadeInUp>
              </div>
            )}
          </section>
        ))}

        {/* NEARBY TOWNS & RESOURCES */}
        <section className="py-14 sm:py-20 bg-surface-warm">
          <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="text-center mb-10">
                <p className="font-label text-sm font-semibold text-primary-dark uppercase tracking-widest mb-3">
                  EXPLORE THE REGION
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-normal text-foreground leading-[1.16] tracking-tight">
                  Nearby Towns &amp; Local Resources
                </h2>
                <p className="mt-4 text-muted text-base leading-relaxed max-w-3xl mx-auto">
                  Young&apos;s Cove is situated at the gateway to Prince Edward County and
                  Quinte West. Explore the endless nooks and crannies — restaurants,
                  antiques, golf courses, art studios, and some of the finest vineyards
                  anywhere.
                </p>
              </div>
            </FadeInUp>

            {/* Town cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Brighton",
                  desc: "Minutes away — charming shops, dining, and Lake Ontario beaches",
                },
                {
                  name: "Wellington",
                  desc: "Wine country hub with galleries, cafes, and sandy shores",
                },
                {
                  name: "Picton",
                  desc: "The County seat — restaurants, arts, and farmers' markets",
                },
                {
                  name: "Belleville & Trenton",
                  desc: "Everyday essentials, hospitals, and major retail",
                },
              ].map((town, i) => (
                <FadeInUp key={town.name} delay={i * 80}>
                  <div className="bg-surface rounded-2xl border border-border p-6 h-full">
                    <h3 className="font-heading text-lg font-normal text-foreground mb-2">
                      {town.name}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{town.desc}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>

            {/* Resource links */}
            <FadeInUp delay={350}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                {[
                  { label: "Bay of Quinte Tourism", href: "https://bayofquinte.ca" },
                  { label: "Prince Edward County", href: "https://visitpec.ca" },
                  { label: "PEC Wine Region", href: "https://princeedwardcountywine.ca" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-dark text-white text-sm font-semibold rounded-full hover:bg-primary-dark/90 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    {link.label}
                  </a>
                ))}
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* CONTACT FORM */}
        <HomeContactForm />

        {/* FAQ */}
        <section className="py-14 sm:py-20 bg-surface-warm">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="text-center mb-10">
                <p className="font-label text-sm font-semibold text-primary-dark uppercase tracking-widest mb-3">
                  FAQ
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-normal text-foreground leading-[1.16] tracking-tight">
                  Prince Edward County Lifestyle Experience
                </h2>
              </div>
            </FadeInUp>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <FadeInUp key={faq.q} delay={i * 50}>
                  <details className="group bg-surface rounded-2xl border border-border overflow-hidden">
                    <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-foreground font-medium text-sm sm:text-base hover:text-primary-dark transition-colors list-none [&::-webkit-details-marker]:hidden">
                      {faq.q}
                      <svg
                        className="w-5 h-5 text-muted shrink-0 ml-4 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="px-6 pb-5 text-sm text-muted leading-relaxed whitespace-pre-line">
                      {faq.a}
                    </div>
                  </details>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
