<template>
  <content-container>
    <content-card class="twopart">
      <div class="one">
        <h1>Command use</h1>
        <CascadeInput label="prefix" saveGet="guildPrefix" saveSet="setGuildPrefix" />
        <CascadeCheck label="Use embedded response"
          saveGet="guildEmbedPreference"
          saveSet="setGuildEmbedPreference" />
      </div>
      <div class="two">
        <CommandPreview />
      </div>
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

<style lang="scss" scoped>
  .one, .two {
    flex: 1;
  }

  .one {
    margin-right: 5rem;
  }
</style>
