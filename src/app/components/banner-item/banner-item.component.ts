import { Component, Input } from '@angular/core'
import { Movie } from '../../shared/types/movie'

@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrl: './banner-item.component.scss',
})
export class BannerItemComponent {
  @Input() item!: Movie

  imageUrl = 'https://image.tmdb.org/t/p/original/'
}
