import { MutationTree } from 'vuex'
import { IUser, StateInterface } from './types'

const mutations: MutationTree<StateInterface> = {
  setAuth (state) {
    state.auth = !state.auth
  },
  setUser (state, payload: IUser) {
    state.user = payload
  },
  setLogout (state) {
    state.user = null
  }
}

export default mutations
