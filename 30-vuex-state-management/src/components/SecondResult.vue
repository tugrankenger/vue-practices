<template>
  <div>
    <h3>Second:</h3>
    <p class="counter-container">Result: {{ double }}</p>
    <p class="counter-container">times: {{ stringC }}</p>
    <!-- <input type="text" :value="value" @input = "setValue"> -->
    <input type="text" v-model = "value">
    <p>{{ value }}</p>
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
    value:{
      get(){
        return this.$store.getters.getValue
      },
      set(event){
        return this.$store.dispatch('setValueData',event)
      }
    }
    },
    methods:{
    //   setValue(event){
    //   return this.$store.dispatch('setValueData',event.target.value)
    // }
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