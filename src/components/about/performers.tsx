"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PERFORMERS_DATA } from "@/lib/about-data";

export default function Performers() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeDirection, setActiveDirection] = useState<"left" | "right">("right");

  const totalCards = PERFORMERS_DATA.length;

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
    <section id="performers" className="py-24 bg-(--white) overflow-hidden relative">
      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <h2 className="font-bricolage font-bold text-[54px] leading-[72px] tracking-[0] text-(--brand-blue) mb-20">
          Calling All Performers!
        </h2>

        {/* 3D Carousel Container */}
        <div className="relative h-[470px] flex items-center justify-center">
          {PERFORMERS_DATA.map((item, index) => {
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
                    w-[380px] h-[420px]
                    rounded-[64px] bg-(--white) 
                    cursor-pointer
                    transition-all duration-700 ease-out
                    border
                    ${isActive
                    ? "border-(--card-active-border) shadow-[0_25px_60px_rgba(37,99,235,0.35)]"
                    : "border-(--gray-200) shadow-xl"
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
                  <h3 className="font-albert font-medium text-[24px] leading-[32px] tracking-[0.0015em] text-(--about-card-text) mb-2">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="font-albert font-normal text-[16px] leading-[24px] tracking-[0.005em] text-(--about-card-text)">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>


        {/* Navigation Arrows */}
        <div className="absolute right-6 bottom-24 flex gap-4">
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

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <Link href="/talent">
            <Button className="font-albert font-medium text-[18px] leading-[24px] tracking-[0] text-(--white) px-10 py-4 rounded-full bg-(--brand-navy) hover:bg-(--brand-navy)/90 transition h-auto">
              Showcase your Talent
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
