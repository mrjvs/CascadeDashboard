<template>
  <content-container>
    <content-card class="twopart">
      <div class="one">
        <h1>Command use</h1>
        <ui-input label="prefix" saveGet="guildPrefix" saveSet="setGuildPrefix" />
        <ui-toggle label="Use embedded response"
          saveGet="guildUseEmbedForMessages"
          saveSet="setGuildUseEmbedForMessages" />
        <ui-toggle label="Delete command after processing"
          saveGet="guildDeleteCommand"
          saveSet="setGuildDeleteCommand" />
        <ui-toggle label="Mentioning bot shows prefix"
          saveGet="guildMentionPrefix"
          saveSet="setGuildMentionPrefix" />
        <ui-toggle label="Administrator role has all permissions"
          saveGet="guildAdminsHaveAllPerms"
          saveSet="setGuildAdminsHaveAllPerms" />
        <ui-toggle label="Show permission errors"
          saveGet="guildShowPermErrors"
          saveSet="setGuildShowPermErrors" />
        <ui-toggle label="Allow tag to be used as commands"
          saveGet="guildAllowTagCommands"
          saveSet="setGuildAllowTagCommands" />
        <ui-toggle label="Show module errors"
          saveGet="guildShowModuleErrors"
          saveSet="setGuildShowModuleErrors" />
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
import UiInput from '@/components/ui/UiInput.vue';
import UiToggle from '@/components/ui/UiToggle.vue';
import ContentContainer from '@/components/layout/ContentContainer.vue';
import ContentCard from '@/components/layout/ContentCard.vue';

export default {
  components: {
    CommandPreview,
    UiInput,
    UiToggle,
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
