<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->

    <Hero/>
    <div class="container section">
      <router-view/>
    </div>

    <Footer/>


  </div>
</template>

<style lang="scss">
  $fa-font-path: "~font-awesome/fonts/";
  @import '~font-awesome/scss/font-awesome';

  /*! bulmaswatch v0.8.1 | MIT License */
  @import "~bulmaswatch/flatly/variables";
  @import "~bulma/bulma";
  @import "~bulmaswatch/flatly/overrides";
</style>

<script>
  import Hero from "./components/Hero";
  import Footer from "./components/Footer";
  export default {
    components: {Footer, Hero}
  }
</script>