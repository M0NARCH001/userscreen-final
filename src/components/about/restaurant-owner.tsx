"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function RestaurantOwner() {
  return (
    <motion.section
      id="restaurants"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 max-w-6xl mx-auto">

          {/* Text Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <h2
              className="
                font-bricolage
                font-[700]
                text-[54px]
                leading-[72px]
                tracking-[0]
                text-[#3A5F94]
                mb-4
              "
            >
              Are you a Restaurant / Cafe Owner?
            </h2>

            {/* Mobile Image (Visible on mobile, hidden on lg) */}
            <div className="relative w-full h-64 mb-8 lg:hidden">
              <Image
                src="bro.png"
                alt="Restaurant Owner Illustration"
                fill
                className="object-contain"
              />
            </div>

            {/* Subheading */}
            <p
              className="
                font-albert
                font-[500]
                text-[28px]
                leading-[1]
                tracking-[0.0015em]
                text-[#3A5F94]
                mb-6
              "
            >
              Attract a Thriving Crowd of Food Lovers!
            </p>

            {/* Description */}
            <p
              className="
                font-albert
                font-[400]
                text-[18px]
                leading-[24px]
                tracking-[0]
                text-[#333333]
                mb-8
              "
            >
              Baatasari isn&apos;t just for diners—it&apos;s for culinary creators
              like you! Promote your unique dishes, engage with a larger
              audience, manage reservations effortlessly, and elevate your
              restaurant—all in one platform.
            </p>

            {/* CTA */}
            <button
              className="
                font-albert
                font-[500]
                text-[18px]
                leading-[24px]
                tracking-[0]
                text-[#F6F6F6]
                bg-[#0C1D37]
                hover:bg-gray-800
                px-8
                py-3
                rounded-full
                transition
              "
            >
              Become our Restaurant Partner
            </button>
          </motion.div>

          {/* Desktop Image (Hidden on mobile, block on lg) */}
          <motion.div
            className="lg:w-1/2 w-full hidden lg:block"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-96">
              <Image
                src="bro.png"
                alt="Restaurant Owner Illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
