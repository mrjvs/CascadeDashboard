<template>
  <div class="sidebar-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'sidebar-container',
};
</script>

<style lang="scss">
  .sidebar-container {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    .sidebar {
      min-width: 20rem;
    }
  }
</style>
