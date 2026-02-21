"use client"

import { EventCard } from "@/components/landing/event-card"
import { LANDING_EVENT_DATA } from "@/lib/landing-data"

interface EventSectionProps {
  title: string
  type: "activities" | "events" | "comedy" | "nightlife" | "music" | "sports" | "weekly"
}

export function EventSection({ title, type }: EventSectionProps) {
  const events = LANDING_EVENT_DATA[type] || LANDING_EVENT_DATA.events

  return (
    <section className="py-8 md:py-12">
      <div className="w-full px-4 text-left">
        <h2 className="mb-6 text-balance text-2xl font-bold md:text-3xl text-(--landing-heading-color)">{title}</h2>
      </div>

      <div className="w-full overflow-x-auto pb-6 px-4 hide-scrollbar">
        <div className="flex gap-4 min-w-max px-4">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  )
}
