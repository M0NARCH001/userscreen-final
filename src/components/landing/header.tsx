"use client"

import { Button } from "@/components/ui/button"
import { Search, MapPin, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 relative">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="relative h-16 w-52">
              <Image
                src="/landing/logo.png"
                alt="Baatasari"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 md:flex font-[var(--font-poppins)]">
            <Link href="/events" className="font-medium text-[18px] leading-[24px] tracking-normal transition-colors hover:text-primary align-middle">
              Events
            </Link>
            <Link href="/talent" className="font-medium text-[18px] leading-[24px] tracking-normal transition-colors hover:text-primary align-middle">
              Talents
            </Link>
            <Link href="/about" className="font-medium text-[18px] leading-[24px] tracking-normal transition-colors hover:text-primary align-middle">
              About us
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden gap-2 lg:flex">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Select Location</span>
          </Button>

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" suppressHydrationWarning>
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px] p-4 rounded-xl shadow-lg border-0">
              <div className="flex flex-col gap-4 font-[var(--font-poppins)]">
                <DropdownMenuItem className="focus:bg-transparent p-0">
                  <Link href="/about" className="text-[16px] font-medium w-full">
                    About us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-transparent p-0">
                  <Link href="/events" className="text-[16px] font-medium w-full">
                    Events
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-transparent p-0">
                  <Link href="/talent" className="text-[16px] font-medium w-full">
                    Talent
                  </Link>
                </DropdownMenuItem>
              </div>

              <DropdownMenuSeparator className="my-4 bg-gray-100" />

              <div className="flex flex-col gap-3">
                <Button variant="ghost" className="w-full justify-center bg-gray-100/50 hover:bg-gray-100 rounded-full h-12 text-[16px] font-medium">
                  Sign in
                </Button>
                <Button className="w-full justify-center bg-[#0C1D37] hover:bg-[#0C1D37]/90 rounded-full h-12 text-[16px] font-medium text-white">
                  Sign up
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
