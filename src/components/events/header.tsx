"use client"

import { Button } from "@/components/ui/button"
import { Search, MapPin, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function EventsHeader() {
    const pathname = usePathname()

    const isActive = (path: string) => pathname === path

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center justify-between px-4 container mx-auto">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative h-16 w-32 md:w-40">
                            <Image
                                src="/landing/logo.png"
                                alt="Baatasari"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 font-poppins ml-8">
                        <Link
                            href="/"
                            className={`text-[16px] font-medium transition-colors hover:text-primary ${isActive('/') ? 'text-primary font-semibold' : 'text-foreground/80'}`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/events"
                            className={`text-[16px] font-medium transition-colors hover:text-primary ${isActive('/events') ? 'text-primary font-semibold' : 'text-foreground/80'}`}
                        >
                            Events
                        </Link>
                        <Link
                            href="#"
                            className={`text-[16px] font-medium transition-colors hover:text-primary ${isActive('/talent') ? 'text-primary font-semibold' : 'text-foreground/80'}`}
                        >
                            Talent
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden md:flex items-center gap-3">
                        <Button variant="ghost" className="rounded-full px-6 text-base font-medium bg-gray-100 hover:bg-gray-200 text-foreground">
                            Sign in
                        </Button>
                        <Button className="rounded-full px-6 text-base font-medium bg-[#0C1D37] hover:bg-[#0C1D37]/90 text-white">
                            Sign up
                        </Button>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
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
                                    <Link href="/events" className="text-[16px] font-medium w-full">
                                        Events
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="focus:bg-transparent p-0">
                                    <a href="#" className="text-[16px] font-medium w-full">
                                        Talent
                                    </a>
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
