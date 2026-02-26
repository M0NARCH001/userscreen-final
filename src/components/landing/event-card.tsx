"use client";

import { MapPin, Calendar, Heart } from "lucide-react";
import { motion } from "framer-motion";

interface EventCardProps {
  title: string;
  location: string;
  price: string;
  date: string;
  image: string;
  category?: string;
}

export function EventCard({ title, location, price, date, image, category }: EventCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="group w-[280px] shrink-0 cursor-pointer"
    >
      <div
        className="relative aspect-3/4 w-full overflow-hidden rounded-[2rem] transition-all duration-300"
        style={{
          backgroundColor: "var(--event-card-bg)",
          boxShadow: "var(--event-card-shadow)"
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow = "var(--event-card-shadow-hover)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.boxShadow = "var(--event-card-shadow)")
        }
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "var(--event-overlay-gradient)" }}
        />

        <div className="absolute top-5 left-5">
          <span
            className="rounded-full backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm"
            style={{
              backgroundColor: "var(--event-badge-bg)",
              color: "var(--event-badge-text)"
            }}
          >
            {category || "Event"}
          </span>
        </div>

        <button
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300"
          style={{
            backgroundColor: "var(--event-fav-bg)",
            color: "var(--event-fav-text)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--event-fav-bg-hover)";
            e.currentTarget.style.color = "var(--event-fav-hover-text)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--event-fav-bg)";
            e.currentTarget.style.color = "var(--event-fav-text)";
          }}
        >
          <Heart size={18} />
        </button>
      </div>

      <div className="mt-5 px-2 font-switzer">
        <div
          className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest mb-1.5"
          style={{ color: "var(--event-date-color)" }}
        >
          <Calendar size={12} strokeWidth={2.5} />
          {date}
        </div>

        <h3
          className="text-lg font-medium leading-tight mb-3 transition-colors"
          style={{ color: "var(--event-title-color)" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--event-title-hover)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--event-title-color)")
          }
        >
          {title}
        </h3>

        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: "1px solid var(--event-divider)" }}
        >
          <div
            className="flex items-center gap-1 text-sm font-normal"
            style={{ color: "var(--event-location-text)" }}
          >
            <MapPin
              size={14}
              style={{ color: "var(--event-location-icon)" }}
            />
            {location}
          </div>

          <p
            className="text-lg font-bold tracking-tight"
            style={{ color: "var(--event-price-color)" }}
          >
            {price}
          </p>
        </div>
      </div>
    </motion.div>
  );
}