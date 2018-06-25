<template>
    <section>
        <div class="container">
            <div class="row card">
                <div style="height:2em;"><i @click="$emit('close')" class="material-icons right close-btn">close</i></div>
                <h4 class="center">Get In Contact</h4>
                <p class="center">Send me a short message and I will get back to you in 24hrs.</p>
                <form class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                    <input id="first_name" type="text" class="validate">
                    <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s6">
                    <input id="last_name" type="text" class="validate">
                    <label for="last_name">Last Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                    <input id="email" type="email" class="validate">
                    <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                        <label for="textarea2">Textarea</label>
                    </div>
                </div>
                <button class="btn waves-effect waves-light btn-large" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                </button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Bio',
  mounted () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .center {
        text-align: center;
    }
    section {
        background: #fff;
        height: 100%;
        width: 100%;
    }
    .row{
        margin-top: 1em;
        margin: .5em;

    }
    button {
        margin: 1em;
    }
    .close-btn {
        color: #000;
        padding: 1em;
    }
    @media screen and (min-width: 992px){
        section{
          margin-top: 2.6em;
        }
    }
</style>
