import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SearchMovieResponse } from '~/models'
import { API } from '~/services'

type SearchContextType = {
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  showSearchBar: boolean
  setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>
  searchResults?: SearchMovieResponse
  setSearchResults: React.Dispatch<React.SetStateAction<SearchMovieResponse | undefined>>
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
  const [searchResults, setSearchResults] = React.useState<SearchMovieResponse>()
  const [showSearchBar, setShowSearchBar] = React.useState(false)

  // Close search bar when navigate
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      if (showSearchBar) setShowSearchBar(false)
    })
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe
  }, [navigation, showSearchBar])

  const fetchSearchResults = React.useCallback(async (searchText: string) => {
    const response = await API.searchByMovie(searchText)
    setSearchResults(response)
  }, [])

  React.useEffect(() => {
    if (searchText)
      setTimeout(() => {
        fetchSearchResults(searchText)
      }, 100)
  }, [fetchSearchResults, searchText])

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