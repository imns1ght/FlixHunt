import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, View, ActivityIndicator, FlatList } from 'react-native'
import { MoviesTopRatedResponse } from '~/models/movies/movies-top-rated'
import { TrendingResponse } from '~/models/trending/trending'
import { getMoviesTopRated, getTrendingMovies } from '~/services/api'
import MovieCard from '~/components/MovieCard/MovieCard'
import styles from './style'

const FeaturedMovies = ({ category, time_window }: { category: string; time_window?: string }) => {
  const navigation = useNavigation()
  const [trendingMoviesData, setTrendingMoviesdata] = React.useState<TrendingResponse>()
  const [topRatedMoviesData, setTopRatedMoviesData] = React.useState<MoviesTopRatedResponse>()

  React.useEffect(() => {
    const getResponse = async () => {
      let response
      if (category === 'trending') {
        response = await getTrendingMovies(time_window ?? 'day')
        setTrendingMoviesdata(response)
      } else if (category === 'toprated') {
        response = await getMoviesTopRated()
        setTopRatedMoviesData(response)
      }
    }

    getResponse()
  }, [category, time_window])

  const getCategoryData = () => {
    if (category === 'trending' && trendingMoviesData) {
      return trendingMoviesData
    } else if (category === 'toprated' && topRatedMoviesData) {
      return topRatedMoviesData
    } else {
      return null
    }
  }

  const getSectionTitle = () => {
    if (category === 'trending') {
      return 'Trending'
    } else if (category === 'toprated') {
      return 'Top Rated'
    } else {
      return 'Error'
    }
  }

  const shouldRender = () => {
    if (!getCategoryData()) {
      return false
    }

    return true
  }

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{getSectionTitle()}</Text>
        <Text style={styles.sectionSubTitle}>{time_window}</Text>
      </View>
      {shouldRender() ? (
        <FlatList
          keyExtractor={(key, index) => `${key.id.toString()}${index}`}
          data={getCategoryData()?.results.slice(0, 10)}
          renderItem={({ item, index }) => MovieCard({ item, index, navigation })}
          extraData={navigation}
          horizontal
          contentContainerStyle={{
            alignSelf: 'center',
          }}
        />
      ) : (
        <ActivityIndicator size='large' />
      )}
    </View>
  )
}

export default FeaturedMovies
