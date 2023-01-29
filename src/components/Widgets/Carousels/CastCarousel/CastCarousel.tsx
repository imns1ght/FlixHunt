import React from 'react'
import { ActivityIndicator, FlatList, ImageBackground, View } from 'react-native'
import { API } from '~/services'
import styles from './CastCarousel.styles'
import { CustomText, Section } from '~/components'
import { getImagePath } from '~/utils'
import { mediaType } from '~/models'
import { CastType } from '~/models'

const CastCarousel = ({ id, mediaType }: { id: number; mediaType: mediaType }) => {
  const [data, setData] = React.useState<CastType[]>()
  const [loading, setLoading] = React.useState(true)

  const fetchCast = React.useCallback(async () => {
    const response = await API.getCast(id, mediaType)
    setData(response)
    setLoading(false)
  }, [mediaType, id])

  React.useEffect(() => {
    fetchCast()
  }, [fetchCast])

  const renderItem = React.useCallback(({ item }: { item: CastType }) => {
    return item.profile_path ? (
      <ImageBackground
        key={item.id}
        source={{
          uri: getImagePath(item.profile_path, 'w500'),
        }}
        style={styles.card}
      >
        <View style={styles.infoContainer}>
          <CustomText type='subtitle' numberOfLines={1}>
            {item.name}
          </CustomText>
          <CustomText type='paragraph' numberOfLines={1}>
            {item.character}
          </CustomText>
        </View>
      </ImageBackground>
    ) : null
  }, [])

  return (
    <Section title='Cast'>
      {loading ? (
        <ActivityIndicator />
      ) : !data ? (
        <CustomText type='paragraph'>Error...</CustomText>
      ) : (
        <FlatList
          data={data}
          keyExtractor={key => key.id.toString()}
          renderItem={renderItem}
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          ListEmptyComponent={<CustomText type='paragraph'>Nothing to see here...</CustomText>}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      )}
    </Section>
  )
}

export default CastCarousel
