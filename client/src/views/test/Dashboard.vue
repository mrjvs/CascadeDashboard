<template>
  <div class="dashboard">
    <test-sidebar />
    <div class="right">
      <test-navbar />
      <test-card>
        <h1>Preferences</h1>
        <test-input label="Prefix"/>
        <test-checkbox label="Case sensitive" class="on"/>
        <test-toggle label="Use embedded responses" class="margin-top" />
        <test-toggle label="Delete command after processing" class="on" />
      </test-card>
      <test-two-col>
        <test-card>
          <h1>Help command</h1>
          <test-toggle label="Only show command in help if user has permission to use it" class="on" />
          <test-toggle label="Show all modules in help, even if module is disabled" class="on" />
        </test-card>
        <test-card>
          <h1>Error messages</h1>
          <test-toggle label="Hide permission error if not allowed to execute command" />
          <test-toggle label="Show module error if the module of the command is disabled" class="on" />
        </test-card>
      </test-two-col>
      <test-card>
        <h1>Embed footer</h1>
        <test-toggle label="Have footer on embeds" class="on" />
        <test-toggle label="Use custom footer" class="on" />
        <test-input label="Footer text" class="margin-top"/>
      </test-card>
      <test-save-popup />
    </div>
  </div>
</template>

<script>
import TestSidebar from '@/components/test/Sidebar.vue';
import TestNavbar from '@/components/test/Navbar.vue';
import TestSavePopup from '@/components/test/SavePopup.vue';
import TestCard from '@/components/test/Card.vue';
import TestTwoCol from '@/components/test/TwoCol.vue';
import TestInput from '@/components/test/Input.vue';
import TestToggle from '@/components/test/Toggle.vue';
import TestCheckbox from '@/components/test/Checkbox.vue';

export default {
  name: 'dashboard-test',
  components: {
    TestSidebar,
    TestNavbar,
    TestSavePopup,
    TestCard,
    TestTwoCol,
    TestInput,
    TestToggle,
    TestCheckbox,
  },
};
</script>

<style lang="scss">
  .dashboard {
    display: flex;
    background-color: #171D2B;
    flex-direction: row;
    > .right {
      flex: 1;
      position: relative;
      box-sizing: border-box;
      padding-top: 4rem;
      min-height: 100vh;
    }
  }

  .margin-top {
    margin-top: 1.5rem !important;
  }

  button, .button {
    border: none;
    outline: none;
    background-color: #2E3FDD;
    color: white;
    font-size: 1rem;
    padding: .5rem 1.5rem;
    margin: 0 .3rem;
    border-radius: 4px;

    &.secondary {
      background-color: #252D40;
    }

    &.width {
      width: 9rem;
      text-align: center;
      padding: .5rem;
    }

    &.button-icon {
      padding: .5rem .7rem;
      display: flex;
      justify-content: center;
      align-items: center;

      &.new {
        position: relative;
        &:after {
          content: "";
          height: 5px;
          width: 5px;
          position: absolute;
          right: .7rem;
          top: .5rem;
          border-radius: 50%;
          background-color: #7380FD;
        }
      }
    }
  }

  .guild-select {
    display: flex;
    align-items: center;
    background-color: #1B2232;
    color: white;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: normal;
    padding: .7rem 1.5rem;

    .avatar {
      height: 2.5rem;
      width: 2.5rem;
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
