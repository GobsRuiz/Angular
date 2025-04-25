import { Genre } from "./genre";

export interface Book {
    title: string,
    author: string,
    favorite: boolean,
    genre: Genre,
    image: string,
}