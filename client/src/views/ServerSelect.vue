<template>
    <div class="serverSelect">
        <ServerSelectHeader />
        <div class="servers" :key="server.id" v-for="server in servers">
            <ServerItem :server="server"></ServerItem>
        </div>
    </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import { auth } from '@/api';
import ServerItem from '@/components/ServerItem.vue';
import ServerSelectHeader from '@/components/ServerSelectHeader.vue';

@Component({
    components: {
        ServerItem,
        ServerSelectHeader,
    },
})
export default class ServerSelect extends Vue {
    @Prop() private servers!: object[];
}
</script>

<style scoped lang="scss">
    .serverSelect {
        margin: 10rem 20vw;

        .servers {
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>