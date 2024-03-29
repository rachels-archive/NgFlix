import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { TvshowResponse } from '../shared/types/tv-show'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class TvShowService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://api.themoviedb.org/3'
  private apiKey = ''

  getTvShowsByType(type: string, count: number = 20) {
    return this.http
      .get<TvshowResponse>(`${this.apiUrl}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)))
  }
}
