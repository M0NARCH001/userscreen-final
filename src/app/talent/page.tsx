import SiteHeader from "@/components/common/site-header"
import Footer from "@/components/about/footer"
import { TalentInformationForm } from "@/components/talent/talent-information-form"

export default function TalentPage() {
    return (
        <main className="min-h-screen bg-(--gray-50)">
            <SiteHeader darkText={true} />

            <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-(--brand-blue) mb-4">Talent Information</h1>
                    <p className="text-(--gray-600) max-w-2xl">
                        Join our community of talented individuals. Tell us about your skills and experience to get started.
                    </p>
                </div>

                <div className="bg-(--white) p-8 rounded-2xl shadow-sm border border-(--gray-100)">
                    <TalentInformationForm />
                </div>
            </div>

            <Footer />
        </main>
    )
}
