import SecureStorage from './storage'

export enum UserStorageKeys {
  GUEST_SESSION_ID = 'guest_session_id',
  SESSION_ID = 'session_id',
  ACCOUNT_ID = 'account_id',
}

class Authentication {
  static async isUserLogged() {
    const session = await SecureStorage.getItem(UserStorageKeys.SESSION_ID)
    const account = await SecureStorage.getItem(UserStorageKeys.ACCOUNT_ID)
    const guest = await SecureStorage.getItem(UserStorageKeys.GUEST_SESSION_ID)
    return (!!session && !!account) || !!guest
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
    ])
  }
}

export default Authentication
