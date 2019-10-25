<template>
  <div class="server">
    <sidebar-container>
      <sidebar backlink="../">
        <sidebar-link to="general"><file-text-icon size="1x"/>General</sidebar-link>
        <sidebar-link to="modlog"><box-icon size="1x"/>Modlog</sidebar-link>
        <save-alert />
      </sidebar>
      <router-view name="settings" />
    </sidebar-container>
  </div>
</template>

<script>
import { FileTextIcon, BoxIcon } from 'vue-feather-icons';
import store from '../store';
import SidebarContainer from '@/components/layout/SidebarContainer.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';
import SidebarLink from '@/components/sidebar/SidebarLink.vue';
import SaveAlert from '@/components/SaveAlert.vue';

export default {
  components: {
    SidebarContainer,
    Sidebar,
    SidebarLink,
    FileTextIcon,
    BoxIcon,
    SaveAlert,
  },
  methods: {
    stopUnsavedUnload(event) {
      if (this.$store.getters.hasChanges) {
        event.preventDefault();
        // eslint-disable-next-line
        event.returnValue = '';
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    next(!this.$store.getters.hasChanges);
  },
  beforeRouteEnter(to, from, next) {
    store.commit('selectedGuild', to.params.id);
    store.dispatch('getGuildData', to.params.id).then(() => {
      next();
    });
  },
  created() {
    this.$store.commit('selectedGuild', this.$route.params.id);
    this.$store.dispatch('getGuildData', this.$store.getters.selectedGuildId);
    window.addEventListener('beforeunload', this.stopUnsavedUnload);
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.stopUnsavedUnload);
  },
};
</script>
