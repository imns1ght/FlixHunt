import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { CustomText } from '~/components'
import { colors, theme } from '~/styles'

export type ListButtonType = {
  title: string
  iconName?: string
  onPress: () => void
  disabled?: boolean
  activateDisabledStyle?: boolean
}

const ListButton = ({
  title,
  iconName,
  onPress,
  disabled,
  activateDisabledStyle,
}: ListButtonType) => {
  const iconSize = 24
  const containerStyle: ViewStyle[] = [styles.container]
  let textStyle = styles.description
  let leftIconStyle = styles.iconLeft
  let rightIconStyle = styles.iconRight

  if (disabled || activateDisabledStyle) {
    containerStyle.push(styles.containerDisabled)
    textStyle = { ...textStyle, ...styles.iconDisabled }
    leftIconStyle = { ...leftIconStyle, ...styles.iconDisabled }
    rightIconStyle = { ...rightIconStyle, ...styles.iconDisabled }
  }

  return (
    <TouchableOpacity onPress={onPress} style={containerStyle} disabled={disabled}>
      {iconName && <Icon name={iconName} size={iconSize} style={leftIconStyle} />}
      <CustomText type='button' style={textStyle}>
        {title}
      </CustomText>
      <Icon name='chevron-right' size={iconSize} style={rightIconStyle} />
    </TouchableOpacity>
  )
}

export default ListButton

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.tertiary,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  containerDisabled: {
    backgroundColor: colors.disabled,
  },
  iconLeft: {
    marginRight: 10,
    color: theme.colors.icon,
  },
  description: {
    flex: 1,
  },
  iconRight: {
    color: theme.colors.icon,
  },
  iconDisabled: {
    color: colors.darkGray,
  },
})
