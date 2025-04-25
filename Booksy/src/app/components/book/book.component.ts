import { Component, input } from '@angular/core';
import { Book } from '../../models/books';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})

export class BookComponent {
  book = input.required<Book>();
}
