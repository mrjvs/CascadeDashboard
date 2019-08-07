<template>
  <div class="server">
    <Loading v-if="$apollo.loading"/>
    <div v-else-if="error">An error occured. Please try again later</div>
    <div v-else-if="guild && guild.empty !== true">
      <h1>Server view</h1>
      <div class="nav">
        <router-link to="general">General</router-link><br>
        <router-link to="modlog">Modlog</router-link>
      </div>
      <router-view name="settings" :guild="guild"/>
    </div>
    <div v-else>Not found</div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import Loading from '@/components/Loading.vue';

export default {
  components: {
    Loading,
  },
  data() {
    return {
      guild: {
        empty: true,
      },
      error: null,
    };
  },
  apollo: {
    guild: {
      query: gql`
        query guild($id: Long!) {
          guild(id: $id) {
            memberCount
          }
        }
      `,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
      error(error) {
        this.error = error;
      },
    },
  },
};
</script>
