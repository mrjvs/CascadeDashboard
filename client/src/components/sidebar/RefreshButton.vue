<template>
  <button class="refresh-button" v-on:click="refresh"><refresh-cw-icon size="18" />Refresh</button>
</template>

<script>
import { RefreshCwIcon } from 'vue-feather-icons';

export default {
  name: 'refresh-button',
  components: {
    RefreshCwIcon,
  },
  methods: {
    refresh() {
      this.$store.dispatch('getGuildData', this.$store.getters.selectedGuildId);
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
</style>
