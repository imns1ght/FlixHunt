import React from 'react'
import { Linking, Text, TouchableOpacity, View } from 'react-native'
import { NumericFormat } from 'react-number-format'

import Collapsible from 'react-native-collapsible'

import styles from '../MediaScreen.styles'
import { colors } from '~/styles'
import { convertMinsToTime } from '~/utils'
import { MovieData } from '~/models'

const Description = ({ movieData }: { movieData: MovieData }) => {
  const [isDetailsCollapsed, setIsDetailsCollapsed] = React.useState(true)
  const { budget, revenue, homepage } = movieData
  const runtime = React.useMemo(() => convertMinsToTime(movieData.runtime), [movieData.runtime])

  const showCollapsible = React.useMemo(
    () => !!budget || !!revenue || !!homepage || !!runtime,
    [budget, homepage, revenue, runtime]
  )
  return (
    <View>
      <View style={styles.content}>
        {!!movieData.overview && <Text style={styles.overview}>{movieData.overview}</Text>}
        {!!showCollapsible && (
          <TouchableOpacity onPress={() => setIsDetailsCollapsed(!isDetailsCollapsed)}>
            <Text style={styles.textCollapsible}>Show more details</Text>
          </TouchableOpacity>
        )}
        <Collapsible collapsed={isDetailsCollapsed} style={styles.collapsible}>
          <Text style={styles.tags}>Duration: {runtime}</Text>
          {!!budget && (
            <NumericFormat
              value={budget}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              renderText={value => <Text style={styles.tags}>Budget: {value}</Text>}
            />
          )}
          {!!revenue && (
            <NumericFormat
              value={revenue}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              renderText={value => <Text style={styles.tags}>Revenue: {value}</Text>}
            />
          )}
          {!!homepage && (
            <Text
              style={{ ...styles.tags, color: colors.primary }}
              onPress={() => Linking.openURL(homepage)}
            >
              {homepage}
            </Text>
          )}
        </Collapsible>
      </View>
    </View>
  )
}

export default Description
