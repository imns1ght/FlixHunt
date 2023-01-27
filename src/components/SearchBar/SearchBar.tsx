import { TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './SearchBar.styles'
import { colors } from '~/styles'
import SearchResults from './SearchResults'
import { SearchContext } from '~/contexts'

const SearchBar = () => {
  const { searchResults, searchText, setSearchText } = React.useContext(SearchContext)

  const showResults = !!searchText && !!searchResults

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name='search' style={styles.searchIcon} size={18} color={colors.gray} />
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder='Search for movies or TV shows...'
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
