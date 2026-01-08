"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import img from "next/image"

interface MovieCardProps {
  title: string
  rating: string
  language: string
  image: string
}

export function MovieCard({ title, rating, language, image }: MovieCardProps) {
  return (
    <Card className="group flex-shrink-0 w-[160px] md:w-[200px] overflow-hidden border-0 shadow-sm transition-all hover:shadow-xl bg-card text-card-foreground">
      <div className="relative aspect-[2/3] overflow-hidden bg-muted">
        <img
          src="/landing/card-placeholder.png"
          alt={title}

          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <Badge className="absolute top-3 left-3 bg-background/90 text-foreground">{rating}</Badge>
      </div>
      <div className="p-3">
        <h3 className="mb-1 text-pretty font-semibold leading-tight line-clamp-2">{title}</h3>
        <p className="text-xs text-muted-foreground">{language}</p>
      </div>
    </Card>
  )
}
