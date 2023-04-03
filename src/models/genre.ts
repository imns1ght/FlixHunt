export default interface Genre {
  id: number
  name: string
}

export const MoviesGenres = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  History: 36,
  Horror: 27,
  Music: 10402,
  Mystery: 9648,
  Romance: 10749,
  ScienceFiction: 878,
  Thriller: 53,
  War: 10752,
  Western: 37,
}

export const TVGenres = {
  ActionAndAdventure: 10759,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Kids: 10762,
  Mystery: 9648,
  Reality: 10764,
  SciFiAndFantasy: 10765,
  Soap: 10766,
  Talk: 10767,
  WarAndPolitics: 10768,
  Western: 37,
}

export const MediaGenres = { ...MoviesGenres, ...TVGenres }

export type MediaGenresType = (typeof MediaGenres)[keyof typeof MediaGenres]
