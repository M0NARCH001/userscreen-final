"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useAuth } from "@/context/auth-context"

import { useRouter } from "next/navigation"
import {
    type PreferenceCategory,
    type Preferences,
    PREFERENCE_CARDS,
    PREFERENCE_OPTIONS,
    TAB_TITLES,
    CATEGORY_ORDER,
    MIN_REQUIRED,
} from "@/lib/preferences-data"

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

    const preferenceCards = PREFERENCE_CARDS

    const preferenceOptions = PREFERENCE_OPTIONS

    const tabTitles = TAB_TITLES

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
    const categoryOrder = CATEGORY_ORDER;

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
                        className="cursor-pointer rounded-2xl md:rounded-[28px] border border-(--gray-200) bg-(--white) p-6 md:p-12 shadow-sm hover:border-(--gray-300) transition"
                    >
                        <div className="flex flex-col items-center">
                            <div className="mb-6 md:mb-10 w-full h-[120px] sm:h-[180px] md:h-[220px] relative">
                                <div className="w-full h-full bg-(--gray-100) rounded-xl"></div>
                            </div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-center text-(--gray-900)">
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
                        className="cursor-pointer rounded-2xl md:rounded-[28px] border border-(--gray-200) bg-(--white) p-4 md:p-8 shadow-sm hover:border-(--gray-300) transition"
                    >
                        <div className="flex flex-col items-center">
                            <div className="mb-4 md:mb-6 w-full h-[90px] sm:h-[120px] md:h-[180px] relative">
                                <div className="w-full h-full bg-(--gray-100) rounded-xl"></div>
                            </div>
                            <h2 className="text-base sm:text-lg md:text-xl font-medium text-center text-(--gray-900)">
                                {card.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-(--black)/10 backdrop-blur-[2px] flex items-center justify-center z-50 p-2 sm:p-4">
                    <div className="bg-(--pref-bg) w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[1100px] h-[90vh] max-h-[700px] rounded-2xl md:rounded-[32px] shadow-2xl flex flex-col overflow-hidden">

                        {/* TABS */}
                        <div className="px-2 sm:px-6 md:px-12 pt-6 md:pt-10 flex flex-wrap gap-2 justify-between">
                            {(Object.keys(tabTitles) as PreferenceCategory[]).map((category) => (
                                <Button
                                    key={category}
                                    variant="ghost"
                                    onClick={() => setActiveTab(category)}
                                    className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-[13px] font-bold flex-1 min-w-[120px] max-w-[180px] h-auto ${activeTab === category
                                        ? "bg-(--pref-dark) text-(--white) shadow-lg hover:bg-(--pref-dark)/90 hover:text-(--white)"
                                        : "text-(--pref-tag) hover:text-(--pref-dark) hover:bg-transparent"
                                        }`}
                                >
                                    {tabTitles[category]}
                                </Button>
                            ))}
                        </div>

                        {/* OPTIONS */}
                        <div className="flex-1 px-2 sm:px-6 md:px-12 py-4 md:py-10 overflow-y-auto">
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {preferenceOptions[activeTab].map((option) => {
                                    const selected = preferences[activeTab].includes(option)
                                    return (
                                        <Button
                                            key={option}
                                            variant="outline"
                                            onClick={() => togglePreference(activeTab, option)}
                                            className={`flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-lg md:rounded-xl text-xs sm:text-sm md:text-[15px] font-medium h-auto border-0 ${selected
                                                ? "bg-(--pref-active) text-(--white) hover:bg-(--pref-active)/90 hover:text-(--white)"
                                                : "bg-(--slate-200) text-(--pref-muted-text) hover:bg-(--slate-200)/80"
                                                }`}
                                        >
                                            {option}
                                            <X className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${selected ? "opacity-100" : "opacity-0"}`} />
                                        </Button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* FOOTER */}
                        <div className="px-2 sm:px-6 md:px-12 pb-6 md:pb-10 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="text-xs text-(--pref-muted-text)">
                                Minimum required: {MIN_REQUIRED} per section
                            </div>

                            <div className="flex gap-2 sm:gap-4 w-full sm:w-auto">
                                <Button
                                    onClick={() => setIsModalOpen(false)}
                                    variant="outline"
                                    className="flex-1 sm:flex-none px-6 sm:px-10 py-2.5 sm:py-3.5 rounded-full border-2 border-(--pref-border) text-(--pref-muted-text) font-bold h-auto hover:bg-transparent"
                                >
                                    Back
                                </Button>

                                <Button
                                    onClick={handleSave}
                                    className={`flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-4 rounded-xl md:rounded-2xl font-bold bg-(--blue-600) text-(--white) hover:bg-(--blue-700) h-auto`}
                                >
                                    {activeTab === "logistics" && isReadyToSave ? "Finish" : "Save & Continue"}
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </main>
    )
}
