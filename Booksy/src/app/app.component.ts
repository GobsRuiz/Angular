import { Component } from '@angular/core';
import { ListBooksComponent } from "./components/list-books/list-books.component";

@Component({
  selector: 'app-root',
  imports: [
    ListBooksComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Booksy';
}
