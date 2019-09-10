<template>
  <div class="server">
    <sidebar-container>
      <sidebar backlink="../">
        <sidebar-link to="general" text="General" />
        <sidebar-link to="modlog" text="Modlog" />
      </sidebar>
      <router-view name="settings" />
    </sidebar-container>
  </div>
</template>

<script>
import SidebarContainer from '@/components/layout/SidebarContainer.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';
import SidebarLink from '@/components/sidebar/SidebarLink.vue';

export default {
  components: {
    SidebarContainer,
    Sidebar,
    SidebarLink,
  },
  created() {
    this.$store.commit('selectedGuild', this.$route.params.id);
    this.$store.dispatch('getGuildData');
  },
};
</script>
