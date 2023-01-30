import { Keyboard, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './SearchBar.styles'
import { colors } from '~/styles'
import SearchResults from './SearchResults'
import { SearchContext } from '~/contexts'
import { translate } from '~/locales'

const SearchBar = () => {
  const { searchResults, searchText, setSearchText } = React.useContext(SearchContext)
  const showResults = !!searchText && !!searchResults

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
      <View style={styles.inputContainer}>
        <Icon name='search' style={styles.searchIcon} size={18} color={colors.gray} />
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
            color={colors.gray}
            size={18}
          />
        )}
      </View>
      {showResults && <SearchResults data={searchResults} />}
    </View>
  )
}

export default SearchBar
