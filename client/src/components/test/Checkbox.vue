<template>
  <div class="test-checkbox">
    <div class="checkbox"></div>
    <input type="checkbox" />
    <label>{{ this.$props.label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .test-checkbox {
    display: flex;
    margin: .3rem;
    align-items: center;
    padding: .4rem 0;
    cursor: pointer;

    label {
      flex: 1;
      margin-left: .6rem;
      color: #8996AD;
      cursor: inherit;
    }

    input {
      display: none;
    }

    .checkbox {
      display: inline-block;
      height: .7rem;
      width: .7rem;
      border: 2px solid #37465F;
      border-radius: 3px;
      cursor: inherit;
    }
    &.on .checkbox {
      border-color: #3C4EF8;
      background-color: #3C4EF8;
      // needs checkmark still
    }
  }
</style>
