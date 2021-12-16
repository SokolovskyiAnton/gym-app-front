import { Module } from 'vuex'
import { RootInterface } from '../index'
import { StateInterface } from './types'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const exercises: Module<StateInterface, RootInterface> = {
  namespaced: false,
  getters,
  actions,
  mutations,
  state
}

export default exercises
