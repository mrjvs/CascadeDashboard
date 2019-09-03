<template>
    <div class="general">
        <h1>General page here</h1>
        <p>There are {{ guildMemberCount }} members in this server</p>
        <h3>custom prefix</h3>
        <input type="text"/>
        <input type="checkbox"/>
        <CommandPreview />
    </div>
</template>

<script>
import CommandPreview from '@/components/CommandPreview.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    CommandPreview,
  },
  computed: mapGetters(['guildMemberCount']),
};
</script>
