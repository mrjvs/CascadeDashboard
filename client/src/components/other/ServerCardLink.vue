<template>
  <router-link :to="this.$props.to" class="server-card-link">
    <div class="img" :style="`background-image: url('${ guild.iconUrl }')`"></div>
    <div class="data">
      <h2>{{ guild.name }}</h2>
      <p>{{ guild.memberCount }} members</p>
    </div>
    <chevron-right-icon size="1x" class="icon" />
  </router-link>
</template>

<script>
import { ChevronRightIcon } from 'vue-feather-icons';

export default {
  name: 'server-card-link',
  components: {
    ChevronRightIcon,
  },
  props: {
    to: {
      required: true,
    },
    guild: {
      required: true,
    },
  },
  computed: {
    serverIcon() {
      return '#';
    },
  },
};
</script>

<style lang="scss" scoped>
  .server-card-link {
    border-radius: 10px;
    background-color: #1F1F3D;
    color: #CCCCE8;
    padding: 1em;
    display: flex;
    width: auto;
    text-decoration: none;
    align-items: center;

    &:hover, &:visited, &:focus {
      text-decoration: none;
    }

    &:hover {
      background-color: #1b1b3d;
    }

    &:active {
      opacity: .75;
    }

    .img {
      flex-shrink: 0;
      width: 3.5em;
      height: 3.5em;
      background-color: #282848;
      background-size: cover;
      border-radius: 50%;
      margin-right: 1em;
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
