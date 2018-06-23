<template>
    <main>
        <section class="hero">
            <div class="hero-img"></div>
            <div class="wrapper">
            <div class="hero-content">
                <h3>German Gamboa</h3>
                <h5>{{tagline}}</h5>
            </div>
            </div>
        </section>
        <div class="container">
        </div>
    </main>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      tagline: 'Web Developer'
    }
  },
  methods: {

  },
  mounted () {
    setInterval(() => {
      this.tagline = (this.tagline === 'Web Developer') ? 'Coffee Drinker' : 'Web Developer'
    }, 5000)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero {
    position: relative;
    height: 50vh;
}
.wrapper {
    display: flex;
    justify-content: center;
}
.hero-img {
    width: 100%;
    height: 50vh;
    background-image: url('https://images.unsplash.com/photo-1485119584289-30ca2b38c67e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c395832fbacd178701646c494b1278c&auto=format&fit=crop&w=1950&q=80');
    background-size: cover;
    background-position: center;
    position: absolute;
    background-attachment: fixed;
    opacity: 1;
    filter: brightness(.40)
}
.hero-content {
    padding: 5em 0 ;
    display: block;
    position: absolute;
    opacity: 1;
    align-content: center;
    color: #fff;
    margin: auto;

}

</style>
