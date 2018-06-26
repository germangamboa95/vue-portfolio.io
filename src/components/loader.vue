<template>
    <section>
        <img class="responsive-img opacityPulse-css" src="../assets/logo.svg" alt="loading logo">
    </section>
</template>

<script>
export default {
  name: 'Loader'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    section {
        background-color: #253644;
        height: 100vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .opacityPulse-css {
        animation: opacityPulse 2s ease-out;
        animation-iteration-count: infinite;
        opacity: 1;
    }
    @keyframes opacityPulse {
    0% {opacity: 0.0;}
    50% {opacity: 1.0;}
    100% {opacity: 0.0;}
}
</style>
