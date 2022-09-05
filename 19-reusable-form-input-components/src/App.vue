<script setup>
import BaseInput from "./components/BaseInput.vue";
import { ref } from "vue"

const firstname = ref("")
const password = ref("")
</script>

<template>
  <div>
    <BaseInput label="tugrankenger" v-model="firstname" type="text" class="text-input"/>
    <BaseInput label="tugrankenger-password" v-model="password" type="password" class="password-input"/>
    <p>{{firstname}}</p>
  </div>
</template>

<style scoped>

</style>