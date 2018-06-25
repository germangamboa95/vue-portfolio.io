<template>
    <section class="container">
        <div class="row">
            <div class="col s12 m6 me-container">
                <img class="responsive-img" src="../assets/german.jpg" alt="">
            </div>
            <div class="col s12 m6">
                <ul class="collection left-align stats">
                    <li class="collection-header center-align"><h4>German Gamboa</h4></li>
                    <li class="collection-item"><strong>Status:</strong> <span class="green-text">Alive</span></li>
                    <li class="collection-item"><strong>Location:</strong> Orlando, FL</li>
                    <li class="collection-item">Currently Brewing Coffee</li>
                    <li class="collection-item about"><strong>About:</strong> I enjoy developing web solutions for businesses. While learning everything I can about development and computer science. When I am not coding I enjoy spending time with my wife and beagle. I am currently looking for a web developer position in Florida! </li>
                </ul>
            </div>
            <div class="col s12 m6">
                <ul class="collection left-align">
                    <li class="collection-header center-align"><h4>Social Media</h4></li>
                    <div class="wrapper">
                    <li class="collection-item-social"><i class="fab fa-github fa-3x"></i></li>
                    <li class="collection-item-social"><i class="fab fa-linkedin fa-3x"></i></li>
                    <li class="collection-item-social"><i class="fab fa-twitter fa-3x"></i></li>
                    </div>
                </ul>
        
                </div>
                <div class="col s12 m6">
                    Content here
                </div>
        </div>

    </section>
</template>

<script>
export default {
  name: 'Intro'
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
    .me-container {
        border: 1px solid #e0e0e0;
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


    h3 {
        margin: 0;
    }
</style>
