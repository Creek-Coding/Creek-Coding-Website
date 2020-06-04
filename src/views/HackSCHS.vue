<template>
    <div id="hackschs">
        <div class="content is-large">
            <HackClub/>
            <div class="columns">
                <div class="column">
                    <h2>Learn</h2>
                    <p>Don't know how to code at all? That's perfectly fine! Come to our classes Thursday afterschool
                        (or watch the livestream)! <b>You don't have to have any prior experience and laptops are provided.</b>
                    </p>
                </div>
                <div class="column">
                    <h2>Create</h2>
                    <p>Want to code something amazing? Come to our Hack Club meetings on Tuesdays afterschool and check
                        out the projects we're working on. You can join some of your peers or start your own project.
                        Whatever you do, you'll have a room full of people ready to help you out. <i>Psst, did we
                            mention free snacks?</i>
                    </p>
                </div>
                <div class="column">
                    <h2>Teach</h2>
                    <p>Do you enjoy working with kids and/or want to help others learn how to code? Come help out at the
                        local elementary and middle schools!
                        <router-link to="/hackwms">Currently we are at WMS Tuesdays from 4:00 - 5:00</router-link>.
                        It's a fun and rewarding experience to see kids engaged in coding and a chance to earn
                        volunteer hours.
                    </p>
                </div>
            </div>

            <!--
            <h2>Projects</h2>
            <div class="project-list">
                <div class="box">
                    <h4>Personal Website Project</h4>
                    <p>We made a website</p>
                    <a href="" class="button">Make it</a>
                </div>
                <div class="box">
                    <h4>Hack Bot</h4>
                    <p>This is a discord bot</p>
                    <a href="" class="button">Make it</a>
                </div>
            </div>
            -->

        </div>
    </div>

</template>

<script>
    import HackClub from "../components/HackClub";

    export default {
        name: "HackSCHS",
        components: {HackClub}
    }
</script>

<style scoped>
    .columns{
        padding-top: 1rem;
    }
</style>
