import React from 'react'
import { FlatList, SafeAreaView, View, useWindowDimensions } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import {
  NavigationState,
  Route,
  SceneMap,
  SceneRendererProps,
  TabBar,
  TabView,
} from 'react-native-tab-view'

import {
  CustomActivityIndicator,
  CustomText,
  EmptyFavoritesList,
  GuestBlocked,
  HeaderBar,
  HorizontalCard,
  Section,
} from '~/components'
import { MediaSimpleType } from '~/models'
import { API, Authentication } from '~/services'
import { translate } from '~/locales'
import { NavigationScreenProps } from '~/navigation'
import styles from './FavoritesScreen.styles'

const FavoritesScreen = ({ route }: NavigationScreenProps['Favorites']) => {
  const defaultTab = route.params?.tabFocused
  const windowDimensions = useWindowDimensions()
  const [movieList, setMovieList] = React.useState<MediaSimpleType[]>()
  const [tvList, setTVList] = React.useState<MediaSimpleType[]>()
  const [loading, setLoading] = React.useState(true)
  const [isUserLogged, setUserLogged] = React.useState(true)

  const [tabIndex, setTabIndex] = React.useState(defaultTab === 'tv' ? 1 : 0)
  const tabRoutes = [
    { key: 'movie', title: translate('movies') },
    { key: 'tv', title: translate('tvShows') },
  ]

  const fetchData = React.useCallback(async () => {
    setLoading(true)
    try {
      const session_id = await Authentication.getSessionId()
      const account_id = await Authentication.getAccountId()
      const [moviesResponse, tvResponse] = await Promise.all([
        API.getFavorites(account_id, session_id, 'movie'),
        API.getFavorites(account_id, session_id, 'tv'),
      ])
      setMovieList(moviesResponse)
      setTVList(tvResponse)
      setLoading(false)
    } catch (e) {
      console.error(e)
    }
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      Authentication.isUserLogged().then(isLogged => {
        if (isLogged) fetchData()
        else setUserLogged(false)
      })
    }, [fetchData])
  )

  const renderTabBar = React.useCallback(
    (props: SceneRendererProps & { navigationState: NavigationState<Route> }) => {
      return (
        <TabBar
          {...props}
          pressColor={styles.tabBar.pressColor}
          indicatorStyle={styles.tabBarIndicator}
          renderLabel={({ route }) => <CustomText type='button'>{route.title}</CustomText>}
          style={styles.tabBar}
        />
      )
    },
    []
  )

  const renderContent = React.useCallback((loading: boolean, data?: MediaSimpleType[]) => {
    const nonEmptyFavoritesList = data && data.length > 0
    return (
      <Section>
        {loading ? (
          <CustomActivityIndicator size='large' />
        ) : nonEmptyFavoritesList ? (
          <FlatList
            data={data}
            renderItem={({ item }) => <HorizontalCard key={item.id} data={item} />}
            initialNumToRender={6}
            maxToRenderPerBatch={2}
          />
        ) : (
          <EmptyFavoritesList />
        )}
      </Section>
    )
  }, [])

  const movieRoute = React.useCallback(
    () => renderContent(loading, movieList),
    [loading, movieList, renderContent]
  )
  const tvRoute = React.useCallback(
    () => renderContent(loading, tvList),
    [loading, renderContent, tvList]
  )
  const renderScene = SceneMap({
    movie: movieRoute,
    tv: tvRoute,
  })

  if (!isUserLogged) return <GuestBlocked />

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <HeaderBar title={translate('favorites')} />
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index: tabIndex, routes: tabRoutes }}
          renderScene={renderScene}
          onIndexChange={setTabIndex}
          initialLayout={{ width: windowDimensions.width }}
        />
      </View>
    </SafeAreaView>
  )
}

export default FavoritesScreen
