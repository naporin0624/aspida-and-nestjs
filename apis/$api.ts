/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from './api/index'
import { Methods as Methods1 } from './api/user'

const api = <T>(client: AspidaClient<T>) => {
  const prefix = (client.baseURL === undefined ? 'http://localhost:3000/' : client.baseURL).replace(/\/$/, '')

  return {
    api: {
      user: {
        get: (option?: { config?: T }) =>
          client.fetch<Methods1['get']['resBody']>(prefix, '/api/user', 'GET', option).json(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<Methods1['get']['resBody']>(prefix, '/api/user', 'GET', option).json()).data,
        post: (option: { data: Methods1['post']['reqBody'], config?: T }) =>
          client.fetch<Methods1['post']['resBody']>(prefix, '/api/user', 'POST', option).json(),
        $post: async (option: { data: Methods1['post']['reqBody'], config?: T }) =>
          (await client.fetch<Methods1['post']['resBody']>(prefix, '/api/user', 'POST', option).json()).data
      },
      get: (option?: { config?: T }) =>
        client.fetch<Methods0['get']['resBody']>(prefix, '/api', 'GET', option).text(),
      $get: async (option?: { config?: T }) =>
        (await client.fetch<Methods0['get']['resBody']>(prefix, '/api', 'GET', option).text()).data
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
