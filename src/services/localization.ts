import * as RNLocalize from 'react-native-localize'

const { countryCode, languageTag, languageCode } = RNLocalize.getLocales()[0]

export const REGION = countryCode
export const LANGUAGE = languageTag
export const LANGUAGE_CODE = languageCode
export const DEFAULT_REGION = 'US'
export const DEFAULT_LANGUAGE = 'en-US'
export const DEFAULT_LANGUAGE_CODE = 'en'
