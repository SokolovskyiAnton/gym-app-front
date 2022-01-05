import { GetterTree } from 'vuex'
import { RootInterface } from '../index'
import { IProgram, StateInterface } from './types'

const getters: GetterTree<StateInterface, RootInterface> = {
  programs (state: StateInterface): Array<IProgram> {
    return state.programs
  }
}

export default getters
