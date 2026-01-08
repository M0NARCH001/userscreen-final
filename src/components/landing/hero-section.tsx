"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const router = useRouter()

  const handleExploreClick = () => {
    router.push("/onboarding")
  }

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background px-4 pt-4 md:px-6 md:pt-6">
      <div className="relative bg-gradient-to-r from-primary to-primary/80 w-full overflow-hidden py-12 md:py-16 rounded-2xl md:rounded-3xl shadow-lg">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/landing/Baatasari-pass-entertainment-banner.jpg"
            alt="Baatasari Pass Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <Badge className="mb-4 bg-background/20 text-white hover:bg-background/30">
            Baatasari Pass
          </Badge>
          <h1 className="mb-4 max-w-4xl text-balance text-4xl font-bold text-white md:text-5xl">
            Unlimited access to events & movies
          </h1>
          <p className="mb-6 max-w-2xl text-pretty text-lg text-white/90">
            Get exclusive discounts and early access to the best experiences in your city
          </p>
          <Button size="lg" variant="secondary" className="font-semibold" onClick={handleExploreClick}>
            Explore Baatasari Pass
          </Button>
        </div>
      </div>
    </section>
  )
}
