"use client"
import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-(--black)/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-(--white) px-4 mt-24">
        {/* Heading */}
        <h1 className="font-bricolage font-bold tracking-tighter leading-none text-5xl md:text-7xl lg:text-8xl mb-6">
          There&apos;s More to Your City than you think!
        </h1>

        {/* Sub text */}
        <p className="font-poppins font-medium text-base md:text-2xl leading-8 mb-8 text-(--gray-100)">
          New experiences, restaurants, events and more!
        </p>

        {/* CTA */}
        <Button
          className="font-poppins font-normal text-lg leading-6 bg-(--brand-navy) text-(--white) px-8 py-3 rounded-full transition hover:bg-(--brand-navy)/90 inline-flex items-center justify-center h-auto"
        >
          Join Baatasari &gt;&gt;&gt;
        </Button>
      </div>
    </section>
  );
}
