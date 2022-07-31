<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TheNavigation from './components/TheNavigation.vue';
</script>

<template>
<TheNavigation />
  <div class="container">
    <router-view></router-view>
  </div>
</template>
