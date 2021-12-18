import { ActionTree } from 'vuex'
import { RootInterface } from '../index'
import { IRefreshToken, IUser, LoginResponse, SignUpForm, StateInterface } from './types'
import { api } from 'boot/axios'

const actions: ActionTree<StateInterface, RootInterface> = {
  async login ({ commit }, payload: LoginResponse) {
    try {
      const user = await api.request(api.urls.auth.login, payload) as IUser
      localStorage.setItem('token', user.accessToken)
      commit('setUser', user)
      commit('setAuth')
      return user
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
      commit('setLogout')
      commit('setAuth')
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async refresh () {
    try {
      const token = await api.request(api.urls.auth.refresh) as IRefreshToken
      localStorage.setItem('token', token.accessToken)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

export default actions
