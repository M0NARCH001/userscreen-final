"use client"

import { MovieCard } from "@/components/landing/movie-card"

interface MovieSectionProps {
  title: string
}

const movies = [
  { title: "Dhurandhar", rating: "A", language: "Hindi", image: "action+movie+poster" },
  { title: "Kis Kisko Pyaar Karoon 2", rating: "UA16+", language: "Hindi", image: "comedy+movie+poster" },
  { title: "Tere Ishk Mein", rating: "UA16+", language: "Hindi", image: "romance+movie+poster" },
  { title: "Sholay: The Final Cut (1975)", rating: "UA", language: "Hindi", image: "classic+bollywood+poster" },
]

export function MovieSection({ title }: MovieSectionProps) {
  return (
    <section className="bg-muted/30 py-8 md:py-12">
      <div className="w-full px-4 text-left">
        <h2 className="mb-6 text-balance text-2xl font-bold md:text-3xl text-[#174B91]">{title}</h2>
      </div>

      <div className="w-full overflow-x-auto pb-6 px-4 hide-scrollbar">
        <div className="flex gap-4 min-w-max px-4">
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      </div>
    </section>
  )
}
