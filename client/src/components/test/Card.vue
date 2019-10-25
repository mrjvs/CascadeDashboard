<template>
    <div class="card">
        <slot/>
    </div>
</template>

<style lang="scss">
  .card {
    background-color: #1E2536;
    margin: 1rem 2rem 0 2rem;
    padding: 2rem;
    border-radius: 5px;

    h1 {
      color: white;
      font-size: 1.8rem;
      margin: 0.5rem 0 1.2rem 0;
    }
  }
</style>
