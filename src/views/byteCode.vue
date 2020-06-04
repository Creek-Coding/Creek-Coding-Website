<template>
    <div id="hackschs">
        <div class="content is-large columns">
            <div class="column">
                <h1>About byteCode</h1>
                <p>byteCode is our YouTube channel, focused on creating programming language guides and engaging tutorials
                for beginning and seasoned programmers alike.</p>
                <YouTubeButton/>

                <h2 >Upload Schedule</h2>
                <ul>
                    <li><b>Tuesday</b>: Programming in Java</li>
                    <li><b>Thursday</b>: Learning Python</li>
                    <li><b>Saturday @ 1:00 PM CST</b>: Code With Us! (Livestream)</li>
                </ul>

            </div>
            <div class="column">
                <h2>Featured Video:</h2>
                <figure id="figure" class="image is-16by9">
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
#figure{
    margin: 0;
}
</style>
