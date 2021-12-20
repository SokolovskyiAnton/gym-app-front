import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'mainLayout',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Home.vue') }
    ]
  },
  {
    path: '/auth/',
    name: 'emptyLayout',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: 'login', name: 'login', component: () => import('pages/Login.vue') },
      { path: 'signup', name: 'signup', component: () => import('pages/Registration.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
