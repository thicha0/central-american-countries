import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/views/About.vue'
import Map from '@/views/Map.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '*',
    name: 'map',
    component: Map,
    meta: {
      title: 'Dashboard'
    }
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
