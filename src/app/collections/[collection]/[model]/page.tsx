import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getCollectionBySlug,
  getModelBySlug,
  getAllModelParams,
  SHARED_PDFS,
} from "@/data/collections";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ModelDetailClient from "./ModelDetailClient";

interface PageProps {
  params: Promise<{ collection: string; model: string }>;
}

export async function generateStaticParams() {
  return getAllModelParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { collection: cSlug, model: mSlug } = await params;
  const collection = getCollectionBySlug(cSlug);
  const model = getModelBySlug(cSlug, mSlug);
  if (!collection || !model) return {};

  const title = `${model.name} — ${model.sqftRange} | ${collection.name} | Young's Cove`;
  const description = `View the ${model.name} floor plans and elevations. ${model.type === "two-storey" ? "Two-storey" : "Bungalow"} home starting from ${model.sqftMin.toLocaleString()} sq ft in the ${collection.name} at Young's Cove, Quinte West.`;

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

export default async function ModelPage({ params }: PageProps) {
  const { collection: cSlug, model: mSlug } = await params;
  const collection = getCollectionBySlug(cSlug);
  const model = getModelBySlug(cSlug, mSlug);
  if (!collection || !model) notFound();

  return (
    <>
      <Header />
      <main>
        <ModelDetailClient
          model={model}
          collectionName={collection.name}
          collectionSlug={collection.slug}
          sharedPdfs={SHARED_PDFS}
        />
      </main>
      <Footer />
    </>
  );
}
