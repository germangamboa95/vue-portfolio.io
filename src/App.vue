<template>
  <div id="app">
    <main>
    <Nav/>
    <transition name="component-fade" mode="out-in">
    <router-view/>
    </transition>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/nav.vue'
import footer from './components/footer'

export default {
  name: 'App',
  components: {
    'Nav': Nav,
    'Footer': footer
  }
}
</script>

<style>

* {
  box-sizing: border-box;
}
.group:after {
  content: "";
  display: table;
  clear: both;
}
 html {
  height: 100%;
}
#app{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
nav {
  z-index: 10;
  position: relative;
}
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
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
