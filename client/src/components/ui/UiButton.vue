<template>
  <button class="ui-button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ui-button',
};
</script>

<style lang="scss" scoped>
  .ui-button {
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
