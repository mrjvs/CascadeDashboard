<template>
  <div class="section-title">
    <h1>{{ this.$props.text }}</h1>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'section-title',
  props: {
    text: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .section-title {
    display: flex;
    align-items: flex-end;
    margin-bottom: 1rem;

    h1 {
      font-size: 2em;
      color: white;
      font-weight: bold;
      flex: 1;
      margin: 0;
    }
  }
</style>
