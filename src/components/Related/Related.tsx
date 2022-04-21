import React from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import { MovieCard, Section } from '~/components'
import { Collection } from '~/models'
import { API } from '~/services'
import styles from './Related.styles'

const Related = ({ movieId, collectionId }: { movieId: number; collectionId: number }) => {
  const [collectionData, setCollectionData] = React.useState<Collection>()
  const [loading, setLoading] = React.useState(true)

  const fetchMovies = React.useCallback(async () => {
    const response = await API.getCollection(collectionId)

    if (response) setCollectionData(response)
    setLoading(false)
  }, [collectionId])

  React.useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  return (
    <Section title={collectionData?.name ?? 'Related'}>
      {loading ? (
        <ActivityIndicator size='large' />
      ) : !collectionData ? (
        <Text style={styles.errorMessage}>Failed to fetch movies</Text>
      ) : (
        <FlatList
          keyExtractor={(key, index) => `${key.id.toString()}${index}`}
          data={collectionData.parts}
          renderItem={({ item, index }) =>
            item.poster_path ? (
              <MovieCard item={item} index={index} disabled={movieId === item.id} />
            ) : null
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

export default Related
