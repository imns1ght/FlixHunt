import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { TrendingMovies } from '~/components'
import SearchResults from '../../components/SearchResults/SearchResults'
import { SearchMovieResponse } from '../../models/search/search-movie'
import { searchByMovie } from '../../services/api'
import styles from './style'

const HomeScreen = () => {
  const [searchText, setSearchText] = useState<string>('')
  const [searchResults, setSearchResults] = useState<SearchMovieResponse>()

  useEffect(() => {
    const getResponse = async () => {
      const response = await searchByMovie(searchText)
      setSearchResults(response)
    }

    if (searchText) {
      getResponse()
    }
  }, [searchText])

  return (
    <ScrollView style={styles.container}>
      <SearchBar
        placeholder='Search for movies...'
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      {!searchText || !searchResults ? (
        <>
          <TrendingMovies timePeriod='day' />
          <TrendingMovies timePeriod='week' />
          {/* <LastRelease /> */}
        </>
      ) : (
        <SearchResults data={searchResults} />
      )}
    </ScrollView>
  )
}

export default HomeScreen
