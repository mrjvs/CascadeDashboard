import Vue from 'vue';
import Router from 'vue-router';
import ServerComponent from './views/Server.vue';
// import ServerList from './views/ServerList.vue';

import General from './views/server/General.vue';
import Modlog from './views/server/Modlog.vue';

import DashboardTest from './views/test/Dashboard.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'server-list',
      component: DashboardTest, // ServerList,
    },
    {
      path: '/:id',
      name: 'settings',
      redirect: '/:id/general',
      components: {
        default: ServerComponent,
        settings: General,
      },
      children: [
        {
          path: 'modlog',
          components: {
            default: ServerComponent,
            settings: Modlog,
          },
        },
        {
          path: 'general',
          components: {
            default: ServerComponent,
            settings: General,
          },
        },
      ],
    },
  ],
});
