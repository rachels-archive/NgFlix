import { Component, OnInit } from '@angular/core'
import { MoviesService } from '../../services/movies.service'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { IMAGE_BASE_URL } from '../../shared/constants'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slideFade', [
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [style({ opacity: 0 }), animate('1s ease-in')]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave', animate('1s ease-out', style({ opacity: 0 }))),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  movies$ = this.moviesService.getPopularMovies()

  slideIndex = 0

  languageNames = new Intl.DisplayNames(['en'], { type: 'language' })

  numOfSlides = 0

  imageBaseUrl = IMAGE_BASE_URL

  ngOnInit() {
    this.loadSlides()
  }

  loadSlides() {
    this.movies$.subscribe((response) => {
      this.numOfSlides = response.results.length
    })
    setInterval(() => {
      this.slideIndex++

      if (this.slideIndex > this.numOfSlides) {
        this.slideIndex = 0
      }
    }, 5000)
  }
}
