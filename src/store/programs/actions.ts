import { ActionTree } from 'vuex'
import { RootInterface } from '../index'
import { StateInterface } from './types'
import { api } from 'boot/axios'

const actions: ActionTree<StateInterface, RootInterface> = {
  async getPrograms ({ commit }) {
    try {
      const programs = await api.request(api.urls.programs.getAll)
      commit('setPrograms', programs)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async createProgram ({ commit }) {
    try {
      const program = await api.request(api.urls.program.create)
      commit('createProgram', program)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

export default actions
