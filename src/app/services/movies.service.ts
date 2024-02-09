import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MovieResponse } from '../shared/types/movie'
import { map } from 'rxjs'

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://api.themoviedb.org/3'
  private apiKey = 'ed1c2f9f17ef7e702b4a97422c78ca9d'

  getMoviesByType(type: string) {
    return this.http
      .get<MovieResponse>(`${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results))
  }
}
