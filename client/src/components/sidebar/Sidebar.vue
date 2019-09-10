<template>
  <div class="sidebar">
    <div class="back">
      <router-link :to="this.$props.backlink">Back</router-link>
    </div>
    <server-card />
    <div class="links">
      <slot />
    </div>
  </div>
</template>

<script>
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
  },
};
</script>

<style lang="scss" scoped>
  .sidebar {
    background-color: #0F0F2E;
    padding: 1em;

    .back {
      background-color: #36365F;
      border-radius: 3px;
      display: inline-block;
      color: white;
      padding: .45em 1.5em;

      a {
        color: white;
        text-decoration: none;

        &:focus, &:visited, &:hover {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
</style>
