<template>
    <section class="hero is-primary is-medium">
        <div class="hero-head">
            <Navbar/>
        </div>

        

        <div class="hero-body" id="hero-body">
            <div class="container">
                <div class="columns is-vcentered is-centered">
                    <div class="column is-one-fifth is-centered">
                        <div class="has-text-centered">
                            <figure class="image is-inline-block">
                                <img src="../assets/logo.png" style="max-height: 256px; max-width: 256px">
                            </figure>
                        </div>
                    </div>
                    <div class="column">
                        <p class="title is-1 is-size-3-mobile">
                            Creek Coding is a student run organization that advocates Computer Science literacy in and out of the classroom.
                        </p>

                        <a class="button is-medium is-link" href="https://www.notion.so/creekcoding/First-Meeting-of-the-Year-77733b1d18ab4c0396c52a52ca276419" target="_blank">
                            I'm at Hack Club!
                        </a>
                        
                    </div>
                </div>


            </div>
        </div>

        <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                    <ul>
                        <router-link to="/" v-slot="{ href, navigate, isActive, isExactActive }">
                            <li :class="[isExactActive && 'is-active']">
                                <a :href="href" @click="navigate">Overview</a>
                            </li>
                        </router-link>

                        <router-link to="/hackschs" v-slot="{ href, navigate, isActive }">
                            <li :class="[isActive && 'is-active']">
                                <a :href="href" @click="navigate">Hack Club SCHS</a>
                            </li>
                        </router-link>

                        <router-link to="/hackwms" v-slot="{ href, navigate, isActive }">
                            <li :class="[isActive && 'is-active']">
                                <a :href="href" @click="navigate">Hack Club WMS</a>
                            </li>
                        </router-link>

                        <router-link to="/bytecode" v-slot="{ href, navigate, isActive }">
                            <li :class="[isActive && 'is-active']">
                                <a :href="href" @click="navigate">byteCode</a>
                            </li>
                        </router-link>

                        <router-link to="/lightbulb-edu-code" v-slot="{ href, navigate, isActive }">
                            <li :class="[isActive && 'is-active']">
                                <a :href="href" @click="navigate">Lightbulb Education Code</a>
                            </li>
                        </router-link>

                        <router-link to="/leadership" v-slot="{ href, navigate, isActive }">
                            <li :class="[isActive && 'is-active']">
                                <a :href="href" @click="navigate">Leadership</a>
                            </li>
                        </router-link>

                    </ul>
                </div>
            </nav>
        </div>
    </section>
</template>

<script>
    import Navbar from "./Navbar";



    export default {
        name: "Hero.vue",
        components: {
            Navbar
        }
    }
</script>

<style scoped>

</style>
