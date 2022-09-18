<script setup>

</script>

<template>
  <div>
    <button class="btn-primary">
      <slot name="content"></slot>
    </button>
  </div>
</template>

<style scoped>
button{
  background: #0069d9;
  color: #fff;
}
</style>