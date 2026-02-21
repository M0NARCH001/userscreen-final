"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-(--brand-navy) text-(--white)">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 relative h-[88px] w-[216px] rounded-[12px] overflow-hidden">
              <Image
                src="/landing/footer-logo.png"
                alt="Baatasari"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="mb-4 text-pretty text-sm text-(--gray-300) max-w-sm">
              Discover and book the best events, movies, dining experiences, and activities near you.
              Join millions of happy customers today.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-(--white) hover:text-(--white) hover:bg-(--white)/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-(--white) hover:text-(--white) hover:bg-(--white)/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-(--white) hover:text-(--white) hover:bg-(--white)/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-(--white) hover:text-(--white) hover:bg-(--white)/10">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-sm text-(--gray-300)">
              <li><a href="#" className="hover:text-(--white) transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-(--white) transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-(--white) transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-(--white) transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-lg">Support</h3>
            <ul className="space-y-2 text-sm text-(--gray-300)">
              <li><a href="#" className="hover:text-(--white) transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-(--white) transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-(--white) transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-(--white) transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-lg">Download App</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-3 bg-transparent border-(--gray-600) text-(--white) hover:bg-(--white)/10 hover:text-(--white) h-12" size="sm">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="text-xl"></span>
                </div>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3 bg-transparent border-(--gray-600) text-(--white) hover:bg-(--white)/10 hover:text-(--white) h-12" size="sm">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="text-lg font-bold">▶</span>
                </div>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase">Get it on</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Baatasari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
