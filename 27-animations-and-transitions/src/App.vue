<script>
export default{
  data(){
    return{
      show:false,
      showJs: false
    }
  },
  methods:{
    beforeEnter(el){
      console.log("before enter")
    },
    enter(el,done){
      console.log("enter")
      done()
    },
    afterEnter(el){
      console.log("after enter")
    },
    afterEnterCancelled(el){
      console.log("after enter cancelled")
    },
    beforeLeave(el){
      console.log("before leave")
    },
    leave(el,done){
      console.log("leave")
      done();
    },
    afterLeave(el){
      console.log("after leave")
    },
    afterLeaveCancelled(el){
      console.log("after leave cancelled")
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
      <transition name="bounce" appear> <!-- appear for page onLoad -->
      <div class="alert-box" v-if="!show">This is a alert box</div>
    </transition>
    </div>
    <hr>
    <br>
    <div class="transition-wrapper">
      <h3>javascript animations</h3>
      <button @click="showJs = !showJs">Show / Hide</button>
      <br><br>
      <transition name="bounce"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @after-enter-cancelled="afterEnterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @after-leave-cancelled="afterLeaveCancelled"
      >
      <div class="alert-box" v-if="!showJs">This is a alert box</div>
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