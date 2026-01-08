"use client"

import { EventCard } from "@/components/landing/event-card"

interface EventSectionProps {
  title: string
  type: "activities" | "events" | "comedy" | "nightlife" | "music" | "sports" | "weekly"
}

const eventData = {
  activities: [
    {
      title: "F9 Go Karting | Sector 59",
      location: "F9 Go Karting Sector 59, Gurugram",
      price: "₹675",
      discount: "Flat 35% off on select tickets",
      date: "Daily, Multiple slots",
      image: "go+karting+track",
    },
    {
      title: "The Game Palacio | Delhi Ansal Plaza",
      location: "The Game Palacio, Delhi/NCR",
      price: "₹650",
      discount: "20% off up to ₹125",
      date: "Sat, 13 Dec – Wed, 31 Dec",
      image: "arcade+games",
    },
    {
      title: "Chokhi Dhani | Sonipat",
      location: "Chokhi Dhani Sonipat, Haryana",
      price: "₹700",
      discount: "20% off up to ₹125",
      date: "Daily, 6:00 PM onwards",
      image: "cultural+village+resort",
    },
    {
      title: "Museum of Illusions | New Delhi",
      location: "Museum of Illusions, Delhi/NCR",
      price: "₹590",
      discount: "20% off up to ₹150",
      date: "Daily, Multiple slots",
      image: "optical+illusions+museum",
    },
  ],
  events: [
    {
      title: "BAN Kafila | Masoom Sharma",
      location: "Gymkhana Club, Gurugram",
      price: "₹999",
      date: "Sat, 10 Jan, 4:00 PM",
      image: "live+concert+stage",
    },
    {
      title: "New Year's Eve 2026 at SMAAASH",
      location: "SMAAASH, Gurugram",
      price: "₹849",
      date: "Wed, 31 Dec, 7:30 PM",
      image: "new+year+party",
    },
    {
      title: "Songs of the Stone | Qutub Minar",
      location: "Qutub Minar, Delhi/NCR",
      price: "₹5400",
      date: "Sat, 13 Dec, 7:00 PM",
      image: "qutub+minar+night",
    },
    {
      title: "Coke Studio Bharat Live | Delhi",
      location: "NSIC Exhibition Ground, Delhi/NCR",
      price: "₹999",
      date: "Sun, 11 Jan, 5:30 PM",
      image: "live+music+festival",
    },
  ],
  comedy: [
    {
      title: "The Late Night Comedy Show",
      location: "Guftagu Cafe, Gurugram",
      price: "₹299",
      date: "Sat, 13 Dec – Wed, 31 Dec",
      image: "comedy+show+stage",
    },
    {
      title: "Urban Desi - A Standup Comedy Show",
      location: "Faridabad Comedy Club",
      price: "₹149",
      date: "Sat, 13 Dec, 7:30 PM",
      image: "standup+comedy",
    },
    {
      title: "Comedy In Hauz Khas",
      location: "LIGHT ROOM, Delhi/NCR",
      price: "₹299",
      date: "Multiple slots",
      image: "comedy+club+interior",
    },
    {
      title: "ALOK's Hairy Situation Comedy Tour",
      location: "NCUI Auditorium, Delhi/NCR",
      price: "₹499",
      date: "Sun, 18 Jan, 7:00 PM",
      image: "comedy+tour+poster",
    },
  ],
  nightlife: [
    {
      title: "A very Besharam Jumma Ki Raat",
      location: "AURO | Hauz Khas, New Delhi",
      price: "₹1499",
      date: "Sat, 20 Dec, 8:00 PM",
      image: "nightclub+party",
    },
    {
      title: "Mahaul | Goa | New Years Edition",
      location: "Dynamo, Goa",
      price: "₹2000",
      date: "Tue, 30 Dec – Sun, 4 Jan",
      image: "goa+beach+party",
    },
    {
      title: "Pyramid Ibiza | Goa",
      location: "Thalassa Beach Boutique Resort",
      price: "₹2499",
      date: "Sun, 28 Dec, 4:00 PM",
      image: "ibiza+style+party",
    },
    {
      title: "Circoloco",
      location: "Jio World Garden, Mumbai",
      price: "₹3500",
      date: "Sun, 19 Apr, 2:00 PM",
      image: "electronic+music+festival",
    },
  ],
  music: [
    {
      title: "Heritage India Tour | Dr. Satinder Sartaaj",
      location: "Jawaharlal Nehru Stadium, Delhi",
      price: "₹499",
      date: "Sat, 14 Feb, 7:00 PM",
      image: "indian+classical+concert",
    },
    {
      title: "Echoes of Earth, 2025",
      location: "Embassy Riding School, Bengaluru",
      price: "₹3299",
      date: "Sat, 13 Dec – Sun, 14 Dec",
      image: "music+festival+crowd",
    },
    {
      title: "Tiësto India Tour 2026 | Delhi",
      location: "Jawaharlal Nehru Stadium",
      price: "₹999",
      date: "Sat, 24 Jan, 8:00 PM",
      image: "edm+concert+lights",
    },
    {
      title: "A.R. Rahman - Harmony of Hearts",
      location: "Indira Gandhi Indoor Stadium",
      price: "₹6999",
      date: "Sat, 20 Dec, 7:00 PM",
      image: "ar+rahman+concert",
    },
  ],
  sports: [
    {
      title: "Motorfest V2",
      location: "WorldMark Gurgaon, Gurugram",
      price: "₹799",
      date: "Sat, 24 Jan – Sun, 25 Jan",
      image: "motor+sports+festival",
    },
    {
      title: "G.O.A.T India Tour 2025 | Meet & Greet",
      location: "The Leela Palace, New Delhi",
      price: "₹1000000",
      date: "Mon, 15 Dec, 12:00 PM",
      image: "cricket+meet+and+greet",
    },
    {
      title: "WFL Football Bootcamp for Women",
      location: "GD Goenka Sports Arena",
      price: "₹400",
      date: "Sun, 14 Dec, 4:00 PM",
      image: "women+football+training",
    },
    {
      title: "CanterWoods Equestrian Centre",
      location: "CanterWoods, Gurugram",
      price: "₹800",
      date: "Multiple Dates",
      image: "horse+riding+arena",
    },
  ],
  weekly: [
    {
      title: "Giggles N Joy",
      location: "Giggles N Joy, Gurugram",
      price: "₹699",
      discount: "20% off up to ₹150",
      date: "Daily, 12:00 AM onwards",
      image: "kids+play+area",
    },
    {
      title: "Paramotoring | Para Sports Club",
      location: "Para Sports Club, Gurugram",
      price: "₹1499",
      discount: "20% off up to ₹200",
      date: "Multiple slots",
      image: "paramotoring+adventure",
    },
    {
      title: "Hot Air Balloon Adventure",
      location: "Nature's Retreat, Gurugram",
      price: "₹1999",
      date: "Daily, Multiple slots",
      image: "hot+air+balloon+ride",
    },
    {
      title: "Day Outing at Madhavgarh Farms",
      location: "MadhavGarh Farms, Gurugram",
      price: "₹690",
      discount: "20% off up to ₹150",
      date: "Daily, 9:00 AM onwards",
      image: "farm+resort+outdoor",
    },
  ],
}

export function EventSection({ title, type }: EventSectionProps) {
  const events = eventData[type] || eventData.events

  return (
    <section className="py-8 md:py-12">
      <div className="w-full px-4 text-left">
        <h2 className="mb-6 text-balance text-2xl font-bold md:text-3xl text-[#174B91]">{title}</h2>
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
