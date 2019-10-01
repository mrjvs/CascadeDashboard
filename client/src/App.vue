<template>
  <div id="app">
    <router-view v-if="isAuthed === true" />
    <Login v-else-if="isAuthed === false" />
    <Loading v-else />
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';
import Login from '@/components/Login.vue';
import { isAuthenticated } from '@/utils/auth';

export default {
  components: {
    Loading,
    Login,
  },
  data() {
    return {
      isAuthed: null,
    };
  },
  created() {
    // do auth check
    isAuthenticated()
      .then((res) => {
        if (res !== true) {
          window.location = process.env.VUE_APP_API_LOGIN;
        }
        this.isAuthed = res;
        this.$store.commit('setLoading', false);
      })
      .catch(() => {
        window.location = process.env.VUE_APP_API_LOGIN;
        this.$store.commit('setLoading', false);
      });
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #181836;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
  font-size: 1em;
  background-color: #181836;
}
</style>
