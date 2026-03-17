import SiteHeader from "@/components/common/site-header"
import Footer from "@/components/about/footer"
import { TalentInformationForm } from "@/components/talent/talent-information-form"

export default function TalentPage() {
  return (
    <main className="min-h-screen bg-[var(--talent-page-bg)]">
      <SiteHeader darkText={true} />

      <div className="px-4 pb-0 pt-14 sm:px-6 sm:pt-16 lg:px-10 lg:pt-18">
        <div className="mx-auto max-w-[110rem]">
          <TalentInformationForm />
        </div>
      </div>

      <Footer />
    </main>
  )
}
