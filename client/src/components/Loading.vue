<template>
    <div class="loader"></div>
</template>

<style lang="scss">
    .loader {
        border: 1rem solid #3d49b4;
        border-top: 1rem solid #ffffff;
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        animation: spin .5s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
