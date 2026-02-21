export interface EventData {
    title: string;
    price: string;
    category: string;
    image: string;
    id: string;
    tag?: string;
    chiefGuest?: string;
    sponsors?: string;
    eventTime?: string;
    highlights?: string[];
}

export const HANDPICKED_DATA: EventData[] = [
    { id: "voice-notes-tour", title: "Voice Notes Tour", price: "₹ 999", category: "Concert", image: "/events/i.svg" },
    { id: "art-workshop", title: "Art Workshop", price: "₹ 499", category: "Workshop", image: "/events/k.svg" },
    { id: "beach-yoga", title: "Beach Yoga", price: "₹ 299", category: "Fitness", image: "/events/v.svg" },
    { id: "city-tour", title: "City Tour", price: "₹ 999", category: "Explore", image: "/events/v.svg" },
];

export const NEXT_UP_DATA: EventData[] = [
    { id: "jazz-night", title: "Jazz Night", price: "₹ 1200", category: "Music", image: "/events/i.svg" },
    { id: "pottery-class", title: "Pottery Class", price: "₹ 800", category: "Hobby", image: "/events/i.svg" },
    { id: "tech-talk", title: "Tech Talk", price: "Free", category: "Meetup", image: "/events/i.svg" },
    { id: "startup-mixer", title: "Startup Mixer", price: "Free", category: "Business", image: "/events/v.svg" },
];

export const INTEREST_DATA: EventData[] = [
    { id: "cooking-masterclass", title: "Cooking Masterclass", price: "₹ 1500", category: "Food", image: "/events/i.svg" },
    { id: "photography-walk", title: "Photography Walk", price: "Free", category: "Hobby", image: "/events/i.svg" },
    { id: "wine-tasting", title: "Wine Tasting", price: "₹ 2500", category: "Social", image: "/events/i.svg" },
    { id: "paint-sip", title: "Paint & Sip", price: "₹ 1500", category: "Art", image: "/events/v.svg" },
];

export const SOLO_DATA: EventData[] = [
    { id: "standup-special", title: "Standup Special", price: "₹ 600", category: "Comedy", image: "/events/k.svg" },
    { id: "acoustic-solo", title: "Acoustic Solo", price: "₹ 400", category: "Music", image: "/events/i.svg" },
    { id: "poetry-slam", title: "Poetry Slam", price: "₹ 200", category: "Literary", image: "/events/v.svg" },
    { id: "open-mic", title: "Open Mic", price: "Free", category: "Performance", image: "/events/v.svg" },
];

export const SOLOPRENEUR_DATA: EventData[] = [
    { id: "seo-strategy", title: "SEO Strategy", price: "₹ 2000", category: "Marketing", image: "/events/i.svg" },
    { id: "freelance-tax-101", title: "Freelance Tax 101", price: "₹ 500", category: "Finance", image: "/events/s.svg" },
    { id: "networking-mixer", title: "Networking Mixer", price: "₹ 300", category: "Business", image: "/events/v.svg" },
    { id: "client-acquisition", title: "Client Acquisition", price: "₹ 1200", category: "Strategy", image: "/events/v.svg" },
];

export const getAllEvents = (): EventData[] => {
    return [
        ...HANDPICKED_DATA,
        ...NEXT_UP_DATA,
        ...INTEREST_DATA,
        ...SOLO_DATA,
        ...SOLOPRENEUR_DATA,
    ];
};
