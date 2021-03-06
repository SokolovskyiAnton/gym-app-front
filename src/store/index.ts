import { InjectionKey } from 'vue'
import auth from './auth'
import categories from './categories'
import calendar from './calendar'
import program from './programs'

import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore
} from 'vuex'

// TODO find info about validation of modules

export interface RootInterface {
  auth: boolean;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<RootInterface>
  }
}

export const storeKey: InjectionKey<VuexStore<RootInterface>> = Symbol('vuex-key')

export default function () {
  const Store = createStore({
    modules: {
      auth,
      categories,
      calendar,
      program
    },
    strict: !!process.env.DEBUGGING
  })

  return Store
}

export function useStore () {
  return vuexUseStore(storeKey)
}
