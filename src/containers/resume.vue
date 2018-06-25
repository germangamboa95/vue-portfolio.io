<template>
  <vue-markdown class="resume" typographer toc-anchor-link-space>
## Profile

React focused Web Developer with a passion for creating software that solves an organization's complex problems while producing clean maintainable code. Relentless problem solver with a drive to learn each and every day.

**Skills**

**Core Languages:** JavaScript(ES6), PHP, HTML, CSS, Python.

**Front-end:** React, Vue, REST API, D3, Redux, jQuery, Bootstrap, Materialize, SASS, EJS, Ajax, JSON, JSONP, Gulp, Web Pack and Bable.

**Back-end**: Node js, Express, MongoDb, MySQL, sequelize, Laravel, nginx, Apache, Linux, SSH, BASH scripting, CORS, Jinja and Flask.

## Projects

##### Eventler:

[Visit the app!](**https://eventler.app**)

**Summary:** Event management application that helps non profits increase event attendance by easing the  registration process for their guests with an innovative registration system.

**My role:** Sole Developer in project.

**Technologies used:** React, Express, Oauth, Google Vision, JWT, Node, MongoDB, Digital Ocean, Nginx, Webpack, Twilio, and node mailer.

##### Letsdolunch:

[Visit the app!](https://germangamboa95.github.io/letsDoLunch/)

**Summary:** Social app that helps teams answer the age old question of where to have lunch. It is aimed at streamlining the process by using an Approval Voting system which ensures most of the voters are content with the decision.

**My Role:** I was the backend developer and the architect of the project.

**Technologies used:** VanillaJS , Firebase, jQuery, Express, Node, google places and google maps.

## Work Experience

**General Manager , Zax LLC, Orlando Fl --- 2013 - 2018**

Oversaw all aspects of operations while developing and coaching new leaders for the company. Increased overall unit performance by 70% while also drastically reducing employee turnover.

## Education

**UCF Coding Bootcamp, March 2018 - June 2018: Graduated**

**Valencia community college, In progress.**
  </vue-markdown>

</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'Resume',
  components: {
    VueMarkdown
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resume {
  text-align: left;
  margin: 2em 25%;
}

@media screen and (max-width: 600px) {
  .resume {
    margin: 1em 10%;
  }
}

@media screen and (max-width: 800px) {
  .resume {
    margin: 1em 15%;
  }
}
</style>
