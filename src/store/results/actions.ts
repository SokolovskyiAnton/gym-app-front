import { ActionTree } from 'vuex'
import { RootInterface } from '../index'
import { StateInterface } from './types'
import { api } from 'boot/axios'

const actions: ActionTree<StateInterface, RootInterface> = {
  async createResult (_, payload) {
    try {
      await api.request(api.urls.results.create, payload)
    } catch (e) {
      console.log(e)
    }
  },
  async updateResult (_, payload) {
    console.log(payload)
    try {
      await api.request(api.urls.results.update, payload)
    } catch (e) {
      console.log(e)
    }
  },
  async deleteResult (_, payload) {
    try {
      await api.request(api.urls.results.delete, payload)
    } catch (e) {
      console.log(e)
    }
  }
}

export default actions
