import React from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { API } from '~/services'
import { Card, CustomText, Section } from '~/components'
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
    if (!item.profile_path) return null

    return (
      <Card
        id={item.id}
        imagePath={item.profile_path}
        title={item.name}
        subtitle={item.character}
      />
    )
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
