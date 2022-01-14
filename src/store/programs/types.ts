import { IExercise } from 'src/store/exercises/types'

export interface IProgram {
  title: string;
  exercises: Array<IExercise>
  style: {
    background: string;
    color: string;
  };
  user: string;
  _id: string;
}
export interface StateInterface {
  programs: Array<IProgram>
}

export enum Mutations {
  SET_PROGRAMS = 'setPrograms',
  DELETE_PROGRAM = 'deleteProgram',
  CREATE_PROGRAM = 'createProgram',
  UPDATE_PROGRAM = 'updateProgram'
}
