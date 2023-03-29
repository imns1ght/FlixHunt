type AuthBaseType = {
  success: boolean
  expires_at: string
}

export type createRequestTokenResponse = AuthBaseType & {
  request_token: string
}

export type createGuestSessionResponse = AuthBaseType & {
  guest_session_id: string
}

export type createSessionResponse = {
  success: boolean
  session_id: string
}

export type createSessionWithLoginResponse = AuthBaseType & {
  request_token: string
}
