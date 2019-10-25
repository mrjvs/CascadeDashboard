<template>
  <div class="sidebar">
    <div class="logo">
      <h1>logo</h1>
    </div>
    <div class="content">
      <select name="server" id="server">Cascade's Official server</select>
      <div class="category">
        <div class="title">
          <h3>General settings</h3>
        </div>
        <a href="#" class="active">
          <settings-icon size="1.5x" class="icon" />
          <p>Preferences</p>
        </a>
      </div>
      <div class="category">
        <div class="title">
          <h3>Modules</h3>
        </div>
        <a href="#">
          <settings-icon size="1.5x" class="icon" />
          <p>Music</p>
        </a>
      </div>
    </div>
    <div class="save">
      <p>You have unsaved changes</p>
      <div class="actions">
        <button class="secondary">Undo</button>
        <button>Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script>
import { SettingsIcon } from 'vue-feather-icons';

export default {
  components: {
    SettingsIcon,
  },
};
</script>

<style lang="scss">
  .sidebar {

  }
</style>
