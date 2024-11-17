import { TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './SearchBar.styles'
import { theme } from '~/styles'
import { BackButton } from '../Buttons'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { TabNavigationProps } from '~/navigation'
import { useTranslation } from 'react-i18next'

const SearchBar = ({
  searchText,
  setSearchText,
}: {
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
}) => {
  const { t } = useTranslation();
  const navigation = useNavigation<TabNavigationProps>()
  const textInputRef = React.useRef<TextInput>(null)

  const focusTextInput = React.useCallback(() => {
    if (textInputRef.current) {
      const unsubscribe = navigation.addListener('focus', () => {
        /** Workaround to fix the focus https://github.com/facebook/react-native/issues/19366 */
        textInputRef.current?.blur()
        setTimeout(() => {
          textInputRef.current?.focus()
        }, 100)
      })
      return unsubscribe
    }
  }, [navigation])

  useFocusEffect(() => {
    focusTextInput()
  })

  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.inputContainer}>
        <TextInput
          ref={textInputRef}
          value={searchText}
          onChangeText={setSearchText}
          placeholder={t('searchPlaceholder')}
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
