"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Performer = {
  title: string;
  description: string;
  image: string;
};

const performers: Performer[] = [
  {
    title: "Dancers",
    description: "Enchant your audience with your energizing moves",
    image: "per-1.png",
  },
  {
    title: "Singers!",
    description: "Captivate the crowd and let your voice be heard.",
    image: "per-2.png",
  },
  {
    title: "Artists",
    description: "Showcase your creativity and connect with your audience",
    image: "per-3.png",
  },
];

export default function Performers() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeDirection, setActiveDirection] = useState<"left" | "right">("right");

  const totalCards = performers.length;

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

    if (direction === "right") {
      setActiveIndex((prev) => (prev + 1) % totalCards);
    } else {
      setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleCardClick = (index: number) => {
    if (isAnimating) return;
    const position = getPosition(index);
    if (position === 0) return;
    position > 0 ? navigate("right") : navigate("left");
  };

  return (
    <section id="performers" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <h2
          className="
            font-bricolage
            font-[700]
            text-[54px]
            leading-[72px]
            tracking-[0]
            text-[#3A5F94]
            mb-20
          "
        >
          Calling All Performers!
        </h2>

        {/* 3D Carousel Container */}
        <div className="relative h-[470px] flex items-center justify-center">
          {performers.map((item, index) => {
            const position = getPosition(index);
            const isActive = position === 0;

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
                    w-[380px] h-[420px]
                    rounded-2xl bg-white 
                    cursor-pointer
                    transition-all duration-700 ease-out
                    border
                    ${isActive
                    ? "border-[#6FA3FF] shadow-[0_25px_60px_rgba(37,99,235,0.35)]"
                    : "border-gray-200 shadow-xl"
                  }
                  `}
              >
                {/* Image */}
                <div className="relative w-full h-56 rounded-t-2xl overflow-hidden">
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
                  {/* Card Title */}
                  <h3
                    className="
                        font-albert
                        font-[500]
                        text-[24px]
                        leading-[32px]
                        tracking-[0.0015em]
                        text-[#141414]
                        mb-2
                      "
                  >
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p
                    className="
                        font-albert
                        font-[400]
                        text-[16px]
                        leading-[24px]
                        tracking-[0.005em]
                        text-[#141414]
                      "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>


        {/* Navigation Arrows */}
        <div className="absolute right-6 bottom-24 flex gap-4">
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

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <Link href="/talent">
            <button
              className="
                font-albert
                font-[500]
                text-[18px]
                leading-[24px]
                tracking-[0]
                text-[#F6F6F6]
                px-10
                py-4
                rounded-full
                bg-[#0C1D37]
                hover:bg-[#0C1D37]/90
                transition
              "
            >
              Showcase your Talent
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
