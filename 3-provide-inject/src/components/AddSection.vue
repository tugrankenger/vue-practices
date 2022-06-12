<template>
     <button @click="newItem(new Date().getTime())" class="btn btn-primary">Set Data</button>
    <!-- push islemi direkt burada yapilamaz cunku parent'daki deger degistirilmek isteniyor. app.vue icinde yapılmasi gerekir -->
</template>

<script>
    export default{
        inject:["newItem"]
    }
</script>