<template>
    <section>
        <div class="container">
            <div class="row close-btn-row"><i @click="$emit('close')" class="material-icons right close-btn">close</i></div>

            <div class="row">
                <div class="col s12 m6">
                <div class="card hoverable">
                    <div class="card-image">
                    <img class="responsive-image" src="../assets/eventlerImg.png">
                    <span class="card-title">Eventler</span>
                    </div>
                    <div class="card-content">
                    <p><strong>Summary:</strong> Event management. Lets you create, share and manage events. Sends email &amp; text communications</p>
                    <p><strong>Techs:</strong> ES6, React.js, bootstrap node.js, express.js, mongoDB, passport.js &amp; linux.</p>
                    </div>
                    <div class="card-action">
                        <a class="blue-text" target="_blank" href="https://eventler.app"><i class="far fa-eye fa-2x"></i></a>
                        <a class="blue-text" target="_blank" href="https://github.com/germangamboa95/Eventler"><i class="fab fa-github fa-2x"></i></a>
                    </div>
                </div>
                </div>
                <div class="col s12 m6">
                <div class="card hoverable">
                    <div class="card-image">
                    <img class="responsive-image"  src="../assets/letsDoLunchImg.png">
                    <span class="card-title black-text">LetsDoLunch</span>
                    </div>
                    <div class="card-content">
                    <p><strong>Summary:</strong> Eliminate the age old question of where to eat! Simple restaurant voting app.</p>
                    <p><strong>Techs:</strong> ES6, jQuery, node.js, express.js, firebase, heroku, materialize &amp; nodemailer.</p>
                    </div>
                    <div class="card-action">
                        <a class="green-text" target="_blank" href="https://germangamboa95.github.io/letsDoLunch/"><i class="far fa-eye fa-2x"></i></a>
                        <a class="green-text" target="_blank" href="https://github.com/germangamboa95/letsDoLunch"><i class="fab fa-github fa-2x"></i></a>
                    </div>
                </div>
                </div>
                <div class="col s12 m6">
                <div class="card hoverable">
                    <div class="card-image">
                    <img class="responsive-image"  src="../assets/wooferImg.png">
                    <span class="card-title black-text">Woofer</span>
                    </div>
                    <div class="card-content">
                    <p><strong>Summary:</strong> Share the joy of having a Dog without the responsibility. Its Air BnB for Dogs!</p>
                    <p><strong>Techs:</strong> ES6, Vue.js, node.js, express.js, mySQL, sequelize, passport.js, heroku &amp; cloudinary.</p>
                    </div>
                    <div class="card-action">
                        <a class="green-text" target="_blank" href="https://woofer-2018.herokuapp.com/"><i class="far fa-eye fa-2x"></i></a>
                        <a class="green-text" target="_blank" href="https://github.com/cbejar93/Woofer"><i class="fab fa-github fa-2x"></i></a>
                    </div>
                </div>
                </div>
                <div class="col s12 m6">
                <div class="card hoverable">
                    <div class="card-image">
                    <img class="responsive-image"  src="../assets/pokemonImg.png">
                    <span class="card-title">Pokemon Battles</span>
                    </div>
                    <div class="card-content">
                    <p><strong>Summary:</strong> Management. Lets you create, share and manage events. Sends email &amp; text communications</p>
                    <p><strong>Techs:</strong> ES6, React.js, node.js, express.js, mongoDB, passport.js linux</p>
                    </div>
                    <div class="card-action">
                        <a class="blue-text" target="_blank" href="https://germangamboa95.github.io/pokemonbattles.io/"><i class="far fa-eye fa-2x"></i></a>
                        <a class="blue-text" target="_blank" href="https://github.com/germangamboa95/pokemonbattles.io"><i class="fab fa-github fa-2x"></i></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Projects'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   section {
        background: #fff;
    }
    
    .row {
        margin: 0;
    }
    .card-title{
        text-transform: uppercase;
        font-weight: 700;
    }
    .card-content {
        text-align: left;
    }
   .close-btn {
        color: #000;
        padding: 1em;
    }
    .card-action {
        display: flex;
        justify-content: center;
    }
    img {
        max-height: 250px;
    }
    @media screen and (min-width: 992px){
        section{
          margin-top: 2.6em;
        }
    }
</style>
