<script setup>
  defineProps({
    'modalActive': Boolean,
  })
  defineEmits('close')
</script>

<template>
  <transition name="modal-animation">
    <div v-if="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-if="modalActive" class="modal-inner">
          <span @click="$emit('close')">X</span>
          <!-- Modal content -->
          <slot />
          <button @click="$emit('close')">Close</button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style lang="scss" scoped>

  .modal-animation-enter-active,
  .modal-animation-leave-active
  {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }

  .modalanimation-enter-from,
  .modal-animation-leave-to{
    opacity: 0;
  }
  
  .modal{
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;

    .modal-inner{
      position: relative;
      max-width: 600px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      padding: 50px;
      border-radius: 10px;
      span{
        position: absolute;
        right: 20px !important;
        top: 20px;
        font-weight: bold;
        cursor: pointer;
        font-size: 24px;
        &:hover{
          color: #ff0000;
        }
      }
      button{
        &:hover{
          border-color: #ff0000;
        }
      }
  }
  }
</style>