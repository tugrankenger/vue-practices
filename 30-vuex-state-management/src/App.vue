<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Vuex State Management</h1>
        <hr>
        <app-result :counter="counter"></app-result>
        <hr>
        <app-second-result></app-second-result>
        <app-counter @counterEvent="counter += $event" @counterReset="counter= $event"></app-counter>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import Result from './components/Result.vue'
import SecondResult from './components/SecondResult.vue'
export default{
  components:{
    appCounter: Counter,
    appResult: Result,
    appSecondResult: SecondResult
  },
  data(){
    return{
      counter: 0
    }
  }
}
</script>

<style>
</style>