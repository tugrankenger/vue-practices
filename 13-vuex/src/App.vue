<template>
  <div>
    {{$store.state.user}} 
    <ul>
      <li v-for="item in $store.state.permission" :key="item">{{item}}</li>
    </ul>
    {{$store.state.fullname}}
    <button @click="updateName">Fullname change</button>

    {{$store.getters.woodItems}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components: {
    
  },

  created(){
  console.log(this.activeUser)
},

methods:{
  updateName(){
    this.$store.state.fullname= new Date().getTime()
  },
},
computed:{
  // ...mapGetters(["woodItems","activeUser"])

  ...mapGetters({
    agacElemanlari: "_woodItems",
    activeUser: '_activeUser'
  })
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
