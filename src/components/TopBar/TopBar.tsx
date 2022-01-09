import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '~/styles'
import { CONSTANTS } from '../../services/constants'
import logo from '../../../assets/logo-light.png'

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Movie Browser</Text>
      <Image source={logo} style={{ width: 40, height: 40 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginTop: CONSTANTS.statusBarHeight,
    height: 62,
    flexDirection: 'row', // row
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center', // center, space-around
    paddingLeft: 30,
    paddingRight: 30,
  },
  textTitle: {
    fontFamily: 'sans-serif',
    fontSize: 24,
    fontWeight: '700',
    marginRight: 15,
    color: COLORS.secondary,
  },
  textGeneric: {
    fontSize: 18,
    color: COLORS.secondary,
  },
})

export default TopBar
