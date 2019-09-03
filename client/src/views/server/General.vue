<template>
    <div class="general">
        <h1>General page here</h1>
        <p>There are {{ guild.memberCount }} members in this server</p>
        <h3>custom prefix</h3>
        <input type="text" v-model="guild.coreSettings.prefix"/>
        <input type="checkbox" v-model="guild.coreSettings.useEmbedForMessages"/>
        <CommandPreview
          :prefix="guild.coreSettings.prefix"
          :showEmbed="guild.coreSettings.useEmbedForMessages"/>
    </div>
</template>

<script>
import CommandPreview from '@/components/CommandPreview.vue';

export default {
  props: [
    'guild',
  ],
  components: {
    CommandPreview,
  },
};
</script>
