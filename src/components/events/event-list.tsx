"use client";

import React, { useRef } from "react";
import { HandpickedEventCard } from "@/components/events/handpicked-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface EventData {
    title: string;
    price: string;
    category: string;
    image: string;
    id: string;
    tag?: string;
    chiefGuest?: string;
    sponsors?: string;
    eventTime?: string;
    highlights?: string[];
}

interface EventRowProps {
    title: string;
    events: EventData[];
}

function EventRow({ title, events }: EventRowProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeDirection, setActiveDirection] = React.useState<"left" | "right">("right");

    const scroll = (direction: "left" | "right") => {
        setActiveDirection(direction);
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const scrollAmount = clientWidth * 0.8;
            const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: scrollTo,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="mb-12 last:mb-0">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-[#0C1D37] font-bricolage">{title}</h2>
                <a href="#" className="text-blue-600 hover:underline font-medium text-sm md:text-base">
                    View All
                </a>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] snap-x snap-mandatory scroll-smooth"
            >
                {events.map((event, index) => (
                    <div key={index} className="snap-start shrink-0">
                        <HandpickedEventCard
                            {...event}
                        />
                    </div>
                ))}
            </div>

            <div className="flex justify-end gap-4 mt-4">
                <button
                    onClick={() => scroll("left")}
                    className={`h-12 w-12 rounded-full flex items-center justify-center transition-colors active:scale-95 duration-200 border ${activeDirection === "left"
                        ? "bg-[#0C1D37] text-white border-[#0C1D37] hover:bg-[#0C1D37]/90"
                        : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                        }`}
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={() => scroll("right")}
                    className={`h-12 w-12 rounded-full flex items-center justify-center transition-colors active:scale-95 duration-200 border ${activeDirection === "right"
                        ? "bg-[#0C1D37] text-white border-[#0C1D37] hover:bg-[#0C1D37]/90"
                        : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                        }`}
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
}

// Data Arrays
export const handpickedData: EventData[] = [
    { id: "voice-notes-tour", title: "Voice Notes Tour", price: "₹ 999", category: "Concert", image: "/events/i.svg" },
    { id: "art-workshop", title: "Art Workshop", price: "₹ 499", category: "Workshop", image: "/events/k.svg" },
    { id: "beach-yoga", title: "Beach Yoga", price: "₹ 299", category: "Fitness", image: "/events/v.svg" },
    { id: "city-tour", title: "City Tour", price: "₹ 999", category: "Explore", image: "/events/v.svg" },
];

export const nextUpData: EventData[] = [
    { id: "jazz-night", title: "Jazz Night", price: "₹ 1200", category: "Music", image: "/events/i.svg" },
    { id: "pottery-class", title: "Pottery Class", price: "₹ 800", category: "Hobby", image: "/events/i.svg" },
    { id: "tech-talk", title: "Tech Talk", price: "Free", category: "Meetup", image: "/events/i.svg" },
    { id: "startup-mixer", title: "Startup Mixer", price: "Free", category: "Business", image: "/events/v.svg" },
];

export const interestData: EventData[] = [
    { id: "cooking-masterclass", title: "Cooking Masterclass", price: "₹ 1500", category: "Food", image: "/events/i.svg" },
    { id: "photography-walk", title: "Photography Walk", price: "Free", category: "Hobby", image: "/events/i.svg" },
    { id: "wine-tasting", title: "Wine Tasting", price: "₹ 2500", category: "Social", image: "/events/i.svg" },
    { id: "paint-sip", title: "Paint & Sip", price: "₹ 1500", category: "Art", image: "/events/v.svg" },
];

export const soloData: EventData[] = [
    { id: "standup-special", title: "Standup Special", price: "₹ 600", category: "Comedy", image: "/events/k.svg" },
    { id: "acoustic-solo", title: "Acoustic Solo", price: "₹ 400", category: "Music", image: "/events/i.svg" },
    { id: "poetry-slam", title: "Poetry Slam", price: "₹ 200", category: "Literary", image: "/events/v.svg" },
    { id: "open-mic", title: "Open Mic", price: "Free", category: "Performance", image: "/events/v.svg" },
];

export const solopreneurData: EventData[] = [
    { id: "seo-strategy", title: "SEO Strategy", price: "₹ 2000", category: "Marketing", image: "/events/i.svg" },
    { id: "freelance-tax-101", title: "Freelance Tax 101", price: "₹ 500", category: "Finance", image: "/events/s.svg" },
    { id: "networking-mixer", title: "Networking Mixer", price: "₹ 300", category: "Business", image: "/events/v.svg" },
    { id: "client-acquisition", title: "Client Acquisition", price: "₹ 1200", category: "Strategy", image: "/events/v.svg" },
];

export const getAllEvents = () => {
    return [
        ...handpickedData,
        ...nextUpData,
        ...interestData,
        ...soloData,
        ...solopreneurData,
    ];
};

export function EventList() {
    return (
        <section className="container mx-auto px-4 py-12">
            <EventRow title="Handpicked For You" events={handpickedData} />
            <EventRow title="Next Up: Events You’ll Love" events={nextUpData} />
            <EventRow title="Based on Your Interests" events={interestData} />
            <EventRow title="Solo Performers" events={soloData} />
            <EventRow title="For Solopreneurs" events={solopreneurData} />
        </section>
    );
}