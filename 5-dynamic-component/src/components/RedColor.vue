<template>
    <h3 class="bg-danger p-2 text-white">{{ msg }}</h3>
</template>

<script>
    export default{
        props:["msg"],

        mounted(){
            console.log("redColor mounted")
        },

        activate(){
            console.log("RedColor activated")
        },

        deactivated(){
            console.log("RedColor deactivated")
        }
    }
</script>