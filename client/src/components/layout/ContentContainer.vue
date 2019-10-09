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
        background-color: #1F1F3D;
    border-radius: 10px;
    padding: 2rem;
    margin: 4rem 2rem 2rem 2rem;
  }
</style>
