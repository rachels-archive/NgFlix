import { Movie } from './movie'

export interface TvShow {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  first_air_date: string
  name: string
  vote_average: number
  vote_count: number
}

export interface TvshowResponse {
  page: number
  results: TvShow[]
  total_pages: number
  total_results: number
}

export function mapToMovies(tvShows: TvShow[]): Movie[] {
  return tvShows.map((tvShow: TvShow) => {
    return {
      ...tvShow,
      title: tvShow.name,
      original_title: tvShow.original_name,
      release_date: tvShow.first_air_date,
      video: false,
    }
  })
}
