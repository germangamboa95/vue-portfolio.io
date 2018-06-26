<template>
    <div class="home-container">
            <div class="main-content">
                <Intro />
                <i class="fas fa-chevron-down fa-3x"></i>
                <Projects/>
            </div>
    </div>
</template>

<script>
import projects from '../components/projects'
import intro from '../components/intro'
export default {
  name: 'HomePage',
  components: {
    Projects: projects,
    Intro: intro

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
.fa-chevron-down:hover {
    transform: scale(1.2);
}
</style>
