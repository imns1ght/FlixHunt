import { I18n } from 'i18n-js'
import memoize from 'lodash.memoize'
import en from './en.json'
import ptBR from './pt-BR.json'
import { DEFAULT_LANGUAGE_CODE, findBestAvailableLanguage } from '../services'

const i18nInstance = new I18n()

const translationGetters: Record<string, object> = {
  en: en,
  'pt-BR': ptBR,
}

const translate = memoize(
  (key: string, config?: object) => `${i18nInstance.t(key, config)}`,
  (key: string, config?: object) => (config ? `${key}${JSON.stringify(config)}` : key)
)

const setI18nConfig = () => {
  const fallback = { languageTag: DEFAULT_LANGUAGE_CODE }
  const { languageTag } = findBestAvailableLanguage(Object.keys(translationGetters)) || fallback
  translate.cache.clear?.()
  i18nInstance.translations = {
    [languageTag]: translationGetters[languageTag],
  }
  i18nInstance.locale = languageTag
}

setI18nConfig()

export { translate }
