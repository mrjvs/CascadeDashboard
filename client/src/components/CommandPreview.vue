<template>
  <div class="command-preview">
    <p>{{ guildPrefix }}userinfo</p>
    <p v-if="guildEmbedPreference">
      EMBED USERINFO HERE
    </p>
    <p v-else>
      USERINFO HERE
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters(['guildPrefix', 'guildEmbedPreference']),
};
</script>

<style lang="scss" scoped>
    .command-prefix {
        border: 1px solid #000;
        padding: 50px;
    }
</style>

