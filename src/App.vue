<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/nav.vue'

export default {
  name: 'App',
  components: {
    'Nav': Nav
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Montserrat", sans-serif;
}
h1,h2,h3,h4,h5,h6 {
  font-family: "Open Sans", sans-serif;
}
</style>
