import Image from "next/image";
import Link from "next/link";
import type { HomeModel } from "@/data/collections";

interface ModelCardProps {
  model: HomeModel;
  index: number;
}

export default function ModelCard({ model, index }: ModelCardProps) {
  return (
    <Link
      href={`/collections/${model.collection}/${model.slug}`}
      className="group block bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={model.heroImage}
          alt={`${model.name} elevation`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full capitalize">
          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
          {model.type === "two-storey" ? "Two Storey" : "Bungalow"}
          {model.hasLoft && " / Loft"}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary-dark transition-colors">
          {model.name}
        </h3>
        <p className="text-sm text-muted mt-1">{model.sqftRange}</p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-foreground">{model.elevations.length}</span>
            <span className="text-xs text-muted">Elevations</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-foreground">{model.floorPlans.length}</span>
            <span className="text-xs text-muted">{model.floorPlans.length === 1 ? "Level" : "Levels"}</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-foreground">{model.pdfs.length}</span>
            <span className="text-xs text-muted">{model.pdfs.length === 1 ? "PDF" : "PDFs"}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-primary-dark font-semibold text-sm group-hover:gap-3 transition-all">
          View Floor Plans
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
