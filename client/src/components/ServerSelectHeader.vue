<template>
    <div class="serverSelectHeader">
        <h1 class="heading">My servers</h1>
        <button v-on:click="getUser" class="addServer btn">Add server</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { auth } from "@/api";
import axios from "axios";

@Component({
    methods: {
        getUser() {
            axios.get('//api.cascadebot.org/me', {
                withCredentials: true
            }).then((user: any) => {
                console.log(user.data);
                (this as any).user = user.data;
            });
        }
    }
})
export default class ServerSelectHeader extends Vue {}
</script>

<style scoped lang="scss">
    .serverSelectHeader {
        display: flex;
        align-items: flex-end;

        .heading {
            flex: 1;
            color: white;
            font-size: 2em;
        }
    }
</style>
