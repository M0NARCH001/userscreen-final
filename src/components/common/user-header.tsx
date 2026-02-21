"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, ChevronDown } from "lucide-react";
import { useAuth } from "@/context/auth-context";

export default function UserHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const { logout, userProfile } = useAuth();

    // Helper to get user initials for avatar
    const getInitials = (name: string) => {
        if (!name) return "U";
        const parts = name.trim().split(" ");
        if (parts.length >= 2) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        return name.substring(0, 2).toUpperCase();
    };

    return (
        <header className="absolute top-0 left-0 right-0 z-50">
            <div className="px-6 pt-2">

                {/* HEADER BAR */}
                <div className="relative w-full px-8 py-1 flex items-center">

                    {/* LEFT — LOGO */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/frame-1.svg"
                            alt="Baatasari Logo"
                            width={118}
                            height={24}
                            priority
                            className="h-[24px] w-auto"
                        />
                    </Link>

                    {/* CENTER — NAV */}
                    {/* CENTER — NAV */}
                    <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-10">
                        <Link className="font-poppins font-medium text-[18px] leading-[24px] text-(--text-nav)" href="/">
                            Home
                        </Link>
                        <Link className="font-poppins font-medium text-[18px] leading-[24px] text-(--text-nav)" href="/about">
                            About Us
                        </Link>
                        <Link className="font-poppins font-medium text-[18px] leading-[24px] text-(--text-nav)" href="/events">
                            Events
                        </Link>
                        <Link className="font-poppins font-medium text-[18px] leading-[24px] text-(--text-nav)" href="/talent">
                            Talent
                        </Link>
                    </nav>

                    {/* RIGHT — DESKTOP AVATAR */}
                    <div className="ml-auto hidden md:flex items-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-1 p-1 rounded-full border border-(--border-light) bg-(--white)/90 h-auto hover:bg-(--white)">
                                    <Avatar className="h-8 w-8 rounded-full">
                                        <AvatarFallback>{getInitials(userProfile.fullName)}</AvatarFallback>
                                    </Avatar>
                                    <ChevronDown className="h-4 w-4 text-(--gray-800)" />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end" className="w-64 p-0">
                                <div className="px-4 py-3 border-b">
                                    <p className="font-inter font-medium text-[18px] leading-[24px] text-(--text-body)">
                                        {userProfile.fullName || "User"}
                                    </p>
                                    <p className="font-inter font-normal text-[14px] leading-[20px] tracking-[0.0025em] text-(--text-body-secondary)">
                                        {userProfile.emailId || "No email set"}
                                    </p>
                                </div>

                                {[{ label: "My Profile", href: "/onboarding?step=details" }, { label: "Preferences", href: "/onboarding?step=preferences" }, { label: "Settings", href: "/onboarding?step=details" }].map((item) => (
                                    <DropdownMenuItem
                                        key={item.label}
                                        asChild
                                        className="cursor-pointer"
                                    >
                                        <Link
                                            href={item.href}
                                            className="w-full flex px-4 py-3 font-inter font-normal text-[14px] leading-[20px] tracking-[0.0025em] text-(--text-body-secondary)"
                                        >
                                            {item.label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}

                                <DropdownMenuSeparator />

                                <DropdownMenuItem className="px-4 py-3 flex items-center gap-2 font-inter font-normal text-[14px] leading-[20px] tracking-[0.0025em] text-(--text-error)">
                                    Logout
                                    <LogOut className="h-4 w-4" />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="ml-auto md:hidden text-2xl h-auto w-auto hover:bg-transparent"
                    >
                        {isMobileMenuOpen ? "✕" : "☰"}
                    </Button>
                </div>

                {/* MOBILE MENU */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 rounded-2xl bg-(--white) shadow-xl overflow-hidden">

                        {/* AVATAR + NAME + EMAIL */}
                        <Button
                            variant="ghost"
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="w-full flex items-center justify-between px-6 py-4 border-b h-auto hover:bg-transparent rounded-none"
                        >
                            <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8 rounded-full">
                                    <AvatarFallback>{getInitials(userProfile.fullName)}</AvatarFallback>
                                </Avatar>

                                <div className="text-left">
                                    <p className="font-inter font-medium text-[18px] leading-[24px] text-(--text-body)">
                                        {userProfile.fullName || "User"}
                                    </p>
                                    <p className="font-inter font-normal text-[14px] leading-[20px] tracking-[0.0025em] text-(--text-body-secondary) normal-case">
                                        {userProfile.emailId || "No email set"}
                                    </p>
                                </div>
                            </div>

                            <ChevronDown
                                className={`h-5 w-5 transition-transform ${isProfileOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </Button>

                        {/* PROFILE DROPDOWN */}
                        {isProfileOpen && (
                            <div className="border-b">
                                {[{ label: "My Profile", href: "/onboarding?step=details" }, { label: "Preferences", href: "/onboarding?step=preferences" }, { label: "Settings", href: "/onboarding?step=details" }].map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block w-full text-left px-6 py-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0.0025em] text-(--text-body-secondary)"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* MAIN NAV */}
                        <Link href="/" className="block px-6 py-4 font-poppins font-medium text-[18px] leading-[24px] text-(--text-nav)">
                            Home
                        </Link>
                        <Link href="/about" className="block px-6 py-4 font-poppins font-medium text-[18px] leading-[24px] text-(--text-nav)">
                            About Us
                        </Link>
                        <Link href="/events" className="block px-6 py-4 font-poppins font-medium text-[18px] leading-[24px] text-(--text-nav)">
                            Events
                        </Link>
                        <Link href="/talent" className="block px-6 py-4 font-poppins font-medium text-[18px] leading-[24px] text-(--text-nav)">
                            Talent
                        </Link>

                        <div className="h-px bg-(--gray-200) mx-6 my-2" />

                        {/* LOGOUT */}
                        <Button variant="ghost" className="w-full flex items-center justify-start gap-2 px-6 py-4 font-inter font-normal text-[14px] leading-[20px] tracking-[0.0025em] text-(--text-error) h-auto hover:bg-transparent hover:text-(--text-error)">
                            Logout
                            <LogOut className="h-4 w-4" />
                        </Button>
                    </div>
                )}
            </div>
        </header>
    );
}
