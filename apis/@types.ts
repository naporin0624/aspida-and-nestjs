/* eslint-disable */
export type Home = {
  address: string
  size: string
}

export type User = {
  id: number
  name: string
  homes?: Home[]
}

export type CreateUserDto = {
  name: string
  homes?: Home[]
}
