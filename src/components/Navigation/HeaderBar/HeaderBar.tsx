import React from 'react'
import { View } from 'react-native'
import styles from './HeaderBar.styles'
import { BackButton, IconButton } from '~/components'
import { IconButtonProps } from '~/components/Buttons/IconButton/IconButton'
import { theme } from '~/styles'

const HeaderBar = ({ customButtons }: { customButtons?: IconButtonProps[] }) => {
  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.customButtonsContainer}>
        {customButtons &&
          customButtons?.map(button => {
            return (
              <IconButton
                key={button.name}
                name={button.name}
                type={button.type ?? 'Material'}
                onPress={button.onPress}
                size={button.size ?? 25}
                color={button.color ?? theme.colors.icon}
                hide={button.hide}
              />
            )
          })}
      </View>
    </View>
  )
}

export default HeaderBar
