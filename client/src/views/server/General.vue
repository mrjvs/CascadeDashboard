<template>
    <div class="general">
        <h1>General page here</h1>
        <p>There are {{ guild.memberCount }} members in this server</p>
    </div>
</template>

<script>
export default {
  props: [
    'guild',
  ],
};
</script>
