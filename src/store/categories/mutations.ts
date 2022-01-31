import { MutationTree } from 'vuex'
import { StateInterface, Mutations, ICategories, IExerciseOfCategory, IDeleteExercise, IEditExercise } from './types'

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
  },
  [Mutations.DELETE_EXERCISE_OF_CATEGORY] (state, payload: IDeleteExercise) {
    const category = state.categories.find(category => category._id === payload.categoryId)
    if (category) {
      category.exercises = category.exercises.filter(exercise => exercise._id !== payload.exerciseId)
    }
  },
  [Mutations.UPDATE_EXERCISE_OF_CATEGORY] (state, payload: IEditExercise) {
    const category = state.categories.find(category => category._id === payload.categoryId)
    const exercise = category?.exercises.find(exercise => exercise._id === payload.exerciseId)
    if (category && exercise) {
      category.exercises.splice(category.exercises.findIndex(exercise => exercise._id === payload.exerciseId), 1, { ...exercise, ...payload.data })
    }
  }
}

export default mutations
