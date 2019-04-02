<template>
    <div class="serverSettings">
        <ServerSettingsNav :server="servers[$route.params.id]" :user="user" />
        <div class="content">
            <router-view name="serverSettingsContent" />
        </div>
    </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import ServerSettingsNav from '@/components/ServerSettingsNav.vue';

@Component({
  components: {
    ServerSettingsNav,
  },
})
export default class ServerSettings extends Vue {
    @Prop() private servers!: object[];
    @Prop() private user!: object[];
}
</script>

<style scoped lang="scss">
    .serverSettings {
        min-height: 100%;

        .content {
            margin-left: 35vw;
            padding: 4rem;
        }
    }
</style>