import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import auth from './auth'
import exercises from './exercises'

import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore
} from 'vuex'

export interface RootInterface {
  example: unknown
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<RootInterface>
  }
}

export const storeKey: InjectionKey<VuexStore<RootInterface>> = Symbol('vuex-key')

export default store(function (/* { ssrContext } */) {
  const Store = createStore<RootInterface>({
    modules: {
      auth,
      exercises
    },
    strict: !!process.env.DEBUGGING
  })

  return Store
})

export function useStore () {
  return vuexUseStore(storeKey)
}
