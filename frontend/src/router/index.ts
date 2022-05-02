import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import TheHome from '@/views/TheHome.vue'
import TheConnector from '@/views/TheConnector.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'TheHome',
    component: TheHome
  },
  {
    path: '/connector',
    name: 'TheConnector',
    component: TheConnector,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
