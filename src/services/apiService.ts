import { Method, ContentType } from '../api/constans'
import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'

interface IData {
  data: object | [];
}
interface IResponseDataParams {
  data: IData;
}
interface EndpointConfig {
  url: string;
  method?: Method;
  contentType?: ContentType;
  paginated?: boolean;
}

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
      configuration.headers = {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: `Bearer ${token}`
      }
      return configuration
    }

    const responseSuccessInterceptor = (response: AxiosResponse): AxiosResponse => {
      return response
    }
    const errorInterceptor = (error: ErrorEvent) => {
      return Promise.reject(error)
    }

    config.interceptors.request.use(requestSuccessInterceptor, errorInterceptor)
    config.interceptors.response.use(responseSuccessInterceptor, errorInterceptor)
  }

  request<T, K> (endpointConfig: EndpointConfig, payload?: T, params?: K) {
    const {
      url, method = Method.GET, contentType = ContentType.JSON
    } = endpointConfig

    const data = payload
    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': contentType
      },
      url,
      method,
      params,
      data
    }
    const request = this.client.request({ ...this.config, ...config })
    const resolve = (res: IResponseDataParams) => res.data
    const reject = (error: ErrorEvent) => Promise.reject(error)

    return request.then(resolve).catch(reject)
  }
}
