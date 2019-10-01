<template>
  <button class="cascade-button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'cascade-button',
};
</script>

<style lang="scss" scoped>
  .cascade-button {
    background-color: #24B69E;
    color: white;
    padding: .7em 3em;
    border-radius: 5em;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #1E8574;
    }

    &:active {
      opacity: .75;
    }
  }
</style>
