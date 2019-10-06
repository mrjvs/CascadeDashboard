<template>
  <div class="sidebar-link">
    <router-link class="router-link" :to="this.$props.to"><slot /></router-link>
  </div>
</template>

<script>
export default {
  name: 'sidebar-link',
  props: {
    to: {
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .sidebar-link .router-link {
    display: flex;
    padding: .6em 1em;
    border-radius: 3px;
    color: #847EAA;
    text-decoration: none;
    margin-bottom: .1em;
    align-items: center;

    &.router-link-active {
      background-color: #282848;
      color: white;
      text-decoration: none;
    }

    &:hover {
      color: white;
      text-decoration: none;
    }

    .feather, .icon {
      margin-right: .5em;
    }
  }
</style>
