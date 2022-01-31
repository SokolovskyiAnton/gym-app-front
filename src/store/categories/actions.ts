import { ActionTree } from 'vuex'
import { RootInterface } from '../index'
import { ICategories, IDeleteExercise, IEditExercise, IExerciseOfCategory, StateInterface } from './types'
import { api } from 'boot/axios'

const actions: ActionTree<StateInterface, RootInterface> = {
  async getCategories ({ commit }) {
    try {
      const categories = await api.request(api.urls.categories.getAll) as ICategories
      commit('setCategories', categories)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async createExercise ({ commit }, payload: IExerciseOfCategory) {
    try {
      const exercise = await api.request(api.urls.exercises.create, payload) as ICategories
      commit('setExerciseOfCategory', {
        _id: payload._id,
        data: exercise
      })
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async deleteExercise ({ commit }, payload: IDeleteExercise) {
    // TODO implement deleting an exercise from a program
    try {
      await api.request(api.urls.exercises.delete, { _id: payload.exerciseId })
      commit('deleteExerciseOfCategory', payload)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async editExercise ({ commit }, payload: IEditExercise) {
    const data = {
      _id: payload.exerciseId,
      data: {
        title: payload.data.title,
        isOwnWeight: payload.data.isOwnWeight
      }
    }
    try {
      await api.request(api.urls.exercises.update, data)
      commit('updateExerciseOfCategory', payload)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

export default actions
