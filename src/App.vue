<template>
    <div id="app">
        <!--    <div id="nav">-->
        <!--      <router-link to="/">Home</router-link> |-->
        <!--      <router-link to="/about">About</router-link>-->
        <!--    </div>-->

        <!-- <Modal/> -->
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

    .box{
        &.is-primary{
            background-color: $primary-light;
            border-color: $primary;

            p, h1, h2, h3, h4, h5, h6 {
                color: $primary;
            }
        }
        &.is-danger{
            background-color: $danger-light;
            border-color: $danger;

            p, h1, h2, h3, h4, h5, h6 {
                color: $danger;
            }
        }
        &.is-success{
            background-color: $success-light;
            border-color: $success;

            p, h1, h2, h3, h4, h5, h6 {
                color: $success;
            }
        }
    }

    .is-fullheight{
        height: 100%;
    }

    .tabs li.is-active a {
      color: $primary !important;
    }

</style>

<script>
    import Hero from "./components/Hero";
    import Footer from "./components/Footer";
    //import Modal from "./components/Modal";

    export default {
        components: {
            Footer, 
            Hero, 
            //Modal,
        },
        // mounted() {
        //     if (document.getElementById('yt-platform-js')) return; // was already loaded
        //     var scriptTag = document.createElement("script");
        //     scriptTag.src = "//apis.google.com/js/platform.js";
        //     scriptTag.id = "yt-platform-js";
        //     document.getElementsByTagName('head')[0].appendChild(scriptTag);
        // }
    }


</script>
