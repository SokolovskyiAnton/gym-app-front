import { MutationTree } from 'vuex'
import { StateInterface, Mutations, ICategories, IExerciseOfCategory } from './types'

const mutations: MutationTree<StateInterface> = {
  [Mutations.SET_CATEGORIES] (state, payload: Array<ICategories>) {
    state.categories = payload
  },
  [Mutations.SET_CATEGORY] (state, payload: ICategories) {
    state.category = payload
  },
  [Mutations.SET_EXERCISE_OF_CATEGORY] (state, payload: IExerciseOfCategory) {
    const category = state.categories.find(category => category._id === payload._id)
    if (category) {
      category.exercises.push(payload.data)
    }
  }
}

export default mutations
