import React from 'react'

import { Linking, View } from 'react-native'
import { CustomText, Section } from '~/components'

const InfoScreen = () => {
  const onPress = () => {
    Linking.openURL('https://github.com/imns1ght/movie-browser')
  }

  return (
    <View>
      <Section title='Disclaimer'>
        <CustomText type='paragraph'>
          The Movie Browser app uses data sourced from the TMDb API (The Movie Database API) to
          provide information about movies and TV shows. While we strive to ensure that the
          information displayed in the app is accurate and up-to-date, we cannot guarantee the
          accuracy, completeness, or timeliness of the data provided by the TMDb API.
        </CustomText>
        <CustomText type='paragraph'>
          By using the Movie Browser app, you acknowledge and agree that we are not responsible for
          any errors or omissions in the information provided, or for any actions you may take based
          on the information displayed in the app. Additionally, the Movie Browser app is not
          endorsed or affiliated with TMDb, and we make no representations or warranties regarding
          the accuracy or completeness of the data provided by TMDb.
        </CustomText>
      </Section>
      <Section title='Contributing'>
        <CustomText type='paragraph'>
          Movie Browser is open-source, if you&apos;d like to contribute to this project you can
          submit a pull request or report a bug creating a new issue. We appreciate your help in
          making Movie Browser better for everyone!
        </CustomText>
        <CustomText type='link' onPress={onPress}>
          Click here to access the source code in GitHub
        </CustomText>
      </Section>
    </View>
  )
}

export default InfoScreen
