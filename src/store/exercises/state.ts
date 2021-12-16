import { StateInterface } from 'src/store/exercises/types'

function state (): StateInterface {
  return {
    exercises: [],
    exercise: null
  }
}

export default state
