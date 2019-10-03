<template>
  <div class="cascade-check">
    <label>{{ this.$props.label }}</label>
    <input type="checkbox" v-model="dataModel">
  </div>
</template>

<script>
export default {
  props: {
    saveGet: {
      required: true,
    },
    saveSet: {
      required: true,
    },
    label: {
      required: true,
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
  .cascade-check {
    display: flex;
    margin: 1.5rem 0 0 0;

    label {
      flex: 1;
      color: white;
    }
  }
</style>
