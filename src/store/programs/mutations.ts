import { MutationTree } from 'vuex'
import { StateInterface, Mutations, IProgram } from './types'

const mutations: MutationTree<StateInterface> = {
  [Mutations.SET_PROGRAMS] (state, payload: IProgram[]) {
    state.programs = payload
  },
  [Mutations.CREATE_PROGRAM] (state, payload: IProgram) {
    state.programs.push(payload)
  }
  // [Mutations.DELETE_PROGRAM] (state, payload: IProgram) {
  //
  // },
  // [Mutations.UPDATE_PROGRAM] (state, payload: IProgram) {
  //
  // }
}

export default mutations
