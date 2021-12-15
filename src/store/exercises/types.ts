import { IData } from 'src/services/apiService'

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
  exercises: Array<IExercise>
}
