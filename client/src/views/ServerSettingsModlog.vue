<template>
  <div class="serverSettingsModlog">
      <Title msg="Moderation log" />
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
export default class ServerSettingsModlog extends Vue {}
</script>