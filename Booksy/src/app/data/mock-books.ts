import { Book } from "../models/books"
import { Genre } from "../models/genre"


export const genres: Genre[] = [
    {
        id: 1,
        name: 'Romance',
    },
    {
        id: 2,
        name: 'Mistério',
    },
    {
        id: 3,
        name: 'Fantasia',
    },
    {
        id: 4,
        name: 'Ficção Científica',
    },
    {
        id: 5,
        name: 'Técnicos',
    },
]

export const books: Book[] = [
    {
        title: 'As ondas',
        author: 'Virgina Wolf',
        genre: genres[0],
        favorite: false,
        image: 'https://m.media-amazon.com/images/I/71lZu1HEl1L._AC_UF1000,1000_QL80_.jpg',
    },
    {
        title: 'Ecos',
        author: 'Pam Muñoz',
        genre: genres[2],
        favorite: false,
        image: 'https://m.media-amazon.com/images/I/71lZu1HEl1L._AC_UF1000,1000_QL80_.jpg',
    },
    {
        title: 'O mágico de Oz',
        author: 'L. Frank Baum',
        genre: genres[2],
        favorite: false,
        image: 'https://m.media-amazon.com/images/I/71lZu1HEl1L._AC_UF1000,1000_QL80_.jpg',
    },
    {
        title: 'O deserto dos tártaros',
        author: 'Dino Buzzati',
        genre: genres[0],
        favorite: false,
        image: 'https://m.media-amazon.com/images/I/71lZu1HEl1L._AC_UF1000,1000_QL80_.jpg',
    },
    {
        title: 'Recursão',
        author: 'Blake Crouch',
        genre: genres[3],
        favorite: false,
        image: 'https://m.media-amazon.com/images/I/71lZu1HEl1L._AC_UF1000,1000_QL80_.jpg',
    },
    {
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        genre: genres[3],
        favorite: false,
        image: 'https://m.media-amazon.com/images/I/71lZu1HEl1L._AC_UF1000,1000_QL80_.jpg',
    },
    {
        title: 'Moby Dick',
        author: 'Herman Melville',
        genre: genres[0],
        favorite: false,
        image: 'https://m.media-amazon.com/images/I/71lZu1HEl1L._AC_UF1000,1000_QL80_.jpg',
    },
    {
        title: 'Estruturas de dados',
        author: 'Loiane Groner',
        genre: genres[4],
        favorite: false,
        image: 'https://m.media-amazon.com/images/I/71lZu1HEl1L._AC_UF1000,1000_QL80_.jpg',
    },
]