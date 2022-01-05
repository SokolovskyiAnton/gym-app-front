import { MutationTree } from 'vuex'
import { StateInterface, Mutations, ICalendar, ICalendarProgram } from './types'

const mutations: MutationTree<StateInterface> = {
  [Mutations.SET_EVENTS] (state, payload: ICalendar) {
    state.events = payload.events
    state.calendarPrograms = payload.programs
  },
  [Mutations.CREATE_EVENT] (state, payload: ICalendarProgram) {
    state.events.push(payload.date)
    state.calendarPrograms.push(payload)
  }
  // [Mutations.DELETE_EVENT] (state, payload: ICalendarProgram) {
  //
  // },
  // [Mutations.UPDATE_EVENT] (state, payload: ICalendarProgram) {
  //
  // }
}

export default mutations
