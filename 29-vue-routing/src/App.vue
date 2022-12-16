<template>
  <div>
    <app-header></app-header>
    <transition name="bounce" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue'
  export default{
    components:{
      appHeader: Header
    }
  }
</script>

<style>
    .bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

  @keyframes bounce-in{
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1.25);
    }
    100%{
      transform: scale(1);
    }
  }
</style>