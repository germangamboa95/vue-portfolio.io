<template>
    <div>
        <nav class="light-blue darken-4">
            <div class="nav-wrapper">
                <a class="brand-logo">German</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                    <router-link tag="li" to="/"><a>Home</a></router-link>
                    <router-link tag="li" to="/blog"><a>Blog</a></router-link>
                    <router-link tag="li" to="/resume"><a>Resume</a></router-link>
                </ul>
            </div>
        </nav>
        <ul class="sidenav" id="mobile-demo">
            <router-link tag="li" to="/"><a>Home</a></router-link>
            <router-link tag="li" to="/blog"><a>Blog</a></router-link>
            <router-link tag="li" to="/resume"><a>Resume</a></router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  mounted () {
    window.M.Sidenav.init(document.querySelector('.sidenav'))
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .brand-logo {
        margin: 0  1em;
        display: block;

    }
    .router-link-exact-active {
        background-color: #01579b;
    }

    li{
        transition: all ease-in-out .5s;
        position: relative;
    }

    .router-link-exact-active a::after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: #fff;
        position: absolute;
        left: 0;
        bottom: 0;
    }

    li:hover {
        background-color: #01579b;
        color: rgba(255, 255, 255, .9);
    }
    a:hover{
        color:inherit;
    }
</style>
