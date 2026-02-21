"use client"

import { Button } from "@/components/ui/button"
import { Menu, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
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

          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 md:flex font-poppins">
            <Link href="/" className="font-medium text-[18px] leading-[24px] tracking-normal transition-colors hover:text-primary align-middle">
              Home
            </Link>
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
          {/* Desktop Avatar Dropdown */}
          <div className="hidden md:flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 p-1 rounded-full border border-(--border-light) bg-(--white)/90 hover:bg-(--white) h-auto">
                  <Avatar className="h-8 w-8 rounded-full">
                    <AvatarFallback className="bg-(--gray-100) text-(--gray-600)">
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56 p-2 rounded-xl shadow-lg">
                <DropdownMenuItem className="cursor-pointer px-4 py-3 font-poppins text-[16px] font-medium rounded-lg">
                  Sign in
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer px-4 py-3 font-poppins text-[16px] font-medium rounded-lg">
                  Sign up
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" suppressHydrationWarning>
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px] p-4 rounded-xl shadow-lg border-0">
              <div className="flex flex-col gap-4 font-poppins">
                <DropdownMenuItem className="focus:bg-transparent p-0">
                  <Link href="/" className="text-[16px] font-medium w-full">
                    Home
                  </Link>
                </DropdownMenuItem>
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

              <DropdownMenuSeparator className="my-4 bg-(--gray-100)" />

              <div className="flex flex-col gap-3">
                <Button variant="ghost" className="w-full justify-center bg-(--gray-100)/50 hover:bg-(--gray-100) rounded-full h-12 text-[16px] font-medium">
                  Sign in
                </Button>
                <Button className="w-full justify-center bg-(--brand-navy) hover:bg-(--brand-navy)/90 rounded-full h-12 text-[16px] font-medium text-(--white)">
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
