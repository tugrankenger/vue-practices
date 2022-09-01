<script setup>

</script>

<template>
  <div class="container">
    <h3>Home</h3>
    <router-link :to="{name:'About'}">About</router-link>
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    align-items: center;
    gap: 20px;
  }
</style>