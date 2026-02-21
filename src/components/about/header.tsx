"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* FULL WIDTH WRAPPER */}
      <div className="px-6 pt-3">
        {/* HEADER FRAME */}
        <div className="w-full flex items-center justify-between rounded-[12px] px-8 py-[19px]">
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
          <div className="hidden md:flex items-center gap-10 text-(--white)">
            <Link
              href="/about"
              className="font-poppins text-[18px] leading-[24px] font-medium hover:text-(--white)/80 transition"
            >
              About us
            </Link>
            <Link
              href="/events"
              className="font-poppins text-[18px] leading-[24px] font-medium hover:text-(--white)/80 transition"
            >
              Events
            </Link>
            <Link
              href="/talent"
              className="font-poppins text-[18px] leading-[24px] font-medium hover:text-(--white)/80 transition"
            >
              Talent
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="h-[40px] px-6 rounded-full bg-(--white)/20 text-(--white) hover:bg-(--white)/30 transition font-poppins text-[18px] leading-[24px] font-medium hover:text-(--white)">
              Sign in
            </Button>
            <Button className="h-[40px] px-6 rounded-full bg-(--brand-navy)/90 text-(--white) hover:bg-(--brand-navy) transition font-poppins text-[18px] leading-[24px] font-medium hover:text-(--white)">
              Sign up
            </Button>
          </div>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-(--white) p-2 h-auto hover:bg-transparent hover:text-(--white)"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </Button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 rounded-[16px] bg-(--white) shadow-xl overflow-hidden">
            <Link
              href="#"
              className="block px-6 py-4 text-(--gray-900) font-poppins text-[18px] leading-[24px] font-medium"
            >
              About us
            </Link>
            <Link
              href="/events"
              className="block px-6 py-4 text-(--gray-900) font-poppins text-[18px] leading-[24px] font-medium"
            >
              Events
            </Link>
            <Link
              href="/talent"
              className="block px-6 py-4 text-(--gray-900) font-poppins text-[18px] leading-[24px] font-medium"
            >
              Talent
            </Link>

            {/* Divider */}
            <div className="h-px bg-(--gray-200) mx-6 my-2" />

            {/* Auth Actions */}
            <div className="px-6 py-4 flex flex-col gap-3">
              <Button variant="secondary" className="w-full h-[44px] rounded-full bg-(--gray-100) text-(--gray-900) font-poppins text-[18px] leading-[24px] font-medium hover:bg-(--gray-200)">
                Sign in
              </Button>
              <Button className="w-full h-[44px] rounded-full bg-(--brand-navy) text-(--white) font-poppins text-[18px] leading-[24px] font-medium hover:bg-(--brand-navy)/90 hover:text-(--white)">
                Sign up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
