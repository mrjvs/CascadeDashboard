<template>
  <div class="server">
    <div>
      <h1>Server view</h1>
      <div class="nav">
        <router-link to="general">General</router-link><br>
        <router-link to="modlog">Modlog</router-link>
      </div>
      <router-view name="settings"/>
      <SaveAlert/>
    </div>
  </div>
</template>

<script>
import SaveAlert from '@/components/SaveAlert.vue';

export default {
  components: {
    SaveAlert,
  },
  created() {
    this.$store.commit('selectedGuild', this.$route.params.id);
    this.$store.dispatch('getGuildData');
  },
};
</script>
