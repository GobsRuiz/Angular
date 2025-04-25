import { Component, OnInit } from '@angular/core';
import { genres, books } from '../../data/mock-books';
import { Genre } from '../../models/genre';
import { Book } from '../../models/books';
import { LiteraryGenreComponent } from "../literary-genre/literary-genre.component";

interface GenreWithBooks {
  genre: Genre;
  books: Book[];
}

@Component({
  selector: 'app-list-books',
  imports: [
    LiteraryGenreComponent
  ],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.scss'
})

export class ListBooksComponent implements OnInit {
  genreWithBooks: GenreWithBooks[] = []

  ngOnInit(): void {
    this.genreWithBooks = genres.map(genre => ({
      genre,
      books: books.filter(book => book.genre.id === genre.id)
    }))
  }
}
