import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MovieResponse } from '../shared/types/movie'
import { map } from 'rxjs'

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://api.themoviedb.org/3'
  private apiKey = ''

  getMoviesByType(type: string, count: number = 20) {
    return this.http
      .get<MovieResponse>(`${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)))
  }
}
