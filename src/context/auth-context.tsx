"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface UserProfile {
    fullName: string;
    mobileNumber: string;
    emailId: string;
    dateOfBirth: string;
    gender: string;
    relationshipStatus: string;
    location: string;
    profession: string;
}

interface UserPreferences {
    travel: string[];
    interests: string[];
    food: string[];
    emotional: string[];
    logistics: string[];
}

interface AuthContextType {
    isAuthenticated: boolean;
    userProfile: UserProfile;
    userPreferences: UserPreferences;
    login: () => void;
    logout: () => void;
    updateUserProfile: (data: UserProfile) => void;
    updateUserPreferences: (data: UserPreferences) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    // Empty initial state - users fill in their own data during onboarding
    const [userProfile, setUserProfile] = useState<UserProfile>({
        fullName: "",
        mobileNumber: "",
        emailId: "",
        dateOfBirth: "",
        gender: "",
        relationshipStatus: "",
        location: "",
        profession: ""
    });

    const [userPreferences, setUserPreferences] = useState<UserPreferences>({
        travel: [],
        interests: [],
        food: [],
        emotional: [],
        logistics: []
    });

    // Load from localStorage on mount
    useEffect(() => {
        const savedProfile = localStorage.getItem("baatasari_userProfile");
        const savedPreferences = localStorage.getItem("baatasari_userPreferences");

        if (savedProfile) {
            try {
                setUserProfile(JSON.parse(savedProfile));
            } catch (e) {
                console.error("Failed to parse user profile", e);
            }
        }

        if (savedPreferences) {
            try {
                setUserPreferences(JSON.parse(savedPreferences));
            } catch (e) {
                console.error("Failed to parse user preferences", e);
            }
        }
    }, []);

    // Save to localStorage on change
    useEffect(() => {
        localStorage.setItem("baatasari_userProfile", JSON.stringify(userProfile));
    }, [userProfile]);

    useEffect(() => {
        localStorage.setItem("baatasari_userPreferences", JSON.stringify(userPreferences));
    }, [userPreferences]);

    const login = () => {
        setIsAuthenticated(true);
        router.push("/onboarding");
    };
    const logout = () => {
        console.log("Logout triggered");
        setIsAuthenticated(false);
    };

    const updateUserProfile = (data: UserProfile) => {
        setUserProfile(data);
    };

    const updateUserPreferences = (data: UserPreferences) => {
        setUserPreferences(data);
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            userProfile,
            userPreferences,
            login,
            logout,
            updateUserProfile,
            updateUserPreferences
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
