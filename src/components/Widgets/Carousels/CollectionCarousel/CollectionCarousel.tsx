import React from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { Card, CustomText, Section } from '~/components'
import { CollectionType, MediaSimpleType } from '~/models'
import { API } from '~/services'

const CollectionCarousel = ({ id, collectionId }: { id: number; collectionId: number }) => {
  const [collectionData, setCollectionData] = React.useState<CollectionType>()
  const [loading, setLoading] = React.useState(true)

  const fetchMovies = React.useCallback(async () => {
    const response = await API.getMovieCollection(collectionId)

    if (response) setCollectionData(response)
    setLoading(false)
  }, [collectionId])

  React.useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  const renderItem = React.useCallback(
    ({ item }: { item: MediaSimpleType }) =>
      item.poster_path ? <Card item={item} disabled={id === item.id} mediaType={'movie'} /> : null,
    [id]
  )

  return (
    <Section title={collectionData?.name ?? 'Collection'}>
      {loading ? (
        <ActivityIndicator size='large' />
      ) : !collectionData ? (
        <CustomText type='paragraph'>Failed to fetch data</CustomText>
      ) : (
        <FlatList
          keyExtractor={key => key.id.toString()}
          data={collectionData.parts}
          renderItem={renderItem}
          initialNumToRender={3}
          maxToRenderPerBatch={5}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      )}
    </Section>
  )
}

export default CollectionCarousel
