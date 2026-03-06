import { SuggestedEventCard } from "@/components/events/suggested-event-card";
import { SUGGESTED_EVENTS } from "@/lib/suggestions-data";

export function SuggestedEventsSection() {
    return (
        <section className="py-16 md:py-24 bg-(--white)">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="font-bricolage font-bold text-3xl md:text-[48px] leading-tight tracking-[-0.02em] text-(--brand-navy) mb-4">
                        Community Ideas
                    </h2>
                    <p className="font-albert font-normal text-lg text-muted-foreground max-w-2xl mx-auto">
                        Check out what others in your city want to see. Upvote the ideas you love, and organizers might just make them happen!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SUGGESTED_EVENTS.map((event) => (
                        <SuggestedEventCard key={event.id} {...event} />
                    ))}
                </div>
            </div>
        </section>
    );
}
