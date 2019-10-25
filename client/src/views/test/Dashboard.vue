<template>
  <div class="dashboard">
    <test-sidebar />
    <div class="content"></div>
  </div>
</template>

<script>
import TestSidebar from '@/components/test/Sidebar.vue';

export default {
  name: 'dashboard-test',
  components: {
    TestSidebar,
  },
};
</script>

<style lang="scss">
  .dashboard {
    display: flex;
    background-color: #171D2B;
    flex-direction: row;
    .content {
      flex: 1;
    }
  }
</style>
