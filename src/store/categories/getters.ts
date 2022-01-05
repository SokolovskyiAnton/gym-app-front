import { GetterTree } from 'vuex'
import { RootInterface } from '../index'
import { ICategories, StateInterface } from './types'

const getters: GetterTree<StateInterface, RootInterface> = {
  categories (state: StateInterface): Array<ICategories> | [] {
    return state.categories
  },
  category (state): ICategories | null {
    return state.category
  }
}

export default getters
