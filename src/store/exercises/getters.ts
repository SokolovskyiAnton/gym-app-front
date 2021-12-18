import { GetterTree } from 'vuex'
import { RootInterface } from '../index'
import { IExercise, StateInterface } from './types'

const getters: GetterTree<StateInterface, RootInterface> = {
  exercises (state: StateInterface): Array<IExercise> | [] {
    return state.exercises
  },
  exercise (state): IExercise | null {
    return state.exercise
  }
}

export default getters
