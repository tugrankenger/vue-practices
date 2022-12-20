<template>
  <div>
    <p class="counter-container">Result: {{ double }}</p>
    <p class="counter-container">times: {{ stringC }}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default{
    // props: ["counter"]
    // computed:{
    //   counter(){
    //     // return this.$store.state.counter
    //     return this.$store.getters.getDoubleCounter
    //   }
    // }
    computed: {
      ...mapGetters({
      double:'getDoubleCounter',
      stringC:'stringCounter'
    }),
    
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