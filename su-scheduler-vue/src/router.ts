import Vue from 'vue';
import Router from 'vue-router';
import Users from './views/Users.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'users',
      component: Users,
    },
    {
      path: '/meetings',
      name: 'meetings',
      component: () => import('./views/Company.vue'),
    },
    {
      path: '/meetings/:id',
      name: 'meeting',
      component: () => import('./views/Meeting.vue'),
    },
  ],
});
