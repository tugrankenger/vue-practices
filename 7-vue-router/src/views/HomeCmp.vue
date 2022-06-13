<template>
    <div>
        <h1>Home</h1>
        <input type="text" @keydown.enter="goToDetails">
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    const goToDetails = (e) =>{
        alert(e.target.value)
        const router = useRouter();
        console.log(router.params.id);
    }

</script>