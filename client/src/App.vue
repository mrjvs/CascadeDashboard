<template>
    <div id="app">
        <router-view :servers="servers" :user="user"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { cascade, auth } from '@/api';

@Component({
    data() {
        return {
            servers: {
                1234567890: {
                    id: 1234567890,
                    title: 'Nintendo Homebrew',
                    members: 777,
                    image: 'https://cdn.discordapp.com/icons/196618637950451712/d14087d74031ef5bc5b825b74e64333a.png',
                },
            },
            user: {
                id: 1243568790,
                username: 'mrjvs',
                discriminator: 7777,
                image: 'https://cdn.discordapp.com/icons/196618637950451712/d14087d74031ef5bc5b825b74e64333a.png',
            },
        };
    },
    async created() {
        const token = await auth.getToken();
        console.log(token.data);
        console.log( (await auth.isTokenValid(token.data)).data );
    },
})
export default class Dashboard extends Vue {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

#app {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
    display: inline-block;
}

body, html {
    font-size: 1em;
    padding: 0;
    margin: 0;
    height: 100vh;
    background-color: #1B1B29;
    color: #B1A5CB;
}

a {
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited {
        text-decoration: none;
        color: inherit;
    }
}
</style>
