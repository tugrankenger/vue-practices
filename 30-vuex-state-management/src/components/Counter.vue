<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter">+</button>&nbsp;
    <button class="btn btn-danger" @click="decreaseCounter">-</button>&nbsp;
    <button class="btn btn-primary" @click="resetCounter">Reset</button>
    <hr>
    <h3>Actions:</h3>
    <button class="btn btn-success" @click="increment">+</button>&nbsp
    <button class="btn btn-danger" @click="decrement">-</button>
    <hr>
    <button class="btn btn-primary" @click="incAsyc({time:1000})">Async +</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
  export default{
    methods:{

      ...mapMutations([
        'increaseCounter',
        'decreaseCounter',
        'resetCounter'
      ]),
      ...mapActions([
        'increment',
        'decrement',
        'incAsyc'
      ]),
      // increment(){
      //   this.$store.dispatch('increment')
      // },
      // decrement(){
      //   this.$store.dispatch('decrement')
      // },
      // incAsyc(time){
      //   this.$store.dispatch('incAsyc',time)
      // }

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
div{
  margin: 20px 0
}
</style>
