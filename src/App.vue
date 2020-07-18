<template>
    <div id="app">
        <!--    <div id="nav">-->
        <!--      <router-link to="/">Home</router-link> |-->
        <!--      <router-link to="/about">About</router-link>-->
        <!--    </div>-->



        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New Merch Available!</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

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
    @import "~bulmaswatch/lumen/variables";
    @import "~bulma/bulma";
    @import "~bulmaswatch/lumen/overrides";
</style>

<script>
    import Hero from "./components/Hero";
    import Footer from "./components/Footer";

    export default {
        components: {Footer, Hero},
        // mounted() {
        //     if (document.getElementById('yt-platform-js')) return; // was already loaded
        //     var scriptTag = document.createElement("script");
        //     scriptTag.src = "//apis.google.com/js/platform.js";
        //     scriptTag.id = "yt-platform-js";
        //     document.getElementsByTagName('head')[0].appendChild(scriptTag);
        // }
    }


</script>
