import { Component, Input } from '@angular/core'
import { MoviesService } from '../../services/movies.service'
import { Movie } from '../../shared/types/movie'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  constructor(private moviesService: MoviesService) {}

  @Input() title!: string
  @Input() movies!: Movie[]
}
