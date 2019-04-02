<template>
    <div class="serverSettingsNav">
        <div class="container">
            <ServerSettingsInfo :server="server"/>
            <div class="links">
                <router-link to="general">General</router-link>
                <router-link to="modlog">Modlog</router-link>
            </div>
            <UserCard :user="user" />
        </div>
    </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import ServerSettingsInfo from '@/components/ServerSettingsInfo.vue';
import UserCard from '@/components/UserCard.vue';

@Component({
    components: {
        ServerSettingsInfo,
        UserCard,
    },
})
export default class ServerSettingsNav extends Vue {
    @Prop() private server!: object;
    @Prop() private user!: object[];
}
</script>

<style scoped lang="scss">
    .serverSettingsNav {
        width: 35vw;
        background-color: #2C2238;
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        display:flex;
        justify-content: flex-end;

        .container {
            width: 17rem;
            padding: 0 1em;
            display: flex;
            flex-direction: column;

            .links {
                width: 100%;
                flex: 1;

                a {
                    padding: .5em 1.5em;
                    color: #A898CD;
                    display: block;
                    text-decoration: none;
                    border-radius: 3px;

                    &:hover {
                        text-decoration: none;
                        color: white;
                    }

                    &.router-link-active {
                        background-color: #EE5151;
                        color: white;
                    }
                }
            }
        }
    }
</style>
