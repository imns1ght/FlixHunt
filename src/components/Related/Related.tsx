import React from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import { MediaCard, Section } from '~/components'
import { Collection } from '~/models'
import { API } from '~/services'
import styles from './Related.styles'

const Related = ({ id, collectionId }: { id: number; collectionId: number }) => {
  const [collectionData, setCollectionData] = React.useState<Collection>()
  const [loading, setLoading] = React.useState(true)

  const fetchMovies = React.useCallback(async () => {
    const response = await API.getMovieCollection(collectionId)

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
        <Text style={styles.errorMessage}>Failed to fetch data</Text>
      ) : (
        <FlatList
          keyExtractor={(key, index) => `${key.id.toString()}${index}`}
          data={collectionData.parts}
          renderItem={({ item, index }) =>
            item.poster_path ? (
              <MediaCard item={item} index={index} disabled={id === item.id} mediaType={'movie'} />
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
