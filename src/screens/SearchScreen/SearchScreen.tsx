import React from 'react'

import { SafeAreaView, View } from 'react-native'
import { SearchBar, Section } from '~/components'
import { MediaSimpleType } from '~/models'
import { API } from '~/services'
import SearchResults from './SearchResults'

const SearchScreen = () => {
  const [searchText, setSearchText] = React.useState('')
  const [searchResults, setSearchResults] = React.useState<MediaSimpleType[]>()
  const showResults = !!searchText && !!searchResults

  const fetchData = React.useCallback(async (searchText: string) => {
    const response = await API.searchByString(searchText)
    setSearchResults(response)
  }, [])

  React.useEffect(() => {
    if (searchText) {
      const getData = setTimeout(() => {
        fetchData(searchText)
      }, 600)

      return () => clearTimeout(getData)
    } else {
      setSearchResults(undefined)
    }
  }, [fetchData, searchText])

  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <Section removeVerticalMargin>
        {!!showResults && <SearchResults data={searchResults} />}
      </Section>
    </SafeAreaView>
  )
}

export default SearchScreen
