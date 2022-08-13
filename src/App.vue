<template>
  <v-app id="App">
    <Home />
  </v-app>
</template>

<script>
import Home from '@/views/Home/_Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style scoped>
  #App {
    background-color: rgb(39, 39, 39);
    font-size: 18px;
  }
</style>
