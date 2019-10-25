<template>
  <div class="sidebar">
    <div class="fixed">
      <div class="logo">
        <img src="/logo.svg" alt="cascade logo">
        <h1>Cascade</h1>
      </div>
      <div class="content">
        <div class="guild-select">
          <div class="avatar"></div>
          <p>Cascade Official Server</p>
          <chevron-down-icon size="1x" class="icon"/>
        </div>
        <div class="category">
          <div class="title">
            <h3>General settings</h3>
          </div>
          <a href="#" class="active link">
            <settings-icon size="1x" class="icon" />
            <p>Preferences</p>
          </a>
          <a href="#" class="link">
            <book-icon size="1x" class="icon" />
            <p>Moderation log</p>
          </a>
          <a href="#" class="link">
            <users-icon size="1x" class="icon" />
            <p>Management</p>
          </a>
          <a href="#" class="link">
            <shield-icon size="1x" class="icon" />
            <p>Permissions</p>
          </a>
          <a href="#" class="link">
            <info-icon size="1x" class="icon" />
            <p>About</p>
          </a>
        </div>
        <div class="category">
          <div class="title">
            <h3>Modules</h3>
          </div>
          <a href="#" class="link">
            <music-icon size="1x" class="icon" />
            <p>Music</p>
          </a>
          <a href="#" class="link">
            <list-icon size="1x" class="icon" />
            <p>Useful</p>
          </a>
          <a href="#" class="link">
            <eye-icon size="1x" class="icon" />
            <p>Moderation</p>
          </a>
        </div>
        <div class="category">
          <div class="title">
            <h3>Custom commands</h3>
          </div>
          <a href="#" class="link">
            <file-text-icon size="1x" class="icon" />
            <p>Tags</p>
          </a>
          <a href="#" class="link">
            <code-icon size="1x" class="icon" />
            <p>Scripts</p>
          </a>
          <a href="#" class="link">
            <shopping-bag-icon size="1x" class="icon" />
            <p>Marketplace</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SettingsIcon, BookIcon, UsersIcon, ShieldIcon, InfoIcon, EyeIcon,
  MusicIcon, ListIcon, CodeIcon, ShoppingBagIcon, FileTextIcon, ChevronDownIcon,
} from 'vue-feather-icons';

export default {
  components: {
    SettingsIcon,
    BookIcon,
    UsersIcon,
    ShieldIcon,
    InfoIcon,
    MusicIcon,
    ListIcon,
    CodeIcon,
    ShoppingBagIcon,
    FileTextIcon,
    EyeIcon,
    ChevronDownIcon,
  },
};
</script>

<style lang="scss" scoped>
  .sidebar {
    width: 25rem;
  }
  .fixed {
    background-color: #141926;
    width: 25rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: fixed;

    .logo {
      background-color: #111622;
      height: 4rem;
      display: flex;
      align-items: center;
      padding: 0 1.3rem;

      img {
        height: 1.6rem;
        margin-right: .7rem;
      }
      h1 {
        font-size: 1.11em;
        color: white;
        font-weight: bold;
        margin: 0;
      }
    }

    .content {
      overflow-x: auto;
      padding: 1.3rem;
      box-sizing: border-box;
      flex: 1;
    }

    .category {
      .title {
        margin: 1.8rem 0 .7rem 0;
        h3 {
          color: white;
          font-weight: bold;
          font-size: 1rem;
          margin: 0;
        }
      }
      .link {
        margin-bottom: .4rem;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: .5rem;
        border-radius: 5px;
        background-color: rgba(27, 34, 50, 0);
        transition: background-color .05s ease-in-out;

        .icon {
          padding: .4rem;
          border-radius: 5px;
          background-color: #1B2232;
          color: #4E5B73;
          margin-right: .7rem;
        }
        p {
          color: #8996AD;
          text-decoration: none;
          margin: 0;
          transition: color .05s ease-in-out;
        }

        &:hover {
          background-color: rgba(27, 34, 50, 0.3);
          p {
            color: white;
          }
        }

        &.active {
          background-color: #1B2232;
          p {
            color: white;
          }
          .icon {
            background-color: #2E3FDD;
            color: white;
          }
        }
      }
    }
  }
</style>
