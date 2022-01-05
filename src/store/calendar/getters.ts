import { GetterTree } from 'vuex'
import { RootInterface } from '../index'
import { ICalendarProgram, StateInterface } from './types'

const getters: GetterTree<StateInterface, RootInterface> = {
  events (state: StateInterface): Array<string> {
    return state.events
  },
  calendarPrograms (state): ICalendarProgram[] {
    return state.calendarPrograms
  }
}

export default getters
