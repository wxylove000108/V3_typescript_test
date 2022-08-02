import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    redirect: '/login',
    component: () => import('@/pages/index.vue')
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/pages/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router