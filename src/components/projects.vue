<template>
    <section>
        <div class="container">
            <div class="row"><i @click="$emit('close')" class="material-icons right close-btn">close</i></div>

            <div class="row">
                 <div class="col s12 m6">
                    <div class="card horizontal">
                    <div class="card-image">
                        <img src="https://lorempixel.com/100/190/nature/6">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                        <p>Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat fugiat, omnis laboriosam mollitia et eaque voluptate esse adipisci explicabo deleniti, quo delectus earum? Error.xs</p>
                        </div>
                        <div class="card-action">
                            <a href="#"><i class="far fa-eye fa-2x"></i></a>
                            <a href="#"><i class="fab fa-github fa-2x"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col s12 m6">
                    <div class="card horizontal">
                    <div class="card-image">
                        <img src="https://lorempixel.com/100/190/nature/6">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                        <p>Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat fugiat, omnis laboriosam mollitia et eaque voluptate esse adipisci explicabo deleniti, quo delectus earum? Error.xs</p>
                        </div>
                        <div class="card-action">
                            <a href="#"><i class="far fa-eye fa-2x"></i></a>
                            <a href="#"><i class="fab fa-github fa-2x"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col s12 m6">
                    <div class="card horizontal">
                    <div class="card-image">
                        <img src="https://lorempixel.com/100/190/nature/6">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                        <p>Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat fugiat, omnis laboriosam mollitia et eaque voluptate esse adipisci explicabo deleniti, quo delectus earum? Error.xs</p>
                        </div>
                        <div class="card-action">
                        <a href="#"><i class="far fa-eye fa-2x"></i></a>
                        <a href="#"><i class="fab fa-github fa-2x"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col s12 m6">
                    <div class="card horizontal">
                    <div class="card-image">
                        <img src="https://lorempixel.com/100/190/nature/6">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                        <p>Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat fugiat, omnis laboriosam mollitia et eaque voluptate esse adipisci explicabo deleniti, quo delectus earum? Error.xs</p>
                        </div>
                        <div class="card-action">
                            <a href="#"><i class="far fa-eye fa-2x"></i></a>
                            <a href="#"><i class="fab fa-github fa-2x"></i></a>
                        </div>
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

   .close-btn {
        color: #000;
        padding: 1em;
    }
    .card-action {
        display: flex;
        justify-content: center;
    }

    @media screen and (min-width: 992px){
        section{
          margin-top: 2.6em;
        }
    }
</style>
