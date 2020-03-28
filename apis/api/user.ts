/* eslint-disable */
import * as Types from '../@types'

export interface Methods {
  get: {
    resBody: Types.User
  }

  post: {
    resBody: Types.User
    reqBody: Types.CreateUserDto
  }
}
