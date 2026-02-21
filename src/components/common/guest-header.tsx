"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";

interface GuestHeaderProps {
    darkText?: boolean;
}

export default function GuestHeader({ darkText = false }: GuestHeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { login } = useAuth();

    // Helper to determine text color class
    const textColorClass = darkText ? "text-(--gray-900) hover:text-(--gray-700)" : "text-(--white) hover:text-(--white)/80";
    const buttonSignInClass = darkText
        ? "bg-(--gray-100) text-(--gray-900) hover:bg-(--gray-200)"
        : "bg-(--white)/20 text-(--white) hover:bg-(--white)/30";

    return (
        <header className="absolute top-0 left-0 right-0 z-50">
            {/* FULL WIDTH WRAPPER */}
            <div className="px-2 pt-2">
                {/* HEADER FRAME */}
                <div className="w-full relative flex items-center justify-between rounded-[12px] px-3 py-1">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/frame-1.svg"
                            alt="Baatasari Logo"
                            width={216}
                            height={216}
                            className="object-contain w-44 md:w-auto h-auto"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-10 ${darkText ? 'text-(--gray-900)' : 'text-white'}`}>
                        <Link
                            href="/"
                            className={`font-poppins text-[18px] leading-[24px] font-medium transition ${textColorClass}`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`font-poppins text-[18px] leading-[24px] font-medium transition ${textColorClass}`}
                        >
                            About us
                        </Link>
                        <Link
                            href="/events"
                            className={`font-poppins text-[18px] leading-[24px] font-medium transition ${textColorClass}`}
                        >
                            Events
                        </Link>
                        <Link
                            href="/talent"
                            className={`font-poppins text-[18px] leading-[24px] font-medium transition ${textColorClass}`}
                        >
                            Talent
                        </Link>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button
                            onClick={login}
                            className={`h-[40px] px-6 rounded-full transition font-poppins text-[18px] leading-[24px] font-medium ${buttonSignInClass}`}
                        >
                            Sign in
                        </Button>
                        <Button
                            onClick={login}
                            className="h-[40px] px-6 rounded-full bg-(--brand-navy)/90 text-(--white) hover:bg-(--brand-navy) transition font-poppins text-[18px] leading-[24px] font-medium"
                        >
                            Sign up
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <Button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        variant="ghost"
                        className={`md:hidden p-2 text-3xl h-auto ${darkText ? 'text-(--gray-900)' : 'text-white'}`}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? "✕" : "☰"}
                    </Button>
                </div>

                {/* MOBILE MENU */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 rounded-[16px] bg-(--white) shadow-xl overflow-hidden">
                        <Link
                            href="/"
                            className="block px-6 py-4 text-(--gray-900) font-poppins text-[18px] leading-[24px] font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
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
                            <Button
                                onClick={login}
                                className="w-full h-[44px] rounded-full bg-(--gray-100) text-(--gray-900) font-poppins text-[18px] leading-[24px] font-medium hover:bg-(--gray-200)"
                            >
                                Sign in
                            </Button>
                            <Button
                                onClick={login}
                                className="w-full h-[44px] rounded-full bg-(--brand-navy) text-(--white) font-poppins text-[18px] leading-[24px] font-medium hover:bg-(--brand-navy)/90"
                            >
                                Sign up
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
