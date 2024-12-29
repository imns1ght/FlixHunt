import React from 'react'
import { useTranslation } from 'react-i18next';
import DefaultTemplate from './DefaultTemplate'

const EmptyFavoritesList = () => {
  const { t } = useTranslation();
  return (
    <DefaultTemplate
      iconName='heart-plus-outline'
      message={t('errors.emptyFavoritesList')}
    />
  )
}

export default EmptyFavoritesList
