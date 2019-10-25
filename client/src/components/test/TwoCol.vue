<template>
  <div class="two-col">
    <slot/>
  </div>
</template>

<style lang="scss">
  .two-col {
    display: flex;

    > * {
      flex: 1;

      &:first-child {
        margin-right: 1rem;
      }
      &:last-child {
        margin-left: 0;
      }
    }
  }
</style>
