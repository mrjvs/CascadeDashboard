<template>
  <div class="save-alert">
    <div v-if="hasChanges">
      <h1>unsaved changes</h1>
      <button v-on:click="save">Save</button>
      <button v-on:click="undo">Undo</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters(['hasChanges']),
  methods: {
    save() {
      this.$store.dispatch('saveChanges');
    },
    undo() {
      this.$store.commit('clearChanges');
    },
  },
};
</script>
