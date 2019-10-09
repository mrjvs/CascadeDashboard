<template>
  <div class="server-card">
    <div v-if="!$store.isLoading" class="img" :style="`background-image: url('${ guild.iconUrl }')`"></div>
    <div class="data">
      <h2>{{ guild.name }}</h2>
      <p>{{ guild.memberCount }} members</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'server-card',
  props: {
    guild: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .server-card {
    border-radius: 10px;
    background-color: #1F1F3D;
    color: #CCCCE8;
    padding: 1em .7em;
    display: flex;
    margin: 1em 0;
    width: auto;

    .img {
      flex-shrink: 0;
      width: 3.5em;
      height: 3.5em;
      background-color: #282848;
      background-size: cover;
      border-radius: 50%;
      margin-right: .7em;
    }
    .data {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      min-width: 0;

      h2 {
        color: white;
        font-size: 1.2em;
        margin: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      p {
        margin: .25em 0 0 0;
      }
    }
  }
</style>
