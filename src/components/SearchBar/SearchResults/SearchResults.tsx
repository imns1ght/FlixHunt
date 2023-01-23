import React from 'react'
import styles from './SearchResults.styles'
import { HorizontalCard, Section } from '~/components'
import { MovieSimpleType } from '~/models'
import { Text, View } from 'react-native'

const SearchResults = ({ movies }: { movies: MovieSimpleType[] }) => {
  const renderCards = React.useCallback(() => {
    if (movies.length <= 0) return <Text style={styles.errorMessage}>Nothing found... :(</Text>
    return movies.slice(0, 10).map(movie => <HorizontalCard key={movie.id} movie={movie} />)
  }, [movies])

  return (
    <View style={styles.container}>
      <Section>{renderCards()}</Section>
    </View>
  )
}

export default SearchResults
