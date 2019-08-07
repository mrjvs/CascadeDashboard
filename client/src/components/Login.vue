<template>
  <div class="login">
    <h1>Oh hey! It seems like you aren't logged in yet.</h1>
    <p>
      <a :href="login_url">Click here to login!</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login_url: process.env.VUE_APP_API_LOGIN,
    };
  },
};
</script>
