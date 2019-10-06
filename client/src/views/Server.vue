<template>
  <div class="server">
    <sidebar-container>
      <sidebar backlink="../">
        <sidebar-link to="general"><file-text-icon size="1x"/>General</sidebar-link>
        <sidebar-link to="modlog"><box-icon size="1x"/>Modlog</sidebar-link>
      </sidebar>
      <router-view name="settings" />
    </sidebar-container>
  </div>
</template>

<script>
import { FileTextIcon, BoxIcon } from 'vue-feather-icons';
import SidebarContainer from '@/components/layout/SidebarContainer.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';
import SidebarLink from '@/components/sidebar/SidebarLink.vue';

export default {
  components: {
    SidebarContainer,
    Sidebar,
    SidebarLink,
    FileTextIcon,
    BoxIcon,
  },
  created() {
    this.$store.commit('selectedGuild', this.$route.params.id);
    this.$store.dispatch('getGuildData');
  },
};
</script>
