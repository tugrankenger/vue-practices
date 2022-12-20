<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter">+</button>&nbsp;
    <button class="btn btn-danger" @click="decreaseCounter">-</button>&nbsp;
    <button class="btn btn-primary" @click="resetCounter">Reset</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
  export default{
    methods:{

      ...mapMutations([
        'increaseCounter',
        'decreaseCounter',
        'resetCounter'
      ]),

      // incrementCounter(){
      //   // this.$emit("counterEvent", 1)
      //   // this.$store.state.counter++
      //   // this.$store.commit('updateCounter',1)
      //   this.$store.commit('increaseCounter')
      // },
      // decrementCounter(){
      //   // this.$emit("counterEvent", -1)
      //   // this.$store.state.counter--
      //   // this.$store.commit('updateCounter', -1)
      //   this.$store.commit('decreaseCounter')
      // },
      // resetCounter(){
      //   // this.$emit("counterReset", 0)
      //   // this.$store.state.counter = 0
      //   this.$store.commit('updateCounter', 0)
      // }
    }
  }
</script>

<style>

</style>
