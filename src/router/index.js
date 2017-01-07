import Vue from 'vue';
import VueRouter from 'vue-router';

import ListView from '../components/ListView';
import PostView from '../components/PostView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'list',
    component: ListView,
  },
  {
    path: '/post/:hash',
    name: 'post',
    component: PostView,
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
