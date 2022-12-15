<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue Resource </h3>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Enter your name" v-model = "userName">
        </div>
        <button class="btn btn-primary" @click="saveUser()">Save</button>&nbsp;
        <button class="btn btn-info" @click="getUsers()">Get All Data</button>
        <hr>
        <h4>List:</h4>
        <ul class="form-group">
          <li class="list-group-item text-left d-flex justify-content-between" v-for="user in userList" key="user">
          <span>{{user.data.userName}}</span>
          <button class="btn btn-sm btn-danger" @click="deleteUser(user.key)">X</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default{
    data(){
      return{
        userName: null,
        userList:[]
      }
    },
    // created(){
    //   axios.get('https://vue-resource-f8d71-default-rtdb.firebaseio.com/users.json').then((res)=>{
    //     let data = res.data
    //     for(let key in data){
    //       console.log(data[key])
    //       this.userList.push(data[key])
    //     }
    //   })
    // },
    methods:{
      saveUser(){
        // alert(this.userName)
        axios.post('users.json',{userName: this.userName}).then((res)=>{
          console.log(res)
          this.userName=""
        }).catch((err)=>{
          alert(err)
        })
      },
      getUsers(){
        axios.get('users.json').then((res)=>{
          let data = res.data
          console.log("data: ", data)
          for(let key in data){
            this.userList.push({
              key:key, 
              data: data[key]
            })
          }
        })
      },
      deleteUser(key){
        // alert(key)
        axios.delete("users/" +key + ".json").then((res)=>{
          console.log(res)
        })
      }
    }
  }
</script>

<style>

</style>