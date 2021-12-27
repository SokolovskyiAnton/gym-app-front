import { ActionTree } from 'vuex'
import { RootInterface } from '../index'
import { IRefreshToken, IUser, LoginResponse, SignUpForm, StateInterface } from './types'
import { api } from 'boot/axios'
import { Cookies } from 'quasar'
import { $router } from 'src/boot/router'

// TODO validator of password
// TODO implement CAPTCHA
const actions: ActionTree<StateInterface, RootInterface> = {
  async getProfile ({ commit }) {
    try {
      const user = await api.request(api.urls.auth.get_profile)
      commit('setUser', user)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async login ({ commit }, payload: LoginResponse) {
    try {
      const user = await api.request(api.urls.auth.login, payload) as IUser
      localStorage.setItem('token', user.accessToken)
      commit('setUser', user)
      commit('setAuth')
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async signup (_, payload: SignUpForm) {
    try {
      await api.request(api.urls.auth.signup, payload)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async logout ({ commit }) {
    try {
      await api.request(api.urls.auth.logout)
      localStorage.removeItem('token')
      Cookies.remove('token')
      commit('setLogout')
    } catch (e) {
      return Promise.reject(e)
    } finally {
      $router.push({ name: 'login' })
    }
  },
  async refresh () {
    try {
      const token = await api.request(api.urls.auth.refresh) as IRefreshToken
      localStorage.setItem('token', token.accessToken)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async forgotPassword (_, payload) {
    try {
      await api.request(api.urls.auth.forgot_password, payload)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async resetPassword (_, payload) {
    try {
      await api.request(api.urls.auth.reset_password, payload)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

export default actions
