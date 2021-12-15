import { MutationTree } from 'vuex'
import { IUser, StateInterface } from './types'

const mutations: MutationTree<StateInterface> = {
  setAuth (state, payload: boolean) {
    state.auth = !payload
  },
  setUser (state, payload: IUser) {
    state.user = payload
  }
}

export default mutations
