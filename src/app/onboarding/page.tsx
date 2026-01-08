"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PersonalDetailsForm from "@/components/onboarding/personal-details-form";
import PreferencesForm from "@/components/onboarding/preferences-form";
import SiteHeader from "@/components/common/site-header";
import Footer from "@/components/about/footer";

export default function OnboardingPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialStep = searchParams.get("step") === "preferences" ? "preferences" : "details";
    const [step, setStep] = useState<"details" | "preferences">(initialStep);

    useEffect(() => {
        const stepParam = searchParams.get("step");
        if (stepParam === "preferences") setStep("preferences");
        else setStep("details");
    }, [searchParams]);

    const handleDetailsContinue = () => {
        setStep("preferences");
    };

    const handlePreferencesComplete = () => {
        router.push("/about");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <SiteHeader darkText={true} />

            <div className="flex-1 pt-24 pb-12">
                {step === "details" && (
                    <PersonalDetailsForm onContinue={handleDetailsContinue} />
                )}
                {step === "preferences" && (
                    <PreferencesForm onComplete={handlePreferencesComplete} />
                )}
            </div>
            <Footer />
        </div>
    );
}
