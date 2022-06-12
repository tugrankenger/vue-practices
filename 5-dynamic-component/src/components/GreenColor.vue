<template>
    <slot />
</template>

<script>
    export default{
        mounted(){
            console.log("greenColor mounted")
        },

        activated(){
            console.log("greenColor activated")
        },

        deactivated(){
            console.log("greenColor deactivated")
        }
    }
</script>