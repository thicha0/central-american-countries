import Vue from 'vue'
import VueRouter from 'vue-router'
import Country from '@/views/Country.vue'
import About from '@/views/About.vue'
import Map from '@/views/Map.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/',
    name: 'map',
    component: Map
  },
  {
    path: '/country/:country',
    name: 'country',
    component: Country
  }
]

const router = new VueRouter({
  routes
})

export default router
