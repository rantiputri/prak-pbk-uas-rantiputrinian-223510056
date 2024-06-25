import { createRouter, createWebHistory } from 'vue-router';
import Widget from '../views/Widget.vue';

const routes = [
  {
    path: '/',
    name: 'Widget',
    component: Widget,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
