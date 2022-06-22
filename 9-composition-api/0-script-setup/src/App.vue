<script setup>
import OddOrEven from './components/OddOrEven.vue'
// script setup icindekileri otomatik olarak export eder, ornegin title export etmedik ama template tarafında erisebildik.
import Utils from './composables/Utils.js'
const { title, inc, count, alertMe } = Utils();
</script>

<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title">
  <button @click="inc">{{ count }}</button>
  <hr><br><br>
  <OddOrEven :countInfo="count" @odd-event="alertMe" />
</template>