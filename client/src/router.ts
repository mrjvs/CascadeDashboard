import Vue from 'vue';
import Router from 'vue-router';
import ServerSelect from './views/ServerSelect.vue';
import ServerSettings from './views/ServerSettings.vue';
import ServerSettingsGeneral from './views/ServerSettingsGeneral.vue';
import ServerSettingsModlog from './views/ServerSettingsModlog.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'serverSelect',
      component: ServerSelect,
    },
    {
      path: '/configure/:id',
      name: 'configure',
      redirect: '/configure/:id/general',
      components: {
        default: ServerSettings,
        serverSettingsContent: ServerSettingsGeneral,
      },
      children: [
        {
          path: 'modlog',
          components: {
            default: ServerSettings,
            serverSettingsContent: ServerSettingsModlog,
          },
        },
        {
          path: 'general',
          components: {
            default: ServerSettings,
            serverSettingsContent: ServerSettingsGeneral,
          },
        },
      ],
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(webpackChunkName: "about" './views/About.vue'),
    },*/
  ],
});
