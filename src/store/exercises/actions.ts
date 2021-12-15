import { ActionTree } from 'vuex'
import { RootInterface } from '../index'
import { IExercise, StateInterface } from './types'
import { api } from 'boot/axios'

const actions: ActionTree<StateInterface, RootInterface> = {
  async getExercises () {
    try {
      const exercises = await api.request(api.urls.exercises.getAll) as IExercise
      console.log(exercises, 'dsdssd')
    } catch (e) {
      console.log(e)
    }
  }
}

export default actions
