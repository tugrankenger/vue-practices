<script>
import Home from './components/Home.vue'
import Post from './components/Post.vue'
export default{
  components:{
    appHome: Home,
    appPost: Post
  },  
  data(){
    return{
      show:false,
      showJs: false,
      elementWidth : 100,
      isActiveComponent: 'app-Home',
    }
  },
  methods:{
    beforeEnter(el){
      console.log("before enter")
      this.elementWidth = 100
      el.style.width = this.elementWidth + "px"
    },
    enter(el,done){
      console.log("enter")
      let round = 1
      const interval = setInterval(()=>{
        el.style.width= (this.elementWidth) + round * 10 + "px"
        round ++
        if(round >20){
          clearInterval(interval)
          done()
        }
      },50)
    },
    afterEnter(el){
      console.log("after enter")
    },
    afterEnterCancelled(el){
      console.log("after enter cancelled")
    },
    beforeLeave(el){
      console.log("before leave")
      this.elementWidth = 300
      el.style.width = this.elementWidth + "px" 
    },
    leave(el,done){
      console.log("leave")
      let round = 1
      const interval = setInterval(()=>{
        el.style.width = (this.elementWidth) - round * 10 + "px"
        round ++
        if(round > 20){
          clearInterval(interval)
          done();
        }
      },50)
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
    <br><br><br>
    <hr>
    <h3> Switching between dynamic components </h3>
    <button :class="{appHomeBtn: isActiveComponent == 'app-Home'}" class="homeBtn" @click="isActiveComponent= 'app-Home'">Home</button> &nbsp;
    <button :class="{appPostBtn: isActiveComponent =='app-Post'}" class="postBtn" @click="isActiveComponent='app-Post'">Post</button>
    <transition name="bounce" mode="out-in">
      <component :is="isActiveComponent"></component>
    </transition>
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
.homeBtn{
  border: 1px solid #333;
}

.homeBtn.appHomeBtn{
  background: rgb(25, 209, 25);
  color: #fff;
}

.homeBtn:focus, .postBtn:focus{
  outline: none;
}

.postBtn{
  border: 1px solid #333;
}

.postBtn.appPostBtn{
  background: rgb(25, 209, 25);
  color: #fff;
}
</style>