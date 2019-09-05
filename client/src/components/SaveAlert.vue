<template>
  <div class="save-alert">
    <div v-if="hasChanges">
      <h1>YOU HAVE UNSAVES CHANGES</h1>
      <button v-on:click="save">Save changes</button>
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
  },
};
</script>
