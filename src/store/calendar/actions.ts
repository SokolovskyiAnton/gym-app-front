import { ActionTree } from 'vuex'
import { RootInterface } from '../index'
import { IAddNewCalendarResult, StateInterface } from './types'
import { api } from 'boot/axios'

const actions: ActionTree<StateInterface, RootInterface> = {
  async getEvents ({ commit }) {
    try {
      const calendar = await api.request(api.urls.calendar.getAll)
      commit('setEvents', calendar)
      return calendar
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
  },
  async deleteResult (_, payload) {
    try {
      await api.request(api.urls.results.delete, payload)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async createResult ({ commit }, payload: IAddNewCalendarResult) {
    try {
      const result = await api.request(api.urls.results.create, payload.result)
      commit('createResult', {
        result: result,
        exerciseId: payload.exerciseId,
        programId: payload.programId
      })
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async updateResult ({ commit }, payload: IAddNewCalendarResult) {
    try {
      const result = await api.request(api.urls.results.update, payload.result)
      commit('updateResult', {
        result: result,
        exerciseId: payload.exerciseId,
        programId: payload.programId
      })
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

export default actions
