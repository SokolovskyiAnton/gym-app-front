import { ActionTree } from 'vuex'
import { RootInterface } from '../index'
import { ICategories, StateInterface } from './types'
import { api } from 'boot/axios'

const actions: ActionTree<StateInterface, RootInterface> = {
  async getCategories ({ commit }) {
    try {
      const categories = await api.request(api.urls.categories.getAll) as ICategories
      commit('setCategories', categories)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

export default actions
