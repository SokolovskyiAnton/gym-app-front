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
      url: '/exercises/:id',
      method: Method.GET
    },
    update: {
      url: '/exercises/:id',
      method: Method.PUT
    },
    delete: {
      url: '/exercises/:id',
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
      url: '/results/:id',
      method: Method.GET
    },
    update: {
      url: '/results/:id',
      method: Method.PUT
    },
    delete: {
      url: '/results/:id',
      method: Method.DELETE
    }
  }
}
