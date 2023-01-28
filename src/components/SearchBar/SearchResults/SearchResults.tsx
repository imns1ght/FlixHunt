import React from 'react'
import styles from './SearchResults.styles'
import { CustomText, HorizontalCard } from '~/components'
import { MediaSimpleType } from '~/models'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const SearchResults = ({ data }: { data: MediaSimpleType[] }) => {
  const renderItem = React.useCallback(
    ({ item }: { item: MediaSimpleType }) => <HorizontalCard key={item.id} data={item} />,
    []
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={key => key.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<CustomText type='paragraph'>Nothing found... :(</CustomText>}
        initialNumToRender={2}
        maxToRenderPerBatch={3}
        keyboardShouldPersistTaps='always'
      />
    </View>
  )
}

export default SearchResults
