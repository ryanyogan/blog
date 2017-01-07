// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import App from './App';

Vue.config.devtools = process.env.NODE_ENV !== 'production';

const app = new Vue(
  Vue.util.extend({ router }, App)
).$mount('#app');

export { app, router };
