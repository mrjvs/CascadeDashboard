<template>
  <content-container>
    <content-card>
      <h1>General page here</h1>
      <p>There are {{ guildMemberCount }} members in this server</p>
      <h3>custom prefix</h3>
      <CascadeInput saveGet="guildPrefix" saveSet="setGuildPrefix" />
      <CascadeCheck saveGet="guildEmbedPreference" saveSet="setGuildEmbedPreference" />
      <CommandPreview />
    </content-card>
  </content-container>
</template>

<script>
import { mapGetters } from 'vuex';
import CommandPreview from '@/components/CommandPreview.vue';
import CascadeInput from '@/components/CascadeInput.vue';
import CascadeCheck from '@/components/CascadeCheck.vue';
import ContentContainer from '@/components/layout/ContentContainer.vue';
import ContentCard from '@/components/layout/ContentCard.vue';

export default {
  components: {
    CommandPreview,
    CascadeInput,
    CascadeCheck,
    ContentContainer,
    ContentCard,
  },
  computed: mapGetters(['guildMemberCount']),
};
</script>
