import { GetterTree } from 'vuex'
import { RootInterface } from '../index'
import { IExercise, StateInterface } from './types'

const getters: GetterTree<StateInterface, RootInterface> = {
  exercises (state): Array<IExercise> | [] {
    return state.exercises
  }
}

export default getters
