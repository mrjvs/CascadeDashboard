<template>
    <div class="serverItem">
        <router-link :to="'/configure/' + server.id ">
            <img :src="server.image" :alt="server.title" class="image" />
            <div class="text">
                <h2 class="title">{{ server.title }}</h2>
                <p class="members">{{ server.members }} members</p>
            </div>
            <!-- TODO - add arrow -->
        </router-link>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ServerItem extends Vue {
    @Prop() private server!: object;
}
</script>

<style scoped lang="scss">
    .serverItem {
        width: 50%;
        box-sizing: border-box;
        padding-right: .5em;
        padding-bottom: .5em;

        &:nth-child(2n) {
            padding-right: 0;
        }

        > a {
            display: flex;
            width: 100%;
            cursor: pointer;
            background-color: #2C2238;
            border-radius: 10px;
            padding: 1.2em;
            box-sizing: border-box;

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
            }
            .members {
                color: #B1A5CB;
                margin: 0;
            }
            .image {
                border-radius: 50%;
                height: 6rem;
            }
        }

        
    }
</style>
