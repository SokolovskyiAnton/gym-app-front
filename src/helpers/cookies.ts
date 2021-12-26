import { Cookies } from 'quasar'

export const hasAuthCookies = () => Cookies.has('token')
