import { createRouter, createWebHistory } from 'vue-router';
import Map from '@/views/Map.vue';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'map',
    component: Map,
    meta: {
      title: 'Dashboard'
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
