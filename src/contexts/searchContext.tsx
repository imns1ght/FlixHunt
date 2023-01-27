import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { MediaSimpleType } from '~/models'
import { API } from '~/services'

type SearchContextType = {
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  showSearchBar: boolean
  setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>
  searchResults?: MediaSimpleType[]
  setSearchResults: React.Dispatch<React.SetStateAction<MediaSimpleType[] | undefined>>
}

const initialState: SearchContextType = {
  searchText: '',
  setSearchText: () => {},
  showSearchBar: false,
  setShowSearchBar: () => {},
  setSearchResults: () => {},
}

const SearchContext = React.createContext<SearchContextType>(initialState)

const SearchContextProvider = ({ children }: { children: React.ReactNode }) => {
  const navigation = useNavigation()
  const [searchText, setSearchText] = React.useState('')
  const [searchResults, setSearchResults] = React.useState<MediaSimpleType[]>()
  const [showSearchBar, setShowSearchBar] = React.useState(false)

  // Close search bar when navigate
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      if (showSearchBar) setShowSearchBar(false)
    })
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe
  }, [navigation, showSearchBar])

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
    <SearchContext.Provider
      value={{
        searchResults,
        setSearchResults,
        searchText,
        setSearchText,
        showSearchBar,
        setShowSearchBar,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export { SearchContext, SearchContextProvider }
