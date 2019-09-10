<template>
  <div class="content-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'content-container',
};
</script>

<style lang="scss" scoped>
  .content-container {
    flex: 1;
  }
</style>
