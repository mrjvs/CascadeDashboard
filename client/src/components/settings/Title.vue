<template>
    <div class="title">
        <p>Cascade</p>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Title extends Vue {
    @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
    .title {
        p {
            color: #B1A5CB;
            margin: 0;
        }

        h1 {
            font-size: 2em;
            font-weight: bold;
            color: white;
            margin: 0 0 1em 0;
        }
    }
</style>
