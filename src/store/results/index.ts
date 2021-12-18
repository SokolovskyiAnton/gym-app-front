import { Module } from 'vuex'
import { RootInterface } from '../index'
import actions from './actions'

const results: Module<RootInterface, RootInterface> = {
  namespaced: false,
  actions
}

export default results
