<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  title:{
    type:String,
    required:true,
  },
  msg:{
    type:String,
    required:true
  }
})
defineEmits("close")
</script>

<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{msg}}</p>
    <button @click="$emit('close')" >Close</button>
  </div>
</template>