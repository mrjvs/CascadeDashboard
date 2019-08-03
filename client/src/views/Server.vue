<template>
    <div class="server">
        <ApolloQuery
        :query="require('../graphql/guild.gql')"
        :variables="{ id: $route.params.id }"
        >
        <template slot-scope="{ result: { loading, error, data } }">
            <loading v-if="loading"/>
            <div v-else-if="error">An error occured. Please try again later</div>
            <div v-else-if="data">
                <h1>Server view</h1>
                <div class="nav">
                    <router-link to="general">General</router-link><br>
                    <router-link to="modlog">Modlog</router-link>
                </div>
                <router-view name="settings" :guild="data.guild"/>
            </div>
            <div v-else>Invalid url</div>
        </template>
        </ApolloQuery>
    </div>
</template>

<script>
import Loading from "@/components/Loading.vue";

export default {
    components: {
        Loading,
    },
}
</script>
