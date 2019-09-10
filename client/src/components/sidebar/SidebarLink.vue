<template>
  <div class="sidebar-link">
    <router-link :to="this.$props.to">{{ this.$props.text }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'sidebar-link',
  props: {
    to: {
      required: true,
    },
    text: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .sidebar-link a {
    display: block;
    padding: .5em 1em;
    border-radius: 3px;
    color: #847EAA;
    text-decoration: none;
    margin-bottom: .1em;

    &.router-link-active {
      background-color: #282848;
      color: white;
      text-decoration: none;
    }

    &:hover {
      color: white;
      text-decoration: none;
    }
  }
</style>
