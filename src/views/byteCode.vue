<template>
    <div id="hackschs">
        <div class="content is-large columns">
            <div class="column">
                <p>byteCode is our YouTube channel, focused on creating programming language guides and engaging tutorials
                for beginning and seasoned programmers alike.</p>
                <h1>Upload Schedule</h1>
                <ul>
                    <li>Tuesday: Programming in Java</li>
                    <li>Thursday: Learning Python</li>
                    <li>Saturday @ 1:00 PM CST: Code With Us!</li>
                </ul>
                <h1>Subscribe!</h1>
                <YouTubeButton/>

            </div>
            <div class="column">
                <h1>Check out one of our videos here:</h1>
                <figure class="image is-16by9">
                    <iframe class="has-ratio" width="560" height="315" src="https://www.youtube.com/embed/D0UtdNPayWg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </figure>
            </div>
        </div>
    </div>

</template>

<script>
    import YouTubeButton from "../components/YouTubeButton";
    export default {
        name: "byteCode",
        components: {YouTubeButton}
    }
</script>

<style scoped>

</style>
