import { Component, OnInit } from '@angular/core';
import { GetUpcomingMoviesQuery } from './queries/get-upcoming-movies.query';
import { MovieGroup, MoviesData } from './models/movie';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  movies: MovieGroup[] = [];

  constructor(private getUpcomingMoviesQuery: GetUpcomingMoviesQuery) { }

  ngOnInit(): void {
    this.getUpcomingMoviesQuery.getUpcomingMovies().subscribe({
      next: (data: MoviesData) => {
        this.movies = data.movies;
        console.log(this.movies);
      },
      error: (err) => {
        console.error('Error fetching movies:', err);
      }
    });
  }
}
