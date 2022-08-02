import axios from 'axios'

import type { AxiosRequestConfig, AxiosResponse } from 'axios'

const request = axios.create({
  baseURL: 'https://wyy-api-wxy.vercel.app',
  timeout: 10000
})

request.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
})

request.interceptors.response.use((response: AxiosResponse) => {
  return response
})

export default request
