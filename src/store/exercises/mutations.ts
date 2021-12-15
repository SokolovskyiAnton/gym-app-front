import { MutationTree } from 'vuex'
import { IExercise, StateInterface } from './types'

const mutations: MutationTree<StateInterface> = {
  setExercises (state, payload: Array<IExercise>) {
    state.exercises = payload
  }
}

export default mutations
