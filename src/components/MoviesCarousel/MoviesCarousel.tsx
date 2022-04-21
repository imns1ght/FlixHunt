import React from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import { MovieCard, Section } from '~/components'
import { MovieSimpleType } from '~/models'
import { API } from '~/services'
import styles from './MoviesCarousel.styles'

type CarouselTypes = 'trending' | 'popular' | 'top_rated'

const titles = {
  trending: 'Trending 🔥',
  popular: 'What people are watching',
  top_rated: 'Top Rated',
}

const MoviesCarousel = ({ type }: { type: CarouselTypes }) => {
  const [moviesData, setMoviesData] = React.useState<MovieSimpleType[]>()
  const [loading, setLoading] = React.useState(true)

  const fetchMovies = React.useCallback(async () => {
    let response
    if (type === 'trending') response = await API.getTrendingMovies()
    else if (type === 'popular') response = await API.getPopularMovies()
    else if (type === 'top_rated') response = await API.getTopRatedMovies()

    if (response) setMoviesData(response)
    setLoading(false)
  }, [type])

  React.useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  return (
    <Section title={titles[type]}>
      {loading ? (
        <ActivityIndicator size='large' />
      ) : !moviesData ? (
        <Text style={styles.errorMessage}>Failed to fetch movies</Text>
      ) : (
        <FlatList
          keyExtractor={(key, index) => `${key.id.toString()}${index}`}
          data={moviesData}
          renderItem={({ item, index }) =>
            item.poster_path ? <MovieCard item={item} index={index} /> : null
          }
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          removeClippedSubviews
          horizontal
        />
      )}
    </Section>
  )
}

export default MoviesCarousel
