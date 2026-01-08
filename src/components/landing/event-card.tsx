import { Card, CardContent } from "@/components/ui/card"


import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"

interface EventCardProps {
  title: string
  location: string
  price: string
  discount?: string
  date: string
  image: string
}

export function EventCard({ title, location, price, discount, date, image }: EventCardProps) {
  return (
    <Card className="group flex-shrink-0 w-[250px] md:w-[280px] overflow-hidden border-0 shadow-sm transition-all hover:shadow-xl bg-card text-card-foreground">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src="/landing/card-placeholder.png"
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        {discount && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            {discount}
          </Badge>
        )}
      </div>
      <CardContent className="p-4 hidden md:block">
        <div className="mb-2 flex items-start gap-2">
          <Calendar className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground" />
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>
        <h3 className="mb-2 text-pretty font-semibold leading-tight line-clamp-2">
          {title}
        </h3>
        <div className="mb-3 flex items-start gap-2">
          <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground" />
          <p className="text-xs text-muted-foreground line-clamp-2">{location}</p>
        </div>
        <p className="font-semibold text-primary">
          {price} <span className="text-sm text-muted-foreground">onwards</span>
        </p>
      </CardContent>
    </Card>
  )
}
