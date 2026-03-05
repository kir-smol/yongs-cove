import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getListingBySlug, getAllSlugs } from "@/data/properties";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Gallery from "@/components/Gallery";
import PropertyDetails from "@/components/PropertyDetails";
import AgentCards from "@/components/AgentCards";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) return {};

  const { property } = listing;
  const title = `${property.address} — ${property.price} | Young's Cove`;
  const description = `${property.style} at ${property.address}, ${property.city}. ${property.bedrooms} bed, ${property.bathrooms} bath, ${property.livingArea}. ${property.builder}. MLS# ${property.mls}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_CA",
      siteName: "Young's Cove",
    },
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) notFound();

  const { property, rooms, description, highlights, images, agents, youtubeVideoId } = listing;

  return (
    <>
      <Header />
      <FloatingCTA agents={agents} />
      <main>
        <Hero listing={listing} />
        <VideoSection youtubeVideoId={youtubeVideoId} />
        <PropertyDetails
          property={property}
          rooms={rooms}
          description={description}
          highlights={highlights}
        />
        <LeadForm property={property} />
        <AgentCards agents={agents} propertyAddress={property.address} />
        <Gallery images={images} />
      </main>
      <Footer property={property} />
    </>
  );
}
