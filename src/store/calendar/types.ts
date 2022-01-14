import { IProgram } from 'src/store/programs/types'
import { IResult } from 'src/store/exercises/types'

export interface ICalendarProgram {
  date: string;
  program: IProgram;
  user: string;
  _id: string;
}

export interface IAddNewCalendarResult {
  exerciseId: string;
  programId: string;
  result: IResult;
}

export interface ICalendar {
  events: Array<string>;
  programs: Array<ICalendarProgram>;
}

export interface StateInterface {
  events: Array<string>,
  calendarPrograms: Array<ICalendarProgram>
}

export enum Mutations {
  SET_EVENTS = 'setEvents',
  DELETE_EVENT = 'deleteEvent',
  CREATE_EVENT = 'createEvent',
  UPDATE_EVENT = 'updateEvent',
  CREATE_RESULT = 'createResult',
  UPDATE_RESULT = 'updateResult'
}
