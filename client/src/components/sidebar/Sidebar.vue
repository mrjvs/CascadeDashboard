<template>
  <div class="sidebar">
    <div class="back">
      <router-link :to="this.$props.backlink"><arrow-left-icon size="18" />Back</router-link>
    </div>
    <server-card />
    <div class="links">
      <slot />
    </div>
  </div>
</template>

<script>
import { ArrowLeftIcon } from 'vue-feather-icons';
import ServerCard from '@/components/other/ServerCard.vue';

export default {
  name: 'sidebar',
  props: {
    backlink: {
      required: true,
    },
  },
  components: {
    ServerCard,
    ArrowLeftIcon,
  },
};
</script>

<style lang="scss" scoped>
  .sidebar {
    background-color: #0F0F2E;
    padding: 1em;
    max-width: 40vw;

    .back a {
      background-color: #36365F;
      border-radius: 3px;
      display: inline-flex;
      color: white;
      padding: .45em 1.2em .45em .8em;
      color: white;
      text-decoration: none;
      align-items: center;

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
  }
</style>
