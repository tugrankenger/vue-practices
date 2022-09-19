<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div class="root">
    <button @click="isOpen = true">Open</button>

    <teleport to="body">
      <div class="modal" v-if="isOpen">
        <div>
          <h2>Notification Title</h2>
          <p>Lorem, ipsum dolor sit amet.</p>
          <button @click="isOpen= false">Close</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<style lang="scss" scoped>
.root {
  position: relative;
}
.modal {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;

    &>div {
      padding: 50px;
      background: #fff;
      border-radius: 10px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }
</style>