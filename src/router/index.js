import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/users',
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/UsersList.vue'),
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('../views/UserProfile.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
