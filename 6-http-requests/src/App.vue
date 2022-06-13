<template>
  <div class="container">
    <h3>Shopping List</h3>
    <div class="my-3">
      <input type="text" placeholder="search item" @keydown.enter="onSave">
    </div>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>item-1</span>
          <button class="btn btn-danger btn-sm">Remove</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>item-1</span>
          <button class="btn btn-danger btn-sm">Remove</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>item-1</span>
          <button class="btn btn-danger btn-sm">Remove</button>
      </li>
    </ul>
    <small class="text-primary d-flex justify-content-end my-2 px-1">There are 5 products.</small>
  </div>

  <!-- vuejs ile direkt olarak database'e erisemiyoruz, bunun icin arada bir service olmasi gerekiyor. biz servise istek atacagiz
  servis uzerinden database islemleri gerceklesecek ve bize cevap verecek-->
</template>

<script>
import axios from "axios";
  export default{
    data(){
      return{

      }
    },

    methods:{
      onSave(e){
        const saveObject = {
          title: e.target.value,
          created_at: new Date(),
          completed: false
        }
        axios.post("http://localhost:8081/items", saveObject).then(save_response =>{
          console.log(save_response);
          e.target.value ="";
          e.target.focus();
        })
      }
    }
  }
</script>