import { TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './SearchBar.styles'
import theme from '~/styles'
import SearchResults from './SearchResults'
import { SearchContext } from '~/contexts'

const SearchBar = () => {
  const { searchResults, searchText, setSearchText } = React.useContext(SearchContext)

  const showResults = !!searchText && !!searchResults

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name='search' style={styles.searchIcon} size={15} color={theme.colors.gray} />
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder='Search for movies...'
          placeholderTextColor={styles.placeholder.color}
          style={styles.textInput}
        />
        {!!searchText && (
          <Icon
            name='close'
            onPress={() => setSearchText('')}
            style={styles.closeIcon}
            color={theme.colors.gray}
            size={15}
          />
        )}
      </View>
      {showResults && <SearchResults movies={searchResults.results} />}
    </View>
  )
}

export default SearchBar
