import { Module } from 'vuex'
import { RootInterface } from '../index'
import { StateInterface } from './types'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const auth: Module<StateInterface, RootInterface> = {
  namespaced: true,
  getters,
  actions,
  mutations,
  state
}

export default auth
