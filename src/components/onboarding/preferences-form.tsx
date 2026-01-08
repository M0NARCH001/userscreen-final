"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useAuth } from "@/context/auth-context"

import { useRouter } from "next/navigation"

type PreferenceCategory = "travel" | "interests" | "food" | "emotional" | "logistics"

interface Preferences {
    travel: string[]
    interests: string[]
    food: string[]
    emotional: string[]
    logistics: string[]
}

const MIN_REQUIRED = 5

interface PreferencesFormProps {
    onComplete: () => void;
}

export default function PreferencesForm({ onComplete }: PreferencesFormProps) {
    const { userPreferences, updateUserPreferences } = useAuth();
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [activeTab, setActiveTab] = useState<PreferenceCategory>("travel")
    const [preferences, setPreferences] = useState<Preferences>({
        travel: userPreferences?.travel || [],
        interests: userPreferences?.interests || [],
        food: userPreferences?.food || [],
        emotional: userPreferences?.emotional || [],
        logistics: userPreferences?.logistics || [],
    })

    // Using placeholders as the specific images /1.png etc. are not available
    const preferenceCards = [
        { title: "Travel & Local Exploration Style", image: "/placeholder.svg", category: "travel" as PreferenceCategory },
        { title: "Interests, Hobbies & Activities", image: "/placeholder.svg", category: "interests" as PreferenceCategory },
        { title: "Food & Dining Preferences", image: "/placeholder.svg", category: "food" as PreferenceCategory },
        { title: "Emotional Intent & Personality", image: "/placeholder.svg", category: "emotional" as PreferenceCategory },
        { title: "Logistics & Discovery Style", image: "/placeholder.svg", category: "logistics" as PreferenceCategory },
    ]

    const preferenceOptions = {
        travel: ["Explorer", "Relaxer", "Spontaneous planner", "Bucket-lister", "City hopper", "Nature seeker", "Weekend cafe finder", "Historical wanderer", "Spiritual tripper", "Group adventure seeker", "Sea food", "Veg"],
        interests: ["Hiking", "Photography", "Museums", "Nightlife", "Street performances", "Flea markets", "Reading", "Cooking", "Thrifting", "Attending concerts", "Wildlife parks", "Yoga or wellness"],
        food: ["Street food", "Fancy dining", "Cafes", "South Indian", "Mediterranean", "Vegan-friendly", "Desserts", "No raw food", "Alcohol-friendly", "Coffee addict", "Tea enthusiast", "Food markets", "Cooking classes"],
        emotional: ["Escape routine", "Recharge solo", "Celebrate love", "Learn something new", "Find hidden gems", "Romantic vibes", "Heal & reflection", "Meet new people", "Surprise me trips", "Go with the flow", "Deep cultural curiosity", "Calm and quiet spaces"],
        logistics: ["Public transport pro", "Walkable places only", "Cab everywhere", "Plan through Instagram", "Love mystery plans", "Tech-savvy", "Needs Wi-Fi", "Avoids rainy days", "Last-minute planner", "Pet-friendly spaces", "Gourmet", "High protein", "Mocktail", "Indian", "Fried", "Desserts", "Budget-focused", "Group tours welcome", "Offline map preferred"],
    }

    const tabTitles: Record<PreferenceCategory, string> = {
        travel: "Travel & Local Exploration Style",
        interests: "Interests, Hobbies & Activities",
        food: "Food & Dining Preferences",
        emotional: "Emotional Intent & Personality",
        logistics: "Logistics & Discovery Style",
    }

    const handleCardClick = (category: PreferenceCategory) => {
        setActiveTab(category)
        setIsModalOpen(true)
    }

    const togglePreference = (category: PreferenceCategory, option: string) => {
        setPreferences((prev) => {
            const current = prev[category]
            return {
                ...prev,
                [category]: current.includes(option)
                    ? current.filter((i) => i !== option)
                    : [...current, option],
            }
        })
    }


    // Helper to get the order of categories
    const categoryOrder: PreferenceCategory[] = [
        "travel",
        "interests",
        "food",
        "emotional",
        "logistics",
    ];

    // Check if all categories are complete
    const isReadyToSave = Object.values(preferences).every(
        (arr) => arr.length >= MIN_REQUIRED
    );

    // Check if current category is complete
    const isCurrentCategoryComplete = preferences[activeTab].length >= MIN_REQUIRED;

    const handleSave = () => {
        if (!isCurrentCategoryComplete) {
            alert(`Please select at least ${MIN_REQUIRED} options in this category.`);
            return;
        }

        // Find the next incomplete category
        const currentIdx = categoryOrder.indexOf(activeTab);
        let nextIdx = currentIdx + 1;
        while (nextIdx < categoryOrder.length && preferences[categoryOrder[nextIdx]].length >= MIN_REQUIRED) {
            nextIdx++;
        }

        if (nextIdx < categoryOrder.length) {
            // Move to next incomplete category
            setActiveTab(categoryOrder[nextIdx]);
        } else {
            // All categories complete
            updateUserPreferences(preferences);
            setIsModalOpen(false);
            onComplete();
        }
    }

    return (

        <main className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 py-8 md:py-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center md:text-left">My Preferences</h1>

            {/* ROW 1 – TWO LARGE CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-10">
                {preferenceCards.slice(0, 2).map((card, index) => (
                    <div
                        key={index}
                        onClick={() => handleCardClick(card.category)}
                        className="cursor-pointer rounded-2xl md:rounded-[28px] border border-gray-200 bg-white p-6 md:p-12 shadow-sm hover:border-gray-300 transition"
                    >
                        <div className="flex flex-col items-center">
                            <div className="mb-6 md:mb-10 w-full h-[120px] sm:h-[180px] md:h-[220px] relative">
                                <div className="w-full h-full bg-gray-100 rounded-xl"></div>
                            </div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-center text-gray-900">
                                {card.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* ROW 2 – THREE SMALL CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {preferenceCards.slice(2).map((card, index) => (
                    <div
                        key={index}
                        onClick={() => handleCardClick(card.category)}
                        className="cursor-pointer rounded-2xl md:rounded-[28px] border border-gray-200 bg-white p-4 md:p-8 shadow-sm hover:border-gray-300 transition"
                    >
                        <div className="flex flex-col items-center">
                            <div className="mb-4 md:mb-6 w-full h-[90px] sm:h-[120px] md:h-[180px] relative">
                                <div className="w-full h-full bg-gray-100 rounded-xl"></div>
                            </div>
                            <h2 className="text-base sm:text-lg md:text-xl font-medium text-center text-gray-900">
                                {card.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/10 backdrop-blur-[2px] flex items-center justify-center z-50 p-2 sm:p-4">
                    <div className="bg-[#f3f5f7] w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[1100px] h-[90vh] max-h-[700px] rounded-2xl md:rounded-[32px] shadow-2xl flex flex-col overflow-hidden">

                        {/* TABS */}
                        <div className="px-2 sm:px-6 md:px-12 pt-6 md:pt-10 flex flex-wrap gap-2 justify-between">
                            {(Object.keys(tabTitles) as PreferenceCategory[]).map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveTab(category)}
                                    className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-[13px] font-bold flex-1 min-w-[120px] max-w-[180px] ${activeTab === category
                                        ? "bg-[#0b1729] text-white shadow-lg"
                                        : "text-[#64748b] hover:text-[#0b1729]"
                                        }`}
                                >
                                    {tabTitles[category]}
                                </button>
                            ))}
                        </div>

                        {/* OPTIONS */}
                        <div className="flex-1 px-2 sm:px-6 md:px-12 py-4 md:py-10 overflow-y-auto">
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {preferenceOptions[activeTab].map((option) => {
                                    const selected = preferences[activeTab].includes(option)
                                    return (
                                        <button
                                            key={option}
                                            onClick={() => togglePreference(activeTab, option)}
                                            className={`flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-lg md:rounded-xl text-xs sm:text-sm md:text-[15px] font-medium ${selected
                                                ? "bg-[#4a6b9d] text-white"
                                                : "bg-[#e2e8f0] text-[#475569]"
                                                }`}
                                        >
                                            {option}
                                            <X className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${selected ? "opacity-100" : "opacity-0"}`} />
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* FOOTER */}
                        <div className="px-2 sm:px-6 md:px-12 pb-6 md:pb-10 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="text-xs text-[#475569]">
                                Minimum required: {MIN_REQUIRED} per section
                            </div>

                            <div className="flex gap-2 sm:gap-4 w-full sm:w-auto">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 sm:flex-none px-6 sm:px-10 py-2.5 sm:py-3.5 rounded-full border-2 border-[#cbd5e1] text-[#475569] font-bold"
                                >
                                    Back
                                </button>

                                <button
                                    onClick={handleSave}
                                    className={`flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-4 rounded-xl md:rounded-2xl font-bold bg-blue-600 text-white hover:bg-blue-700`}
                                >
                                    {activeTab === "logistics" && isReadyToSave ? "Finish" : "Save & Continue"}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </main>
    )
}
