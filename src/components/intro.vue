<template>
    <section class="container">
        <div class="row card">
            <div class="col s12 m6">
                <img class="responsive-img" src="../assets/german.jpg" alt="">
            </div>
            <div class="col s12 m6">
                <ul class="collection left-align stats">
                    <li class="collection-header center-align"><h4>German Gamboa</h4></li>
                    <li class="collection-item"><strong>Status:</strong> <span class="green-text">Alive</span></li>
                    <li class="collection-item"><strong>Location:</strong> Orlando, FL</li>
                    <li class="collection-item">Currently <span class="blue-text">{{currentActivity}}</span>...</li>
                    <li class="collection-item about"><strong>About:</strong> I enjoy developing web solutions for businesses. While learning everything I can about development and computer science. When I am not coding I enjoy spending time with my wife and beagle. I am currently looking for a web developer position in Florida! </li>
                </ul>
            </div>
            <div class="col s12 m6">
                <ul class="collection left-align">
                    <li class="collection-header center-align"><h4>Social Media</h4></li>
                    <div class="wrapper">
                    <li class="collection-item-social"><a href="https://github.com/germangamboa95" target="_blank"><i class="fab fa-github fa-3x"></i></a></li>
                    <li class="collection-item-social"><a href="https://www.linkedin.com/in/german-gamboa-gonzalez-a3863197/" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a></li>
                    <li class="collection-item-social"><a href="https://twitter.com/GermanGamGon" target="_blank"><i class="fab fa-twitter fa-3x"></i></a></li>
                    </div>
                </ul>
                </div>
        </div>

    </section>
</template>

<script>
export default {
  name: 'Intro',
  data () {
    return {
      currentActivity: 'Brewing Coffee'
    }
  },
  mounted () {
    console.log('Hi there')
    const activities = ['Brewing Coffee', 'Drinking Coffee', 'Coding', 'Learning']
    let counter = 0
    setInterval(() => {
      this.currentActivity = activities[counter]
      counter = (counter >= activities.length - 1) ? 0 : counter + 1
    }, 2000)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrapper {
        display: flex;
        justify-content: center;
    }
    .me {
        height: 400px;
        border-radius: 2%;
    }
    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .row{
        padding-top: 2em;
    }
    .stats {
        height: 400px;
    }
    ul {
       margin: 0;
       margin-bottom: 2em;
   }

   .about {
       line-height: 1.5;
   }
   .collection-item-social {
       display: inline-block;
       margin: 1em 1em;
   }
    .collection-item-social:hover {
        transform: scale(1.2);
        transition: all .25s ease-in-out;
    }
    h3 {
        margin: 0;
    }
</style>
