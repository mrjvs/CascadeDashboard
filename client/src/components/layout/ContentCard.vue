<template>
  <div class="content-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'content-card',
};
</script>

<style lang="scss" scoped>
  .content-card {
    display: block;
    background-color: #1F1F3D;
    border-radius: 10px;
    padding: 2rem;
    margin: 4rem 2rem 2rem 2rem;
    color: white;

    &.twopart {
      display: flex;
      flex-direction: row;
    }
  }
</style>
