import React from 'react'

import { Linking, Text, TouchableOpacity, View } from 'react-native'

import styles from './InfoScreen.styles'

const InfoScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Disclaimer</Text>
    <Text style={styles.text}>
      The Movie Browser app uses data sourced from the TMDb API (The Movie Database API) to provide
      information about movies and TV shows. While we strive to ensure that the information
      displayed in the app is accurate and up-to-date, we cannot guarantee the accuracy,
      completeness, or timeliness of the data provided by the TMDb API.
    </Text>
    <Text style={styles.text}>
      By using the Movie Browser app, you acknowledge and agree that we are not responsible for any
      errors or omissions in the information provided, or for any actions you may take based on the
      information displayed in the app. Additionally, the Movie Browser app is not endorsed or
      affiliated with TMDb, and we make no representations or warranties regarding the accuracy or
      completeness of the data provided by TMDb.
    </Text>
    <Text style={styles.title}>Contributing</Text>
    <Text style={styles.text}>
      Movie Browser is open-source, if you&apos;d like to contribute to this project you can submit
      a pull request or report a bug creating a new issue. We appreciate your help in making Movie
      Browser better for everyone!
    </Text>
    <TouchableOpacity
      onPress={() => {
        Linking.openURL('https://github.com/imns1ght/movie-browser')
      }}
    >
      <Text style={styles.link}>Click here to access the source code in GitHub</Text>
    </TouchableOpacity>
  </View>
)

export default InfoScreen
