export interface Feature {
    title: string;
    description: string;
    image: string;
}

export interface Performer {
    title: string;
    description: string;
    image: string;
}

export const FEATURES_DATA: Feature[] = [
    {
        title: "Inclusive events in seconds!",
        description:
            "Discover hidden gems, unique experiences, and trending events tailored to your interests with just a click.",
        image: "event-1.png",
    },
    {
        title: "Plan your day in minutes",
        description:
            "Get customized itineraries, real-time updates, and explore stress-free!",
        image: "event-2.png",
    },
    {
        title: "Beyond travel!",
        description:
            "Enjoy special discounts, deals and explore with like-minded people!",
        image: "event-3.png",
    },
];

export const PERFORMERS_DATA: Performer[] = [
    {
        title: "Dancers",
        description: "Enchant your audience with your energizing moves",
        image: "per-1.png",
    },
    {
        title: "Singers!",
        description: "Captivate the crowd and let your voice be heard.",
        image: "per-2.png",
    },
    {
        title: "Artists",
        description: "Showcase your creativity and connect with your audience",
        image: "per-3.png",
    },
];
