<script>

</script>

<template>
  <div class="container">
    Home Page (please try to go to the wrong url)
    <div class="links">
      <router-link :to="{name:'Features'}">Features</router-link>
      <router-link :to="{name:'Pricing'}">Pricing</router-link>
    </div>
  </div>
</template>

<style scoped>
.links{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin: 30px auto;
}
</style>