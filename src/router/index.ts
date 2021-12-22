import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'
import routes from './routes'
import { Cookies } from 'quasar'

export default function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(
      process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE
    )
  })
  Router.beforeEach((to, from, next) => {
    const currentUser = Cookies.has('token')
    const requireAuth = to.matched.some(m => m.meta.auth)
    if (!currentUser && requireAuth) {
      next({ name: 'login' })
    } else {
      next()
    }
  })
  return Router
}
