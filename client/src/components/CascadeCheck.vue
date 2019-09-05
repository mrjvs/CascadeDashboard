<template>
  <div class="cascade-check">
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
