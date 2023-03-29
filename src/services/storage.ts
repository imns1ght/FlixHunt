import SInfo from 'react-native-sensitive-info'

class SecureStorage {
  /** Insert new data into the storage */
  static setItem(key: string, value: string) {
    return SInfo.setItem(key, value, {})
  }
  /** Get an item from storage */
  static getItem(key: string) {
    return SInfo.getItem(key, {})
  }
  /** Get an item from storage */
  static deleteItem(key: string) {
    return SInfo.deleteItem(key, {})
  }
}

export default SecureStorage
