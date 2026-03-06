export interface ComboboxItem {
    value: string;
    label: string;
}

export const LOCATIONS: ComboboxItem[] = [
    { value: "visakhapatnam", label: "Visakhapatnam" },
    { value: "hyderabad", label: "Hyderabad" },
    { value: "bangalore", label: "Bangalore" },
    { value: "vijayawada", label: "Vijayawada" },
];

export const CATEGORIES: ComboboxItem[] = [
    { value: "events", label: "Events" },
    { value: "food", label: "Food" },
    { value: "movies", label: "Movies" },
    { value: "comedy", label: "Comedy" },
    { value: "sports", label: "Sports" },
];

export const MONTHS: ComboboxItem[] = [
    { value: "january", label: "January" },
    { value: "february", label: "February" },
    { value: "march", label: "March" },
    { value: "april", label: "April" },
    { value: "may", label: "May" },
    { value: "june", label: "June" },
    { value: "july", label: "July" },
    { value: "august", label: "August" },
    { value: "september", label: "September" },
    { value: "october", label: "October" },
    { value: "november", label: "November" },
    { value: "december", label: "December" },
];

export interface SuggestedEvent {
    id: string;
    name: string;
    location: string;
    category: string;
    month: string;
    description: string;
    upvotes: number;
    hasUpvoted: boolean;
}

export const SUGGESTED_EVENTS: SuggestedEvent[] = [
    {
        id: "sugg-1",
        name: "Retro Gaming Night",
        location: "Kondapur",
        category: "Entertainment",
        month: "April",
        description: "A night filled with classic arcade games, retro consoles, snacks, and good vibes. Let's bring the 90s back!",
        upvotes: 245,
        hasUpvoted: false,
    },
    {
        id: "sugg-2",
        name: "Beachside acoustic jam",
        location: "RK Beach",
        category: "Music",
        month: "May",
        description: "Looking for local artists to just bring their guitars and jam by the beach during sunset. Open mic style.",
        upvotes: 182,
        hasUpvoted: true,
    },
    {
        id: "sugg-3",
        name: "Vegan Food Fest",
        location: "Jubilee Hills",
        category: "Food",
        month: "July",
        description: "A dedicated food festival for vegan and plant-based stalls to showcase their best dishes. I know many who'd love this!",
        upvotes: 310,
        hasUpvoted: false,
    },
    {
        id: "sugg-4",
        name: "Street Photography Walk",
        location: "Old City",
        category: "Arts",
        month: "June",
        description: "A guided early morning walk capturing the essence of the city. We could get a professional to give tips.",
        upvotes: 114,
        hasUpvoted: false,
    },
    {
        id: "sugg-5",
        name: "Board Game Cafe Pop-up",
        location: "Gachibowli",
        category: "Social",
        month: "August",
        description: "A weekend pop-up event where people can come, rent games, and play with friends or make new ones over coffee.",
        upvotes: 89,
        hasUpvoted: false,
    },
    {
        id: "sugg-6",
        name: "Local Stand-up Showcase",
        location: "Madhapur",
        category: "Comedy",
        month: "May",
        description: "Give a platform to new and upcoming local comics. We need more regular comedy events that are affordable.",
        upvotes: 420,
        hasUpvoted: true,
    }
];
