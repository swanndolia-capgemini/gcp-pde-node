<template>
  <div id="nav">
    <button v-if="getPath != '/'" @click="this.$router.push({ path: '/' })">
      Retour au menu
    </button>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    getPath() {
      return this.$route.fullPath;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  font-size: 20px;
  background: darkgray;
}
body {
  margin: 0;
  padding: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
