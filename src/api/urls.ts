import { ContentType, Method } from './constans'

export const urlsApp = {
  auth: {
    login: {
      url: 'auth/login',
      method: Method.POST,
      contentType: ContentType.JSON
    },
    signup: {
      url: 'auth/signup',
      method: Method.POST,
      contentType: ContentType.JSON
    },
    logout: {
      url: 'auth/logout',
      method: Method.POST
    },
    refresh: {
      url: 'auth/refresh',
      method: Method.POST
    },
    forgot_password: {
      url: 'auth/forgot-password',
      method: Method.POST
    },
    reset_password: {
      url: 'auth/reset-password',
      method: Method.POST
    }
  },
  exercises: {
    getAll: {
      url: '/exercises',
      method: Method.GET
    },
    create: {
      url: '/exercises',
      method: Method.POST
    },
    get: {
      url: '/exercises/exercise',
      method: Method.GET
    },
    update: {
      url: '/exercises',
      method: Method.PUT
    },
    delete: {
      url: '/exercises',
      method: Method.DELETE
    }
  },
  results: {
    getAll: {
      url: '/results',
      method: Method.GET
    },
    create: {
      url: '/results',
      method: Method.POST
    },
    get: {
      url: '/results',
      method: Method.GET
    },
    update: {
      url: '/results',
      method: Method.PUT
    },
    delete: {
      url: '/results',
      method: Method.DELETE
    }
  }
}
