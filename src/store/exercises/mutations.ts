import { MutationTree } from 'vuex'
import { IExercise, StateInterface } from './types'

const mutations: MutationTree<StateInterface> = {
  setExercises (state, payload: Array<IExercise>) {
    state.exercises = payload
  },
  setExercise (state, payload: IExercise) {
    state.exercise = payload
  },
  setNewExercise (state, payload: IExercise) {
    state.exercises.push(payload)
  },
  deleteExercise (state, payload) {
    state.exercises = state.exercises.filter(exercise => exercise._id !== payload.id)
  }
}

export default mutations
