import { Module } from 'vuex'
import { RootInterface } from '../index'
import { StateInterface } from './types'
import actions from './actions'

const results: Module<StateInterface, RootInterface> = {
  namespaced: false,
  actions
}

export default results
