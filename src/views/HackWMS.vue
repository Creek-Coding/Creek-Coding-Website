<template>
    <div class="content is-large">
        <HackClub/>
        <h2>Projects</h2>
        <div class="project-list">
            <div class="box">
                <h4>Personal Website Project</h4>
                <p>We made a website</p>
                <a href="" class="button">Make it</a>
            </div>
            <div class="box">
                <h4>Hello World++</h4>
                <p>This is a discord bot</p>
                <a href="" class="button">Make it</a>
            </div>
        </div>
    </div>
</template>

<script>
    import HackClub from "../components/HackClub";
    export default {
        name: "HackWMS",
        components: {HackClub}
    }
</script>

<style scoped>

</style>