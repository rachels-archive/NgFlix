import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/popular?api_key=ed1c2f9f17ef7e702b4a97422c78ca9d'
    )
  }
}
