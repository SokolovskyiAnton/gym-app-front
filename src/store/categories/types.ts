import { IData } from 'src/api/constans'

// TODO edit interfaces for edit and delete exercise

export interface IResults {
  distance: number;
  duration: number;
  repetition: number;
  weight: number;
}

export interface IResult {
  date?: string;
  results: IResults[];
  _id: string;
}

export interface IExercise extends IData {
  title: string;
  results: Array<IResult>;
  user: string;
  isTimer: boolean;
  isOwnWeight: boolean;
  _id: string;
}

export interface IExerciseOfCategory {
  _id: string;
  data: IExercise;
}
export interface IDeleteExercise {
  exerciseId: string;
  categoryId: string;
}
export interface IEditExercise {
  exerciseId: string;
  categoryId: string;
  data: {
    title: string;
    isOwnWeight: boolean;
  }
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
  SET_EXERCISE_OF_CATEGORY = 'setExerciseOfCategory',
  DELETE_EXERCISE_OF_CATEGORY = 'deleteExerciseOfCategory',
  UPDATE_EXERCISE_OF_CATEGORY = 'updateExerciseOfCategory'
}
