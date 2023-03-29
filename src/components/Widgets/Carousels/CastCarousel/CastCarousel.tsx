import React from 'react'
import { FlatList } from 'react-native'
import { API } from '~/services'
import { Card, CustomActivityIndicator, CustomText, Section } from '~/components'
import { mediaType } from '~/models'
import { CastType } from '~/models'
import { translate } from '~/locales'

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
        subtitle={item.character ?? item?.roles?.[0].character}
      />
    )
  }, [])

  return (
    <Section title={translate('cast')}>
      {loading ? (
        <CustomActivityIndicator />
      ) : !data ? (
        <CustomText type='paragraph'>{translate('error')}</CustomText>
      ) : (
        <FlatList
          data={data}
          keyExtractor={key => key.id.toString()}
          renderItem={renderItem}
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          ListEmptyComponent={<CustomText type='paragraph'>{translate('nothingFound')}</CustomText>}
          showsHorizontalScrollIndicator={false}
          windowSize={3}
          horizontal
        />
      )}
    </Section>
  )
}

export default CastCarousel
