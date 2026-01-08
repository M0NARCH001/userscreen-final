"use client"
export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 mt-24">
        {/* Heading */}
        <h1
          className="
            font-bricolage
            font-[600]
            tracking-[-0.04em]
            leading-[100%]
            text-[42px]
            md:text-[64px]
            lg:text-[86px]
            mb-6
          "
        >
          There&apos;s More to Your City than you think!
        </h1>

        {/* Sub text */}
        <p
          className="
            font-poppins
            font-[500]
            text-[16px]
            md:text-[24px]
            leading-[32px]
            mb-8
            text-gray-100
          "
        >
          New experiences, restaurants, events and more!
        </p>

        {/* CTA */}
        <button
          className="
            font-poppins
            font-[400]
            text-[18px]
            leading-[24px]
            bg-[#0C1D37]
            text-white
            px-8
            py-3
            rounded-full
            transition
            hover:bg-[#0C1D37]/90
            inline-flex
            items-center
            justify-center
          "
        >
          Join Baatasari &gt;&gt;&gt;
        </button>
      </div>
    </section>
  );
}
