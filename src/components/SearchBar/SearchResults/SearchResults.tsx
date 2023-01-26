import React from 'react'
import styles from './SearchResults.styles'
import { HorizontalCard, Section } from '~/components'
import { MediaSimpleType } from '~/models'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const SearchResults = ({ data }: { data: MediaSimpleType[] }) => (
  <View style={styles.container}>
    <Section>
      <FlatList
        data={data}
        renderItem={({ item }) => <HorizontalCard key={item.id} data={item} />}
        ListEmptyComponent={<Text style={styles.errorMessage}>Nothing found... :(</Text>}
        initialNumToRender={2}
        maxToRenderPerBatch={3}
        removeClippedSubviews
      />
    </Section>
  </View>
)

export default SearchResults
