import React from 'react'
import styles from './SearchResults.styles'
import { CustomText, HorizontalCard } from '~/components'
import { MediaSimpleType } from '~/models'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { translate } from '~/locales'

const SearchResults = ({ data }: { data: MediaSimpleType[] }) => {
  const renderItem = React.useCallback(
    ({ item }: { item: MediaSimpleType }) => <HorizontalCard key={item.id} data={item} />,
    []
  )

  const emptyComponent = () => (
    <View style={styles.emptyContainer}>
      <CustomText type='paragraph'>{translate('nothingFound')}</CustomText>
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
        windowSize={3}
      />
    </View>
  )
}

export default SearchResults
