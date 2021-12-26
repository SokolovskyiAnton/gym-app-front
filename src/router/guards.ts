import Store from 'src/store/index'
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
const store = Store()

export const isGuest = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => store.getters.auth ? next({ name: 'home' }) : next()
