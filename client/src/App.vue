<template>
    <div id="app">
        <router-view v-if="isAuthed === true"/>
        <Login v-else-if="isAuthed === false"/>
        <Loading v-else/>
    </div>
</template>

<script>
import Loading from '@/components/Loading.vue';
import Login from '@/components/Login.vue';
import { isAuthenticated } from '@/auth';

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
    isAuthenticated().then((res) => {
      this.isAuthed = res;
    }).catch(() => {
      this.isAuthed = false;
    });
  },
};
</script>


<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
