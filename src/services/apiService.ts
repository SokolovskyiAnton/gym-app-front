import { Method, ContentType, IData, EndpointConfig, IErrorEvents } from '../api/constans'
import NotificationService from './notifyService'
import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'

export class ApiService {
  config: AxiosRequestConfig
  client: AxiosInstance
  urls: any
  constructor (config: AxiosRequestConfig, urls?: object) {
    this.config = config
    this.client = this.createHttpInstance()
    this.urls = urls
    this.setInterceptors()
  }

  createHttpInstance = (config: AxiosRequestConfig = this.config): AxiosInstance => axios.create(config)

  setInterceptors (config: AxiosInstance = this.client) {
    const requestSuccessInterceptor = (configuration: any): any => {
      const token = localStorage.getItem('token')
      if (token) {
        configuration.headers = {
          Authorization: `Bearer ${token}`
        }
      }
      return configuration
    }

    const responseSuccessInterceptor = (response: AxiosResponse): AxiosResponse => {
      return response
    }
    const errorInterceptor = (error: IErrorEvents) => {
      return Promise.reject(error)
    }

    config.interceptors.request.use(requestSuccessInterceptor, errorInterceptor)
    config.interceptors.response.use(responseSuccessInterceptor, errorInterceptor)
  }

  request<T, K> (endpointConfig: EndpointConfig, payload?: T, params?: K) {
    const { url, method = Method.GET, contentType = ContentType.JSON } = endpointConfig
    const data = payload
    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': contentType
      },
      withCredentials: true,
      url,
      method,
      params,
      data
    }
    const request = this.client.request({ ...this.config, ...config })
    const resolve = (res: IData) => res.data
    const reject = (error: IErrorEvents) => ApiService.dispatchErrorHandling(error)

    return request.then(resolve).catch(reject)
  }

  static displayError (message: string) {
    NotificationService.createNotification(message)
  }

  static dispatchErrorHandling (error: IErrorEvents) {
    const status = error?.response?.status || 404
    const isBadRequest = status === 400
    const isUnauthorized = status === 401
    const isForbidden = status === 403
    const isNotFound = status === 404
    const isServerError = status >= 500

    if (isBadRequest) {
      const message = 'Wrong request.'
      ApiService.displayError(message)
    } else if (isUnauthorized) {
      const message = "Password or email aren't correct."
      ApiService.displayError(message)
    } else if (isForbidden) {
      const message = 'Access is denied.'
      ApiService.displayError(message)
    } else if (isNotFound) {
      const message = 'Not found.'
      ApiService.displayError(message)
    } else if (isServerError) {
      const message = 'Server error.'
      ApiService.displayError(message)
    }
    return Promise.reject(error)
  }
}
