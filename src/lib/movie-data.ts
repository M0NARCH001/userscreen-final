export interface MovieData {
    title: string;
    rating: string;
    language: string;
    image: string;
}

export const MOVIES_DATA: MovieData[] = [
    { title: "Dhurandhar", rating: "A", language: "Hindi", image: "action+movie+poster" },
    { title: "Kis Kisko Pyaar Karoon 2", rating: "UA16+", language: "Hindi", image: "comedy+movie+poster" },
    { title: "Tere Ishk Mein", rating: "UA16+", language: "Hindi", image: "romance+movie+poster" },
    { title: "Sholay: The Final Cut (1975)", rating: "UA", language: "Hindi", image: "classic+bollywood+poster" },
];
