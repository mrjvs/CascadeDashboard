<template>
    <div class="save">
      <div class="content">
        <p>You have unsaved changes</p>
        <div class="actions">
          <button class="width secondary">Undo</button>
          <button class="width">Save Changes</button>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  .save {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding-left: 25rem;
    z-index: 99;
    pointer-events: none;

    .content {
      pointer-events: initial;
      margin: 1.3rem;
      padding: 0.9rem 1.2rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      // border: #7380FD solid 2px;
      border-radius: 5px;
      background-color: #141926;
      max-width: 100%;
      width: 50rem;

      p {
        text-align: left;
        flex: 1;
        color: white;
        margin: 0;
      }
    }
  }
</style>
