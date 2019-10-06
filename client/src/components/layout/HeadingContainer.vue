<template>
  <div class="heading-container">
    <div class="head">
      <div>
        <div class="left logo">Logo</div>
        <div class="right">Dropdown</div>
      </div>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'heading-container',
};
</script>

<style lang="scss" scoped>
.heading-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #181836;

  .head {
    background-color: #151530;
    color: white;
    width: 100%;
    padding: 1em;
    box-sizing: border-box;

    > div {
      display: flex;
      width: 850px;
      max-width: 100%;
      margin: 0 auto;
      box-sizing: border-box;

      .left {
        flex: 1;
      }
    }
  }

  .content {
    width: 850px;
    max-width: 100%;
    margin: 0 auto;
    flex: 1;
  }
}
</style>
