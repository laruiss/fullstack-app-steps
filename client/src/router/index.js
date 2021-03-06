import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Currencies from '../views/Currencies.vue'
import LoginForm from '../views/LoginForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter (to, from, next) {
      const token = localStorage.getItem('token')
      if (token) {
        next(true)
        return
      }
      next({ name: 'Login' })
    },
  },
  {
    path: '/currencies/:slug',
    name: 'Currencies',
    component: Currencies,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
