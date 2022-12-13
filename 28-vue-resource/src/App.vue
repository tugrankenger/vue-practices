<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue Resource </h3>
        <div class="form-group">
          <input type="text" class="form-control" v-model = "userName">
        </div>
        <button class="btn btn-primary" @click="saveUser()">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default{
    data(){
      return{
        userName: null
      }
    },
    methods:{
      saveUser(){
        // alert(this.userName)
        axios.post('https://vue-resource-f8d71-default-rtdb.firebaseio.com/users.json',{userName: this.userName}).then((res)=>{
          console.log(res)
        })
      }
    }
  }
</script>

<style>

</style>