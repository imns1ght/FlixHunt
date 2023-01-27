import React from 'react'
import styles from './SearchResults.styles'
import { HorizontalCard, Section } from '~/components'
import { MediaSimpleType } from '~/models'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const SearchResults = ({ data }: { data: MediaSimpleType[] }) => {
  const renderItem = React.useCallback(
    ({ item }: { item: MediaSimpleType }) => <HorizontalCard key={item.id} data={item} />,
    []
  )

  return (
    <View style={styles.container}>
      <Section>
        <FlatList
          data={data}
          keyExtractor={key => key.id.toString()}
          renderItem={renderItem}
          ListEmptyComponent={<Text style={styles.errorMessage}>Nothing found... :(</Text>}
          initialNumToRender={2}
          maxToRenderPerBatch={3}
          keyboardShouldPersistTaps='always'
        />
      </Section>
    </View>
  )
}

export default SearchResults
