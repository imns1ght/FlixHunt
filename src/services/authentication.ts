import Keychain, {
  ACCESSIBLE,
  ACCESS_CONTROL,
  STORAGE_TYPE,
  SetOptions,
} from 'react-native-keychain'

export enum UserStorageKeys {
  GUEST_SESSION_ID = 'guest_session_id',
  SESSION_ID = 'session_id',
  ACCOUNT_ID = 'account_id',
}

const default_storage_options: SetOptions = {
  accessControl: Keychain.ACCESS_CONTROL.APPLICATION_PASSWORD,
  accessible: ACCESSIBLE.WHEN_UNLOCKED,
  storage: STORAGE_TYPE.AES_GCM_NO_AUTH,
}

class Authentication {
  static async isUserLogged() {
    const session = await this.getSessionId()
    const account = await this.getAccountId()
    return !!session && !!account
  }

  static async isGuest() {
    const guest = await this.getGuestSessionId()
    return !!guest
  }

  static async removeUserCredentials() {
    try {
      Object.values(UserStorageKeys).map(
        async key => await Keychain.resetInternetCredentials({ server: key })
      )
      return true
    } catch {
      console.error('Error clearing storage')
      return false
    }
  }

  static async saveCredentials(session_id: string, account_id: string | number) {
    return Promise.all([
      this.setSessionId(session_id),
      this.setAccountId(`${account_id}`),
      this.resetGuestSession(),
    ])
  }

  static async resetGuestSession() {
    try {
      return Keychain.resetInternetCredentials({ server: UserStorageKeys.GUEST_SESSION_ID })
    } catch {
      console.error('Error resetting guest session')
      return false
    }
  }

  static async setKeychainCredentials(key: string, value: string) {
    try {
      return Keychain.setInternetCredentials(key, key, value, default_storage_options)
    } catch {
      console.error(`Error setting credentials for ${key}`)
      return false
    }
  }

  static async getGuestSessionId() {
    const guestSession = await Keychain.getInternetCredentials(UserStorageKeys.GUEST_SESSION_ID)
    return guestSession ? guestSession.password : null
  }

  static async setGuestSessionId(guest_session_id: string) {
    return this.setKeychainCredentials(UserStorageKeys.GUEST_SESSION_ID, guest_session_id)
  }

  static async getSessionId() {
    const session = await Keychain.getInternetCredentials(UserStorageKeys.SESSION_ID)
    return session ? session.password : null
  }

  static async setSessionId(session_id: string) {
    return this.setKeychainCredentials(UserStorageKeys.SESSION_ID, session_id)
  }

  static async getAccountId() {
    const account = await Keychain.getInternetCredentials(UserStorageKeys.ACCOUNT_ID)
    return account ? account.password : null
  }

  static async setAccountId(account_id: string) {
    return this.setKeychainCredentials(UserStorageKeys.ACCOUNT_ID, account_id)
  }
}

export default Authentication
