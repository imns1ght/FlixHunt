import React from 'react'

import { ScrollView, TextInput } from 'react-native'
import { SearchResults, TrendingMovies } from '~/components'
import { SearchMovieResponse } from '~/models'
import { API } from '~/services'

import theme from '~/styles'
import styles from './HomeScreen.styles'

const HomeScreen = () => {
  const [searchText, setSearchText] = React.useState<string>()
  const [searchResults, setSearchResults] = React.useState<SearchMovieResponse>()

  const fetchSearchResults = React.useCallback(async (searchText: string) => {
    const response = await API.searchByMovie(searchText)
    setSearchResults(response)
  }, [])

  React.useEffect(() => {
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
