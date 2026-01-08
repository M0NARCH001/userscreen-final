"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MapPin, Calendar, Info } from "lucide-react"

export function EventsHero() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    // Carousel images - placeholder URLs for now
    const slides = [
        {
            id: 1,
            image: "/events/hero.png",
            alt: "Concert Event 1"
        },
        {
            id: 2,
            image: "/events/hero.png",
            alt: "Concert Event 2"
        },
        {
            id: 3,
            image: "/events/hero.png",
            alt: "Concert Event 3"
        },
    ]

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = current.clientWidth;
            const currentScroll = current.scrollLeft;

            // Calculate current slide index based on scroll position
            const currentIndex = Math.round(currentScroll / scrollAmount);

            // Determine target index
            let targetIndex;
            if (direction === 'left') {
                targetIndex = Math.max(0, currentIndex - 1);
            } else {
                targetIndex = Math.min(slides.length - 1, currentIndex + 1);
            }

            // Scroll to specific position
            current.scrollTo({
                left: targetIndex * scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div className="relative w-full flex flex-col items-center">
            {/* Carousel Section */}
            <div
                className="relative w-full rounded-3xl md:rounded-[40px] mt-[30px] overflow-hidden"
                style={{
                    maxWidth: '1080px',
                    height: '580px',
                }}
            >
                <div
                    ref={scrollContainerRef}
                    className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                >
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="min-w-full h-full relative snap-center"
                        >
                            {/* Dark gradient overlay at bottom for text contrast if needed */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

                            <img
                                src={slide.image}
                                alt={slide.alt}
                                className="w-full h-full object-cover opacity-80"
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors"
                >
                    <ChevronLeft className="h-10 w-10 md:h-12 md:w-12" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors"
                >
                    <ChevronRight className="h-10 w-10 md:h-12 md:w-12" />
                </button>
            </div>

            {/* Filter Bar - Overlapping the bottom of carousel */}
            <div className="relative z-30 -mt-10 mb-8 container mx-auto px-4">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 md:p-3 flex flex-col md:flex-row items-center gap-2 md:gap-4 max-w-5xl mx-auto">

                    {/* Location */}
                    <div className="flex-1 w-full md:w-auto relative border-b md:border-b-0 md:border-r border-gray-100 px-4 py-2">
                        <div className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 text-gray-500" />
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Location</span>
                                <select className="w-full bg-transparent font-medium text-gray-800 outline-none appearance-none cursor-pointer">
                                    <option>New York, NY</option>
                                    <option>Los Angeles, CA</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="flex-1 w-full md:w-auto relative border-b md:border-b-0 md:border-r border-gray-100 px-4 py-2">
                        <div className="flex items-center gap-3">
                            <span className="text-lg font-semibold text-gray-500">₹</span>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Price</span>
                                <select className="w-full bg-transparent font-medium text-gray-800 outline-none appearance-none cursor-pointer">
                                    <option>Any Price</option>
                                    <option>Free</option>
                                    <option>Paid</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="flex-1 w-full md:w-auto relative border-b md:border-b-0 md:border-r border-gray-100 px-4 py-2">
                        <div className="flex items-center gap-3">
                            <Calendar className="h-5 w-5 text-gray-500" />
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Date</span>
                                <select className="w-full bg-transparent font-medium text-gray-800 outline-none appearance-none cursor-pointer">
                                    <option>Select Date</option>
                                    <option>Today</option>
                                    <option>Tomorrow</option>
                                    <option>This Weekend</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Event Type */}
                    <div className="flex-1 w-full md:w-auto relative px-4 py-2">
                        <div className="flex items-center gap-3">
                            <Info className="h-5 w-5 text-gray-500" />
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Event Type</span>
                                <select className="w-full bg-transparent font-medium text-gray-800 outline-none appearance-none cursor-pointer">
                                    <option>All Events</option>
                                    <option>Music</option>
                                    <option>Comedy</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Search Button */}
                    <Button className="w-full md:w-auto rounded-full px-8 py-6 bg-[#0C1D37] hover:bg-[#0C1D37]/90 text-white font-medium text-base">
                        Discover Events
                    </Button>

                </div>
            </div>
        </div>
    )
}
