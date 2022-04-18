import React from 'react'

import { ScrollView, TextInput, View } from 'react-native'
import { MoviesCarousel, Upcoming } from '~/components'
import { SearchMovieResponse } from '~/models'
import { API } from '~/services'

import theme from '~/styles'
import styles from './HomeScreen.styles'
import SearchResults from './SearchResults'

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

  const renderContent = React.useCallback(() => {
    if (searchResults && searchText) return <SearchResults movies={searchResults.results} />

    return (
      <View>
        <MoviesCarousel type='trending' />
        <MoviesCarousel type='popular' />
        <Upcoming />
        <MoviesCarousel type='top_rated' />
      </View>
    )
  }, [searchResults, searchText])

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
      {renderContent()}
    </ScrollView>
  )
}

export default HomeScreen
