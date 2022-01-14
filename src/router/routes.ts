import { RouteRecordRaw } from 'vue-router'
import { isGuest } from 'src/router/guards'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'mainLayout',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', meta: { auth: true }, component: () => import('pages/Home.vue') },
      { path: '/data', name: 'data-base', meta: { auth: true }, component: () => import('pages/DataBase.vue') }
    ]
  },
  {
    path: '/auth/',
    name: 'emptyLayout',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: 'login', name: 'login', component: () => import('pages/Login.vue') },
      { path: 'signup', name: 'signup', component: () => import('pages/Registration.vue') },
      {
        path: 'forgot-password',
        name: 'forgot-password',
        component: () => import('pages/ForgotPassword.vue'),
        beforeEnter: isGuest
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
