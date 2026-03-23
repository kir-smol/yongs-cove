import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
import AnimatedCounter from "@/components/AnimatedCounter";
import FadeInUp from "@/components/FadeInUp";
import HomeContactForm from "@/components/HomeContactForm";
import AgentCards from "@/components/AgentCards";
import Footer from "@/components/Footer";
import { ALL_LISTINGS, SHARED_AGENTS } from "@/data/properties";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <HeroVideo />

        {/* WHY CHOOSE US */}
        <section className="py-14 sm:py-20 lg:py-28 bg-surface">
          <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left column: text + image */}
              <div>
                <FadeInUp>
                  <p className="font-label text-sm font-semibold text-primary-dark uppercase tracking-widest mb-3">
                    Why Choose Us
                  </p>
                </FadeInUp>
                <FadeInUp delay={100}>
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground leading-[1.16] tracking-tight">
                    The Smart Choice for Lakefront Living in Ontario
                  </h2>
                </FadeInUp>
                <FadeInUp delay={200}>
                  <p className="mt-6 text-muted text-base leading-relaxed">
                    Love It! Own your own piece of paradise and surround yourself with the finest of nature&apos;s bounties. Be part of this extraordinary new home community and lifestyle perfected.
                  </p>
                </FadeInUp>
                <FadeInUp delay={300}>
                  <div className="mt-8 relative aspect-[16/11] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/aerial-summer.jpg"
                      alt="Young's Cove aerial view"
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </FadeInUp>
              </div>

              {/* Right column: 2x2 grid of numbered tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    num: "01",
                    title: "Shoreline",
                    desc: "A rare stretch of Lake Ontario — 7,000 feet of shoreline, protected wetlands, preserved forest, and open water.",
                  },
                  {
                    num: "02",
                    title: "Forest",
                    desc: "The spectacular backdrop of the forest at this exceptional community is very special. Nature thrives here.",
                  },
                  {
                    num: "03",
                    title: "Collections",
                    desc: "Nestled around natural green spaces and parks, the home styles and designs are graciously appointed with choices for everyone.",
                  },
                  {
                    num: "04",
                    title: "Location",
                    desc: "All your everyday amenities are right here with charming Brighton just minutes away plus Wellington, Picton, Trenton and Belleville.",
                  },
                ].map((tile, i) => (
                  <FadeInUp key={tile.num} delay={250 + i * 250}>
                    <div className="bg-surface-warm rounded-2xl p-6 sm:p-8 h-full">
                      <span className="font-heading text-5xl font-normal text-border">{tile.num}</span>
                      <h3 className="mt-3 font-heading text-xl font-normal text-foreground">{tile.title}</h3>
                      <p className="mt-2 text-sm text-muted leading-relaxed">{tile.desc}</p>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="my-16 border-t border-border" />

            {/* STAT BAR */}
            <FadeInUp>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="font-heading text-4xl sm:text-5xl lg:text-7xl font-normal text-foreground tracking-tight">
                    <AnimatedCounter target={7000} duration={900} />
                  </p>
                  <p className="mt-2 text-muted text-sm sm:text-base font-medium font-label">ft of shoreline</p>
                </div>
                <div>
                  <p className="font-heading text-4xl sm:text-5xl lg:text-7xl font-normal text-foreground tracking-tight">
                    <AnimatedCounter target={242} duration={2000} />
                  </p>
                  <p className="mt-2 text-muted text-sm sm:text-base font-medium font-label">homesites</p>
                </div>
                <div>
                  <p className="font-heading text-4xl sm:text-5xl lg:text-7xl font-normal text-foreground tracking-tight">
                    <AnimatedCounter target={28} suffix="+" duration={2000} />
                  </p>
                  <p className="mt-2 text-muted text-sm sm:text-base font-medium font-label">years</p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* COLLECTIONS */}
        <section id="collections" className="py-14 sm:py-20 lg:py-28 bg-surface-warm">
          <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground leading-[1.16] tracking-tight max-w-2xl">
                Your Lakeside Residence Has Arrived
              </h2>
            </FadeInUp>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {/* Vineyard Collection */}
              <FadeInUp>
                <div className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src="/images/vineyard-collection-render.jpg"
                      alt="Vineyard Collection"
                      fill
                      className="object-cover rounded-t-2xl"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 text-muted text-sm mb-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" /></svg>
                      Quinte West, Ontario
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-normal text-foreground">Vineyard Collection</h3>
                    <p className="mt-3 text-muted leading-relaxed">
                      These spacious homes are nestled around natural green spaces and parks. The home styles and designs have been created for families of all shapes and sizes.
                    </p>
                    <Link
                      href="/collections/vineyard"
                      className="mt-6 inline-flex items-center px-6 py-3 bg-btn hover:bg-btn-hover text-white text-sm font-semibold rounded-full transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </FadeInUp>

              {/* Lake Collection */}
              <FadeInUp delay={250}>
                <div className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src="/images/lake-collection-render.jpg"
                      alt="Lake Collection"
                      fill
                      className="object-cover rounded-t-2xl"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 text-muted text-sm mb-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" /></svg>
                      Quinte West, Ontario
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-normal text-foreground">Lake Collection</h3>
                    <p className="mt-3 text-muted leading-relaxed">
                      These luxury residences on amazing 150 foot homesites create picture perfect streetscapes with stunning lake views backing onto sandy dunes.
                    </p>
                    <Link
                      href="/collections/lake"
                      className="mt-6 inline-flex items-center px-6 py-3 bg-btn hover:bg-btn-hover text-white text-sm font-semibold rounded-full transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </FadeInUp>
            </div>

            {/* Explore All Homesites */}
            <FadeInUp delay={500}>
              <div className="mt-8 bg-surface rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="max-w-xl">
                  <h4 className="font-heading text-2xl font-normal text-foreground">Explore All Homesites</h4>
                  <p className="mt-3 text-muted leading-relaxed">
                    Explore the exceptional homesites available in both the Vineyard Collection and the Lake Collection. Each offers a unique setting, thoughtfully designed to complement the surrounding landscape and lifestyle.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-btn hover:bg-btn-hover text-white text-sm font-semibold rounded-full transition-colors shrink-0"
                >
                  View Siteplan
                </a>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* HOW IT WORKS / STEPS */}
        <section className="py-14 sm:py-20 lg:py-28 bg-surface">
          <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <p className="font-label text-sm font-semibold text-primary-dark uppercase tracking-widest mb-3">How It Works</p>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground leading-[1.16] tracking-tight max-w-xl">
                Your Path to Young&apos;s Cove
              </h2>
            </FadeInUp>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { num: "01", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z", title: "Explore", desc: "Learn about available properties and discover options that match your goals." },
                { num: "02", icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z", title: "Visit", desc: "Schedule a visit to explore the property and experience the space in person." },
                { num: "03", icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5", title: "Reserve", desc: "Reserve your chosen property and take the next step toward ownership." },
                { num: "04", icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25", title: "Move In", desc: "Complete the process and move into your new property with confidence." },
              ].map((step, i) => (
                <FadeInUp key={step.num} delay={i * 250}>
                  <div className="bg-surface-warm rounded-2xl p-6 sm:p-8 h-full">
                    <span className="font-heading text-4xl font-normal text-border">{step.num}</span>
                    <div className="mt-4 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                      </svg>
                    </div>
                    <h3 className="mt-4 font-heading text-xl font-normal text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>

            <FadeInUp delay={500}>
              <div className="mt-12 text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-3.5 bg-btn hover:bg-btn-hover text-white text-sm font-semibold rounded-full transition-colors"
                >
                  Book Your Visit
                </a>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* LOCATION MAP */}
        <section className="py-14 sm:py-20 lg:py-28 bg-surface">
          <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <FadeInUp>
                  <p className="font-label text-sm font-semibold text-primary-dark uppercase tracking-widest mb-3">Location</p>
                </FadeInUp>
                <FadeInUp delay={100}>
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground leading-[1.16] tracking-tight">
                    Find Us
                  </h2>
                </FadeInUp>
                <FadeInUp delay={200}>
                  <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed">
                    Visit our Presentation Centre at 2247 County Road 64, Quinte West, Ontario. Two hours from Toronto, two and a half from Ottawa — with Prince Edward County&apos;s parks, wineries, shops, and dining right outside your door.
                  </p>
                </FadeInUp>
                <FadeInUp delay={300}>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-btn mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <p className="text-foreground font-medium">2247 County Road 64, Carrying Place, Quinte West, ON</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-btn mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-muted">~2 hrs from Toronto &middot; ~2.5 hrs from Ottawa</p>
                    </div>
                  </div>
                </FadeInUp>
                <FadeInUp delay={400}>
                  <a
                    href="https://maps.google.com/?q=2247+County+Road+64+Carrying+Place+Quinte+West+ON"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-btn hover:bg-btn-hover text-white text-sm font-semibold rounded-full transition-colors"
                  >
                    Get Directions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </FadeInUp>
              </div>
              <FadeInUp delay={250}>
                <div className="rounded-2xl overflow-hidden shadow-sm border border-border aspect-[4/3]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2856.5!2d-77.55!3d44.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d60a1e8b8b8b8b%3A0x0!2s2247+County+Road+64%2C+Carrying+Place%2C+ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Young's Cove Location"
                    className="w-full h-full"
                  />
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* CHESS BLOCK 1 — Your Backyard */}
        <section className="py-14 sm:py-20 lg:py-28 bg-surface-warm">
          <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeInUp>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/22-backyard.jpg"
                    alt="Your backyard at Young's Cove"
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </FadeInUp>
              <div>
                <FadeInUp>
                  <p className="font-label text-sm font-semibold text-primary-dark uppercase tracking-widest mb-3">The Experience</p>
                </FadeInUp>
                <FadeInUp delay={100}>
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground leading-[1.16] tracking-tight">
                    Your Backyard
                  </h2>
                </FadeInUp>
                <FadeInUp delay={200}>
                  <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed">
                    The classical artistry and composition of the Vineyard Collection designs on 65 foot homesites are faultless. Nestled around natural green spaces and parks, the home styles and designs are graciously appointed with choices for everyone. You will love the architectural details of elegance and refinement of the bungalows, bungalow lofts and two storey homes.
                  </p>
                </FadeInUp>
                <FadeInUp delay={300}>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center px-8 py-3.5 bg-btn hover:bg-btn-hover text-white text-sm font-semibold rounded-full transition-colors"
                  >
                    Book Your Visit
                  </a>
                </FadeInUp>
              </div>
            </div>
          </div>
        </section>

        {/* CHESS BLOCK 2 — A One of a Kind Community (reversed) */}
        <section className="py-14 sm:py-20 lg:py-28 bg-surface">
          <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <FadeInUp>
                  <p className="font-label text-sm font-semibold text-primary-dark uppercase tracking-widest mb-3">Community</p>
                </FadeInUp>
                <FadeInUp delay={100}>
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground leading-[1.16] tracking-tight">
                    A One of a Kind Community
                  </h2>
                </FadeInUp>
                <FadeInUp delay={200}>
                  <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed">
                    Love It! Own your own piece of paradise and surround yourself with the finest of nature&apos;s bounties. Be part of this extraordinary new home community and lifestyle perfected.
                  </p>
                </FadeInUp>
                <FadeInUp delay={300}>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center px-8 py-3.5 bg-btn hover:bg-btn-hover text-white text-sm font-semibold rounded-full transition-colors"
                  >
                    Book Your Visit
                  </a>
                </FadeInUp>
              </div>
              <FadeInUp className="order-1 md:order-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/23-front.jpg"
                    alt="Young's Cove community"
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* FEATURED LISTINGS */}
        <section id="listings" className="py-14 sm:py-20 lg:py-28 bg-surface-warm">
          <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <p className="font-label text-sm font-semibold text-primary-dark uppercase tracking-widest mb-3">Properties</p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground leading-[1.16] tracking-tight">
                Featured Listings
              </h2>
            </FadeInUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {ALL_LISTINGS.slice(0, 3).map((listing, i) => {
                const { property, images } = listing;
                return (
                  <FadeInUp key={property.slug} delay={i * 200}>
                    <Link
                      href={`/properties/${property.slug}`}
                      className="group block bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={images[0]?.src ?? "/images/25-front-of-house-hero.jpg"}
                          alt={property.address}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {property.status}
                        </div>
                        <div className="absolute bottom-3 left-4">
                          <p className="text-2xl font-bold text-white drop-shadow-lg">{property.price}</p>
                        </div>
                        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-lg">
                          {images.length} photos
                        </span>
                      </div>
                      <div className="p-5 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary-dark transition-colors">
                          {property.address}
                        </h3>
                        <p className="text-sm text-muted mt-0.5">
                          {property.city}, {property.province}
                        </p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 pt-4 border-t border-border">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-semibold text-foreground">{property.bedrooms}</span>
                            <span className="text-xs text-muted">Beds</span>
                          </div>
                          <div className="w-px h-4 bg-border" />
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-semibold text-foreground">{property.bathrooms}</span>
                            <span className="text-xs text-muted">Baths</span>
                          </div>
                          <div className="w-px h-4 bg-border" />
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-semibold text-foreground">{property.livingArea}</span>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-primary-dark font-semibold text-sm group-hover:gap-3 transition-all">
                          View Details
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </FadeInUp>
                );
              })}
            </div>

            {ALL_LISTINGS.length > 3 && (
              <FadeInUp delay={600}>
                <div className="mt-12 text-center">
                  <Link
                    href="/#listings"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-btn hover:bg-btn-hover text-white text-sm font-semibold rounded-full transition-colors"
                  >
                    View All {ALL_LISTINGS.length} Properties
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </FadeInUp>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 sm:py-20 lg:py-28 bg-surface-warm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <p className="font-label text-sm font-semibold text-primary-dark uppercase tracking-widest mb-3 text-center">FAQ</p>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-foreground text-center tracking-tight">
                Waterfront Homes in Prince Edward County FAQ
              </h2>
            </FadeInUp>

            <div className="space-y-4 mt-12">
              {[
                {
                  q: "What types of Prince Edward County homes are available, and what are the lot sizes?",
                  a: "Young's Cove offers new single-family homes in two collections. The Vineyard Collection features homes on 65-foot lots nestled in green spaces. The Lake Collection offers larger 150-foot lots with direct views of Lake Ontario and the natural dunes.",
                },
                {
                  q: "Where is Young's Cove, and how far is it from Toronto and Ottawa?",
                  a: "Young's Cove is located in Carrying Place, Quinte West, Ontario. Our Presentation Centre is at 2247 County Road 64, Quinte West. The community is approximately two hours from Toronto and roughly two and a half hours from Ottawa.",
                },
                {
                  q: "What amenities and outdoor activities are available?",
                  a: "The community features kilometres of walking and cycling pathways, a zen park, a proposed children's water park, protected wetlands, and hundreds of acres of preserved forest. Sandbanks Provincial Park and Presqu'ile Provincial Park are both nearby, along with the wineries and restaurants.",
                },
                {
                  q: "Who is the developer?",
                  a: "Young's Cove is developed by Briarwood Development Group, an established builder with communities across Ontario and more than 28 years of experience.",
                },
                {
                  q: "How do I book a visit or register for pricing and floor plans?",
                  a: "Contact us or fill out the contact form to book your appointment at our Presentation Centre at 2247 County Road 64, Quinte West. You can also register online for pricing and floor plan updates for both the Vineyard and Lake Collections.",
                },
              ].map((faq, i) => (
                <FadeInUp key={i} delay={i * 100}>
                  <details className="group bg-surface rounded-2xl overflow-hidden">
                    <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-foreground font-semibold hover:text-primary-dark transition-colors">
                      {faq.q}
                      <svg className="w-5 h-5 text-muted shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-5 text-muted leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING BANNER */}
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/aerial-summer.jpg"
              alt="Young's Cove aerial"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-normal text-white leading-tight tracking-tight">
              Your Corner of Lake Ontario is Closer Than You Think
            </h2>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center px-8 py-4 bg-btn hover:bg-btn-hover text-white font-semibold rounded-full transition-colors"
            >
              Book Your Visit Today
            </a>
          </div>
        </section>

        {/* Contact form */}
        <HomeContactForm />

        {/* Agents */}
        <AgentCards agents={SHARED_AGENTS} propertyAddress="Young's Cove" />
      </main>
      <Footer />
    </>
  );
}
