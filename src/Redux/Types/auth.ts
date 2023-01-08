export type RegisterUserData = {
  token_name: string,
  email: string,
  password: string
}

export type RegisterUserPayload = {
  data: RegisterUserData,
  callback: () => void,
}
