import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    redirect: '/home',
    component: () => import('@/pages/index.vue'),
    children: [
      {
        name: 'HomePage',
        path: 'home',
        component: () => import('@/pages/Home/home.vue')
      },
      {
        name: 'findPage',
        path: 'find',
        component: () => import('@/pages/find/find.vue')
      }
    ]
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
