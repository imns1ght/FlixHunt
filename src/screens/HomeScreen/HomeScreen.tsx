import React, { useEffect, useState } from 'react'
import { ScrollView, TextInput } from 'react-native'
import { TrendingMovies } from '~/components'
import theme from '~/styles'
import SearchResults from '../../components/SearchResults/SearchResults'
import { SearchMovieResponse } from '../../models/search/search-movie'
import { searchByMovie } from '../../services/api'
import styles from './style'

const HomeScreen = () => {
  const [searchText, setSearchText] = useState<string>()
  const [searchResults, setSearchResults] = useState<SearchMovieResponse>()

  const fetchSearchResults = React.useCallback(async (searchText: string) => {
    const response = await searchByMovie(searchText)
    setSearchResults(response)
  }, [])

  useEffect(() => {
    if (searchText) fetchSearchResults(searchText)
  }, [fetchSearchResults, searchText])

  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholder='Search for movies...'
        placeholderTextColor={theme.colors.darkGray}
        onChangeText={text => setSearchText(text)}
        value={searchText}
        style={styles.searchInput}
        clearButtonMode='always'
      />
      {!searchText || !searchResults ? (
        <>
          <TrendingMovies timePeriod='day' />
          <TrendingMovies timePeriod='week' />
        </>
      ) : (
        <SearchResults data={searchResults} />
      )}
    </ScrollView>
  )
}

export default HomeScreen
