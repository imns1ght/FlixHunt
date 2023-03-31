import SecureStorage from './storage'

export enum UserStorageKeys {
  GUEST_SESSION_ID = 'guest_session_id',
  SESSION_ID = 'session_id',
  ACCOUNT_ID = 'account_id',
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

  static clearStorage() {
    try {
      Object.values(UserStorageKeys).map(key => SecureStorage.deleteItem(key))
      return true
    } catch {
      return false
    }
  }

  static setGuestSessionId(guest_session_id: string) {
    return SecureStorage.setItem(UserStorageKeys.GUEST_SESSION_ID, guest_session_id)
  }

  static setSessionId(session_id: string) {
    return SecureStorage.setItem(UserStorageKeys.SESSION_ID, session_id)
  }

  static setAccountId(account_id: string) {
    return SecureStorage.setItem(UserStorageKeys.ACCOUNT_ID, account_id)
  }

  static saveCredentials(session_id: string, account_id: string | number) {
    return Promise.all([
      SecureStorage.setItem(UserStorageKeys.SESSION_ID, session_id),
      SecureStorage.setItem(UserStorageKeys.ACCOUNT_ID, `${account_id}`),
      SecureStorage.deleteItem(UserStorageKeys.GUEST_SESSION_ID),
    ])
  }

  static getSessionId() {
    return SecureStorage.getItem(UserStorageKeys.SESSION_ID)
  }

  static getAccountId() {
    return SecureStorage.getItem(UserStorageKeys.ACCOUNT_ID)
  }

  static getGuestSessionId() {
    return SecureStorage.getItem(UserStorageKeys.GUEST_SESSION_ID)
  }
}

export default Authentication
