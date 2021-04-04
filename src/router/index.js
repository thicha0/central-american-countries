import Vue from 'vue'
import VueRouter from 'vue-router'
import Map from '@/views/Map.vue'


Vue.use(VueRouter)

const routes = [
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
