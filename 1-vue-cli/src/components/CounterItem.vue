<template>
    <div class="container-sm">   
        <h3 class="mb-2">{{counter}}</h3>
        <button @click="counter--" class="btn btn-danger btn-sm me-3">-</button>
        <button @click="counter++" class="btn btn-success btn-sm">+</button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                counter:0,
            }
        }
    }
</script>