import { StateInterface } from 'src/store/auth/types'
import { hasAuthCookies } from 'src/helpers/cookies'

function state (): StateInterface {
  return {
    user: null,
    auth: hasAuthCookies()
  }
}

export default state
