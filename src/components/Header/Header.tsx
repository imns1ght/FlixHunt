import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { StackHeaderProps } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import IconButton from '../IconButton'
import theme from '~/styles'
import styles from './Header.styles'
import { SearchBar } from '~/components'
import { SearchContext } from '~/contexts'

const Header = (props: StackHeaderProps) => {
  const { showSearchBar, setShowSearchBar } = useContext(SearchContext)
  const navigation = useNavigation()
  const iconSize = 25
  const iconColor = theme.colors.white

  return (
    <View>
      <View style={styles.container}>
        <IconButton
          name='keyboard-backspace'
          type='Material'
          onPress={navigation.goBack}
          size={iconSize}
          color={iconColor}
          hide={!props.back}
        />
        <Text style={styles.title}>Movie Browser</Text>
        <IconButton
          name='search'
          type='Material'
          size={iconSize}
          color={iconColor}
          onPress={() => setShowSearchBar(!showSearchBar)}
        />
      </View>
      {showSearchBar && <SearchBar />}
    </View>
  )
}

export default React.memo(Header)
