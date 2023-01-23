import React from 'react'
import { TouchableOpacity } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import { IconProps } from 'react-native-vector-icons/Icon'
import styles from './IconButton.styles'

type CustomProps = {
  type: 'Material' | 'FontAwesome'
  hide?: boolean
  onPress: () => void
}
type Props = Pick<IconProps, 'name' | 'color' | 'size'> & CustomProps

const IconButton = ({ name, color, size, type, hide, onPress }: Props) => {
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
    <TouchableOpacity onPress={hide ? undefined : onPress}>
      <Icon
        name={name}
        color={color}
        size={size}
        style={hide ? { ...styles.icon, opacity: 0 } : styles.icon}
      />
    </TouchableOpacity>
  )
}

export default IconButton
