import { MutationTree } from 'vuex'
import { IUser, StateInterface, Mutations } from './types'

const mutations: MutationTree<StateInterface> = {
  [Mutations.SET_USER] (state, payload: IUser) {
    state.user = payload
  },
  [Mutations.SET_LOGOUT] (state) {
    state.user = null
  }
}

export default mutations
