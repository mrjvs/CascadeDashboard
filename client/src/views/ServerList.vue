<template>
  <heading-container class="server-list">
    <server-card-link to="/488394590458478602"/>
    <server-card-link to="/12345"/>
    <server-card-link to="/abcdefg"/>
  </heading-container>
</template>

<script>
import HeadingContainer from '@/components/layout/HeadingContainer.vue';
import ServerCardLink from '@/components/other/ServerCardLink.vue';

export default {
  name: 'server-list',
  components: {
    HeadingContainer,
    ServerCardLink,
  },
};
</script>
