import { boot } from 'quasar/wrappers'
import { ApiService } from '../services/apiService'
import { urlsApp } from '../api/urls'

const api = new ApiService({ baseURL: 'http://localhost:5005/api/v1/' }, urlsApp)

export default boot(({ app }) => {
  app.config.globalProperties.$api = api
})

export { api }
