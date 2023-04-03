import React from 'react'
import { translate } from '~/locales'
import DefaultTemplate from './DefaultTemplate'

const EmptyFavoritesList = () => {
  return (
    <DefaultTemplate
      iconName='heart-plus-outline'
      message={translate('errors.emptyFavoritesList')}
    />
  )
}

export default EmptyFavoritesList
