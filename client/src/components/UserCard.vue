<template>
    <div class="userCard">
        <img :src="user.image" :alt="user.username" class="image" />
        <p class="name"><span>{{ user.username }}</span>#{{ user.discriminator }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UserCard extends Vue {
    @Prop() private user!: object;
}
</script>

<style scoped lang="scss">
    .userCard {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        align-items: center;
        margin: 1em 0;

        .name {
            color: #B1A5CB;
            margin: 0;
            flex: 1;
            margin: 0 .5rem;

            span {
                color: white;
            }
        }
        .image {
            border-radius: 50%;
            height: 3rem;
        }
    }
</style>
