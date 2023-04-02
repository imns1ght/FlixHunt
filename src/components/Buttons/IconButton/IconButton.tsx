import React from 'react'
import { TouchableOpacity } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import { IconProps } from 'react-native-vector-icons/Icon'
import styles from './IconButton.styles'
import { colors } from '~/styles'

type CustomProps = {
  type: 'Material' | 'FontAwesome'
  hide?: boolean
  onPress: () => void
  onLongPress?: () => void
}
export type IconButtonProps = Pick<IconProps, 'name' | 'color' | 'size'> & CustomProps

const IconButton = ({ name, color, size, type, hide, onPress, onLongPress }: IconButtonProps) => {
  const Icon = (props: IconProps) => {
    switch (type) {
      case 'Material':
        return <MaterialIcon {...props} />
      case 'FontAwesome':
        return <FontAwesomeIcon {...props} />
      default:
        return <MaterialIcon {...props} />
    }
  }
  return (
    <TouchableOpacity onPress={hide ? undefined : onPress} onLongPress={onLongPress}>
      <Icon
        name={name}
        color={color ?? colors.gray}
        size={size ?? 24}
        style={hide ? { ...styles.icon, opacity: 0 } : styles.icon}
      />
    </TouchableOpacity>
  )
}

export default IconButton
