"use client"

import { StallCard } from "@/components/stall-card"
import { ArtistCard } from "@/components/artist-card"
import { useState } from "react"
import { StallDetails } from "@/components/stall-details"

// Helper function to generate random items
const generateRandomItems = () => {
  const items = [
    { name: "Chains", price: 150 },
    { name: "Bows", price: 80 },
    { name: "Bracelets", price: 50 },
    { name: "Claw clips", price: 60 },
    { name: "Scrunchies", price: 40 },
    { name: "Earrings", price: 120 },
    { name: "Rings", price: 90 },
    { name: "Necklaces", price: 200 },
  ]

  // Shuffle and pick 3-5 random items
  const shuffled = items.sort(() => 0.5 - Math.random())
  const count = Math.floor(Math.random() * 3) + 3 // 3 to 5 items
  return shuffled.slice(0, count)
}

const STALLS = [
  {
    title: "Twinkle Tales",
    category: "Accessories",
    image: "/jewelry-and-accessories-shop.jpg",
  },
  {
    title: "Taste Town",
    category: "Food",
    image: "/delicious-street-food-stall.jpg",
  },
  {
    title: "Handmade Haven",
    category: "Crafts",
    image: "/handmade-crafts-and-plushies.jpg",
  },
  {
    title: "Melody Makers",
    category: "Live Music",
    image: "/band-on-stage.png",
  },
  {
    title: "Fun Zone",
    category: "Gaming",
    image: "/colorful-board-game-or-carnival-game.jpg",
  },
  {
    title: "LEGENDS of hip-Hop",
    category: "Music",
    image: "/hip-hop-concert-poster.jpg",
  },
]

const ARTISTS = [
  {
    name: "Taylor Swift",
    role: "Singer",
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    name: "Rihanna",
    role: "Singer",
    image: "https://i.pravatar.cc/300?img=9",
  },
  {
    name: "Lady Gaga",
    role: "Singer",
    image: "https://i.pravatar.cc/300?img=3",
  },
  {
    name: "Ed Sheeran",
    role: "Singer",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Dua Lipa",
    role: "Singer",
    image: "https://i.pravatar.cc/300?img=16",
  },
  {
    name: "Adele",
    role: "Singer",
    image: "https://i.pravatar.cc/300?img=20",
  },
  {
    name: "Olivia Rodrigo",
    role: "Singer",
    image: "https://i.pravatar.cc/300?img=24",
  },
  {
    name: "Pitbull",
    role: "Rapper",
    image: "https://i.pravatar.cc/300?img=33",
  },
]


export default function EventsPage() {
  const [selectedStall, setSelectedStall] = useState<any>(null)
  const [stallItems, setStallItems] = useState<Array<{ name: string, price: number }>>([])

  const handleStallClick = (stall: any) => {
    if (selectedStall?.title === stall.title) {
      setSelectedStall(null)
    } else {
      setSelectedStall(stall)
      setStallItems(generateRandomItems())
    }
  }

  const handleClose = () => {
    setSelectedStall(null)
  }

  return (
    <>
      <main className="min-h-screen p-6 md:p-10 lg:p-14 relative overflow-x-hidden">
        <div className="max-w-[1600px] mx-auto space-y-16">

          {/* Stalls Section with Side Panel */}
          <div className="flex transition-all duration-500 ease-in-out">
            {/* Stalls Grid */}
            <div className={`flex-1 transition-all duration-500 ease-in-out`}>
              <section>
                <div className="mb-8">
                  <h1 className="text-3xl font-medium text-slate-900 mb-2 font-bricolage">Stalls</h1>
                  <p className="text-slate-500 font-albert">You can choose the stalls you want to add here.</p>
                </div>
                <div className={`grid gap-6 lg:gap-8 transition-all duration-500 ${selectedStall
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  }`}>
                  {STALLS.map((stall) => (
                    <StallCard
                      key={stall.title}
                      {...stall}
                      onClick={() => handleStallClick(stall)}
                    />
                  ))}
                </div>
              </section>
            </div>

            {/* Side Panel */}
            <div className={`transition-all duration-500 ease-in-out 
              ${selectedStall
                ? 'fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 lg:bg-transparent lg:p-0 lg:static lg:block lg:w-[380px] lg:ml-6 lg:opacity-100 lg:translate-x-0'
                : 'hidden lg:block lg:static lg:w-0 lg:ml-0 lg:opacity-0 lg:translate-x-10 lg:overflow-hidden'
              }`}>
              <div className="w-full max-w-[340px] lg:max-w-none lg:sticky lg:top-6 lg:pt-28">
                {selectedStall && (
                  <StallDetails
                    title={selectedStall.title}
                    subtitle="Where Style Meets Sparkle"
                    items={stallItems}
                    onClose={handleClose}
                    onApprove={handleClose}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Artists Section - Independent */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-medium text-slate-900 mb-2 font-bricolage">Artists</h2>
              <p className="text-slate-500 font-albert">You can meet all talented artists here</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {ARTISTS.map((artist) => (
                <ArtistCard key={artist.name} {...artist} />
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  )
}

