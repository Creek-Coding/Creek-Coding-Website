<template>
    <div id="hackschs">
        <div class="content is-large">
            <p>byteCode is our YouTube channel, focused on creating programming language guides and engaging tutorials
                for beginning and seasoned programmers alike. So far, we have a series for learning Java and another one for
                Python, with coding livestreams coming in the near future.</p>
            <YouTubeButton/>
            <figure class="image is-16by9">
                <iframe class="has-ratio" width="560" height="315" src="https://www.youtube.com/embed/D0UtdNPayWg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </figure>
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