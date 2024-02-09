import { Component } from '@angular/core'
import { MoviesService } from '../../services/movies.service'
import { TvShowService } from '../../services/tv-shows.service'
import { mapToMovies } from '../../shared/types/tv-show'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private moviesService: MoviesService,
    private tvShowsService: TvShowService
  ) {}

  upcomingMovies$ = this.moviesService.getMoviesByType('upcoming', 12)

  topRatedMovies$ = this.moviesService.getMoviesByType('top_rated', 12)

  popularTvShows$ = this.tvShowsService
    .getTvShowsByType('popular', 12)
    .pipe(map(mapToMovies))
}
