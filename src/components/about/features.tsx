"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FEATURES_DATA } from "@/lib/about-data";

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeDirection, setActiveDirection] = useState<"left" | "right">("right");

  const totalCards = FEATURES_DATA.length;

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
    <section id="features" className="pt-16 pb-24 bg-(--white) overflow-hidden relative">
      <div className="container mx-auto px-4 relative">
        {/* Section Heading */}
        <h2 className="font-bricolage font-bold text-[54px] leading-[64px] tracking-[0] text-(--brand-blue) mb-16">
          What makes us stand apart?
        </h2>

        {/* 3D Carousel Container */}
        <div className="relative h-[540px] flex items-center justify-center">
          {FEATURES_DATA.map((item, index) => {
            const position = getPosition(index);
            const isActive = position === 0;

            return (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                style={{
                  transform: `translateX(${position * 420}px) scale(${isActive ? 1 : 0.85})`,
                  zIndex: isActive ? 30 : 20,
                  opacity: isActive ? 1 : 0.6,
                }}
                className={`
                    absolute
                    w-[380px] h-[470px]
                    rounded-[64px] bg-(--white) 
                    cursor-pointer
                    transition-all duration-700 ease-out
                    border
                    ${isActive
                    ? "border-(--blue-400) shadow-[0_25px_60px_rgba(37,99,235,0.35)]"
                    : "border-(--gray-200) shadow-xl"
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
                  <h3 className="font-albert font-bold text-[24px] leading-[32px] tracking-[0] text-(--text-subtle) mb-2">
                    {item.title}
                  </h3>

                  <p className="font-albert font-medium text-[16px] leading-[24px] tracking-[0.005em] text-(--text-muted-custom)">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrows */}
        <div className="absolute right-4 -bottom-8 flex gap-3">
          <Button
            variant="outline"
            onClick={() => navigate("left")}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition border p-0 ${activeDirection === "left"
              ? "bg-(--brand-navy) text-(--white) border-(--brand-navy) hover:bg-(--brand-navy)/90 hover:text-(--white)"
              : "bg-(--white) text-(--gray-600) border-(--gray-300) hover:bg-(--gray-100)"
              }`}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("right")}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition border p-0 ${activeDirection === "right"
              ? "bg-(--brand-navy) text-(--white) border-(--brand-navy) hover:bg-(--brand-navy)/90 hover:text-(--white)"
              : "bg-(--white) text-(--gray-600) border-(--gray-300) hover:bg-(--gray-100)"
              }`}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
