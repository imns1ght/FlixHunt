import { Keyboard, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './SearchBar.styles'
import { theme } from '~/styles'
import { translate } from '~/locales'
import { BackButton } from '../Buttons'

const SearchBar = ({
  searchText,
  setSearchText,
}: {
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
}) => {
  // Workaround to fix the textInput doesn't losing focus after dismissing keyboard on some Android devices
  // https://github.com/facebook/react-native/issues/33532
  const inputRef = React.useRef<TextInput>(null)
  const keyboardDidHideCallback = () => inputRef.current?.blur?.()
  React.useEffect(() => {
    const keyboardDidHideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHideCallback
    )
    return () => {
      keyboardDidHideSubscription?.remove()
    }
  }, [])

  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.inputContainer}>
        <TextInput
          ref={inputRef}
          value={searchText}
          onChangeText={setSearchText}
          placeholder={translate('searchPlaceholder')}
          placeholderTextColor={styles.placeholder.color}
          style={styles.textInput}
          autoFocus
        />
        {!!searchText && (
          <Icon
            name='close'
            onPress={() => setSearchText('')}
            style={styles.closeIcon}
            color={theme.colors.icon}
            size={18}
          />
        )}
      </View>
    </View>
  )
}

export default SearchBar
