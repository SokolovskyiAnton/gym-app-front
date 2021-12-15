import { ActionTree } from 'vuex'
import { RootInterface } from '../index'
import { IRefreshToken, IUser, LoginResponse, StateInterface } from './types'
import { api } from 'boot/axios'

const actions: ActionTree<StateInterface, RootInterface> = {
  async login ({ commit }, payload: LoginResponse) {
    try {
      const user = await api.request(api.urls.auth.login, payload) as IUser
      localStorage.setItem('token', user.accessToken)
      // document.cookie = `name=${user.refreshToken}`
      // console.log(document.cookie)
      commit('setUser', user)
      return user
    } catch (e) {
      console.log(e)
    }
  },
  async refresh () {
    try {
      const token = await api.request(api.urls.auth.refresh) as IRefreshToken
      console.log(token)
      localStorage.setItem('token', token.accessToken)
    } catch (e) {

    }
  }
}

export default actions
