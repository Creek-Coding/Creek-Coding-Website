<template>
    <div id="hackschs">
        <div class="content is-large">
            <HackClub/>

            <div class="columns">
                <div class="column">
                    <div class="box is-success is-fullheight">
                        <h1 class="is-size-4">In-Person Hack Club</h1> 
                        <p>
                        Join us, every Thursday afterschool in the <b>library</b> from 3:00 - 4:00 for a fun hour of code!
                        Computers will be provided, but feel free to bring your own!
                        </p>
                    </div>
                </div>
            </div>

            <div class="columns">
                <div class="column">
                    <h2>Learn</h2>
                    <p>Don't know how to code at all? That's perfectly fine! Come to our sessions Tuesday's and Thursday's afterschool! 
                        <b>You don't have to have any prior experience and laptops are provided (for in person sessions).</b>
                    </p>
                </div>
                <div class="column">
                    <h2>Create</h2>
                    <p>Want to code something amazing? Come to our Hack Club meetings and check
                        out the projects we're working on. You can join some of your peers or start your own project.
                        Whatever you do, you'll have a room full of people ready to help you out. <i><s>Psst, did we
                            mention free snacks?</s> Snacks are indefinitely suspended due to the pandemic.</i>
                    </p>
                </div>
                <div class="column">
                    <h2>Teach</h2>
                    <p>Do you enjoy working with kids and/or want to help others learn how to code? Come help out at the
                        local elementary and middle schools!
                        <router-link to="/hackwms">Currently we are at WMS Tuesdays from 4:00 - 5:00</router-link>.
                        It's a fun and rewarding experience to see kids engaged in coding and a chance to earn
                        volunteer hours. HackWMS is scheduled to resume in the near future.
                    </p>
                </div>
            </div>

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

<style lang="scss" scoped>
    .columns{
        padding-top: 1rem;
    }
</style>
