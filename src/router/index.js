import Vue from 'vue'
import VueRouter from 'vue-router'
import Expand from '@/views/Expand.vue'
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/expand',
    name: 'expand',
    component: Expand
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

export default router
