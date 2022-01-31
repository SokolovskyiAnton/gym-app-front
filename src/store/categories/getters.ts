import { GetterTree } from 'vuex'
import { RootInterface } from '../index'
import { ICategories, StateInterface } from './types'

const getters: GetterTree<StateInterface, RootInterface> = {
  categories (state: StateInterface): Array<ICategories> | [] {
    return state.categories
  },
  quantityOfExercises (state: StateInterface): number {
    let count = 0
    for (let i = 0; i < state.categories.length; i++) {
      count += state.categories[i].exercises.length
    }
    return count
  }
}

export default getters
