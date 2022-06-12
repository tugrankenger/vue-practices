<template>
    <h3 class="bg-primary p-2 text-white">blue component</h3>
    <input type="text">
</template>

<script>
    export default{
        mounted(){
            console.log("blueColor mounted")
        },

        activated(){
            console.log("blueColor activated")
        },

        deactivated(){
            console.log("blueColor deactivated")
        }
    }
</script>