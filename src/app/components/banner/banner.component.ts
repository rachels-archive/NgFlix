import { Component } from '@angular/core'
import { MoviesService } from '../../services/movies.service'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  constructor(private moviesService: MoviesService) {}

  items = Array<number>(6).fill(0)

  movies$ = this.moviesService.getPopularMovies()
}
