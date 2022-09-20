<script setup>
  import { reactive } from 'vue'
import Modal from './components/Modal.vue';

const state = reactive({
  title:"this is a dynamic title",
  text:"this is a dynamic text content",
  modalActive: false,
})

const toggleModal =()=>{
  state.modalActive = !state.modalActive
}
</script>

<template>
  <div class="home">
    <Modal :modalActive="state.modalActive" @close="toggleModal">
    <div class="modal-content">
      <h1>{{state.title}}</h1>
      <p>{{state.text}}</p>
    </div>
  </Modal>
  </div>
  <button @click="toggleModal">Open Modal</button>
</template>

<style scoped>
  
</style>
