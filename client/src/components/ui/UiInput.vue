<template>
  <div class="ui-input">
    <label class="label">{{ this.$props.label }}</label>
    <input class="input" type="text" v-model="dataModel">
  </div>
</template>

<script>
export default {
  name: 'ui-input',
  props: {
    saveGet: {
      required: true,
    },
    saveSet: {
      required: true,
    },
    label: {
      require: true,
    },
  },
  computed: {
    dataModel: {
      get() {
        return this.$store.getters[this.$props.saveGet];
      },
      set(value) {
        this.$store.commit(this.$props.saveSet, value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  .ui-input {
    position: relative;

    .input {
      background: #282848;
      display: block;
      width: 100%;
      box-sizing: border-box;
      border: none;
      border-radius: 2px;
      padding: 2em 1em 1em 1em;
      color: white;
      font-size: 1rem;
    }

    .label {
      position: absolute;
      top: .75rem;
      left: 1rem;
      font-size: .75rem;
      color: #CCCCE8;
    }
  }
</style>
