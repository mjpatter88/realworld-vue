import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "about" */ './views/Settings.vue'),
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import(/* webpackChunkName: "about" */ './views/EditArticle.vue'),
    },
    {
      path: '/article',
      name: 'article',
      component: () => import(/* webpackChunkName: "about" */ './views/Article.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "about" */ './views/Profile.vue'),
    },
  ],
});
