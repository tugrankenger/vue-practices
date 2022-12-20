<template>
  <div>
    <p class="counter-container">Result: {{ counter }}</p>
  </div>
</template>

<script>
  export default{
    // props: ["counter"]
    computed:{
      counter(){
        // return this.$store.state.counter
        return this.$store.getters.getDoubleCounter
      }
    }
  }
</script>

<style>
    .counter-container{
    border: 1px solid #333;
    padding: 10px;
    margin-top: 20px;
  }
</style>