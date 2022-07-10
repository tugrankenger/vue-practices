<script setup>
  import tinput from'./components/T-Input.vue'
  import { reactive } from 'vue';
  const state = reactive({
    inputTest : "",
    password:"",
  })
</script>

<template>
  <div>
    <h1>Global input management</h1>
    <div class="parentInfo">
      <h3>parent component</h3>
    text: {{state.inputTest}}
    password: {{state.password}}
    <hr>
    </div><br> <br>
    <tinput v-model="state.inputTest" placeholder="test input" type="text" name="" /><br>
    <tinput v-model="state.buttonType" type="button" value="button" name="button" /><br>
    <tinput v-model="state.password" type="password" />
  </div>
</template>