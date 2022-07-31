<script setup>
import sourceData from '../data.json'
import {reactive} from 'vue'

const state = reactive({
  destinations: sourceData.destinations
})
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <div class="destinations">
      <router-link v-for="destination in state.destinations" :key="destination.id"
      :to="destination.slug"
      >
      <h2>{{destination.name}}</h2>
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      </router-link>
    </div>
  </div>
</template>