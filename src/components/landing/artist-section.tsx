"use client";

import { ARTISTS_DATA } from "@/lib/landing-data";

export function ArtistSection() {
  return (
    <section className="bg-muted/30 py-8 md:py-12">
      <div className="w-full px-4 text-left">
        <h2 className="mb-6 text-balance text-2xl font-bold md:text-3xl text-(--landing-heading-color)">
          Artists in  Baatasari
        </h2>
      </div>

      <div className="w-full overflow-x-auto pb-6 px-4 hide-scrollbar">
        <div className="flex gap-4 min-w-max px-4">
          {ARTISTS_DATA.map((artist, index) => (
            <a
              key={index}
              href="#"
              className="group flex flex-col items-center gap-3 transition-colors min-w-[160px]"
            >
              <div className="h-32 w-32 overflow-hidden rounded-full ring-2 ring-border transition-all group-hover:ring-primary">
                <img
                  src="/landing/card-placeholder.png"
                  alt={artist.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-center text-sm font-medium">{artist.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
