<template>
  <div class="command-preview">
    <p>{{ prefix }}userinfo</p>
    <p v-if="showEmbed">
      EMBED USERINFO HERE
    </p>
    <p v-else>
      USERINFO HERE
    </p>
  </div>
</template>

<script>
export default {
  props: [
    "prefix",
    "showEmbed",
  ],
};
</script>

<style lang="scss" scoped>
    .command-prefix {
        border: 1px solid #000;
        padding: 50px;
    }
</style>

