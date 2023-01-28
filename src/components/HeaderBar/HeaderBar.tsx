import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { StackHeaderProps } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import IconButton from '../IconButton'
import { colors } from '~/styles'
import styles from './HeaderBar.styles'
import { SearchBar } from '~/components'
import { SearchContext } from '~/contexts'
import { TabNavigationProps } from '~/navigation'

const HeaderBar = (props: StackHeaderProps) => {
  const { showSearchBar, setShowSearchBar } = useContext(SearchContext)
  const navigation = useNavigation<TabNavigationProps>()
  const iconSize = 25
  const iconColor = colors.white

  const goToHome = () => {
    navigation.navigate('Home')
  }

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
        <TouchableOpacity onPress={goToHome}>
          <Text style={styles.title}>Movie Browser</Text>
        </TouchableOpacity>
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

export default HeaderBar