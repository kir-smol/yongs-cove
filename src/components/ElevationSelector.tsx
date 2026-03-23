"use client";

import Image from "next/image";
import type { Elevation } from "@/data/collections";

interface ElevationSelectorProps {
  elevations: Elevation[];
  selected: string;
  onSelect: (id: string) => void;
  showLoft: boolean;
}

export default function ElevationSelector({
  elevations,
  selected,
  onSelect,
  showLoft,
}: ElevationSelectorProps) {
  const active = elevations.find((e) => e.id === selected) ?? elevations[0];
  const sqft = showLoft && active.sqftLoft ? active.sqftLoft : active.sqft;

  return (
    <div>
      <div className="flex items-baseline justify-between mb-4">
        <h3 className="font-heading text-lg font-normal text-foreground">
          {active.label}
        </h3>
        <p className="text-sm text-muted">
          {sqft.toLocaleString()} sq ft
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {elevations.map((elev) => (
          <button
            key={elev.id}
            onClick={() => onSelect(elev.id)}
            className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${
              elev.id === selected
                ? "border-primary-dark ring-2 ring-primary-dark/20"
                : "border-border hover:border-primary-dark/40"
            }`}
          >
            <Image
              src={elev.image}
              alt={elev.label}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 30vw, 150px"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2">
              <span className="text-white text-xs font-medium">{elev.id.toUpperCase()}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
