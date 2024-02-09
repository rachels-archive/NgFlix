import { Component, Input } from '@angular/core'
import { Movie } from '../../shared/types/movie'
import { IMAGE_BASE_URL } from '../../shared/constants'

@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrl: './banner-item.component.scss',
})
export class BannerItemComponent {
  @Input() item: Movie | null = null

  imageBaseUrl = IMAGE_BASE_URL
}
