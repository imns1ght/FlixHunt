import React, { useId } from 'react'
import { View } from 'react-native'
import styles from './HeaderBar.styles'
import { BackButton, IconButton } from '~/components'
import { theme } from '~/styles'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '~/navigation'

const HeaderBar = () => {
  const navigation = useNavigation<StackNavigationProps>()
  const searchScreenId = useId()

  const iconSize = 25

  return (
    <View style={styles.container}>
      <BackButton />
      <IconButton
        name='search'
        type='Material'
        size={iconSize}
        color={theme.colors.icon}
        onPress={() => navigation.navigate('Search', { id: searchScreenId })}
      />
    </View>
  )
}

export default HeaderBar
