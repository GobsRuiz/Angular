import { Component, input } from '@angular/core';
import { BookComponent } from "../book/book.component";
import { Genre } from '../../models/genre';
import { Book } from '../../models/books';

@Component({
  selector: 'app-literary-genre',
  imports: [
    BookComponent
  ],
  templateUrl: './literary-genre.component.html',
  styleUrl: './literary-genre.component.scss'
})

export class LiteraryGenreComponent {
  genre = input.required<Genre>();
  books = input.required<Book[]>();
}
