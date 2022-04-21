import React from 'react'
import { Linking, Text, View } from 'react-native'
import NumberFormat from 'react-number-format'
import Collapsible from 'react-native-collapsible'

import styles from '../MovieScreen.styles'
import { MovieResponse } from '~/models/movies/movie'
import { TouchableHighlight } from 'react-native-gesture-handler'
import theme from '~/styles'

const Description = ({ movieData }: { movieData: MovieResponse }) => {
  const { budget, revenue, homepage, belongs_to_collection } = movieData
  const [isDetailsCollapsed, setIsDetailsCollapsed] = React.useState(true)
  const showCollapsible = React.useMemo(
    () => !!budget || !!revenue || !!homepage,
    [budget, homepage, revenue]
  )

  return (
    <View>
      <View style={styles.content}>
        {!!movieData.overview && <Text style={styles.overview}>{movieData.overview}</Text>}
        {!!showCollapsible && (
          <TouchableHighlight onPress={() => setIsDetailsCollapsed(!isDetailsCollapsed)}>
            <Text style={styles.textCollapsible}>Show more details</Text>
          </TouchableHighlight>
        )}
        <Collapsible collapsed={isDetailsCollapsed} style={styles.collapsible}>
          {!!homepage && (
            <Text
              style={{ ...styles.tags, color: theme.colors.primary }}
              onPress={() => Linking.openURL(homepage)}
            >
              {homepage}
            </Text>
          )}
          {!!belongs_to_collection && (
            <Text style={styles.tags}>Collection: {belongs_to_collection.name}</Text>
          )}
          {!!budget && (
            <NumberFormat
              value={budget}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              renderText={value => <Text style={styles.tags}>Budget: {value}</Text>}
            />
          )}
          {!!revenue && (
            <NumberFormat
              value={revenue}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              renderText={value => <Text style={styles.tags}>Revenue: {value}</Text>}
            />
          )}
        </Collapsible>
      </View>
    </View>
  )
}

export default Description
