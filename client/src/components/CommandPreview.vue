<template>
  <div class="command-preview">
    <div class="user blue">
      <div class="text">
        <p class="username">mrjvs</p>
        <p class="content">{{ guildPrefix }}play Hacknet full OST</p>
      </div>
    </div>
    <div v-if="guildUseEmbedForMessages" class="user red">
      <div class="text">
        <p class="username">Cascade</p>
        <div class="embed green">
          <p class="title">Loaded 1 track</p>
          <p class="text">Hacknet OST full - 1h55m</p>
          <p class="footer">Cascadebot 2019</p>
        </div>
      </div>
    </div>
    <div v-else class="user red">
      <div class="text">
        <p class="username">Cascade</p>
        <p class="content">Loaded 1 track<br/><br/>Hacknet OST full - 1h55m</p>
      </div>
    </div>
    <div class="user blue">
      <div class="text">
        <p class="username">mrjvs</p>
        <p class="content">Oooh thats a nice soundtrack.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters(['guildPrefix', 'guildUseEmbedForMessages']),
};
</script>

<style lang="scss" scoped>
  .command-preview {
    background-color: #181836;
    border-radius: 10px;
    padding: 2rem;
    color: #C7C3E0;

    .user {
      display: flex;
      align-items: flex-start;

      &:before {
        content: "";
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 50%;
        margin-right: 1rem;
      }

      &.blue:before {
        background-color: #5FAAF2;
      }
      &.red:before {
        background-color: #E84565;
      }

      &:last-of-type > .text {
        margin-bottom: 0;
      }

      > .text {
        flex: 1;
        margin-bottom: 2rem;

        .username {
          color: white;
          font-weight: bold;
          font-size: 1rem;
          margin: 0 0 .2rem 0;
        }

        .content {
          margin: 0;
        }

        > .embed {
          border-radius: 5px;
          background-color: #1F1F3D;
          padding: 1rem .8rem .8rem .8rem;
          margin-top: .5rem;
          border-left: 7px solid #84D6A2;

          .title {
            color: white;
            margin: 0;
            font-weight: bold;
          }

          .text {
            margin: .2rem 0 0 0;
          }

          .footer {
            font-size: .7em;
            margin: 0;
            margin-top: 1rem;
          }
        }
      }
    }
  }
</style>
