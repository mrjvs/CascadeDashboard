<template>
  <div class="server">
    <div>
      <h1>Server view</h1>
      <div class="nav">
        <router-link to="general">General</router-link><br>
        <router-link to="modlog">Modlog</router-link>
      </div>
      <router-view name="settings"/>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { generateNewToken } from '@/utils/auth';
import Loading from '@/components/Loading.vue';

export default {
  components: {
    Loading,
  },
  created() {
    this.$store.commit('selectedGuild', this.$route.params.id);
    this.$store.commit('getGuildData');
  }
};
</script>
