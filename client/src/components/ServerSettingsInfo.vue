<template>
    <div class="serverSettingsInfo">
        <img :src="server.image" :alt="server.title" class="image" />
        <div class="text">
            <h2 class="title">{{ server.title }}</h2>
            <p class="members">{{ server.members }} members</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ServerSettingsInfo extends Vue {
    @Prop() private server!: object;
}
</script>

<style scoped lang="scss">
    .serverSettingsInfo {
        box-sizing: border-box;
        display: flex;
        margin: 2rem 0;
        width: 17rem;

        .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 1em;
        }
        .title {
            color: white;
            font-size: 1.25em;
            font-weight: normal;
            margin: 0;
            display: block;
            line-height: 1.2;
        }
        .members {
            color: #B1A5CB;
            margin: 0;
        }
        .image {
            border-radius: 50%;
            height: 4rem;
        }
    }
</style>
