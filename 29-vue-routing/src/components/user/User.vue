<template>
  <div class="container">
    <hr>
    <router-view></router-view>
    <hr>
    <button class="btn btn-info" @click="goTo()">Go to Home</button><br><br>
    <!-- <strong>User Name: {{userName}}</strong> -->
  </div>
</template>

<script>
  export default{
    data(){
      return{
        userName: this.$route.params.id
      }
    },
    methods:{
      goTo(){
        this.$router.push({name:'Home'})
      }
    },
    watch:{
      "$route"(to,from){
        this.userName = to.params.id
      }
    }
  }
</script>

<style>

</style>