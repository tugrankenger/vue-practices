<script>
  export default {
    props: ['mode']
  }
</script>

<template>
  <div class="toggle-wrapper">
    <label>
      <span>dark mode:</span>
      <input 
      type="checkbox"
      :checked="(mode === 'dark')? 'checked' : false"
      @change="$emit('toggle')"
      >
    </label>
  </div>
</template>

<style scoped>
</style>