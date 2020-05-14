import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import store from '@/store'

import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import Profile from '../views/Profile.vue'
import Order from '../views/Order.vue'

export const lazyComponent = (name: string) => () => import(`@/components/${name}.vue`)
  .then(m => m.default)

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const unrestrictedPaths = ['home', 'signin', 'signup']
  const resticredPaths = ['order', 'profile']
  if (unrestrictedPaths.includes(to.name as string)) return next()
  if (resticredPaths.includes(to.name as string) && store.getters.token.length) return next()
  return next({ name: 'signin' })
})

export default router
