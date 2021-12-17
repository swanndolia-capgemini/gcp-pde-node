<template>
  <div class="home">
    <span @click="sendToPage('questions')"
      ><h2>Accèder à la liste de questions</h2></span
    >
    <span @click="sendToPage('ressources')"
      ><h2>Accèder aux ressources</h2></span
    >
    <span @click="sendToPage('simulation')"
      ><h2>Accèder à la simulation d'examen</h2></span
    >
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {},
  methods: {
    sendToPage(page) {
      this.$router.push({ path: page });
    },
  },
};
</script>

<style scoped lang="scss">
span {
  background: lightgray;
  cursor: pointer;
  padding: 20px;
  border-radius: 20px;
}
.home {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>