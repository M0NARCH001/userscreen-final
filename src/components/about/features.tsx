"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Feature = {
  title: string;
  description: string;
  image: string;
};

const features: Feature[] = [
  {
    title: "Inclusive events in seconds!",
    description:
      "Discover hidden gems, unique experiences, and trending events tailored to your interests with just a click.",
    image: "event-1.png",
  },
  {
    title: "Plan your day in minutes",
    description:
      "Get customized itineraries, real-time updates, and explore stress-free!",
    image: "event-2.png",
  },
  {
    title: "Beyond travel!",
    description:
      "Enjoy special discounts, deals and explore with like-minded people!",
    image: "event-3.png",
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeDirection, setActiveDirection] = useState<"left" | "right">("right"); // Keep for button styling if needed, or remove. Keeping for button state logic.

  const totalCards = features.length;

  const getPosition = (index: number) => {
    let diff = index - activeIndex;
    if (diff > totalCards / 2) diff -= totalCards;
    if (diff < -totalCards / 2) diff += totalCards;
    return diff;
  };

  const navigate = (direction: "left" | "right") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveDirection(direction);

    // Small timeout to prevent rapid clicking glitches, similar to reference
    // logic allows standard state update
    if (direction === "right") {
      setActiveIndex((prev) => (prev + 1) % totalCards);
    } else {
      setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
    }

    // Release lock after transition duration usually, but here we just lock briefly 
    // The reference used 100ms timeout for setting state? 
    // Reference: setTimeout(() => { updateState; setIsAnimating(false) }, 100)
    // Actually standard CSS transition handles the smooth move. 
    // We'll mimic the reference exactly.
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // 500ms matches the transition duration approximately
  };

  const handleCardClick = (index: number) => {
    if (isAnimating) return;
    const position = getPosition(index);
    if (position === 0) return;
    position > 0 ? navigate("right") : navigate("left");
  };

  return (
    <section id="features" className="pt-6 pb-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative">
        {/* Section Heading */}
        <h2
          className="
            font-bricolage
            font-[700]
            text-[54px]
            leading-[64px]
            tracking-[0]
            text-[#174B91]
            mb-16
          "
        >
          What&apos;s so special about us?
        </h2>

        {/* 3D Carousel Container */}
        <div className="relative h-[540px] flex items-center justify-center">
          {features.map((item, index) => {
            const position = getPosition(index);
            const isActive = position === 0;

            // Render only if visible/near center to avoid glitches if list is large (optional, but good practice from reference)
            // But with 3 items, all are visible.

            return (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                style={{
                  transform: `translateX(${position * 420}px) scale(${isActive ? 1 : 0.85})`, // 420px spacing
                  zIndex: isActive ? 30 : 20,
                  opacity: isActive ? 1 : 0.6,
                }}
                className={`
                    absolute
                    w-[380px] h-[470px]
                    rounded-2xl bg-white 
                    cursor-pointer
                    transition-all duration-700 ease-out
                    border
                    ${isActive
                    ? "border-blue-400 shadow-[0_25px_60px_rgba(37,99,235,0.35)]"
                    : "border-gray-200 shadow-xl"
                  }
                  `}
              >
                {/* Image */}
                <div className="relative w-full h-60 rounded-t-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`object-contain transition-transform duration-1000 ease-out ${isActive ? "scale-105" : "scale-100"}`}
                    priority={isActive}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="
                        font-albert
                        font-[700]
                        text-[24px]
                        leading-[32px]
                        tracking-[0]
                        text-[#3D3D3D]
                        mb-2
                      "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                        font-albert
                        font-[500]
                        text-[16px]
                        leading-[24px]
                        tracking-[0.005em]
                        text-[#454545]
                      "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrows */}
        <div className="absolute right-4 -bottom-8 flex gap-3">
          <button
            onClick={() => navigate("left")}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition border ${activeDirection === "left"
              ? "bg-[#0C1D37] text-white border-[#0C1D37] hover:bg-[#0C1D37]/90"
              : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => navigate("right")}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition border ${activeDirection === "right"
              ? "bg-[#0C1D37] text-white border-[#0C1D37] hover:bg-[#0C1D37]/90"
              : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
