import React from 'react'
import { View } from 'react-native'
import styles from './HeaderBar.styles'
import { BackButton, CustomText, IconButton } from '~/components'
import { IconButtonProps } from '~/components/Buttons/IconButton/IconButton'
import { theme } from '~/styles'

const HeaderBar = ({
  title,
  customButtons,
}: {
  title?: string
  customButtons?: IconButtonProps[]
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backTitleContainer}>
        <BackButton />
        <CustomText type='title'>{title}</CustomText>
      </View>
      <View style={styles.customButtonsContainer}>
        {customButtons &&
          customButtons?.map(button => {
            return (
              <IconButton
                key={button.name}
                name={button.name}
                type={button.type ?? 'Material'}
                onPress={button.onPress}
                onLongPress={button.onLongPress}
                size={button.size ?? 26}
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
