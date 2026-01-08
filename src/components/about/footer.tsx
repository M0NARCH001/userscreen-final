"use client"

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0C1D37] text-white">
      {/* TOP SECTION */}
      <div className="px-16 py-4">
        <div className="flex flex-col lg:flex-row justify-between gap-6">

          {/* LEFT BLOCK */}
          <div className="max-w-sm">
            <Image
              src="/foot-logo.png"
              alt="Baatasari"
              width={200}
              height={60}
              className="mb-4 object-contain"
            />

            <div className="space-y-1">
              {/* Contact Us */}
              <p className="font-albert font-[500] text-[18px] leading-[24px] text-white">
                Contact Us:
              </p>

              {/* Address */}
              <p className="font-albert font-[400] text-[14px] leading-[20px] tracking-[0.0025em] text-white">
                Venture Development Center,
                <br />
                Rushikonda,
                <br />
                Visakhapatnam, 530045
              </p>

              <p className="font-albert font-[400] text-[14px] leading-[20px] tracking-[0.0025em] text-white">
                contactus@baatasari.com
              </p>

              <p className="font-albert font-[400] text-[14px] leading-[20px] tracking-[0.0025em] text-white">
                +91 9578937675
              </p>
            </div>
          </div>

          {/* RIGHT BLOCK */}
          <div className="flex gap-8">

            {/* COLUMN ONE */}
            <div>
              <h3 className="font-inter font-[600] text-[16px] leading-[150%] text-white mb-4">
                Column One
              </h3>

              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="font-inter font-[400] text-[14px] leading-[150%] text-white underline-offset-0"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-inter font-[400] text-[14px] leading-[150%] text-white underline-offset-0"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* FOLLOW US */}
            <div>
              <h3 className="font-inter font-[600] text-[16px] leading-[150%] text-white mb-4">
                Follow Us
              </h3>

              <ul className="space-y-1">
                {/* Instagram */}
                <li className="flex items-center gap-3">
                  <FaInstagram className="text-white text-[18px]" />
                  <Link
                    href="#"
                    className="font-inter font-[400] text-[14px] leading-[150%] text-white underline-offset-0"
                  >
                    Instagram
                  </Link>
                </li>

                {/* LinkedIn */}
                <li className="flex items-center gap-3">
                  <FaLinkedinIn className="text-white text-[18px]" />
                  <Link
                    href="#"
                    className="font-inter font-[400] text-[14px] leading-[150%] text-white underline-offset-0"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="mt-4 pt-2 flex flex-col lg:flex-row justify-between items-center text-white">
          <div className="space-y-1">
            <p className="font-inter font-[600] text-[14px] leading-[150%]">
              © 2025 Baatasari. All rights reserved.
            </p>
            <p className="font-inter font-[600] text-[14px] leading-[150%]">
              Images and illustrations sourced from Freepik
            </p>
          </div>

          <div className="flex gap-8 mt-4 lg:mt-0">
            <Link
              href="#"
              className="font-inter font-[600] text-[14px] leading-[150%] text-white underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-inter font-[600] text-[14px] leading-[150%] text-white underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
