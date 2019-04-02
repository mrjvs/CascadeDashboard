<template>
  <div class="serverSettingsGeneral">
      <Title msg="General settings" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Title from '@/components/settings/Title.vue';

@Component({
  components: {
    Title,
  },
})
export default class ServerSettingsGeneral extends Vue {}
</script>