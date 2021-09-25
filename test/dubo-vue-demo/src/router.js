import Vue from 'vue';
import Router from 'vue-router';
import Index from 'pages/Index/index.vue';

Vue.use(Router);

export default new Router({
  mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
  base: process.env.NODE_ENV === 'production' ? '/activity/vip2020' : '',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
});
