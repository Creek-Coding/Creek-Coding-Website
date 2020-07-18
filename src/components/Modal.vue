<template>
    <div class="modal" v-bind:class="{ 'is-active': isActive }">
        <div class="modal-background" @click="isActive = false"></div>
        <div class="modal-content box">
            <p class="has-text-centered title is-1">New Merch Available!</p>
            <p class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
            </p>
            <br>
            <a class="button is-primary is-fullwidth is-large" href="https://cartel.creekcoding.com/product/pre-order-2020-creek-coding-cartel-shirt" target="_blank">Preorder Now!</a>

        </div>
        <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
    </div>
</template>

<script>

    import Cookies from 'js-cookie'
    export default {
        name: "Modal.vue",
        data: function(){
            return{
                isActive: !Cookies.get("modal")
            }
        },
        methods: {
            addCookie: function(){
                //Cookies.set("modal", true, {expires: 7})
            },
            closeModal: function(){
                this.isActive = false;
                this.addCookie();
            }
        }
    }
</script>

<style scoped>

</style>
