import { useNavigation } from '@react-navigation/native'
import React, { useId } from 'react'
import { HeaderBar } from '~/components'
import { IconButtonProps } from '~/components/Buttons/IconButton/IconButton'
import { mediaType } from '~/models'
import { StackNavigationProps } from '~/navigation'
import { API, Authentication } from '~/services'
import { colors } from '~/styles'

type Props = {
  id: number
  title?: string
  shouldShowTitle?: boolean
  mediaType: mediaType
  favoriteStatus: boolean
  userAuthenticated: boolean
}

const MediaScreenHeaderBar = ({
  id,
  title,
  shouldShowTitle,
  mediaType,
  userAuthenticated,
  favoriteStatus,
}: Props) => {
  const stackNavigation = useNavigation<StackNavigationProps>()
  const [favorite, setFavorite] = React.useState(favoriteStatus)
  const searchScreenId = useId()
  const favoriteScreenId = useId()

  const markFavorite = React.useCallback(async () => {
    const newFavoriteStatus = !favorite
    const account_id = await Authentication.getAccountId()
    const session_id = await Authentication.getSessionId()
    const response = await API.setFavorite(id, mediaType, newFavoriteStatus, account_id, session_id)
    if (response) setFavorite(newFavoriteStatus)
  }, [favorite, id, mediaType, setFavorite])

  const headerBarCustomButtons: IconButtonProps[] = React.useMemo(() => {
    const items: IconButtonProps[] = [
      {
        name: 'search',
        type: 'Material',
        onPress: () => stackNavigation.navigate('Search', { id: searchScreenId }),
      },
    ]

    if (userAuthenticated) {
      items.push({
        name: favorite ? 'favorite' : 'favorite-outline',
        color: favorite ? colors.pink : colors.white,
        onPress: markFavorite,
        onLongPress: () =>
          stackNavigation.navigate('Favorites', { id: favoriteScreenId, tabFocused: mediaType }),
        type: 'Material',
      })
    }

    return items
  }, [
    userAuthenticated,
    stackNavigation,
    searchScreenId,
    favorite,
    markFavorite,
    favoriteScreenId,
    mediaType,
  ])

  return <HeaderBar title={shouldShowTitle ? title : ''} customButtons={headerBarCustomButtons} />
}

export default MediaScreenHeaderBar
