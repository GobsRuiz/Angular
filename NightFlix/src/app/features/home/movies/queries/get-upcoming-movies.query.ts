import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesData } from '../models/movie';

@Injectable({
  providedIn: 'root'
})

export class GetUpcomingMoviesQuery {
  private apiUrl = environment.apiUrl + '/upcoming-movies';
  private headers = new HttpHeaders(environment.apiHeaders);

  constructor(private http: HttpClient) { }

  getUpcomingMovies(): Observable<MoviesData> {
    return this.http.get<MoviesData>(this.apiUrl, { headers: this.headers });
  }
}