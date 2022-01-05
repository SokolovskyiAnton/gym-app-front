import { ActionTree } from 'vuex'
import { RootInterface } from '../index'
import { StateInterface } from './types'
import { api } from 'boot/axios'

const actions: ActionTree<StateInterface, RootInterface> = {
  async getEvents ({ commit }) {
    try {
      const calendar = await api.request(api.urls.calendar.getAll)
      commit('setEvents', calendar)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async createEvent ({ commit }) {
    try {
      const calendar = await api.request(api.urls.calendar.create)
      commit('createEvent', calendar)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

export default actions
