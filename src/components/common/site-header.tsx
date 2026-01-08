"use client";

import { useAuth } from "@/context/auth-context";
import GuestHeader from "@/components/common/guest-header";
import UserHeader from "@/components/common/user-header";

interface SiteHeaderProps {
    darkText?: boolean;
}

export default function SiteHeader({ darkText = false }: SiteHeaderProps) {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        // UserHeader normally has its own styling, but we might want to pass 
        // configuration if needed. For now assuming UserHeader handles its own 'dark/light' 
        // or is always one style (it looked transparent in the provided code).
        // The provided UserHeader code expects to be absolute.
        return <UserHeader />;
    }

    return <GuestHeader darkText={darkText} />;
}
