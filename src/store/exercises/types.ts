import { IData } from 'src/api/constans'

export interface IResult {
  date: string;
  quantity: object;
  _id: string;
}
export interface IExercise extends IData {
  title: string;
  results: Array<IResult>;
  user: string;
  _id: string;
}
export interface StateInterface {
  exercises: Array<IExercise>,
  exercise: IExercise | null
}

export enum Mutations {
  SET_EXERCISES = 'setExercises',
  SET_EXERCISE = 'setExercise',
  DELETE_EXERCISE = 'deleteExercise',
  SET_NEW_EXERCISE = 'setNewExercise'
}
