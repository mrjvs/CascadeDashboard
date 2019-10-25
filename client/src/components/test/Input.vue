<template>
  <div class="test-input">
    <label class="label">{{ this.$props.label }}</label>
    <input class="input" type="text" v-model="dataModel">
  </div>
</template>

<script>
export default {
  props: {
    label: {
      require: true,
    },
  },
};
</script>

<style lang="scss">
  .test-input {
    position: relative;
    width: 23rem;

    .input {
      background: #252D40;
      display: block;
      width: 100%;
      box-sizing: border-box;
      border: none;
      border-radius: 4px;
      padding: 1.6em .9em .9em .9em;
      color: white;
      font-size: 1rem;
    }

    .label {
      position: absolute;
      top: .65rem;
      left: 1rem;
      font-size: .75rem;
      color: #8996AD;
    }
  }
</style>
