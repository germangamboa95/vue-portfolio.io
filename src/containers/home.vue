<template>
    <div class="home-container">
        <div class="row">
            <div class="btn-wrapper col s12 m6 ">
            <button class="content-btn  waves-effect waves-light" v-on:click="openContainer('Projects')"></button>
                <span>Projects</span>
            </div>
            <div class="btn-wrapper col s12 m6">
            <button class="content-btn  waves-effect waves-light" v-on:click="openContainer('Bio')"></button>
                <span>Contact Me</span>
            </div>
        </div>
        <transition name="component-fade" mode="out-in">
            <div class="main-content">
                <transition name="component-fade" mode="out-in">
                    <div :is="currentComponent" @close="closeContainer" ></div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
import projects from '../components/projects'
import bio from '../components/bio'
import intro from '../components/intro'
export default {
  name: 'HomePage',
  components: {
    Projects: projects,
    Bio: bio,
    Intro: intro

  },
  data () {
    return {
      tagline: 'Web Developer',
      currentComponent: 'Intro'
    }
  },
  methods: {
    openContainer (component) {
      this.currentComponent = component
    },
    closeContainer () {
      this.currentComponent = 'Intro'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container {
    min-height: 88vh;
}
.main-content{
    height: 100%;
    min-height: 88vh;
}
.row {
    height: 2em;
    margin: 0;
}
.btn-wrapper {
    position: relative;
    display: inline-block;
    width: 110%;
    height: 110%;
    padding: 0;
}
.btn-wrapper > span {
    position: absolute;
    color: #fff;
    z-index: 1;
    top: 20%;
    left: 41%;
    font-family: "Open Sans", sans-serif;
    font-size: 1.1em;
}
.content-btn {
    width: 100%;
    height: 110%;
    background-color: #607d8b;
    color: #fff;
    border-radius: 0;
    padding: 0;
    border: none;
}

.content-btn:hover {
    transform: scaleY(1.5);
    transform-origin:top;
}

.component-fade-enter-active {
  animation: fadeInUp;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.component-fade-leave-active {
    animation: fadeInUp reverse;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@media screen and (max-width: 600px){
.main-content{
    margin-top: 2.6em;
}
}

</style>
