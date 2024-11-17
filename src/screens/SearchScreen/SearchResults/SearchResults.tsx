import React from 'react'
import styles from './SearchResults.styles'
import { CustomText, HorizontalCard } from '~/components'
import { MediaSimpleType } from '~/models'
import { FlatList, View } from 'react-native'
import { useTranslation } from 'react-i18next'

const SearchResults = ({ data }: { data: MediaSimpleType[] }) => {
  const { t } = useTranslation();

  const renderItem = React.useCallback(
    ({ item }: { item: MediaSimpleType }) => <HorizontalCard key={item.id} data={item} />,
    []
  )

  const emptyComponent = () => (
    <View style={styles.emptyContainer}>
      <CustomText type='paragraph'>{t('nothingFound')}</CustomText>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={key => key.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={emptyComponent}
        initialNumToRender={2}
        maxToRenderPerBatch={3}
        keyboardShouldPersistTaps='always'
      />
    </View>
  )
}

export default SearchResults
