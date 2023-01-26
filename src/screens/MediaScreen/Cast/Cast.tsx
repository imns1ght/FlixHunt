import React from 'react'
import { ActivityIndicator, FlatList, ImageBackground, Text, View } from 'react-native'
import { API } from '~/services'
import styles from './Cast.styles'
import { Section } from '~/components'
import { getImagePath } from '~/utils'
import { mediaType } from '~/models'
import { CastType } from '~/models'

const Cast = ({ id, mediaType }: { id: number; mediaType: mediaType }) => {
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
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.description} numberOfLines={1}>
            {item.character}
          </Text>
        </View>
      </ImageBackground>
    ) : null
  }, [])

  return (
    <Section title='Cast'>
      {loading ? (
        <ActivityIndicator />
      ) : !data ? (
        <Text>Error...</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          initialNumToRender={2}
          maxToRenderPerBatch={2}
          ListEmptyComponent={<Text style={styles.errorMessage}>Nothing to see here...</Text>}
          removeClippedSubviews
          horizontal
        />
      )}
    </Section>
  )
}

export default Cast
