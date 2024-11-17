import SInfo from 'react-native-sensitive-info'
import * as Keychain from 'react-native-keychain'

console.log({ SInfo, Keychain })

class SecureStorage {
  /** Insert new data into the storage */
  static async setItem(key: string, value: string) {
    return SInfo.setItem(key, value, {
      sharedPreferencesName: 'mySharedPrefs',
      keychainService: 'myKeychain',
    })
  }
  /** Get an item from storage */
  static async getItem(key: string) {
    return SInfo.getItem(key, {
      sharedPreferencesName: 'mySharedPrefs',
      keychainService: 'myKeychain',
    })
  }
  /** Get an item from storage */
  static async deleteItem(key: string) {
    return SInfo.deleteItem(key, {
      sharedPreferencesName: 'mySharedPrefs',
      keychainService: 'myKeychain',
    })
  }
}

export default SecureStorage
