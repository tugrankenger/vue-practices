<template>
    <div class="container">
        <h1>Detail Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, adipisci?</p>
        <p>{{ $route.params.userId }}</p>
        <button @click="goBack" class="btn btn-warning btn-sm">Prev</button>
    </div>
</template>

<script setup>
 import { useRouter } from 'vue-router'
// import {created} from 'vue'

//     created(()=>{
//         const route = useRoute();
//         console.log(this.route)
//     })

const goBack = () =>{
    const router = useRouter();
    router.push({path:'/'})
}
</script>
