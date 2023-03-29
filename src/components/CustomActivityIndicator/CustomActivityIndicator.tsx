import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'
import React from 'react'
import { theme } from '~/styles'

const CustomActivityIndicator = (props: ActivityIndicatorProps) => {
  return <ActivityIndicator {...props} color={theme.colors.primary} />
}

export default CustomActivityIndicator
