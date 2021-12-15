import { GetterTree } from 'vuex'
import { RootInterface } from '../index'
import { IUser, StateInterface } from './types'

const getters: GetterTree<StateInterface, RootInterface> = {
  user (state): IUser | null {
    return state.user
  },
  auth (state): boolean {
    return state.auth
  }
}

export default getters
