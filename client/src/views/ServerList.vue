<template>
  <heading-container class="server-list">
    <section-title text="Servers">
      <ui-button>Add server</ui-button>
    </section-title>
    <content-grid>
      <server-card-link to="/488394590458478602"/>
      <server-card-link to="/12345"/>
      <server-card-link to="/abcdefg"/>
    </content-grid>
  </heading-container>
</template>

<script>
import HeadingContainer from '@/components/layout/HeadingContainer.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import UiButton from '@/components/ui/UiButton.vue';
import ContentGrid from '@/components/layout/ContentGrid.vue';
import ServerCardLink from '@/components/other/ServerCardLink.vue';

export default {
  name: 'server-list',
  components: {
    UiButton,
    SectionTitle,
    ContentGrid,
    HeadingContainer,
    ServerCardLink,
  },
};
</script>

<style lang="scss" scoped>
  .section-title {
    padding-top: 4rem;
  }
</style>
