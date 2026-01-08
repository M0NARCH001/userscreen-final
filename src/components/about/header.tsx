"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* FULL WIDTH WRAPPER */}
      <div className="px-6 pt-3">
        {/* HEADER FRAME */}
        <div
          className="
            w-full
            flex items-center justify-between
            rounded-[12px]
            px-8 py-[19px]
          "
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/frame-1.svg"
              alt="Baatasari Logo"
              width={216}
              height={216}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-white">
            <Link
              href="/about"
              className="font-poppins text-[18px] leading-[24px] font-[500] hover:text-white/80 transition"
            >
              About us
            </Link>
            <Link
              href="/events"
              className="font-poppins text-[18px] leading-[24px] font-[500] hover:text-white/80 transition"
            >
              Events
            </Link>
            <Link
              href="/talent"
              className="font-poppins text-[18px] leading-[24px] font-[500] hover:text-white/80 transition"
            >
              Talent
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="h-[40px] px-6 rounded-full bg-white/20 text-white hover:bg-white/30 transition font-poppins text-[18px] leading-[24px] font-[500]">
              Sign in
            </button>
            <button className="h-[40px] px-6 rounded-full bg-[#0C1D37]/90 text-white hover:bg-[#0C1D37] transition font-poppins text-[18px] leading-[24px] font-[500]">
              Sign up
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 rounded-[16px] bg-white shadow-xl overflow-hidden">
            <Link
              href="#"
              className="block px-6 py-4 text-gray-900 font-poppins text-[18px] leading-[24px] font-[500]"
            >
              About us
            </Link>
            <Link
              href="/events"
              className="block px-6 py-4 text-gray-900 font-poppins text-[18px] leading-[24px] font-[500]"
            >
              Events
            </Link>
            <Link
              href="/talent"
              className="block px-6 py-4 text-gray-900 font-poppins text-[18px] leading-[24px] font-[500]"
            >
              Talent
            </Link>

            {/* Divider */}
            <div className="h-px bg-gray-200 mx-6 my-2" />

            {/* Auth Actions */}
            <div className="px-6 py-4 flex flex-col gap-3">
              <button className="w-full h-[44px] rounded-full bg-gray-100 text-gray-900 font-poppins text-[18px] leading-[24px] font-[500]">
                Sign in
              </button>
              <button className="w-full h-[44px] rounded-full bg-[#0C1D37] text-white font-poppins text-[18px] leading-[24px] font-[500]">
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
