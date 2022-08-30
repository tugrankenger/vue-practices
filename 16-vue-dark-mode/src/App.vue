<script>
import Header from './components/Header.vue';
import Content from './components/Content.vue';

export default{
  name: 'app',
  data(){
    return{
      mode: 'light'
    }
  },
  components:{
    Header,
    Content
  },
  created(){
    window.addEventListener('keyup',this.keyPress)
  },
  methods:{
    keyPress(e){
      if(e.key === 't'){
        this.toggle()
      }
    },
    toggle(){
      if(this.mode == 'dark'){
        this.mode = 'light'
      }else{
        this.mode= 'dark'
      }
    }
  }
}

</script>

<template>
  <div class="app" :class="mode">
    <Header :mode="mode" @toggle="toggle" />
    <Content :mode="mode" />
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
.app{
  width: 100vw;
  min-height: 100vh;
  background: #f3f3f3;
  color: #152028;
  transition: background .3s ease-in-out;
}
.dark{
  background: #192734;
  color: #e8e8e8;
}
</style>