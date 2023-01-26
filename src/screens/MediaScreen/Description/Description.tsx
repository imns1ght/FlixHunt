import React from 'react'
import { Linking, Text, TouchableOpacity, View } from 'react-native'
import { NumericFormat } from 'react-number-format'
import Collapsible from 'react-native-collapsible'
import styles from '../MediaScreen.styles'
import { colors } from '~/styles'
import { MediaFullType } from '~/models'

const Description = (data: Partial<MediaFullType>) => {
  const [isDetailsCollapsed, setIsDetailsCollapsed] = React.useState(true)
  const isMovie = data.media_type === 'movie'

  const budget = isMovie ? data.budget : null
  const revenue = isMovie ? data.revenue : null
  const homepage = isMovie ? data.homepage : null

  const showCollapsible = !!budget || !!revenue || !!homepage

  return (
    <View style={styles.content}>
      {!!data.overview && <Text style={styles.overview}>{data.overview}</Text>}
      {!!showCollapsible && (
        <TouchableOpacity onPress={() => setIsDetailsCollapsed(!isDetailsCollapsed)}>
          <Text style={styles.textCollapsible}>Show more details</Text>
        </TouchableOpacity>
      )}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
      {/* @ts-ignore: Collapsible bug, waiting a new version... */}
      <Collapsible collapsed={isDetailsCollapsed} style={styles.collapsible}>
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
            onPress={() => {
              Linking.openURL(homepage)
            }}
          >
            {homepage}
          </Text>
        )}
      </Collapsible>
    </View>
  )
}

export default Description
