<template>
  <div class="test-toggle">
    <div class="toggle"></div>
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
  .test-toggle {
    display: flex;
    margin: .2rem 0 0 0;
    align-items: center;
    padding: .4rem 0;
    cursor: pointer;

    label {
      flex: 1;
      margin-left: 1rem;
      color: #8996AD;
      cursor: inherit;
    }

    input {
      display: none;
    }

    .toggle {
      display: block;
      width: 2.5rem;
      height: 1.2rem;
      background-color: #37465F;
      border-radius: 1.2rem;
      position: relative;
      cursor: inherit;

      &:before {
        content: "";
        display: block;
        height: calc(1.2rem - .5rem);
        width: calc(1.2rem - .5rem);
        box-sizing: border-box;
        top: .25rem;
        left: .25rem;
        position: absolute;
        background-color: white;
        border-radius: 50%;
        transition: left .1s ease-out;
      }
    }
    &.on .toggle {
      background-color: #3C4EF8;

      &:before {
        left: 1.55rem;
      }
    }
  }
</style>
