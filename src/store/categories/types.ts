import { IData } from 'src/api/constans'
import { IExercise } from '../exercises/types'
export interface IExerciseOfCategory {
  _id: string;
  data: IExercise;
}
export interface ICategories extends IData {
  title: string;
  exercises: Array<IExercise>;
  svg: string;
  isTimer: boolean;
  _id: string;
}
export interface StateInterface {
  categories: Array<ICategories>,
  category: ICategories | null
}

export enum Mutations {
  SET_CATEGORIES = 'setCategories',
  SET_CATEGORY = 'setCategory',
  SET_EXERCISE_OF_CATEGORY = 'setExerciseOfCategory'
}
