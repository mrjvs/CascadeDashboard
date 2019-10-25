<template>
  <div class="navbar">
    <div class="wrapper">
      <button>Go Pro</button>
      <div class="button button-icon secondary new">
        <bell-icon size="1.25x" class="icon"/>
      </div>
      <div class="dropdown">
        <div class="avatar"></div>
        <p>mrjvs<span>#2165</span></p>
        <chevron-down-icon size="1x" class="icon"/>
      </div>
    </div>
  </div>
</template>

<script>
import { BellIcon, ChevronDownIcon } from 'vue-feather-icons';

export default {
  components: {
    BellIcon,
    ChevronDownIcon,
  },
};
</script>

<style lang="scss" scoped>
  .navbar {
    box-sizing: border-box;
    padding-left: 25rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }
  .wrapper {
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 0.2rem 1.7rem;
    background-color: #141926;
    height: 4rem;
    box-sizing: border-box;
    width: 100%;

    > * {
      height: 2.5rem;
      box-sizing: border-box;
      margin: 0;
      margin-right: .4rem;
    }
  }

  .dropdown {
    background-color: #252D40;
    border-radius: 5px;
    font-weight: normal;
    display: inline-flex;
    align-items: center;
    padding: .3rem 1.2rem;

    .avatar {
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 50%;
      margin-right: .7rem;
      background-color: #7380FD;
    }

    p {
      margin: 0;
      flex: 1;
      color: white;

      > span {
        color: #4E5B73;
      }
    }

    > .icon {
      color: #8996AD;
      margin-left: 1rem;
    }
  }
</style>
