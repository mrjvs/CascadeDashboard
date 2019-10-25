<template>
  <div id="app">
    <router-view :key="$route.fullPath" v-if="isAuthed === true" />
    <Loading v-else />
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';
import { isAuthenticated } from '@/utils/auth';

export default {
  components: {
    Loading,
  },
  data() {
    return {
      isAuthed: true,
    };
  },
  created() {
    // do auth check
    /*isAuthenticated()
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
      });*/
  },
};
</script>

<style lang="scss">
  #app {
    font-family: "Aileron", Helvetica, Arial, sans-serif;
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
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  h1 {
    margin: .5rem 0 2rem 0;
  }
</style>
