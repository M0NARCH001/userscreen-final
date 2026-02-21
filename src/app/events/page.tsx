import { EventsHero } from "@/components/events/hero"
import { EventList } from "@/components/events/event-list"
import SuggestionsForm from "@/components/landing/suggestions-form"
import SiteHeader from "@/components/common/site-header"
import Footer from "@/components/about/footer"

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-(--white)">
            <SiteHeader darkText={true} />
            <div className="pt-16">
                <EventsHero />
                <EventList />
                <SuggestionsForm />
            </div>
            <Footer />
        </main>
    )
}
