"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface HandpickedEventCardProps {
    id: string
    image: string
    title: string
    price: string
    category: string
    tag?: string
    chiefGuest?: string
    sponsors?: string
    eventTime?: string
    highlights?: string[]
}


export function HandpickedEventCard({
    id,
    image,
    title,
    price,
    category,
    tag = "Music Festival",
    chiefGuest = "Allu Arjun",
    sponsors = "aata events",
    eventTime = "Telugu | 6yrs + | 4hrs",
    highlights = ["Rockstar Devi Sri Prasad", "Rockstar Devi Sri Prasad", "Rockstar Devi Sri Prasad"]
}: HandpickedEventCardProps) {
    return (
        <div className="group flex flex-col md:flex-row items-center h-full">
            <Link href={`/events/${id}`} className="block relative z-20">
                {/* Main Card */}
                <Card className="w-[300px] md:w-[340px] flex-shrink-0 border-0 shadow-sm transition-all duration-300 rounded-[24px] overflow-hidden bg-white group-hover:-translate-y-2 group-hover:shadow-2xl">
                    <CardContent className="p-4">
                        {/* Image Container */}
                        <div className="relative aspect-square w-full mb-4 overflow-hidden rounded-[20px]">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-2">
                            <h3 className="font-poppins font-[600] text-[20px] leading-[30px] text-[#0C1D37] line-clamp-2">
                                {title}
                            </h3>

                            <p className="font-poppins font-[400] text-[16px] text-[#0C1D37]/80">
                                {price} onwards
                            </p>

                            <Badge
                                variant="secondary"
                                className="mt-2 bg-[#E0D9F7] text-[#0C1D37] hover:bg-[#E0D9F7]/80 rounded-full px-4 py-1 font-poppins font-[500] text-[14px]"
                            >
                                {category}
                            </Badge>
                        </div>
                    </CardContent>
                </Card>
            </Link>

            {/* Details Panel - Mobile (Hidden) & Desktop (Slide-out) */}
            <div className="hidden md:flex w-[300px] md:w-0 opacity-100 md:opacity-0 md:group-hover:w-[340px] md:group-hover:opacity-100 transition-all duration-500 ease-in-out bg-white rounded-b-[24px] md:rounded-b-none md:rounded-r-[24px] border border-t-0 md:border-t md:border-l-0 border-gray-100 shadow-xl overflow-hidden flex-col md:-ml-6 md:group-hover:ml-0 z-10 relative md:h-[95%] md:my-auto mt-[-20px] pt-[20px] md:mt-0 md:pt-0">
                <div className="min-w-[300px] md:min-w-[340px] p-6 flex flex-col h-full justify-between">
                    <div className="space-y-4">
                        {/* Tag */}
                        <Badge variant="secondary" className="bg-[#E0D9F7] text-[#0C1D37] hover:bg-[#E0D9F7]/80 rounded-full">
                            {tag}
                        </Badge>

                        {/* Guests & Sponsors */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-500 text-sm">Chief Guest</p>
                                <p className="font-semibold text-[#0C1D37]">{chiefGuest}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Sponsors</p>
                                <p className="font-semibold text-[#0C1D37]">{sponsors}</p>
                            </div>
                        </div>

                        {/* Meta Info */}
                        <p className="text-gray-600 text-sm font-medium">{eventTime}</p>

                        {/* Highlights */}
                        <div className="space-y-2">
                            <h4 className="font-bold text-[#0C1D37]">Event Highlights</h4>
                            <ul className="space-y-1">
                                {highlights.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span className="truncate">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Actions */}
                    <Link href={`/events/${id}`} className="space-y-3 mt-4 block">
                        <button className="w-full bg-[#FFEad5] text-[#0C1D37] font-semibold py-2 rounded-lg hover:bg-[#FFEad5]/90 transition-colors">
                            Buy 1 Get 1
                        </button>
                        <button className="w-full bg-[#0C1D37] text-white font-semibold py-3 rounded-xl hover:bg-[#0C1D37]/90 transition-colors">
                            Pay {price}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
