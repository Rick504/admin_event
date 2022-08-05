<template>
  <v-app id="App">
    <Home/>
  </v-app>
</template>

<script>
import Home from '@/views/Home/_Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style scoped>
  #App {
    background-color: rgb(61, 60, 60);
    font-size: 18px;
  }
</style>
