<template>
    <section class="container">
        <div class="row">
            <div class="col s12 m6">
                <img class="responsive-img me" src="http://via.placeholder.com/400x400" alt="">
            </div>
            <div class="col s12 m6">
                <ul class="collection left-align">
                    <li class="collection-header center-align"><h4>German Gamboa</h4></li>
                    <li class="collection-item">Status: Alive</li>
                    <li class="collection-item">Location: Orlando, FL</li>
                    <li class="collection-item">Currently Brewing Coffee</li>
                    <li class="collection-item">About: Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio ex nobis explicabo animi odit voluptate, blanditiis voluptatem, aliquid nisi expedita obcaecati a provident atque corporis! Earum, consequuntur reprehenderit repellat accusantium facere culpa itaque sed aliquid, suscipit sapiente amet quisquam at facilis numquam temporibus excepturi aut eum delectus ipsum nihil.</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m6">
                Content here
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
    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .row{
        padding-top: 2em;
    }
    ul {
       margin: 0;
       margin-bottom: 2em;
   }

    h3 {
        margin: 0;
    }
</style>
