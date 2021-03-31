<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item">
                    <span class="subtitle is-3">Creek Coding</span>
                </router-link>
                <span class="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
            </span>
            </div>
            <div id="navbarMenuHeroB" class="navbar-menu">
                <div class="navbar-end">
                    <span class="navbar-item">
                       <a class="button is-inverted" href="https://cartel.creekcoding.com">
                       <span>The Cartel</span>
                       </a>
                    </span>
                    <span class="navbar-item">
                       <a class="button is-danger is-inverted" href="mailto:contact@creekcoding.com">
                       <span class="icon">
                           <i class="fa fa-envelope is-inverted"></i>
                       </span>
                       <span>Contact</span>
                       </a>
                    </span>
                    <span class="navbar-item">
                       <a class="button is-link is-inverted" href="https://twitter.com/creekcoding" target="_blank">
                       <span class="icon">
                           <i class="fa fa-twitter is-inverted"></i>
                       </span>
                       <span>Twitter</span>
                       </a>
                    </span>
                    <span class="navbar-item">
                       <a class="button is-info is-inverted" href="https://github.com/Creek-Coding" target="_blank">
                       <span class="icon">
                           <i class="fa fa-github"></i>
                       </span>
                       <span>Github</span>
                       </a>
                    </span>
                    <span class="navbar-item">
                       <a class="button is-success is-inverted" href="https://creekcoding.com/donate" target="_blank">
                       <span class="icon">
                           <i class="fa fa-dollar"></i>
                       </span>
                       <span>Donate</span>
                       </a>
                    </span>
                    <!-- <span class="navbar-item">
                       <a class="button is-success" href="https://forms.gle/QGqXf9tp5WNXy2KN6" target="_blank">
                       <span class="icon">
                           <i class="fa fa-sign-in"></i>
                       </span>
                       <span>Join!</span>
                       </a>
                    </span> -->
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach(el => {
                el.addEventListener('click', () => {

                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');

                });
            });
        }

    });

    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>
