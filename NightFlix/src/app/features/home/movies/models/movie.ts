export interface Movie {
    title: string;
    image: string;
    categories: string[];
    staring: string[];
    link: string;
}

export interface MovieGroup {
    date: string;
    list: Movie[];
}

export interface MoviesData {
    movies: MovieGroup[];
}