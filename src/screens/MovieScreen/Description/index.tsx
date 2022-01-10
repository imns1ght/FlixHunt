import React from 'react'
import { View, Text } from 'react-native'
import { arrToStringFormated, convertMinsToTime } from '~/utils'
import NumberFormat from 'react-number-format'
import styles from '../style'
import { MovieResponse } from '~/models/movies/movie'

const Description = ({ movieData }: { movieData: MovieResponse }) => {
  const { runtime, budget, revenue, production_companies } = {
    ...movieData,
  }

  return (
    <View style={styles.content}>
      {/* {!!vote_average && <Text style={styles.tags}>Rating: {vote_average}</Text>} */}
      {!!runtime && <Text style={styles.tags}>Duration: {convertMinsToTime(runtime)}</Text>}
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
      {!!production_companies && (
        <Text style={styles.tags}>
          Production: {arrToStringFormated(movieData.production_companies)}
        </Text>
      )}
    </View>
  )
}

export default Description
