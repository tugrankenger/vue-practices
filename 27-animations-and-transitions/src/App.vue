<script>
export default{
  data(){
    return{
      show:false
    }
  }
}
</script>


<template>
  <div>
    <h3>Animations and transitions</h3>
    <hr>
    <button @click="show = !show">Show / Hide</button>
    <br><br>

    <div class="transition-wrapper">
      <transition name="bounce">
      <div class="alert-box" v-if="show">This is a alert box</div>
    </transition>
    </div>
  </div>
</template>

<style scoped>

.transition-wrapper{
  width: 100%;
  height: 100px;
}
  .alert-box{
    width: 300px;
    height: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #333;
    background: aliceblue;
  }

  .bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>