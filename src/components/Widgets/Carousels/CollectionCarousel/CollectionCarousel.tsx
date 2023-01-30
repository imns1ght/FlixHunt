import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { Card, CustomText, Section } from '~/components'
import { translate } from '~/locales'
import { CollectionType, MediaSimpleType } from '~/models'
import { StackNavigationProps } from '~/navigation'
import { API } from '~/services'

const CollectionCarousel = ({ id, collectionId }: { id: number; collectionId: number }) => {
  const [collectionData, setCollectionData] = React.useState<CollectionType>()
  const [loading, setLoading] = React.useState(true)
  const navigation = useNavigation<StackNavigationProps>()

  const fetchMovies = React.useCallback(async () => {
    const response = await API.getMovieCollection(collectionId)

    if (response) setCollectionData(response)
    setLoading(false)
  }, [collectionId])

  React.useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  const renderItem = React.useCallback(
    ({ item }: { item: MediaSimpleType }) => {
      if (!item.poster_path) return null
      const onPress = () => {
        navigation.navigate('Media', {
          id: item.id,
          title: item.media_type === 'movie' ? item.title : item.name,
          mediaType: item.media_type,
        })
      }

      return (
        <Card
          id={item.id}
          imagePath={item.poster_path}
          disabled={id === item.id}
          onPress={onPress}
        />
      )
    },
    [id, navigation]
  )

  return (
    <Section title={collectionData?.name ?? translate('collection')}>
      {loading ? (
        <ActivityIndicator size='large' />
      ) : !collectionData ? (
        <CustomText type='paragraph'>{translate('error')}</CustomText>
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
