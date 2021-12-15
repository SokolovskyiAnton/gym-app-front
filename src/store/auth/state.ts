import { StateInterface } from 'src/store/auth/types'

function state (): StateInterface {
  return {
    user: null,
    auth: false
  }
}

export default state
