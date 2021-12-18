import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import auth from './auth'
import exercises from './exercises'
import results from './results'

import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore
} from 'vuex'

// TODO find info about validation of modules

export interface RootInterface {
  auth: unknown;
  exercises: unknown;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<RootInterface>
  }
}

export const storeKey: InjectionKey<VuexStore<RootInterface>> = Symbol('vuex-key')

export default store(function () {
  const Store = createStore({
    modules: {
      auth,
      exercises,
      results
    },
    strict: !!process.env.DEBUGGING
  })

  return Store
})

export function useStore () {
  return vuexUseStore(storeKey)
}
