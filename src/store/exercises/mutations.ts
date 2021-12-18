import { MutationTree } from 'vuex'
import { IExercise, StateInterface, Mutations } from './types'

const mutations: MutationTree<StateInterface> = {
  [Mutations.SET_EXERCISES] (state, payload: Array<IExercise>) {
    state.exercises = payload
  },
  [Mutations.SET_EXERCISE] (state, payload: IExercise) {
    state.exercise = payload
  },
  [Mutations.SET_NEW_EXERCISE] (state, payload: IExercise) {
    state.exercises.push(payload)
  },
  [Mutations.DELETE_EXERCISE] (state, payload) {
    state.exercises = state.exercises.filter(exercise => exercise._id !== payload.id)
  }
}

export default mutations
