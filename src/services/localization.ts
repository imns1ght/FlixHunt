import * as RNLocalize from 'react-native-localize'
import { findBestLanguageTag } from 'react-native-localize'

const { countryCode, languageTag, languageCode } = RNLocalize.getLocales()[0]

const REGION = countryCode
const LANGUAGE = languageTag
const LANGUAGE_CODE = languageCode
const DEFAULT_REGION = 'US'
const DEFAULT_LANGUAGE = 'en-US'
const DEFAULT_LANGUAGE_CODE = 'en'

export {
  REGION,
  LANGUAGE,
  LANGUAGE_CODE,
  DEFAULT_REGION,
  DEFAULT_LANGUAGE,
  DEFAULT_LANGUAGE_CODE,
  findBestLanguageTag,
}
