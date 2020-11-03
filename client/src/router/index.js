import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Currencies from '../views/Currencies.vue'
import Bitcoin from '../components/Bitcoin.vue'
import Ethereum from '../components/Ethereum.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/currencies',
    name: 'Currencies',
    component: Currencies,
    children: [
      {
        path: 'bitcoin',
        name: 'Bitcoin',
        component: Bitcoin,
      },
      {
        path: 'ethereum',
        name: 'Ethereum',
        component: Ethereum,
      },
    ],
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
