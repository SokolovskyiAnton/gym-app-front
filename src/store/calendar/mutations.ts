import { MutationTree } from 'vuex'
import { StateInterface, Mutations, ICalendar, ICalendarProgram, IAddNewCalendarResult } from './types'

const mutations: MutationTree<StateInterface> = {
  [Mutations.SET_EVENTS] (state, payload: ICalendar) {
    state.events = payload.events
    state.calendarPrograms = payload.programs
  },
  [Mutations.CREATE_EVENT] (state, payload: ICalendarProgram) {
    state.events.push(payload.date)
    state.calendarPrograms.push(payload)
  },
  [Mutations.CREATE_RESULT] (state, payload: IAddNewCalendarResult) {
    const calendarProgram = state.calendarPrograms.find(program => program._id === payload.programId)
    const calendarExercise = calendarProgram?.program.exercises.find(exercise => exercise._id === payload.exerciseId)
    if (calendarExercise) {
      calendarExercise.results.push(payload.result)
    }
  },
  [Mutations.UPDATE_RESULT] (state, payload: IAddNewCalendarResult) {
    const calendarProgram = state.calendarPrograms.find(program => program._id === payload.programId)
    const calendarExercise = calendarProgram?.program.exercises.find(exercise => exercise._id === payload.exerciseId)
    const calendarResults = calendarExercise?.results.find(result => result._id === payload.result._id)
    if (calendarResults) {
      calendarResults.results = payload.result.results
    }
  }
  // [Mutations.DELETE_EVENT] (state, payload: ICalendarProgram) {
  //
  // },
  // [Mutations.UPDATE_EVENT] (state, payload: ICalendarProgram) {
  //
  // }
}

export default mutations
