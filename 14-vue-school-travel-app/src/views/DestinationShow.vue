<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import sourceData from '../data.json'

const route = useRoute();

  computed:{
  destinationId(){
    return parseInt(route.params.id)
  },
  destination(){
    return sourceData.destinations.find(destination => destination.id === this.destinationId)
  }
}

</script>

<template>
  <section class="destination">
    <!-- <h2>Hello Destinaiton {{route.params.id}}</h2> -->

  <h1>{{destination.name}}</h1>
  <div class="destination-details">
    <img :src="`/images/${destination.image}`" :alt="`destination.name`">
    <p>{{destination.description}}</p>
  </div>

  </section>
</template>