import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MovieResponse } from '../shared/types/movie'

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://api.themoviedb.org/3'
  private apiKey = 'ed1c2f9f17ef7e702b4a97422c78ca9d'

  getPopularMovies() {
    return this.http.get<MovieResponse>(
      `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`
    )
  }
}
