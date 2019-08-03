<template>
    <div class="server">
        <h1>Server view</h1>
        <div class="nav">
            <router-link to="general">General</router-link><br>
            <router-link to="modlog">Modlog</router-link>
        </div>
        <router-view name="settings"/>
    </div>
</template>