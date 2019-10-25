<template>
  <button :class="{ spin: loading }" class="refresh-button" v-on:click="refresh"><refresh-cw-icon size="18" />Refresh</button>
</template>

<script>
import { RefreshCwIcon } from 'vue-feather-icons';

export default {
  name: 'refresh-button',
  components: {
    RefreshCwIcon,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    refresh() {
      this.loading = true;
      const start = Date.now();
      this.$store.dispatch('getGuildData', this.$store.getters.selectedGuildId).then(() => {
        const timeout = 500 - (Date.now() - start);
        console.log(timeout);
        if (timeout > 0) {
          setTimeout(() => {
            this.loading = false;
          }, timeout);
        } else {
          this.loading = false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .refresh-button {
    background-color: #36365F;
    border-radius: 3px;
    display: inline-flex;
    color: white;
    padding: .45em 1.2em .45em .8em;
    color: white;
    text-decoration: none;
    align-items: center;
    border: none;
    cursor: pointer;

    &.spin {
      animation: spin .25s ease-out ;
    }

    &:focus, &:visited, &:hover {
      text-decoration: none;
      color: white;
    }

    &:hover {
      background-color: #303052;
    }

    .icon, .feather {
      margin-right: .4em;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
</style>
