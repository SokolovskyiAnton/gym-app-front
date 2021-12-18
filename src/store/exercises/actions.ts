import { ActionTree } from 'vuex'
import { RootInterface } from '../index'
import { IExercise, StateInterface } from './types'
import { api } from 'boot/axios'

const actions: ActionTree<StateInterface, RootInterface> = {
  async getExercises ({ commit }) {
    try {
      const exercises = await api.request(api.urls.exercises.getAll) as IExercise
      commit('setExercises', exercises)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async getExercise ({ commit }, params) {
    try {
      const exercise = await api.request(api.urls.exercises.get, {}, params)
      commit('setExercise', exercise)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async createExercise ({ commit }, payload) {
    try {
      const exercise = await api.request(api.urls.exercises.create, payload)
      commit('setNewExercise', exercise)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async updateExercise (_, payload) {
    try {
      await api.request(api.urls.exercises.update, payload)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async deleteExercise ({ commit }, payload) {
    try {
      await api.request(api.urls.exercises.delete, payload)
      commit('deleteExercise', payload)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

export default actions
