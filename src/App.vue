<template>
  <div id="app">
    <transition-group name="component-fade" mode="out-in">
    <loader :key="'1'" v-show="showLoader"/>
    <main :key="'2'" v-show="!showLoader">
    <Nav/>
    <transition name="component-fade" mode="out-in">
    <router-view/>
    </transition>
    </main>
    <Footer :key="'3'" v-show="!showLoader"/>
    </transition-group>
  </div>
</template>

<script>
import Nav from './components/nav.vue'
import footer from './components/footer'
import loader from './components/loader'
export default {
  name: 'App',
  components: {
    'Nav': Nav,
    'Footer': footer,
    Loader: loader
  },
  data () {
    return {
      showLoader: true
    }
  },
  mounted () {
    setTimeout(() => { this.showLoader = false }, 2000)
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
.component-fade-leave-active {
  transition: opacity .35s ease;
}

.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
