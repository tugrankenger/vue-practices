<script setup>
import Btn from './components/Btn.vue';

</script>

<template>
  <div>
    <Btn>
      <template v-slot:content>
        <span>v-slot exercise</span>
      </template>
    </Btn>
  </div>
</template>

<style scoped>

</style>
