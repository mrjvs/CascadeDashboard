<template>
    <div class="content-grid">
        <slot />
    </div>
</template>

<script>
export default {
  name: 'content-grid',
};
</script>

<style lang="scss" scoped>
  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
</style>
