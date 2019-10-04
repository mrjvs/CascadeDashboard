<template>
  <div class="ui-toggle">
    <label>{{ this.$props.label }}</label>
    <div v-on:click="toggle" :class="dataModel ? 'toggle on' : 'toggle'"></div>
    <input type="checkbox" v-model="dataModel" />
  </div>
</template>

<script>
export default {
  name: 'ui-toggle',
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
  methods: {
    toggle() {
      this.dataModel = !this.dataModel;
    },
  },
};
</script>

<style lang="scss" scoped>
  .ui-toggle {
    display: flex;
    margin: 1.5rem 0 0 0;
    align-items: center;

    label {
      flex: 1;
      color: white;
    }

    input {
      display: none;
    }

    .toggle {
      display: block;
      width: 3rem;
      height: 1.5rem;
      background-color: #36365F;
      border-radius: 1.5rem;
      position: relative;

      &:hover {
        background-color: #2b2b50;
      }

      &:active:before {
        opacity: .75;
      }

      &:before {
        content: "";
        display: block;
        height: calc(1.5rem - .4rem);
        width: calc(1.5rem - .4rem);
        box-sizing: border-box;
        top: .2rem;
        left: .2rem;
        position: absolute;
        background-color: white;
        border-radius: 50%;
        transition: left .1s ease-out;
      }
      &.on {
        background-color: #24B69E;

        &:before {
          left: 1.7rem;
        }

        &:hover {
          background-color: #189782;
        }
      }
    }
  }
</style>
